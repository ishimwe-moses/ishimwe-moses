const questions = [
    { question: "Antarctica is the coldest continent on Earth.", type: "truefalse", answer: "true" },
    { question: "The Antarctic Treaty was signed in 1959.", type: "truefalse", answer: "true" },
    { question: "Antarctica has no permanent residents.", type: "truefalse", answer: "true" },
    { question: "Glaciology is the study of stars.", type: "truefalse", answer: "false" },
    { question: "Ice core drilling helps scientists study past climate changes.", type: "truefalse", answer: "true" },
    { question: "The Ross Ice Shelf is located in the Arctic.", type: "truefalse", answer: "false" },
    { question: "Antarctica is the driest continent on Earth.", type: "truefalse", answer: "true" },
    { question: "Antarctica is governed by multiple countries.", type: "truefalse", answer: "false" },
    { question: "Antarctica's climate is studied to understand global warming.", type: "truefalse", answer: "true" },
    { question: "Antarctica has active volcanoes.", type: "truefalse", answer: "true" },
    { question: "The coldest temperature recorded on Earth was in Greenland.", type: "truefalse", answer: "false" },
    { question: "Antarctica's ice sheets hold the majority of the Earth's freshwater.", type: "truefalse", answer: "true" },
    { question: "Antarctica is known for its diverse plant life.", type: "truefalse", answer: "false" },
    { question: "The South Pole is located in Antarctica.", type: "truefalse", answer: "true" },
    { question: "Astronomers study the stars in Antarctica due to its clear skies.", type: "truefalse", answer: "true" },
    { question: "Antarctica has been explored for over 1,000 years.", type: "truefalse", answer: "false" },
    { question: "Antarctica is a prime location for testing space exploration technologies.", type: "truefalse", answer: "true" },
    { question: "The Antarctic Treaty allows military activities on the continent.", type: "truefalse", answer: "false" },
    { question: "The unique conditions in Antarctica make it a desert.", type: "truefalse", answer: "true" },
    { question: "Antarctica's ice shelves act as a buffer, slowing the flow of glaciers into the ocean.", type: "truefalse", answer: "true" },

    // Fill-in-the-Blank Questions
    { question: "The longest river in the world is the ____ River.", type: "fillblank", answer: "Nile" },
    { question: "Antarctica is governed by the ____ Treaty.", type: "fillblank", answer: "Antarctic" },
    { question: "The study of glaciers and ice sheets is called ____.", type: "fillblank", answer: "glaciology" },
    { question: "The Ross Ice Shelf is located in the ____ region of Antarctica.", type: "fillblank", answer: "southern" },
    { question: "The ____ Pole is the southernmost point on Earth.", type: "fillblank", answer: "South" },
    { question: "Antarctica's ice cores provide a record of Earth's ____ history.", type: "fillblank", answer: "climate" },
    { question: "The coldest temperature on Earth was recorded at ____ Station in Antarctica.", type: "fillblank", answer: "Vostok" },
    { question: "Astronomy in Antarctica benefits from its ____ skies.", type: "fillblank", answer: "clear" },
    { question: "The ____ Shelf is a massive floating ice platform in Antarctica.", type: "fillblank", answer: "Ross Ice" },
    { question: "Antarctica is considered a ____ because of its low precipitation.", type: "fillblank", answer: "desert" },
    { question: "The study of climate using ice cores is called ____. ", type: "fillblank", answer: "paleoclimatology" },
    { question: "The ____ Treaty ensures Antarctica is used for peaceful purposes.", type: "fillblank", answer: "Antarctic" },
    { question: "Antarctica is the only continent without a ____ population.", type: "fillblank", answer: "permanent" },
    { question: "____ seals are one of the animal species that live in Antarctica.", type: "fillblank", answer: "Weddell" },
    { question: "The largest ice sheet in Antarctica is the ____ Ice Sheet.", type: "fillblank", answer: "East Antarctic" },
    { question: "The study of life in extreme conditions, such as those in Antarctica, is called ____.", type: "fillblank", answer: "extremophiles" },
    { question: "____ is a rare gas found trapped in ice cores from Antarctica.", type: "fillblank", answer: "Methane" },
    { question: "Antarctica is surrounded by the ____ Ocean.", type: "fillblank", answer: "Southern" },
    { question: "The continent of Antarctica is almost entirely covered by ____.", type: "fillblank", answer: "ice" },
    { question: "Mount ____ is an active volcano located in Antarctica.", type: "fillblank", answer: "Erebus" },

    // Radio Button Questions
    { question: "Which of the following is a research station in Antarctica?", type: "multiple", options: ["McMurdo Station", "International Space Station", "Mir Station"], answer: "McMurdo Station" },
    { question: "Which pole is located in Antarctica?", type: "multiple", options: ["North Pole", "South Pole", "Magnetic Pole"], answer: "South Pole" },
    { question: "Which of these animals is native to Antarctica?", type: "multiple", options: ["Penguin", "Polar Bear", "Kangaroo"], answer: "Penguin" },
    { question: "Which ocean surrounds Antarctica?", type: "multiple", options: ["Atlantic Ocean", "Pacific Ocean", "Southern Ocean"], answer: "Southern Ocean" },
    { question: "Which continent holds the majority of the Earth's freshwater?", type: "multiple", options: ["Africa", "Antarctica", "Asia"], answer: "Antarctica" },
    { question: "Which of these landmarks is located in Antarctica?", type: "multiple", options: ["Mount Everest", "Mount Erebus", "Mount Fuji"], answer: "Mount Erebus" },
    { question: "Which research activity is commonly conducted in Antarctica?", type: "multiple", options: ["Space exploration", "Climate research", "Deep-sea diving"], answer: "Climate research" },
    { question: "Which of these animals is not found in Antarctica?", type: "multiple", options: ["Seal", "Penguin", "Lion"], answer: "Lion" },
    { question: "Which country operates the McMurdo Station in Antarctica?", type: "multiple", options: ["USA", "Russia", "China"], answer: "USA" },
    { question: "Which year was the Antarctic Treaty signed?", type: "multiple", options: ["1959", "1969", "1979"], answer: "1959" },
    { question: "Which of these is a key focus of research in Antarctica?", type: "multiple", options: ["Volcanoes", "Forests", "Glaciers"], answer: "Glaciers" },
    { question: "Which feature is unique to Antarctica?", type: "multiple", options: ["Rainforests", "Deserts", "Ice Sheets"], answer: "Ice Sheets" },
    { question: "Which is the southernmost continent?", type: "multiple", options: ["Africa", "South America", "Antarctica"], answer: "Antarctica" },
    { question: "Which of these is a scientific research station in Antarctica?", type: "multiple", options: ["McMurdo", "ISS", "Hubble"], answer: "McMurdo" },
    { question: "Which of the following is an impact of melting ice in Antarctica?", type: "multiple", options: ["Sea level rise", "Increased snowfall", "Desertification"], answer: "Sea level rise" },
    { question: "Which continent is considered the driest?", type: "multiple", options: ["Africa", "Australia", "Antarctica"], answer: "Antarctica" },
    { question: "Which of these animals is specially adapted to the cold climate of Antarctica?", type: "multiple", options: ["Camel", "Polar Bear", "Penguin"], answer: "Penguin" },
    { question: "Which of these natural features is found in Antarctica?", type: "multiple", options: ["Glaciers", "Rainforests", "Deserts"], answer: "Glaciers" },
    { question: "Which continent is located at the southernmost point of the Earth?", type: "multiple", options: ["Australia", "Antarctica", "South America"], answer: "Antarctica" },
    { question: "Which of the following is not a research focus in Antarctica?", type: "multiple", options: ["Glaciology", "Astronomy", "Rainforests"], answer: "Rainforests" },

    // Checkbox Questions
    { question: "Which countries have research stations in Antarctica?", type: "checkbox", options: ["USA", "Russia", "China", "India"], answer: ["USA", "Russia", "China"] },
    { question: "Which animals are native to Antarctica?", type: "checkbox", options: ["Penguin", "Seal", "Polar Bear", "Blue Whale"], answer: ["Penguin", "Seal", "Blue Whale"] },
    { question: "Which research activities are commonly conducted in Antarctica?", type: "checkbox", options: ["Climate Research", "Astronomy", "Tropical Forest Study", "Glaciology"], answer: ["Climate Research", "Astronomy", "Glaciology"] },
    { question: "Which landmarks are located in Antarctica?", type: "checkbox", options: ["South Pole", "Ross Ice Shelf", "Mount Erebus", "Mount Everest"], answer: ["South Pole", "Ross Ice Shelf", "Mount Erebus"] },
    { question: "Which animals can be found in Antarctica?", type: "checkbox", options: ["Emperor Penguin", "Weddell Seal", "Blue Whale", "Kangaroo"], answer: ["Emperor Penguin", "Weddell Seal", "Blue Whale"] },
    { question: "Which countries are signatories of the Antarctic Treaty?", type: "checkbox", options: ["USA", "UK", "Argentina", "Brazil"], answer: ["USA", "UK", "Argentina"] },
    { question: "Which features are found in Antarctica?", type: "checkbox", options: ["Ice Sheets", "Volcanoes", "Glaciers", "Rainforests"], answer: ["Ice Sheets", "Volcanoes", "Glaciers"] },
    { question: "Which research stations are located in Antarctica?", type: "checkbox", options: ["McMurdo Station", "Amundsen-Scott Station", "Concordia Station", "Mir Station"], answer: ["McMurdo Station", "Amundsen-Scott Station", "Concordia Station"] },
    { question: "Which of these conditions are typical in Antarctica?", type: "checkbox", options: ["Cold temperatures", "High winds", "Abundant sunlight", "High precipitation"], answer: ["Cold temperatures", "High winds"] },
    { question: "Which natural events occur in Antarctica?", type: "checkbox", options: ["Auroras", "Glacier calving", "Volcanic eruptions", "Sandstorms"], answer: ["Auroras", "Glacier calving", "Volcanic eruptions"] },
    { question: "Which countries operate research stations in Antarctica?", type: "checkbox", options: ["Russia", "USA", "Germany", "India"], answer: ["Russia", "USA", "India"] },
    { question: "Which animals are adapted to the Antarctic climate?", type: "checkbox", options: ["Penguin", "Seal", "Polar Bear", "Blue Whale"], answer: ["Penguin", "Seal", "Blue Whale"] },
    { question: "Which of these ice shelves are found in Antarctica?", type: "checkbox", options: ["Ross Ice Shelf", "Larsen Ice Shelf", "Filchner-Ronne Ice Shelf", "Greenland Ice Sheet"], answer: ["Ross Ice Shelf", "Larsen Ice Shelf", "Filchner-Ronne Ice Shelf"] },
    { question: "Which of these are impacts of climate change on Antarctica?", type: "checkbox", options: ["Ice melting", "Rising sea levels", "Increased snowfall", "Expansion of ice sheets"], answer: ["Ice melting", "Rising sea levels"] },
    { question: "Which features are typical of the Antarctic landscape?", type: "checkbox", options: ["Mountains", "Icebergs", "Deserts", "Glaciers"], answer: ["Mountains", "Icebergs", "Glaciers"] },
    { question: "Which of these research activities are performed in Antarctica?", type: "checkbox", options: ["Climate research", "Astronomy", "Deep-sea diving", "Glaciology"], answer: ["Climate research", "Astronomy", "Glaciology"] },
    { question: "Which of these natural resources are found in Antarctica?", type: "checkbox", options: ["Freshwater", "Minerals", "Oil", "Forests"], answer: ["Freshwater", "Minerals"] },
    { question: "Which of these countries are involved in Antarctic research?", type: "checkbox", options: ["USA", "Russia", "Australia", "Brazil"], answer: ["USA", "Russia", "Australia"] },
    { question: "Which animals are commonly studied in Antarctic research?", type: "checkbox", options: ["Penguins", "Seals", "Blue Whales", "Polar Bears"], answer: ["Penguins", "Seals", "Blue Whales"] },
    { question: "Which of these phenomena are studied by scientists in Antarctica?", type: "checkbox", options: ["Auroras", "Cosmic microwave background radiation", "Desertification", "Tropical storms"], answer: ["Auroras", "Cosmic microwave background radiation"] },

    {
        "question": "Which country's flag is shown below? <br><img src='flag-of-usa.jpeg' alt='Flag of USA'>",
        "type": "multiple",
        "options": ["USA", "New Zealand", "UK"],
        "answer": "USA"
      },
      {
        "question": "Which country's flag is shown below? <br><img src='flag-of-new-zealand.jpeg' alt='Flag of New Zealand'>",
        "type": "multiple",
        "options": ["New Zealand", "UK", "USA"],
        "answer": "New Zealand"
      },
      {
        "question": "Which country's flag is shown below? <br><img src='flag-of-uk.jpeg' alt='Flag of UK'>",
        "type": "multiple",
        "options": ["UK", "France", "New Zealand"],
        "answer": "UK"
      },
      {
        "question": "Which countries' flags are shown below? <br><img src='flag-of-france.jpeg' alt='Flag of France'><br><img src='flag-of-italy.jpeg' alt='Flag of Italy'>",
        "type": "multiple",
        "options": ["France and Italy", "UK and France", "Italy and New Zealand"],
        "answer": "France and Italy"
      },
      {
        "question": "Which animal is shown below? <br><img src='emperor-penguins.jpeg' alt='Emperor Penguins'>",
        "type": "multiple",
        "options": ["Emperor Penguin", "Adelie Penguin", "Leopard Seal"],
        "answer": "Emperor Penguin"
      },
      {
        "question": "Which animal is shown below? <br><img src='adelie-penguins.jpeg' alt='Adelie Penguins'>",
        "type": "multiple",
        "options": ["Adelie Penguin", "Emperor Penguin", "Weddell Seal"],
        "answer": "Adelie Penguin"
      },
      {
        "question": "Which animal is shown below? <br><img src='weddell-seal.jpeg' alt='Weddell Seal'>",
        "type": "multiple",
        "options": ["Weddell Seal", "Leopard Seal", "Orca Whale"],
        "answer": "Weddell Seal"
      },
      {
        "question": "Which animal is shown below? <br><img src='leopard-seal.jpeg' alt='Leopard Seal'>",
        "type": "multiple",
        "options": ["Leopard Seal", "Weddell Seal", "Adelie Penguin"],
        "answer": "Leopard Seal"
      },
      {
        "question": "Which animal is shown below? <br><img src='humpback-whale.jpeg' alt='Humpback Whale'>",
        "type": "multiple",
        "options": ["Humpback Whale", "Blue Whale", "Orca Whale"],
        "answer": "Humpback Whale"
      },
      {
        "question": "Which animal is shown below? <br><img src='orca.jpeg' alt='Orca Whale'>",
        "type": "multiple",
        "options": ["Orca Whale", "Humpback Whale", "Leopard Seal"],
        "answer": "Orca Whale"
      },
      {
        "question": "What research activity involves drilling ice cores in Antarctica? <br><img src='ice-core.jpeg' alt='Ice Core Drilling'>",
        "type": "multiple",
        "options": ["Climate Research", "Glaciology", "Astronomy"],
        "answer": "Climate Research"
      },
      {
        "question": "What do scientists study by analyzing layers of ice cores? <br><img src='ice-core.jpeg' alt='Ice Core Drilling'>",
        "type": "multiple",
        "options": ["Past climate changes", "Ocean currents", "Meteorite impacts"],
        "answer": "Past climate changes"
      },
      {
        "question": "What is the study of glaciers and ice sheets called? <br><img src='glaciology.jpeg' alt='Glaciology Research'>",
        "type": "multiple",
        "options": ["Glaciology", "Astronomy", "Meteorology"],
        "answer": "Glaciology"
      },
      {
        "question": "Why is glaciology research important? <br><img src='glaciology.jpeg' alt='Glaciology Research'>",
        "type": "multiple",
        "options": ["To predict future sea level rise", "To understand star formation", "To study ancient civilizations"],
        "answer": "To predict future sea level rise"
      },
      {
        "question": "Why is Antarctica a good location for astronomical observations? <br><img src='antarctic-astronomy.jpeg' alt='Antarctic Astronomy'>",
        "type": "multiple",
        "options": ["Clear, cold air and long winter nights", "Proximity to the equator", "Abundant sunlight"],
        "answer": "Clear, cold air and long winter nights"
      },
      {
        "question": "What do telescopes in Antarctica study? <br><img src='antarctic-astronomy.jpeg' alt='Antarctic Astronomy'>",
        "type": "multiple",
        "options": ["Cosmic microwave background radiation", "Marine life", "Ice sheet dynamics"],
        "answer": "Cosmic microwave background radiation"
      }
      
      
];


