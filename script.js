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

let currentQuestion = 0; // Index of the current question, starting at 0

function init() {
  // Sets the total number of questions in the HTML element with the ID 'all-questions'
  document.getElementById("all-questions").innerHTML = questions.length;

  // Displays the first question
  showQuestion();
}

function showQuestion() {
  let question = questions[currentQuestion]; // Retrieves the current question from the array based on the 'currentQuestion' index

  console.log(question); // Debug: Logs the current question and its answers to the console

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
  console.log("Selected Answer is", selection); // Debug: Logs the selected answer (e.g., 'answer_1') to the console

  // Extracts the number of the selected answer (e.g., '1' from 'answer_1')
  let selectedQuestionNumber = selection.slice(-1);
  console.log("selectedQuestionNumber is", selectedQuestionNumber); // Debug: Logs the extracted answer number to the console
  console.log("Current question is", question["right_answer"]); // Debug: Logs the correct answer for the current question

  let idOfRightAnswer = `answer_${question["right_answer"]}`;

  // Checks if the selected answer matches the correct answer
  if (selectedQuestionNumber == question["right_answer"]) {
    console.log("Correct Answer!"); // Output if the answer is correct
    document.getElementById(selection).parentNode.classList.add("bg-success");
  } else {
    document.getElementById(selection).parentNode.classList.add("bg-danger");
    document
      .getElementById(idOfRightAnswer)
      .parentNode.classList.add("bg-success");
  }
  document.getElementById("next-button").disabled = false;
}
