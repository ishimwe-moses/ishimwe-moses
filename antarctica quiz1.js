const questions = [
    
      
        { "question": "Antarctica is the coldest continent on Earth.", "type": "truefalse", "answer": true },
        { "question": "Mount Everest is the highest peak in Antarctica.", "type": "truefalse", "answer": false },
        { "question": "The South Pole experiences six months of daylight followed by six months of darkness.", "type": "truefalse", "answer": true },
        { "question": "The Ross Ice Shelf is smaller than the Larsen Ice Shelf.", "type": "truefalse", "answer": false },
        { "question": "Weddell seals are known for their deep dives under Antarctic ice.", "type": "truefalse", "answer": true },
        { "question": "Orca whales are also known as killer whales.", "type": "truefalse", "answer": true },
        { "question": "Penguins are native to both Antarctica and the Arctic.", "type": "truefalse", "answer": false },
        { "question": "The Antarctic Treaty bans military activity on the continent.", "type": "truefalse", "answer": true },
        { "question": "Emperor penguins are the smallest penguin species in Antarctica.", "type": "truefalse", "answer": false },
        { "question": "Mount Erebus is the only active volcano in Antarctica.", "type": "truefalse", "answer": false },
        { "question": "The Antarctic ice sheet contains about 60% of the world's freshwater.", "type": "truefalse", "answer": true },
        { "question": "The South Pole is located on Ross Island.", "type": "truefalse", "answer": false },
        { "question": "Leopard seals primarily feed on penguins.", "type": "truefalse", "answer": true },
        { "question": "The wandering albatross, often seen around Antarctica, has the largest wingspan of any bird.", "type": "truefalse", "answer": true },
        { "question": "Antarctica is the driest continent on Earth.", "type": "truefalse", "answer": true },
        { "question": "The blue whale is the largest animal to have ever existed.", "type": "truefalse", "answer": true },
        { "question": "Krill are the primary food source for many Antarctic species, including whales and seals.", "type": "truefalse", "answer": true },
        { "question": "Scott Base is a research station operated by the United States.", "type": "truefalse", "answer": false },
        { "question": "The Amundsen-Scott South Pole Station is named after the first two explorers to reach the South Pole.", "type": "truefalse", "answer": true },
    
    
        
            { "question": "What is the largest ice shelf in Antarctica?", "type": "multiple", "options": ["Ross Ice Shelf", "Larsen Ice Shelf", "Filchner-Ronne Ice Shelf"], "answer": "Ross Ice Shelf" },
            { "question": "Which of the following animals is known for its long treks across the ice during the harsh Antarctic winter?", "type": "multiple", "options": ["Adelie Penguin", "Emperor Penguin", "Leopard Seal"], "answer": "Emperor Penguin" },
            { "question": "Which research station is located at the South Pole?", "type": "multiple", "options": ["McMurdo Station", "Amundsen-Scott South Pole Station", "Scott Base"], "answer": "Amundsen-Scott South Pole Station" },
            { "question": "Which of these whales is the largest?", "type": "multiple", "options": ["Humpback Whale", "Blue Whale", "Orca"], "answer": "Blue Whale" },
            { "question": "Which continent is known for having no native human population?", "type": "multiple", "options": ["Antarctica", "Australia", "Africa"], "answer": "Antarctica" },
            { "question": "What is the primary food source for many Antarctic species?", "type": "multiple", "options": ["Plankton", "Krill", "Fish"], "answer": "Krill" },
            { "question": "Which country operates the McMurdo Station?", "type": "multiple", "options": ["United States", "New Zealand", "United Kingdom"], "answer": "United States" },
            { "question": "Which of these is a top predator in Antarctic waters?", "type": "multiple", "options": ["Weddell Seal", "Leopard Seal", "Adelie Penguin"], "answer": "Leopard Seal" },
            { "question": "Mount Erebus is located on which island?", "type": "multiple", "options": ["Ross Island", "South Georgia Island", "Deception Island"], "answer": "Ross Island" },
            { "question": "The Antarctic Treaty was signed in which year?", "type": "multiple", "options": ["1947", "1959", "1963"], "answer": "1959" },
            { "question": "Which of these countries does not have a research station in Antarctica?", "type": "multiple", "options": ["India", "Brazil", "South Korea"], "answer": "Brazil" },
            { "question": "What phenomenon occurs at the South Pole due to the tilt of the Earth's axis?", "type": "multiple", "options": ["Aurora Borealis", "Midnight Sun", "Polar Night"], "answer": "Midnight Sun" },
            { "question": "Which research station is a joint operation between France and Italy?", "type": "multiple", "options": ["Concordia Station", "Rothera Research Station", "Scott Base"], "answer": "Concordia Station" },
            { "question": "Which species of penguin builds nests out of stones?", "type": "multiple", "options": ["Emperor Penguin", "Adelie Penguin", "Gentoo Penguin"], "answer": "Adelie Penguin" },
            { "question": "Which bird has the largest wingspan, often seen around Antarctica?", "type": "multiple", "options": ["Wandering Albatross", "Snow Petrel", "South Polar Skua"], "answer": "Wandering Albatross" },
            { "question": "Which of these is a well-known active volcano in Antarctica?", "type": "multiple", "options": ["Mount Vinson", "Mount Erebus", "Mount Sidley"], "answer": "Mount Erebus" },
            { "question": "Which seal species is known for deep diving under Antarctic ice?", "type": "multiple", "options": ["Leopard Seal", "Weddell Seal", "Crabeater Seal"], "answer": "Weddell Seal" },
            { "question": "Which of the following is NOT true about Antarctica?", "type": "multiple", "options": ["It has a native human population", "It is the driest continent", "It contains 70% of the world's fresh water"], "answer": "It has a native human population" },
            { "question": "Which whale species is known for its intelligence and social behavior?", "type": "multiple", "options": ["Blue Whale", "Humpback Whale", "Orca Whale"], "answer": "Orca Whale" },
            { "question": "The Ross Ice Shelf is comparable in size to which country?", "type": "multiple", "options": ["France", "Germany", "Australia"], "answer": "France" },
        
        

            
                { "question": "Select all of the following that are Antarctic landmarks:", "type": "checkbox", "options": ["South Pole", "Mount Everest", "Mount Erebus", "Ross Ice Shelf"], "answer": ["South Pole", "Mount Erebus", "Ross Ice Shelf"] },
                { "question": "Which of the following animals are found in Antarctica?", "type": "checkbox", "options": ["Penguins", "Polar Bears", "Seals", "Whales"], "answer": ["Penguins", "Seals", "Whales"] },
                { "question": "Which of the following statements about the Antarctic Treaty are true?", "type": "checkbox", "options": ["It bans military activity", "It allows commercial fishing", "It promotes scientific research", "It was signed in 1959"], "answer": ["It bans military activity", "It promotes scientific research", "It was signed in 1959"] },
                { "question": "Which of these species are penguins?", "type": "checkbox", "options": ["Emperor Penguin", "Adelie Penguin", "King Penguin", "Macaroni Penguin"], "answer": ["Emperor Penguin", "Adelie Penguin", "King Penguin", "Macaroni Penguin"] },
                { "question": "Identify the seals commonly found in Antarctica:", "type": "checkbox", "options": ["Leopard Seal", "Harbor Seal", "Weddell Seal", "Elephant Seal"], "answer": ["Leopard Seal", "Weddell Seal", "Elephant Seal"] },
                { "question": "Which of the following countries have research stations in Antarctica?", "type": "checkbox", "options": ["United States", "Russia", "Australia", "Brazil"], "answer": ["United States", "Russia", "Australia"] },
                { "question": "Select all true statements about the South Pole:", "type": "checkbox", "options": ["It is the southernmost point on Earth", "It experiences polar night and day", "It is marked by a ceremonial pole", "It is located on Ross Island"], "answer": ["It is the southernmost point on Earth", "It experiences polar night and day", "It is marked by a ceremonial pole"] },
                { "question": "Which animals are top predators in Antarctic waters?", "type": "checkbox", "options": ["Leopard Seals", "Orca Whales", "Emperor Penguins", "Krill"], "answer": ["Leopard Seals", "Orca Whales"] },
                { "question": "Which Antarctic species are known for long-distance migration?", "type": "checkbox", "options": ["Humpback Whale", "Orca Whale", "Blue Whale", "Wandering Albatross"], "answer": ["Humpback Whale", "Blue Whale", "Wandering Albatross"] },
                { "question": "Which of the following contribute to Antarctica's global significance?", "type": "checkbox", "options": ["Its ice sheets affect sea levels", "It is a hub for military activity", "It hosts scientific research", "It has a large human population"], "answer": ["Its ice sheets affect sea levels", "It hosts scientific research"] },
                { "question": "Select all true statements about Mount Erebus:", "type": "checkbox", "options": ["It is an active volcano", "It is located on Ross Island", "It has a lava lake", "It is the highest peak in Antarctica"], "answer": ["It is an active volcano", "It is located on Ross Island", "It has a lava lake"] },
                { "question": "Which of these animals rely on krill as a primary food source?", "type": "checkbox", "options": ["Blue Whale", "Humpback Whale", "Leopard Seal", "Emperor Penguin"], "answer": ["Blue Whale", "Humpback Whale", "Emperor Penguin"] },
                { "question": "Which of the following birds are commonly found in Antarctica?", "type": "checkbox", "options": ["Snow Petrel", "Albatross", "Puffin", "Penguin"], "answer": ["Snow Petrel", "Albatross", "Penguin"] },
                { "question": "Select the penguin species found in Antarctica:", "type": "checkbox", "options": ["Adelie Penguin", "King Penguin", "Chinstrap Penguin", "Galápagos Penguin"], "answer": ["Adelie Penguin", "King Penguin", "Chinstrap Penguin"] },
                { "question": "Which of these research stations are located in Antarctica?", "type": "checkbox", "options": ["McMurdo Station", "Rothera Research Station", "Mirny Station", "Casey Station"], "answer": ["McMurdo Station", "Rothera Research Station", "Mirny Station", "Casey Station"] },
                { "question": "Which of the following features are characteristic of Antarctica?", "type": "checkbox", "options": ["Cold temperatures", "Ice-covered terrain", "Tropical forests", "Deserts"], "answer": ["Cold temperatures", "Ice-covered terrain"] },
                { "question": "Which statements about Antarctica are true?", "type": "checkbox", "options": ["It is the driest continent", "It is the only continent without a native human population", "It is owned by several countries", "It contains 70% of the world’s fresh water"], "answer": ["It is the driest continent", "It is the only continent without a native human population", "It contains 70% of the world’s fresh water"] },
                { "question": "Which of these species are classified as seals?", "type": "checkbox", "options": ["Leopard Seal", "Weddell Seal", "Orca", "Penguin"], "answer": ["Leopard Seal", "Weddell Seal"] },
                { "question": "Select all true statements about Antarctic wildlife:", "type": "checkbox", "options": ["Penguins are flightless birds", "Leopard seals primarily feed on krill", "Blue whales migrate to Antarctic waters", "Orcas hunt in packs"], "answer": ["Penguins are flightless birds", "Blue whales migrate to Antarctic waters", "Orcas hunt in packs"] },
                { "question": "Identify the locations that are research stations in Antarctica:", "type": "checkbox", "options": ["Scott Base", "Concordia Station", "Mirny Station", "Port Lockroy"], "answer": ["Scott Base", "Concordia Station", "Mirny Station"] },
            
            

    
                    { "question": "The largest penguin species is the ____ penguin.", "type": "fillblank", "answer": "Emperor" },
                    { "question": "Antarctica's active volcano, Mount ____, is located on Ross Island.", "type": "fillblank", "answer": "Erebus" },
                    { "question": "The ____ Treaty governs the international status of Antarctica.", "type": "fillblank", "answer": "Antarctic" },
                    { "question": "The South Pole is located on the continent of ____.", "type": "fillblank", "answer": "Antarctica" },
                    { "question": "The ____ Ice Shelf is the largest in Antarctica.", "type": "fillblank", "answer": "Ross" },
                    { "question": "____ seals are known for their deep dives under the ice in search of fish.", "type": "fillblank", "answer": "Weddell" },
                    { "question": "The Antarctic ice sheet contains about ____% of the world's fresh water.", "type": "fillblank", "answer": "70" },
                    { "question": "The ____ Whale is the largest animal to have ever existed.", "type": "fillblank", "answer": "Blue" },
                    { "question": "The ____ Pole experiences six months of daylight and six months of darkness.", "type": "fillblank", "answer": "South" },
                    { "question": "Emperor penguins trek across the ice during the harsh Antarctic ____. ", "type": "fillblank", "answer": "winter" },
                    { "question": "The continent of Antarctica is covered almost entirely by ____. ", "type": "fillblank", "answer": "ice" },
                    { "question": "The ____ albatross has the largest wingspan of any bird.", "type": "fillblank", "answer": "wandering" },
                    { "question": "Orca whales are also known as ____ whales.", "type": "fillblank", "answer": "killer" },
                    { "question": "The ____ Pole is marked by a ceremonial pole surrounded by flags.", "type": "fillblank", "answer": "South" },
                    { "question": "The ____ Shelf is critical for understanding ice dynamics and sea-level rise.", "type": "fillblank", "answer": "Ross Ice" },
                    { "question": "Weddell seals can hold their breath for up to ____ minutes.", "type": "fillblank", "answer": "80" },
                    { "question": "The Antarctic Treaty was signed in the year ____. ", "type": "fillblank", "answer": "1959" },
                    { "question": "The ____ continent is known for its extreme cold and ice-covered terrain.", "type": "fillblank", "answer": "Antarctic" },
                    { "question": "The ____ penguin is known for building nests out of stones.", "type": "fillblank", "answer": "Adelie" },
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
                      }
                      


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
}

function restartQuiz() {
    document.getElementById('results').style.display = 'none';
    document.getElementById('instructions').style.display = 'block';
}
