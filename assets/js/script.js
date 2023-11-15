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
    document.getElementById("high-scores-container").style.display = "none";
    document.getElementById("btn-container").style.display = "none";
  
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
      choiceButton.onclick = function () {
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
    timer = setInterval(function () {
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
    document.getElementById("high-scores-container").style.display = "none";
    document.getElementById("btn-container").style.display = "none";
  
    var finalScore = score + timeLeft;
    document.getElementById("final-score").innerText = `Your final score: ${finalScore}`;
  
    document.getElementById("high-scores-container").style.display = "none";
  }
  
  function saveScore() {
    // Disable the save button to prevent multiple clicks
    document.getElementById("save-btn").disabled = true;
  
    var initials = document.getElementById("initials").value;
  
    // Check if initials are null or empty
    if (!initials || initials.trim() === "") {
      console.log("Initials cannot be null or empty. Score not saved.");
      return;
    }
  
    // Get existing scores from localStorage
    var savedScores = JSON.parse(localStorage.getItem("scores")) || [];
  
    // Check if the score has already been saved
    var isScoreSaved = savedScores.some(function (entry) {
      return entry.initials === initials;
    });
  
    if (isScoreSaved) {
      console.log("Score for these initials has already been saved.");
      return;
    }
  
    // Add the current score to the array
    savedScores.push({
      initials: initials,
      score: score + timeLeft,
    });
  
    // Save updated scores to localStorage
    localStorage.setItem("scores", JSON.stringify(savedScores));
  
    // Display stored scores
    displayScores();
  }
  
  function displayScores() {
    // Get scores from localStorage
    var savedScores = JSON.parse(localStorage.getItem("scores")) || [];
  
    // Filter out scores that are not saved
    var filteredScores = savedScores.filter(function (entry) {
      return entry.hasOwnProperty("score");
    });
  
    // Sort the scores in descending order
    filteredScores.sort(function (a, b) {
      return b.score - a.score;
    });
  
  // Display the top 10 scores
  var scoresContainer = document.getElementById("high-scores-container");
  scoresContainer.innerHTML = "<h2>High Scores</h2>";

  var numScoresToDisplay = Math.min(filteredScores.length, 10);

  for (var i = 0; i < numScoresToDisplay; i++) {
    var scoreElement = document.createElement("p");
    scoreElement.innerText = `${i + 1}. ${filteredScores[i].initials}: ${filteredScores[i].score}`;
    scoresContainer.appendChild(scoreElement);
  }
}
  
  function tryAgain () {
    // Clear previous answer results and restart quiz
    document.getElementById("answer").innerText = "";
    startQuiz();
}

function tryAgain () {
    // Clear previous answer results and restart quiz
    document.getElementById("answer").innerText = "";
    startQuiz();
}


  function clearScores() {
    localStorage.removeItem("scores");
    displayScores();
}
  

  document.getElementById("highScore").addEventListener("click", function () {
    // Display stored scores when "View High Scores" link is clicked
    document.getElementById("quiz-container").style.display = "none";
    document.getElementById("question-container").style.display = "none";
    document.getElementById("score-container").style.display = "none";
    document.getElementById("high-scores-container").style.display = "block";
    document.getElementById("btn-container").style.display = "block";
  
    // Call the function to display the scores
    displayScores();
  });

  // Clear stored scores with a button
  document.getElementById("clearScores").addEventListener("click", function () {
    localStorage.removeItem("scores");
    displayScores();
  });  