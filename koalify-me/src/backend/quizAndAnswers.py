def quiz():
    print("Enter your answers to the questions")
    quizQuestion = ["1. What excites you most about technology?",
                    "2. Which technical skill do you feel most confident in?",
                    "3. Which soft skill do you feel most confident in?",
                    "4. What type of impact do you want to make in the tech industry?",
                    "5. Do you enjoy teaching?",
                    "6. Do you prefer leading or following?",
                    "7. How do you feel about working with a team?",
                    "8. If you could work for any company, which would it be?",
                    "9. What's your ideal job flexibility?",
                    "10. How do you feel about working with stakeholders?",
                    "11. Would you rather build something entirely new or optimize an existing system?",
                    "12. Do you enjoy designing visuals?",
                    "13. In a team project, would you prefer to handle creative design or technical problem-solving?",
                    "14. Do you enjoy working with networks and system administration?",
                    "15. Are you interested in ethical hacking?",
                    "16. Do you prefer leading or following?",
                    "17. How do you approach solving problems?",
                    "18. Are you comfortable working under pressure when responding to security incidents?",
                    "19. How do you feel about installing and configuring operating systems like Windows and Linux?",
                    "20. How do you feel about working with stakeholders?"
                    ]
    answers = []
    count = 1

    for question in quizQuestion:
        print(question)
        userInput = ""
        while not userInput.strip():
            userInput = input()
            if not userInput.strip():
                print("Input cannot be empty.")
        answers.append(f"{count}. {userInput}")
        count += 1
    
    return answers

if __name__ == "__main__":
    responses = quiz()
    print("\nYour responses:")
    for response in responses:
        print(response)