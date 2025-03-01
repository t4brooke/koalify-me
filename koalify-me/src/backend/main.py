from openai import OpenAI
import os

import quizAndAnswers

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