let selectedQuestions = [];
let correctAnswers = 0;

function startTest() {
    selectedQuestions = questions.sort(() => 0.5 - Math.random()).slice(0, 30);
    displayQuestions();
    document.getElementById('instructions').style.display = 'none';
    document.getElementById('quiz').style.display = 'block';
}

function displayQuestions() {
    const questionsContainer = document.getElementById('questions-container');
    questionsContainer.innerHTML = '';
    selectedQuestions.forEach((question, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');
        questionDiv.innerHTML = generateQuestionHTML(question, index);
        questionsContainer.appendChild(questionDiv);
    });
}

function generateQuestionHTML(question, index) {
    switch (question.type) {
        case 'truefalse':
            return `
                <p>${index + 1}. ${question.question}</p>
                <label><input type="radio" name="question-${index}" value="true"> True</label>
                <label><input type="radio" name="question-${index}" value="false"> False</label>
            `;
        case 'fillblank':
            return `
                <p>${index + 1}. ${question.question}</p>
                <input type="text" name="question-${index}">
            `;
        case 'multiple':
            return `
                <p>${index + 1}. ${question.question}</p>
                ${question.options.map(option => `
                    <label><input type="radio" name="question-${index}" value="${option}"> ${option}</label>
                `).join('')}
            `;
        case 'checkbox':
            return `
                <p>${index + 1}. ${question.question}</p>
                ${question.options.map(option => `
                    <label><input type="checkbox" name="question-${index}" value="${option}"> ${option}</label>
                `).join('')}
            `;
        default:
            return '';
    }
}

