import os
import htmlPDFtoPython
from openai import OpenAI

client = OpenAI(api_key=os.environ.get("OPENAI_API_KEY", ""))

def resumeAnalysis():
    jobDes = input("Please enter the job description you would like to be analyzed:\n")

    pdf_path = input("Enter the path to your resume PDF:\n")
    
    if not os.path.exists(pdf_path):
        print("Error: File does not exist.")
        return

    resText = htmlPDFtoPython.extract_text_from_pdf(pdf_path)

    PROMPT_MESSAGES = [
        {
            "role": "user",
            "content": [
                "Take this job description and compare the compatibility of the following resume. "
                "Give advice on changes that could be made to better fit the job description. "
                "Provide a precise bullet point list of improvements.",
                jobDes,
                resText,
            ],
        },
    ]

    params = {
        "model": "gpt-4o-mini",
        "messages": PROMPT_MESSAGES,
        "max_tokens": 1000,
    }

    result = client.chat.completions.create(**params)
    print("\nSuggested Resume Improvements:\n")
    print(result.choices[0].message.content)
