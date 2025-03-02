from openai import OpenAI
import os
import quizAndAnswers
import resumeRec
from dotenv import load_dotenv

load_dotenv()

api_key = os.getenv("OPENAI_API_KEY")
client = OpenAI(api_key)

if __name__ == "__main__":
    quizAnswers = quizAndAnswers
    PROMPT_MESSAGES = [
        {
            "role": "user",
            "content": [
                "Only respond with one of these majors that would fit best after analyzing all the answers to the following questions don't provide additional text('Computer Science', 'Software Engineering', 'Cybersecurity', 'Information Systems', 'Game Design/Development', 'UI/UX', 'Data Science', 'Information Technology', 'AI/Machine Learning', 'Computer Engineering'): '1. What excites you most about technology?', '2. Which technical skill do you feel most confident in?', '3. Which soft skill do you feel most confident in?', '4. What type of impact do you want to make in the tech industry?', '5. How do you feel about working with a team?', '6. How do you feel about working with stakeholders?', '7. Would you rather build something entirely new or optimize an existing system?', '8. Do you enjoy designing visuals?', '9. In a team project, would you prefer to handle creative design or technical problem-solving?', '10. Do you like figuring out how computers and the internet work together, and helping keep everything running smoothly?', '11. Are you interested in ethical hacking?', '12. How do you approach solving problems?',",
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
