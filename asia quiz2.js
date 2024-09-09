const questions=[
 // True or False Questions

    { question: "The capital city of Japan is Tokyo.", type: "truefalse", answer: true },
    { question: "Kyoto is famous for the Fushimi Inari Shrine with thousands of vermilion torii gates.", type: "truefalse", answer: true },
    { question: "Osaka Castle is located in Kyoto.", type: "truefalse", answer: false },
    { question: "Sapporo is the largest city on the island of Honshu.", type: "truefalse", answer: false },
    { question: "Hanami is a traditional Japanese festival that celebrates cherry blossoms.", type: "truefalse", answer: true },
    { question: "Japan's main islands include Honshu, Kyushu, Shikoku, and Hokkaido.", type: "truefalse", answer: true },
    { question: "Akira Kurosawa is a famous Japanese filmmaker.", type: "truefalse", answer: true },
    { question: "The Shinkansen is known for its slow speeds and inefficiency.", type: "truefalse", answer: false },
  
  // Fill in the Blank Questions
  
    { question: "The capital city of Japan is ____. ", type: "fillblank", answer: "Tokyo" },
    { question: "The main physical feature of Osaka is ____. ", type: "fillblank", answer: "Osaka Castle" },
    { question: "The traditional Japanese festival celebrating cherry blossoms is ____. ", type: "fillblank", answer: "Hanami" },
    { question: "The largest city on the island of Hokkaido is ____. ", type: "fillblank", answer: "Sapporo" },
    { question: "Japan's Shinkansen is famous for its ____ speeds.", type: "fillblank", answer: "fast" },
  
  
  // Multiple Choice Questions
  
    { question: "Which city in Japan is known for the Fushimi Inari Shrine?", type: "multiple", options: ["Tokyo", "Kyoto", "Osaka", "Sapporo"], answer: "Kyoto" },
    { question: "What is the main physical feature of Hokkaido?", type: "multiple", options: ["Tokyo Tower", "Dotonbori", "Sapporo", "Khao Sok National Park"], answer: "Sapporo" },
    { question: "Which city is known for the traditional streets of Gion?", type: "multiple", options: ["Kyoto", "Osaka", "Sapporo", "Tokyo"], answer: "Kyoto" },
    { question: "What is the famous Japanese bullet train called?", type: "multiple", options: ["Shinkansen", "Subway", "Express", "Tram"], answer: "Shinkansen" },
    { question: "Which city is known for Shibuya Crossing?", type: "multiple", options: ["Tokyo", "Kyoto", "Osaka", "Sapporo"], answer: "Tokyo" },
  
  
  // Checkbox Questions
  
    { question: "Which of the following cities are located in Japan?", type: "checkbox", options: ["Tokyo", "Busan", "Kyoto", "Sapporo"], answer: ["Tokyo", "Kyoto", "Sapporo"] },
    { question: "Select the main islands of Japan:", type: "checkbox", options: ["Honshu", "Kyushu", "Shikoku", "Taiwan"], answer: ["Honshu", "Kyushu", "Shikoku"] },
    { question: "Which of the following are famous landmarks in Japan?", type: "checkbox", options: ["Fushimi Inari Shrine", "Great Wall of China", "Tokyo Tower", "Mount Fuji"], answer: ["Fushimi Inari Shrine", "Tokyo Tower", "Mount Fuji"] },
 
  // True or False Questions
  
    { question: "The capital city of South Korea is Seoul.", type: "truefalse", answer: true },
    { question: "Busan is known for Haeundae Beach.", type: "truefalse", answer: true },
    { question: "Incheon Bridge connects Seoul to Yeongjong Island.", type: "truefalse", answer: false },
    { question: "BTS is a famous South Korean music group.", type: "truefalse", answer: true },
    { question: "Kimchi is a traditional Korean dish made from fermented fish.", type: "truefalse", answer: false },
    { question: "The Korean DMZ is the most heavily guarded border in the world.", type: "truefalse", answer: true },
    { question: "Gyeonggi-do is known for its skyscrapers and modern architecture.", type: "truefalse", answer: false },
  
  
  // Fill in the Blank Questions
  
    { question: "The capital city of South Korea is ____. ", type: "fillblank", answer: "Seoul" },
    { question: "The beach known for its white sand and festivals in South Korea is ____. ", type: "fillblank", answer: "Haeundae Beach" },
    { question: "Incheon Bridge connects Incheon to ____ Island.", type: "fillblank", answer: "Yeongjong" },
    { question: "The famous South Korean music group is ____. ", type: "fillblank", answer: "BTS" },
    { question: "Kimchi is a traditional Korean dish made from ____ vegetables.", type: "fillblank", answer: "fermented" },
  
  
  // Multiple Choice Questions
  
    { question: "Which city in South Korea is known for its Haeundae Beach?", type: "multiple", options: ["Seoul", "Busan", "Incheon", "Gyeonggi"], answer: "Busan" },
    { question: "What is the main feature of Incheon?", type: "multiple", options: ["N Seoul Tower", "Incheon Bridge", "Haeundae Beach", "Songdo International Business District"], answer: "Incheon Bridge" },
    { question: "Which district in Seoul is known for trendy shopping and COEX Mall?", type: "multiple", options: ["Gangnam", "Itaewon", "Hongdae", "Myeongdong"], answer: "Gangnam" },
    { question: "Which South Korean city is famous for its modern architecture and business district?", type: "multiple", options: ["Seoul", "Incheon", "Busan", "Gyeonggi"], answer: "Incheon" },
    { question: "What is the most famous Korean traditional dish made from fermented vegetables?", type: "multiple", options: ["Kimchi", "Bulgogi", "Bibimbap", "Tteokbokki"], answer: "Kimchi" },
  
  
  // Checkbox Questions
  
    { question: "Which of the following cities are located in South Korea?", type: "checkbox", options: ["Seoul", "Busan", "Tokyo", "Kyoto"], answer: ["Seoul", "Busan"] },
    { question: "Select the famous landmarks in South Korea:", type: "checkbox", options: ["N Seoul Tower", "Gyeongbokgung Palace", "Great Wall of China", "Haeundae Beach"], answer: ["N Seoul Tower", "Gyeongbokgung Palace", "Haeundae Beach"] },
    { question: "Which of these are traditional Korean festivals?", type: "checkbox", options: ["Chuseok", "Songkran", "Loy Krathong", "Seollal"], answer: ["Chuseok", "Seollal"] },
  
  
  // True or False Questions
  
    { question: "The capital city of Thailand is Bangkok.", type: "truefalse", answer: true },
    { question: "Phuket is known for its beautiful sandy beaches and nightlife.", type: "truefalse", answer: true },
    { question: "Chiang Mai is famous for its modern skyscrapers.", type: "truefalse", answer: false },
    { question: "The Grand Palace is a famous landmark in Bangkok.", type: "truefalse", answer: true },
    { question: "Surat Thani is known for its tropical beaches.", type: "truefalse", answer: false },
    { question: "Thailand has been colonized by European powers.", type: "truefalse", answer: false },
    { question: "The world's smallest mammal, the bumblebee bat, can be found in Thailand.", type: "truefalse", answer: true },
  
  
  // Fill in the Blank Questions
  
    { question: "The capital city of Thailand is ____. ", type: "fillblank", answer: "Bangkok" },
    { question: "The famous mountain overlooking Chiang Mai is ____. ", type: "fillblank", answer: "Doi Suthep" },
    { question: "The stunning bay known for its limestone karsts in Thailand is ____. ", type: "fillblank", answer: "Phang Nga Bay" },
    { question: "The festival known for its water fights and celebration of Thai New Year is ____. ", type: "fillblank", answer: "Songkran" },
    { question: "Thailand has more than ____ islands.", type: "fillblank", answer: "1400" },
  
  
  // Multiple Choice Questions
  
    { question: "Which city in Thailand is famous for the Grand Palace?", type: "multiple", options: ["Bangkok", "Chiang Mai", "Phuket", "Surat Thani"], answer: "Bangkok" },
    { question: "What is the main feature of Phuket?", type: "multiple", options: ["Patong Beach", "Doi Suthep", "Khao Sok National Park", "Surat Thani City"], answer: "Patong Beach" },
    { question: "Which mountain overlooks Chiang Mai?", type: "multiple", options: ["Mount Everest", "Doi Suthep", "Phanom Rung", "Khao Sok"], answer: "Doi Suthep" },
    { question: "Which festival is known for water fights and celebrating Thai New Year?", type: "multiple", options: ["Loy Krathong", "Songkran", "Yi Peng", "King's Day"], answer: "Songkran" },
    { question: "Which city is known for its vibrant nightlife and sandy beaches?", type: "multiple", options: ["Chiang Mai", "Surat Thani", "Patong Beach", "Bangkok"], answer: "Patong Beach" },
  
  
  // Checkbox Questions
  
    { question: "Which of the following cities are in Thailand?", type: "checkbox", options: ["Bangkok", "Chiang Mai", "Surat Thani", "Busan"], answer: ["Bangkok", "Chiang Mai", "Surat Thani"] },
    { question: "Select the famous landmarks in Thailand:", type: "checkbox", options: ["Grand Palace", "Phang Nga Bay", "Mount Fuji", "Patong Beach"], answer: ["Grand Palace", "Phang Nga Bay", "Patong Beach"] },
    { question: "Which festivals are celebrated in Thailand?", type: "checkbox", options: ["Songkran", "Loy Krathong", "Chuseok", "Seollal"], answer: ["Songkran", "Loy Krathong"] },
  
    {
        question: "Which country's flag is shown below? <br><img src='flag-of-china.jpeg' alt='Flag of China'>", 
        type: "multiple", 
        options: ["China", "Japan", "South Korea", "Vietnam"], 
        answer: "China"
    },
    {
        question: "Which country's flag is shown below? <br><img src='flag-of-japan.jpeg' alt='Flag of Japan'>", 
        type: "multiple", 
        options: ["Japan", "South Korea", "China", "Thailand"], 
        answer: "Japan"
    },
    {
        question: "Which country's flag is shown below? <br><img src='flag-of-india.jpeg' alt='Flag of India'>", 
        type: "multiple", 
        options: ["India", "Pakistan", "Bangladesh", "Sri Lanka"], 
        answer: "India"
    },
    {
        question: "Which country's flag is shown below? <br><img src='flag-of-south-korea.jpeg' alt='Flag of South Korea'>", 
        type: "multiple", 
        options: ["South Korea", "North Korea", "Japan", "China"], 
        answer: "South Korea"
    },
    {
        question: "Which country's flag is shown below? <br><img src='flag-of-vietnam.jpeg' alt='Flag of Vietnam'>", 
        type: "multiple", 
        options: ["Vietnam", "Laos", "Cambodia", "Thailand"], 
        answer: "Vietnam"
    },
    {
        question: "Which country's flag is shown below? <br><img src='flag-of-thailand.jpeg' alt='Flag of Thailand'>", 
        type: "multiple", 
        options: ["Thailand", "Malaysia", "Singapore", "Indonesia"], 
        answer: "Thailand"
    },
    {
        question: "Which country's flag is shown below? <br><img src='flag-of-malaysia.jpeg' alt='Flag of Malaysia'>", 
        type: "multiple", 
        options: ["Malaysia", "Indonesia", "Philippines", "Brunei"], 
        answer: "Malaysia"
    },
    {
        question: "Which country's flag is shown below? <br><img src='flag-of-philippines.jpeg' alt='Flag of Philippines'>", 
        type: "multiple", 
        options: ["Philippines", "Thailand", "Malaysia", "Vietnam"], 
        answer: "Philippines"
    },
    {
        question: "Which country's flag is shown below? <br><img src='flag-of-indonesia.jpeg' alt='Flag of Indonesia'>", 
        type: "multiple", 
        options: ["Indonesia", "Malaysia", "Singapore", "Brunei"], 
        answer: "Indonesia"
    },
    {
        question: "Which country's flag is shown below? <br><img src='flag-of-pakistan.jpeg' alt='Flag of Pakistan'>", 
        type: "multiple", 
        options: ["Pakistan", "India", "Bangladesh", "Afghanistan"], 
        answer: "Pakistan"
    },
    {
        question: "Which country's flag is shown below? <br><img src='flag-of-bangladesh.jpeg' alt='Flag of Bangladesh'>", 
        type: "multiple", 
        options: ["Bangladesh", "India", "Pakistan", "Sri Lanka"], 
        answer: "Bangladesh"
    },
    {
        question: "Which country's flag is shown below? <br><img src='flag-of-sri-lanka.jpeg' alt='Flag of Sri Lanka'>", 
        type: "multiple", 
        options: ["Sri Lanka", "India", "Bangladesh", "Pakistan"], 
        answer: "Sri Lanka"
    },

    // Additional countries
    {
        question: "Which country's flag is shown below? <br><img src='flag-of-nepal.jpeg' alt='Flag of Nepal'>", 
        type: "multiple", 
        options: ["Nepal", "Bhutan", "India", "Bangladesh"], 
        answer: "Nepal"
    },
    {
        question: "Which country's flag is shown below? <br><img src='flag-of-bhutan.jpeg' alt='Flag of Bhutan'>", 
        type: "multiple", 
        options: ["Bhutan", "Nepal", "Sri Lanka", "India"], 
        answer: "Bhutan"
    },
    {
        question: "Which country's flag is shown below? <br><img src='flag-of-afghanistan.jpeg' alt='Flag of Afghanistan'>", 
        type: "multiple", 
        options: ["Afghanistan", "Pakistan", "Iran", "Tajikistan"], 
        answer: "Afghanistan"
    },
    {
        question: "Which country's flag is shown below? <br><img src='flag-of-mongolia.jpeg' alt='Flag of Mongolia'>", 
        type: "multiple", 
        options: ["Mongolia", "China", "Kazakhstan", "Russia"], 
        answer: "Mongolia"
    },
    {
        question: "Which country's flag is shown below? <br><img src='flag-of-north-korea.jpeg' alt='Flag of North Korea'>", 
        type: "multiple", 
        options: ["North Korea", "South Korea", "China", "Japan"], 
        answer: "North Korea"
    },
    {
        question: "Which country's flag is shown below? <br><img src='flag-of-myanmar.jpeg' alt='Flag of Myanmar'>", 
        type: "multiple", 
        options: ["Myanmar", "Thailand", "Vietnam", "Cambodia"], 
        answer: "Myanmar"
    },
    {
        question: "Which country's flag is shown below? <br><img src='flag-of-laos.jpeg' alt='Flag of Laos'>", 
        type: "multiple", 
        options: ["Laos", "Vietnam", "Thailand", "Cambodia"], 
        answer: "Laos"
    },
    {
        question: "Which country's flag is shown below? <br><img src='flag-of-cambodia.jpeg' alt='Flag of Cambodia'>", 
        type: "multiple", 
        options: ["Cambodia", "Laos", "Vietnam", "Thailand"], 
        answer: "Cambodia"
    },
    {
        question: "Which country's flag is shown below? <br><img src='flag-of-brunei.jpeg' alt='Flag of Brunei'>", 
        type: "multiple", 
        options: ["Brunei", "Malaysia", "Indonesia", "Singapore"], 
        answer: "Brunei"
    },
    {
        question: "Which country's flag is shown below? <br><img src='flag-of-singapore.jpeg' alt='Flag of Singapore'>", 
        type: "multiple", 
        options: ["Singapore", "Malaysia", "Indonesia", "Thailand"], 
        answer: "Singapore"
    },
    {
        question: "Which country's flag is shown below? <br><img src='flag-of-kazakhstan.jpeg' alt='Flag of Kazakhstan'>", 
        type: "multiple", 
        options: ["Kazakhstan", "Uzbekistan", "Kyrgyzstan", "Tajikistan"], 
        answer: "Kazakhstan"
    },
    {
        question: "Which country's flag is shown below? <br><img src='flag-of-uzbekistan.jpeg' alt='Flag of Uzbekistan'>", 
        type: "multiple", 
        options: ["Uzbekistan", "Kazakhstan", "Kyrgyzstan", "Tajikistan"], 
        answer: "Uzbekistan"
    },
    {
        question: "Which country's flag is shown below? <br><img src='flag-of-turkmenistan.jpeg' alt='Flag of Turkmenistan'>", 
        type: "multiple", 
        options: ["Turkmenistan", "Uzbekistan", "Kazakhstan", "Kyrgyzstan"], 
        answer: "Turkmenistan"
    },
    {
        question: "Which country's flag is shown below? <br><img src='flag-of-kyrgyzstan.jpeg' alt='Flag of Kyrgyzstan'>", 
        type: "multiple", 
        options: ["Kyrgyzstan", "Kazakhstan", "Uzbekistan", "Tajikistan"], 
        answer: "Kyrgyzstan"
    },
    {
        question: "Which country's flag is shown below? <br><img src='flag-of-tajikistan.jpeg' alt='Flag of Tajikistan'>", 
        type: "multiple", 
        options: ["Tajikistan", "Uzbekistan", "Kyrgyzstan", "Turkmenistan"], 
        answer: "Tajikistan"
    },
    {
        question: "Which country's flag is shown below? <br><img src='flag-of-armenia.jpeg' alt='Flag of Armenia'>", 
        type: "multiple", 
        options: ["Armenia", "Azerbaijan", "Georgia", "Turkey"], 
        answer: "Armenia"
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
}

function restartQuiz() {
    document.getElementById('results').style.display = 'none';
    document.getElementById('instructions').style.display = 'block';
}


