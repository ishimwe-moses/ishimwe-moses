const questions = [
   
    
  {
    question: "Which state's flag is shown below? <br><img src='flag-of-mississippi.jpeg' alt='Mississippi Flag'>",
    type: "multiple",
    options: ["Mississippi", "Louisiana", "Arkansas"],
    answer: "Mississippi"
  },
  {
    question: "Which state's flag is shown below? <br><img src='flag-of-missouri.jpeg' alt='Missouri Flag'>",
    type: "multiple",
    options: ["Missouri", "Kansas", "Illinois"],
    answer: "Missouri"
  },
  {
    question: "Which state's flag is shown below? <br><img src='flag-of-montana.jpeg' alt='Montana Flag'>",
    type: "multiple",
    options: ["Montana", "Idaho", "Wyoming"],
    answer: "Montana"
  },
  {
    question: "Which state's flag is shown below? <br><img src='flag-of-nebraska.jpeg' alt='Nebraska Flag'>",
    type: "multiple",
    options: ["Nebraska", "Kansas", "South Dakota"],
    answer: "Nebraska"
  },
  {
    question: "Which state's flag is shown below? <br><img src='flag-of-nevada.jpeg' alt='Nevada Flag'>",
    type: "multiple",
    options: ["Nevada", "Utah", "California"],
    answer: "Nevada"
  },
  {
    question: "Which state's flag is shown below? <br><img src='flag-of-new-hampshire.jpeg' alt='New Hampshire Flag'>",
    type: "multiple",
    options: ["New Hampshire", "Maine", "Vermont"],
    answer: "New Hampshire"
  },
  {
    question: "Which state's flag is shown below? <br><img src='flag-of-new-jersey.jpeg' alt='New Jersey Flag'>",
    type: "multiple",
    options: ["New Jersey", "New York", "Pennsylvania"],
    answer: "New Jersey"
  },
  {
    question: "Which state's flag is shown below? <br><img src='flag-of-new-mexico.jpeg' alt='New Mexico Flag'>",
    type: "multiple",
    options: ["New Mexico", "Arizona", "Nevada"],
    answer: "New Mexico"
  },
  {
    question: "Which state's flag is shown below? <br><img src='flag-of-new-york.jpeg' alt='New York Flag'>",
    type: "multiple",
    options: ["New York", "New Jersey", "Connecticut"],
    answer: "New York"
  },
  {
    question: "Which state's flag is shown below? <br><img src='flag-of-north-carolina.jpeg' alt='North Carolina Flag'>",
    type: "multiple",
    options: ["North Carolina", "South Carolina", "Virginia"],
    answer: "North Carolina"
  },
  {
    question: "Which state's flag is shown below? <br><img src='flag-of-north-dakota.jpeg' alt='North Dakota Flag'>",
    type: "multiple",
    options: ["North Dakota", "South Dakota", "Montana"],
    answer: "North Dakota"
  },
  {
    question: "Which state's flag is shown below? <br><img src='flag-of-ohio.jpeg' alt='Ohio Flag'>",
    type: "multiple",
    options: ["Ohio", "Indiana", "Michigan"],
    answer: "Ohio"
  },
  {
    question: "Which state's flag is shown below? <br><img src='flag-of-oklahoma.jpeg' alt='Oklahoma Flag'>",
    type: "multiple",
    options: ["Oklahoma", "Kansas", "Texas"],
    answer: "Oklahoma"
  },
  {
    question: "Which state's flag is shown below? <br><img src='flag-of-oregon.jpeg' alt='Oregon Flag'>",
    type: "multiple",
    options: ["Oregon", "Washington", "California"],
    answer: "Oregon"
  },
  {
    question: "Which UNESCO World Heritage Site is shown below? <br><img src='chichen-itza.jpeg' alt='Chichen Itza'>",
    type: "multiple",
    options: ["Chichen Itza", "Machu Picchu", "Stonehenge"],
    answer: "Chichen Itza"
  },
  {
    question: "Which countries are part of North America?",
    type: "checkbox",
    options: ["Canada", "Brazil", "Mexico", "United States"],
    answer: ["Canada", "Mexico", "United States"]
  },
  {
    question: "Which of the following states are located on the West Coast of the United States?",
    type: "checkbox",
    options: ["California", "Florida", "Oregon", "Nevada"],
    answer: ["California", "Oregon", "Nevada"]
  },
  {
    question: "Which languages are widely spoken in North America?",
    type: "checkbox",
    options: ["English", "Spanish", "French", "Portuguese"],
    answer: ["English", "Spanish", "French"]
  },
  {
    question: "Which of the following are national parks in the United States?",
    type: "checkbox",
    options: ["Yellowstone", "Banff", "Yosemite", "Grand Canyon"],
    answer: ["Yellowstone", "Yosemite", "Grand Canyon"]
  },
  {
    question: "Which of the following are Canadian provinces?",
    type: "checkbox",
    options: ["Ontario", "Quebec", "California", "British Columbia"],
    answer: ["Ontario", "Quebec", "British Columbia"]
  },
  {
    question: "Which of the following are famous landmarks in the United States?",
    type: "checkbox",
    options: ["Statue of Liberty", "Eiffel Tower", "Mount Rushmore", "The White House"],
    answer: ["Statue of Liberty", "Mount Rushmore", "The White House"]
  },
  {
    question: "Which of the following are islands that are U.S. states?",
    type: "checkbox",
    options: ["Hawaii", "Alaska", "Rhode Island", "Maui"],
    answer: ["Hawaii"]
  },
  {
    question: "Which of the following cities are Canadian?",
    type: "checkbox",
    options: ["Montreal", "Ottawa", "Vancouver", "Seattle"],
    answer: ["Montreal", "Ottawa", "Vancouver"]
  },
  {
    question: "Which of the following are UNESCO World Heritage Sites in North America?",
    type: "checkbox",
    options: ["Grand Canyon", "Chichen Itza", "Machu Picchu", "Statue of Liberty"],
    answer: ["Grand Canyon", "Chichen Itza", "Statue of Liberty"]
  },
  {
    question: "Which of the following are famous U.S. landmarks related to the American Revolution?",
    type: "checkbox",
    options: ["Liberty Bell", "Independence Hall", "Alamo", "Boston Tea Party Ships"],
    answer: ["Liberty Bell", "Independence Hall", "Boston Tea Party Ships"]
  },
  {
    question: "Which of the following are natural wonders located in the United States?",
    type: "checkbox",
    options: ["Grand Canyon", "Niagara Falls", "Mount Everest", "Yellowstone"],
    answer: ["Grand Canyon", "Niagara Falls", "Yellowstone"]
  },
             

];


let selectedQuestions = [];
let correctAnswers = 0;

function startTest() {
    selectedQuestions = questions.sort(() => 0.5 - Math.random()).slice(0, 20);
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
    document.getElementById('score').innerText = `You got ${correctAnswers} out of 20 correct!`;
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
