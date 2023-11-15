# Tick-Tock
I want to play a game. If you answer wrong, the clock runs out. 

## Table of Contents

- [Project Name](#project-name)
- [Table of Contents](#table-of-contents)
- [Description](#description)
- [Features](#features)
- [Usage](#usage)
- [Testing](#testing)

## Description

The purpose of the website is a fun way for users to learn and test their knowledge of JavaScript. This is accomplished with a quiz that is equipped clock where if the user answers wrong, the clock expotentially decreases. It also stores your final score so that users may try again as well as have others test their knowledge. 

## Features

This web-based code quiz has the following features and functions:

1. Start button to initiate the quiz at the user's discretion.
2. A timer which starts when the first question is presented to the user.
3. The user has mulitple choice options to answer the questions. 
    - If answered correctly, the next question is presented to the user and the clock continues to decrease by 1 second increments.
    - If answered incorrectly, then time is subtracted from the clock quicker decreasing by 10 second incrementsa nd the next question is presented to the user.
4. The quiz ends when the user answers all the questions or the time runs out, whichever comes first.
    - The user shall have a message displayed that the quiz is over.
5. The user name and final score may then be stored for future reference.
    - A max of the highest 10 saved results are presented to the user.
    - Previously stored results may be cleared at the user's discretion.

## Usage

The github repository may be found at https://github.com/sfmacdonald/Tick-Tock

The live URL for the working website is https://sfmacdonald.github.io/Tick-Tock/

When accessed, the website should look reflect the following image:

![JavaScript Quiz Website](<assets/images/Screen Shot 2023-11-15 at 11.08.39 AM.png>)

## Testing

1. **Navigate to the Website**
   - Visit https://sfmacdonald.github.io/Tick-Tock/

2. **Start Quiz**
    - Select the "Start" button to begin the timer and display the first question
        1. Ensure that the clock displays and begins decreasing in time by 1 second incriments
        2. Ensure that first question displays with multiple choice answers 

3. **Answering Questions**
    - Select answers by selecting the correct button. The user shall note that the button background color will change from black to purple to indicate which answer is being selected before the click occurrs. 

    ![Select Answer](<assets/images/Screen Shot 2023-11-15 at 11.09.26 AM.png>)

    - When the displayed question is answered:
        1. Ensure that the next question displays correctly with new answers
        2. Ensure that when a question is answered correctly:
            - Clock continues to decrease at a 1 second incriment
        3. Ensure that when a question is answered incorrectly:
            - Clock decreases immediately by 10 seconds immediately
        4. Ensure that previous question's results display to user as correct or incorrect

![Answer Result](<assets/images/Screen Shot 2023-11-15 at 11.09.49 AM.png>)

4. **Completing The Quiz**
    - The quiz is considered completed when one of the following criteria is met:
        1. All questions have been answered -or-
        2. Time has expired

5. **Store Results**
    - Once the quiz is completed based off the criteria in #4, the user may store their results by providing a user name. 
        1. Input the name (max three initials) 
        2. Select the "Save" button to complete the task. Stored results shall display for review with the username and the assocaited score. 
        3. Users may use the "Clear" button to remove any previously locally stored results.

![Final Score](<assets/images/Screen Shot 2023-11-15 at 11.10.34 AM.png>)
![High Scores](<assets/images/Screen Shot 2023-11-15 at 11.10.54 AM.png>)

6. **Begin A New Quiz**
   - When a new quiz is begun by a user, all the same features shall function as previously experienced. When the quiz is completed, any stored username(s)/score(s) shall present and the user may add another logged score. 