import htmlPDFtoPython

def resumeAnalysis():
    jobDes = input("Please enter the job description you would like to be analyzed:\n")
    
    resText = htmlPDFtoPython()

    PROMPT_MESSAGES = [
        {
            "role": "user",
            "content": [
                "Take this job description and compare the compatability of the following resume. Give advice to changes that could be made to the resume to fit the job description even better. Provide a precise bullet point list of changes to be made.",
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
    print(result.choices[0].message.content)