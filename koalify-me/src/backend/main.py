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
                "Please take these answers and suggest ......",
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

    print("Would you like to have your resume analyzed to a job/internship description you want to apply to?\n")
    answerToResAnlys = input("Please enter 'y' or 'n'\n")
    while answerToResAnlys.lower()!=("y" or "n"):
        print("Please enter a valid response.\n")
        answerToResAnlys = input("Please enter 'y' or 'n'")
    
    if answerToResAnlys.lower() == "n":
        print("")
    elif answerToResAnlys.lower() == "y":
        resumeRec.resumeAnalysis() 
