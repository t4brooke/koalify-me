from openai import OpenAI
import os
import quizAndAnswers
import resumeRec

client = OpenAI(api_key=os.environ.get("OPENAI_API_KEY", ""))

if __name__ == "__main__":
    quizAnswers = quizAndAnswers.quiz() 
    PROMPT_MESSAGES = [
        {
            "role": "user",
            "content": [
                "Please take these answers and suggest relevant career paths:",
                quizAnswers,
            ],
        },
    ]
    params = {
        "model": "gpt-4o-mini",
        "messages": PROMPT_MESSAGES,
        "max_tokens": 500,
    }

    result = client.chat.completions.create(**params)
    print(result.choices[0].message.content)

    print("\nWould you like to have your resume analyzed to a job/internship description?\n")
    answerToResAnlys = input("Please enter 'y' or 'n':\n")
    
    while answerToResAnlys.lower() not in ("y", "n"):
        print("Invalid response. Please enter 'y' or 'n'.")
        answerToResAnlys = input()

    if answerToResAnlys.lower() == "y":
        resumeRec.resumeAnalysis()
