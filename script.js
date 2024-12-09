let questions = [
  {
    question:
      "Welches Team hat die meisten Titel in der Schweizer Super League gewonnen?",
    answer_1: "FC Basel",
    answer_2: "Grasshopper Club Zürich",
    answer_3: "Young Boys",
    answer_4: "FC Zürich",
    right_answer: 2,
  },
  {
    question:
      "In welcher Stadt hat der Schweizerische Fussballverband (SFV) seinen Hauptsitz?",
    answer_1: "Zürich",
    answer_2: "Lausanne",
    answer_3: "Bern",
    answer_4: "Basel",
    right_answer: 3,
  },
  {
    question:
      "Welches Team durchbrach die Dominanz des FC Basel und gewann 2018 die Schweizer Super League?",
    answer_1: "FC Zürich",
    answer_2: "Young Boys",
    answer_3: "Servette FC",
    answer_4: "FC St. Gallen",
    right_answer: 2,
  },
  {
    question:
      "Wie heisst das wichtigste Fussballstadion der Schweiz, das in Bern liegt?",
    answer_1: "St. Jakob-Park",
    answer_2: "Letzigrund",
    answer_3: "Wankdorf-Stadion",
    answer_4: "Stade de Suisse",
    right_answer: 3,
  },
  {
    question: "Wer ist der Rekordtorschütze der Schweizer Super League?",
    answer_1: "Seydou Doumbia",
    answer_2: "Alexander Frei",
    answer_3: "Marco Streller",
    answer_4: "Hakan Yakin",
    right_answer: 2,
  },
  {
    question: "Welcher Schweizer Verein trägt den Spitznamen 'Die Espen'?",
    answer_1: "FC Zürich",
    answer_2: "FC Lugano",
    answer_3: "FC St. Gallen",
    answer_4: "Servette FC",
    right_answer: 3,
  },
  {
    question:
      "Welcher Spieler wurde zum besten Spieler der Swiss Super League 2022/23 gewählt?",
    answer_1: "Jean-Pierre Nsame",
    answer_2: "Arthur Cabral",
    answer_3: "Cedric Itten",
    answer_4: "Fabian Rieder",
    right_answer: 4,
  },
];

let rightQuestions = 0;
let currentQuestion = 0; // Index of the current question, starting at 0
let AUDIO_SUCESS = new Audio("./quizapp_folder/audio/success.mp3");
let AUDIO_FAIL = new Audio("./quizapp_folder/audio/fail.mp3");

function init() {
  // Sets the total number of questions in the HTML element with the ID 'all-questions'
  document.getElementById("all-questions").innerHTML = questions.length;

  // Displays the first question
  showQuestion();
}

function showQuestion() {
  if (gameIsOver()) {
    showEndScreen();
  } else {
    updateProgressBar();
    updateToNextQuestion();
  }
}

function gameIsOver() {
  return currentQuestion >= questions.length;
}

function showEndScreen() {
    console.log("Endscreen is displayed");
    document.getElementById("endScreen").style = ""; // Show end screen
    document.getElementById("questionBodyStart").style = "display: none"; // Hide question body
  
    document.getElementById("amount-of-questions").innerHTML = questions.length;
    document.getElementById("amount-of-rightquestions").innerHTML = rightQuestions;
  
    // Update the header image
    document.getElementById("header-image").src = "./quizapp_folder/img/sfl_trophy.png";
  }

function updateProgressBar() {
  let percent = (currentQuestion + 1) / questions.length;
  percent = Math.round(percent * 100);

  document.getElementById("progress-bar").innerHTML = `${percent}%`;
  document.getElementById("progress-bar").style = `width: ${percent}%`;
}

function updateToNextQuestion() {
  let question = questions[currentQuestion]; // Retrieves the current question from the array based on the 'currentQuestion' index

  document.getElementById("question-number").innerHTML = currentQuestion + 1;
  // Updates the question text in the HTML element with the ID 'questiontext'
  document.getElementById("questiontext").innerHTML = question["question"];

  // Updates the answer text for each option in the corresponding HTML elements
  document.getElementById("answer_1").innerHTML = question["answer_1"];
  document.getElementById("answer_2").innerHTML = question["answer_2"];
  document.getElementById("answer_3").innerHTML = question["answer_3"];
  document.getElementById("answer_4").innerHTML = question["answer_4"];
}

function answer(selection) {
    let question = questions[currentQuestion]; // Retrieves the current question from the array
  
    // Extracts the number of the selected answer (e.g., '1' from 'answer_1')
    let selectedQuestionNumber = selection.slice(-1);
    let idOfRightAnswer = `answer_${question["right_answer"]}`;
  
    // Checks if the selected answer matches the correct answer
    if (righAnswerSelected(selectedQuestionNumber, question)) {
      document.getElementById(selection).parentNode.classList.add("bg-success"); // Add green background
      AUDIO_SUCESS.play(); // Play success sound
      rightQuestions++;
    } else {
      document.getElementById(selection).parentNode.classList.add("bg-danger"); // Add red background
      document
        .getElementById(idOfRightAnswer)
        .parentNode.classList.add("bg-success"); // Highlight correct answer
      AUDIO_FAIL.play(); // Play fail sound
    }
    document.getElementById("next-button").disabled = false; // Enable next button
  }
  
  function righAnswerSelected(selectedQuestionNumber, question) {
    return selectedQuestionNumber == question["right_answer"];
  }
  

function nextQuestion() {
  currentQuestion++; // z.B. von 0 auf 1
  document.getElementById("next-button").disabled = true;
  resetAnswerButtons();
  showQuestion();
}

function resetAnswerButtons() {
  document.getElementById("answer_1").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_1").parentNode.classList.remove("bg-success");
  document.getElementById("answer_2").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_2").parentNode.classList.remove("bg-success");
  document.getElementById("answer_3").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_3").parentNode.classList.remove("bg-success");
  document.getElementById("answer_4").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_4").parentNode.classList.remove("bg-success");
}

function restartGame() {
  document.getElementById("header-image").src ="./quizapp_folder/img/sfl_logo.png";
  document.getElementById("questionBodyStart").style = ""; //questionBodyStart wieder anzeigen
  document.getElementById("endScreen").style = "display: none"; //endScreen ausblenden
  rightQuestions = 0;
  currentQuestion = 0;
  init();
}