def quiz():
    print("Enter your answers to the questions")
    quizQuestion = ["1. What excites you most about technology?",
                    "2. Which technical skill do you feel most confident in?",
                    "3. Which soft skill do you feel most confident in?",
                    "4. What type of impact do you want to make in the tech industry?",
                    "5. How do you feel about working with a team?",
                    "6. How do you feel about working with stakeholders?",
                    "7. Would you rather build something entirely new or optimize an existing system?",
                    "8. Do you enjoy designing visuals?",
                    "9. In a team project, would you prefer to handle creative design or technical problem-solving?",
                    "10. Do you like figuring out how computers and the internet work together, and helping keep everything running smoothly?",
                    "11. Are you interested in ethical hacking?", 
                    "12. How do you approach solving problems?"
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