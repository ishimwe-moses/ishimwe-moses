const questions = [
    // True or False Questions
    { question: "Africa is the second-largest continent on Earth.", type: "truefalse", answer: true },
    { question: "Lake Victoria is the largest lake in the world.", type: "truefalse", answer: false },
    { question: "Mount Kilimanjaro is in Kenya.", type: "truefalse", answer: false },
    { question: "The Sahara Desert is the world's largest desert.", type: "truefalse", answer: true },
    { question: "Africa has over 2,000 languages.", type: "truefalse", answer: true },
    { question: "Lucy, an old human fossil, was found in West Africa.", type: "truefalse", answer: false },
    { question: "The Congo Rainforest is the largest tropical rainforest.", type: "truefalse", answer: false },
    { question: "The Nile River is the longest river in the world.", type: "truefalse", answer: true },
    { question: "South Sudan is the newest country in East Africa.", type: "truefalse", answer: true },
    { question: "Africa is home to over 1.3 billion people.", type: "truefalse", answer: true },
    // Add more true/false questions...
    {
        question: "Which country's flag is shown below? <br><img src='flag-of-burundi.jpeg' alt='Flag of Burundi'>", type: "multiple", options: ["Rwanda", "Burundi", "Uganda","kenya"], answer: "Burundi"
    },
   
    // Fill in the Blank Questions
    { question: "The Sahara Desert is the world's largest ____ desert.", type: "fillblank", answer: "hot" },
    { question: "The longest river in the world is the ____ River.", type: "fillblank", answer: "Nile" },
    { question: "Mount Kilimanjaro is located in ____.", type: "fillblank", answer: "Tanzania" },
    { question: "The largest lake in Africa is Lake ____.", type: "fillblank", answer: "Victoria" },
    { question: "The Congo Rainforest is the second-largest tropical ____.", type: "fillblank", answer: "rainforest" },
    { question: "Africa is surrounded by the Mediterranean Sea, Red Sea, Indian Ocean, and ____ Ocean.", type: "fillblank", answer: "Atlantic" },
    
    // Add more fill-in-the-blank questions...

    // Multiple Choice Questions
    { question: "What is the largest lake in Africa?", type: "multiple", options: ["Lake Tanganyika", "Lake Victoria","Lake Kivu", "Lake Malawi"], answer: "Lake Victoria" },
    { question: "Which country is not in East Africa?", type: "multiple", options: ["Kenya", "Nigeria", "Uganda","Uganda"], answer: "Nigeria" },
    { question: "The longest river in the world is:", type: "multiple", options: ["Amazon River", "Nile River", "Yangtze River","Akagera River"], answer: "Nile River" },
    { question: "Which mountain is the highest in Africa?", type: "multiple", options: ["Mount Kenya", "Mount Kilimanjaro", "Mount Elgon", "Mount Evariste"], answer: "Mount Kilimanjaro" },
    { question: "The Sahara Desert is located in which part of Africa?", type: "multiple", options: ["North", "South", "East","central-east"], answer: "North" },
    { question: "Which country is famous for the Serengeti National Park?", type: "multiple", options: ["Kenya", "Tanzania", "Uganda","Rwanda"], answer: "Tanzania" },
    { question: "Which is the most spoken language in East Africa?", type: "multiple", options: ["English", "Swahili", "French","Zulu"], answer: "Swahili" },
    { question: "What is the capital city of Ethiopia?", type: "multiple", options: ["Addis Ababa", "Asmara", "Kigali","Gitega"], answer: "Addis Ababa" },
    { question: "The Great Rift Valley runs through which region of Africa?", type: "multiple", options: ["West Africa", "East Africa", "North Africa","South Africa"], answer: "East Africa" },
    { question: "Nelson Mandela was the president of which country?", type: "multiple", options: ["Kenya", "Nigeria", "South Africa","Rwanda"], answer: "South Africa" },
    // Add more multiple choice questions...
    {
        question: "Which country's flag is shown below? <br><img src='flag-of-somalia.jpeg' alt='Flag of Somalia'>", type: "multiple", options: ["Somalia", "Djibouti", "Kenya","rwanda"], answer: "Somalia"
    },
    {
        question: "Which country's flag is shown below? <br><img src='flag-of-djibouti.jpeg' alt='Flag of Djibouti'>", type: "multiple", options: ["Somalia", "Djibouti", "Eritrea","Tanzania"], answer: "Djibouti"
    },
    
    // Checkbox Questions
    { question: "Which countries are in East Africa?", type: "checkbox", options: ["Kenya", "Nigeria", "Uganda", "Tanzania"], answer: ["Kenya", "Uganda", "Tanzania",] },
    { question: "Select the major rivers in Africa:", type: "checkbox", options: ["Nile", "Amazon", "Congo", "Mississippi"], answer: ["Nile", "Congo"] },
    { question: "Which are the major mountain ranges in Africa?", type: "checkbox", options: ["Atlas Mountains", "Rocky Mountains", "Drakensberg Mountains","Virunga Mountains"], answer: ["Atlas Mountains", "Drakensberg Mountains"] },
    { question: "Which countries share Lake Victoria?", type: "checkbox", options: ["Kenya", "Uganda", "Tanzania", "Rwanda"], answer: ["Kenya", "Uganda", "Tanzania"] },
    { question: "Which natural resources are found in Africa?", type: "checkbox", options: ["Gold", "Oil", "Diamond", "Coal"], answer: ["Gold", "Oil", "Diamond"] },
    { question: "Select the famous parks in East Africa:", type: "checkbox", options: ["Serengeti", "Yellowstone", "Maasai Mara", "Kruger"], answer: ["Serengeti", "Maasai Mara"] },
    { question: "Which bodies of water surround Africa?", type: "checkbox", options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Mediterranean Sea"], answer: ["Atlantic Ocean", "Indian Ocean", "Mediterranean Sea"] },
    { question: "Which languages are widely spoken in East Africa?", type: "checkbox", options: ["Swahili", "Arabic", "Zulu", "Amharic"], answer: ["Swahili", "Amharic"] },
    { question: "Select the countries in East Africa:", type: "checkbox", options: ["Ethiopia", "South Africa", "Burundi", "Djibouti"], answer: ["Ethiopia", "Burundi", "Djibouti"] },
    { question: "Which of these animals are native to Africa?", type: "checkbox", options: ["Elephant", "Lion", "Kangaroo", "Giraffe"], answer: ["Elephant", "Lion", "Giraffe"] },
    // Add more checkbox questions...
   
        // True or False Questions
        { question: "The island of Madagascar is part of East Africa.", type: "truefalse", answer: true },
        { question: "Mount Kilimanjaro is the highest peak in Africa.", type: "truefalse", answer: true },
        { question: "Lake Victoria is shared by three countries in East Africa.", type: "truefalse", answer: true },
        { question: "Ethiopia is the only African country never to be colonized.", type: "truefalse", answer: false },
        { question: "The Great Rift Valley runs through West Africa.", type: "truefalse", answer: false },
    
        // Fill in the Blank Questions
        { question: "The capital city of Rwanda is ____.", type: "fillblank", answer: "Kigali" },
        { question: "The official language of Ethiopia is ____.", type: "fillblank", answer: "Amharic" },
        { question: "The main export of Uganda is ____.", type: "fillblank", answer: "coffee" },
        { question: "The tallest waterfall in East Africa is ____ Falls.", type: "fillblank", answer: "Victoria" },
        { question: "The country with the flag that has a star in the center is ____.", type: "fillblank", answer: "Somalia" },
    
        // Multiple Choice Questions
        {    question: "Which of these countries has a flag with the colors green, yellow, and red?", type: "multiple",options: ["Kenya", "Ethiopia", "Tanzania", "Rwanda"], answer: "Ethiopia" },
        { 
            question: "Which East African country is known for its annual migration of wildebeest?", 
            type: "multiple", 
            options: ["Tanzania", "Kenya", "Uganda", "Rwanda"], 
            answer: "Tanzania" 
        },
        { 
            question: "The currency of Kenya is called the:", 
            type: "multiple", 
            options: ["Shilling", "Rupee", "Dollar", "Euro"], 
            answer: "Shilling" 
        },
        { 
            question: "Which country in East Africa has no coastline?", 
            type: "multiple", 
            options: ["Ethiopia", "Tanzania", "Kenya", "Somalia"], 
            answer: "Ethiopia" 
        },
        { 
            question: "Which East African country is known for the source of the Nile River?", 
            type: "multiple", 
            options: ["Uganda", "Tanzania", "Kenya", "Rwanda"], 
            answer: "Uganda" 
        },
        {
            question: "Which country's flag is shown below? <br><img src='flag-of-south-sudan.jpeg' alt='Flag of South Sudan'>", type: "multiple", options: ["South Sudan", "Sudan", "Ethiopia", "Mozambique"], answer: "South Sudan"
        },
        {
            question: "Which country's flag is shown below? <br><img src='flag-of-eritrea.jpeg' alt='Flag of Eritrea'>", type: "multiple", options: ["Eritrea", "Ethiopia", "Djibouti","Quatar"], answer: "Eritrea"
        },
    
        // Checkbox Questions
        { 
            question: "Which of the following are East African countries?", 
            type: "checkbox", 
            options: ["Eritrea", "Burundi", "Zambia", "Tanzania"], 
            answer: ["Burundi", "Tanzania"] 
        },
        { 
            question: "Select the countries that have national parks known for safaris:", 
            type: "checkbox", 
            options: ["Kenya", "Madagascar", "Tanzania", "Somalia"], 
            answer: ["Kenya", "Tanzania"] 
        },
        { 
            question: "Which of these countries are landlocked?", 
            type: "checkbox", 
            options: ["Rwanda", "Kenya", "Uganda", "Somalia"], 
            answer: ["Rwanda", "Uganda"] 
        },
        { 
            question: "Select the East African countries with a significant Muslim population:", 
            type: "checkbox", 
            options: ["Somalia", "Tanzania", "Rwanda", "Kenya"], 
            answer: ["Somalia", "Tanzania", "Kenya"] 
        },
        { 
            question: "Which countries are known for producing coffee?", 
            type: "checkbox", 
            options: ["Ethiopia", "Uganda", "Botswana", "Sudan"], 
            answer: ["Ethiopia", "Uganda"] 
        },
       
       
        { question: "Nelson Mandela was a key figure in ending ____ in South Africa.", type: "fillblank", answer: "apartheid" },
    { question: "The Great Rift Valley runs from Lebanon to ____.", type: "fillblank", answer: "Mozambique" },
    { question: "Kenya's capital city is ____.", type: "fillblank", answer: "Nairobi" },
    { question: "The highest mountain in Africa is Mount ____.", type: "fillblank", answer: "Kilimanjaro" },
      
        {
            question: "Which country's flag is shown below? <br><img src='flag-of-rwanda.jpeg' alt='Flag of Rwanda'>", type: "multiple", options: ["Rwanda", "Burundi", "Uganda","Kenya"], answer: "Rwanda"
        },
        
        // True or False Questions
{ question: "Mount Kilimanjaro is located in Kenya.", type: "truefalse", answer: false },
{ question: "The Great Rift Valley runs through East Africa.", type: "truefalse", answer: true },
{ question: "Uganda is known for its mountain gorillas.", type: "truefalse", answer: true },
{ question: "Nairobi is the capital of Tanzania.", type: "truefalse", answer: false },
{ question: "Lake Victoria is shared by Kenya, Uganda, and Tanzania.", type: "truefalse", answer: true },

// Fill in the Blank Questions
{ question: "The highest mountain in Africa is Mount ____.", type: "fillblank", answer: "Kilimanjaro" },
{ question: "The capital city of Kenya is ____.", type: "fillblank", answer: "Nairobi" },
{ question: "The ____ National Park in Tanzania is known for the Great Migration.", type: "fillblank", answer: "Serengeti" },
{ question: "Lake ____ is the largest lake in Africa.", type: "fillblank", answer: "Victoria" },
{ question: "The capital of Uganda is ____.", type: "fillblank", answer: "Kampala" },

// Multiple Choice Questions
{ question: "What is the capital city of Tanzania?", type: "multiple", options: ["Nairobi", "Dodoma", "Dar es Salaam","Kigali"], answer: "Dodoma" },
{ question: "Which country is famous for the Maasai Mara National Reserve?", type: "multiple", options: ["Kenya", "Uganda", "Tanzania","Burundi"], answer: "Kenya" },
{ question: "The Great Rift Valley is a major geographical feature of which region?", type: "multiple", options: ["West Africa", "East Africa", "North Africa","Central Africa"], answer: "East Africa" },
{ question: "Which country is home to the source of the Nile River?", type: "multiple", options: ["Kenya", "Uganda", "Ethiopia"], answer: "Uganda" },
{ question: "Which language is widely spoken in East Africa?", type: "multiple", options: ["Swahili", "Arabic", "Amharic"], answer: "Swahili" },

// Checkbox Questions
{ question: "Which countries are in East Africa?", type: "checkbox", options: ["Kenya", "Uganda", "Tanzania", "Algeria"], answer: ["Kenya", "Uganda", "Tanzania"] },
{ question: "Select the major national parks in East Africa:", type: "checkbox", options: ["Serengeti", "Kruger", "Maasai Mara"], answer: ["Serengeti", "Maasai Mara"] },
{ question: "Which bodies of water are in East Africa?", type: "checkbox", options: ["Lake Victoria", "Lake Tanganyika", "Lake Malawi"], answer: ["Lake Victoria", "Lake Tanganyika", "Lake Malawi"] },
{ question: "Which countries share Lake Victoria?", type: "checkbox", options: ["Kenya", "Uganda", "Tanzania", "Ethiopia"], answer: ["Kenya", "Uganda", "Tanzania"] },
{ question: "Select the capital cities in East Africa:", type: "checkbox", options: ["Nairobi", "Kampala", "Dodoma"], answer: ["Nairobi", "Kampala", "Dodoma"] },

// Image-Based Questions

{ question: "Which country's flag is shown below? <br><img src='flag-of-uganda.jpeg' alt='Flag of Uganda'>", type: "multiple", options: ["Kenya", "Uganda", "Tanzania"], answer: "Uganda" },
{ question: "Which country's flag is shown below? <br><img src='flag-of-tanzania.jpeg' alt='Flag of Tanzania'>", type: "multiple", options: ["Kenya", "Uganda", "Tanzania"], answer: "Tanzania" },
{ question: "Which country's flag is shown below? <br><img src='flag-of-ethiopia.jpeg' alt='Flag of Ethiopia'>", type: "multiple", options: ["Kenya", "Uganda", "Ethiopia"], answer: "Ethiopia" },

];


let selectedQuestions = [];
let correctAnswers = 0;

function startTest() {
    selectedQuestions = questions.sort(() => 0.5 - Math.random()).slice(0, 20000);
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


