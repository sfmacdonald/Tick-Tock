var questions = [
    {
      question: "What is the capital of France?",
      choices: ["Paris", "London", "Berlin", "Madrid"],
      correctAnswer: "Paris"
    },
  
    {
        question: "What is the capital of Germany?",
        choices: ["Paris", "London", "Berlin", "Madrid"],
        correctAnswer: "Berlin"
      },

      {
        question: "What is the capital of England?",
        choices: ["Paris", "London", "Berlin", "Madrid"],
        correctAnswer: "London"
      },

      {
        question: "What is the capital of Spain?",
        choices: ["Paris", "London", "Berlin", "Madrid"],
        correctAnswer: "Madrid"
      },
  ];

  var currentQuestionIndex;
  var timer;
  var timeLeft;
  var score;

  function startQuiz() {
    currentQuestionIndex = 0;
    timeLeft = 60;
    score = 0;

    document.getElementById("start-btn").style.display = "none";
    document.getElementById("quiz-container").style.display = "none";
    document.getElementById("question-container").style.display = "block";
    document.getElementById("timer").style.display = "block";
    document.getElementById("score-container").style.display = "none";

    displayQuestion();
    startTimer();
  }

  function displayQuestion() {
    var currentQuestion = questions[currentQuestionIndex];
    document.getElementById("question").innerText = currentQuestion.question;

    var choicesContainer = document.getElementById("choices");
    choicesContainer.innerHTML = "";

    currentQuestion.choices.forEach((choice) => {
      var choiceButton = document.createElement("button");
      choiceButton.classList.add("choice");
      choiceButton.innerText = choice;
      choiceButton.onclick = function() {
        checkAnswer(choice);
      };
      choicesContainer.appendChild(choiceButton);
    });
  }

  function checkAnswer(selectedAnswer) {
    var currentQuestion = questions[currentQuestionIndex];

    if (selectedAnswer === currentQuestion.correctAnswer) {
      document.getElementById("answer").innerText = "Correct!";
      score++;
    } else {
      document.getElementById("answer").innerText = "Wrong!";
      timeLeft -= 10;
    }
    
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
      displayQuestion();
    } else {
      endQuiz();
    }
  }

  function startTimer() {
    timer = setInterval(function() {
      document.getElementById("timer").innerText = `Time Left: ${timeLeft}s`;

      if (timeLeft <= 0) {
        endQuiz();
      } else {
        timeLeft--;
      }
    }, 1000);
  }

  function endQuiz() {
    clearInterval(timer);

    document.getElementById("question-container").style.display = "none";
    document.getElementById("game-over").innerText = "Your Attempt Is Over!";
    document.getElementById("score-container").style.display = "block";
    document.getElementById("final-score").innerText = `Your final score: ${score}`;
  }

  function saveScore() {
    var initials = document.getElementById("initials").value;
    // Save the score and initials to your desired storage or backend
    // For simplicity, we'll just log them to the console
    console.log("Initials:", initials);
    console.log("Score:", score);
  }

  document.getElementById("high-scores-link").addEventListener("click", function() {
    // Implement the logic to view high scores page
    console.log("View High Scores");
  });