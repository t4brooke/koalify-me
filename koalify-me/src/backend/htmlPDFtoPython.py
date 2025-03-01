from flask import Flask, request, render_template, redirect, url_for
import os
from werkzeug.utils import secure_filename
import fitz 

app = Flask(__name__)

UPLOAD_FOLDER = 'uploads'
ALLOWED_EXTENSIONS = {'pdf'}

app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

def extract_text_from_pdf(pdf_path):
    try:
        pdf_document = fitz.open(pdf_path)
        text = ""
        for page_num in range(pdf_document.page_count):
            page = pdf_document[page_num]
            text += page.get_text()
        pdf_document.close()
        return text
    except FileNotFoundError:
        return "Error: PDF file not found."
    except Exception as e:
        return f"An error occurred: {e}"

@app.route('/', methods=['GET'])
def index():
    return render_template('upload.html')

@app.route('/process_pdf', methods=['POST'])
def process_pdf():
    if 'pdf_file' not in request.files:
        return redirect(request.url)

    file = request.files['pdf_file']

    if file.filename == '':
        return redirect(request.url)

    if file and allowed_file(file.filename):
        filename = secure_filename(file.filename)
        file_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        file.save(file_path)

        
        extracted_text = extract_text_from_pdf(file_path)

        os.remove(file_path) 

        return render_template('result.html', text=extracted_text)

    else:
        return "Invalid file type. Only PDFs are allowed."

@app.route('/result')
def result():
    text = request.args.get('text')
    return render_template('result.html', text=text)

if __name__ == '__main__':
    app.run(debug=True)