// SPACE NEWS (STATIC DEMO)
const news = [
    "NASA discovers new exoplanet in habitable zone 🌍",
    "SpaceX launches next-generation Starship 🚀",
    "James Webb captures stunning galaxy images 🌌",
    "Scientists detect possible water on Mars 💧"
];

const newsFeed = document.getElementById("newsFeed");
news.forEach(item => {
    let p = document.createElement("p");
    p.innerText = item;
    newsFeed.appendChild(p);
});

// MINI MISSIONS
let missionPoints = 0;

function startMission(id) {
    const text = document.getElementById("missionText");
    const result = document.getElementById("missionResult");

    if (id === 1) {
        text.innerText = "Mission: Design a small satellite that can orbit Earth. What power source will you use?";
        result.innerText = "Mission Complete! +20 Points 🚀";
        missionPoints += 20;
    }

    if (id === 2) {
        text.innerText = "Mission: A wormhole connects Earth to Mars. How would you stabilize it?";
        result.innerText = "Mission Complete! +30 Points 🌌";
        missionPoints += 30;
    }
}

// ASK AN EXPERT
function submitQuestion() {
    let question = document.getElementById("questionInput").value;
    if (!question) return;

    let questions = JSON.parse(localStorage.getItem("questions")) || [];
    questions.push(question);

    localStorage.setItem("questions", JSON.stringify(questions));
    loadQuestions();
}

function loadQuestions() {
    let questions = JSON.parse(localStorage.getItem("questions")) || [];
    let list = document.getElementById("questionList");
    list.innerHTML = "";

    questions.forEach(q => {
        let li = document.createElement("li");
        li.innerText = "Q: " + q;
        list.appendChild(li);
    });
}

loadQuestions();

// QUIZ SYSTEM
const quizData = [
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: "Mars"
    },
    {
        question: "What galaxy do we live in?",
        options: ["Andromeda", "Milky Way", "Whirlpool", "Sombrero"],
        answer: "Milky Way"
    }
];

let currentQuiz = 0;
let score = 0;

function loadQuiz() {
    const q = quizData[currentQuiz];
    document.getElementById("quizQuestion").innerText = q.question;

    const optionsDiv = document.getElementById("quizOptions");
    optionsDiv.innerHTML = "";

    q.options.forEach(option => {
        let btn = document.createElement("button");
        btn.innerText = option;
        btn.onclick = () => checkAnswer(option);
        optionsDiv.appendChild(btn);
    });
}

function checkAnswer(selected) {
    if (selected === quizData[currentQuiz].answer) {
        score += 10;
    }

    currentQuiz++;

    if (currentQuiz < quizData.length) {
        loadQuiz();
    } else {
        document.getElementById("quizQuestion").innerText = "Quiz Complete!";
        document.getElementById("quizOptions").innerHTML = "";
        document.getElementById("quizScore").innerText = "Your Score: " + score;
    }
}

loadQuiz();