function submitAnswers() {
    correctAnswers = 0;
    const corrections = [];
    selectedQuestions.forEach((question, index) => {
        const userAnswer = getUserAnswer(question, index);
        const isCorrect = checkAnswer(question, userAnswer);
        if (isCorrect) {
            correctAnswers++;
        } else {
            corrections.push({
                question: question.question,
                correctAnswer: question.answer,
                userAnswer
            });
        }
    });
    displayResults(corrections);
}

function getUserAnswer(question, index) {
    switch (question.type) {
        case 'truefalse':
        case 'multiple':
            return document.querySelector(`input[name="question-${index}"]:checked`)?.value || '';
        case 'fillblank':
            return document.querySelector(`input[name="question-${index}"]`).value.trim();
        case 'checkbox':
            return Array.from(document.querySelectorAll(`input[name="question-${index}"]:checked`)).map(input => input.value);
        default:
            return '';
    }
}

function checkAnswer(question, userAnswer) {
    if (Array.isArray(question.answer)) {
        return JSON.stringify(question.answer.sort()) === JSON.stringify(userAnswer.sort());
    }
    return question.answer.toString().toLowerCase() === userAnswer.toString().toLowerCase();
}

function displayResults(corrections) {
    document.getElementById('quiz').style.display = 'none';
    document.getElementById('results').style.display = 'block';
    document.getElementById('score').innerText = `You got ${correctAnswers} out of 30 correct!`;
    const correctionsContainer = document.getElementById('corrections');
    correctionsContainer.innerHTML = corrections.map(correction => `
        <div>
            <p>${correction.question}</p>
            <p class="${correction.userAnswer.toString().toLowerCase() === correction.correctAnswer.toString().toLowerCase() ? 'correct' : 'incorrect'}">
                Your Answer: ${Array.isArray(correction.userAnswer) ? correction.userAnswer.join(', ') : correction.userAnswer}
            </p>
            <p class="correct">Correct Answer: ${Array.isArray(correction.correctAnswer) ? correction.correctAnswer.join(', ') : correction.correctAnswer}</p>
        </div>
    `).join('');
  // Scroll to the top of the page after displaying the results
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function restartQuiz() {
    document.getElementById('results').style.display = 'none';
    document.getElementById('instructions').style.display = 'block';
}
