// ====================
// VIRTUAL SCIENCE FAIR
// ====================

function submitProject() {
    let title = document.getElementById("projectTitle").value;
    let desc = document.getElementById("projectDesc").value;

    if (!title || !desc) return;

    let container = document.getElementById("projectContainer");

    let post = document.createElement("div");
    post.style.background = "rgba(0,0,0,0.6)";
    post.style.padding = "10px";
    post.style.marginTop = "10px";
    post.style.borderRadius = "8px";

    post.innerHTML = `<h3>${title}</h3><p>${desc}</p>`;

    container.appendChild(post);

    document.getElementById("projectTitle").value = "";
    document.getElementById("projectDesc").value = "";
}


// ====================
// HACKATHON / CODING CHALLENGE
// ====================

function submitChallenge() {
    let desc = document.getElementById("challengeSubmission").value;

    if (!desc) return;

    let container = document.getElementById("challengeContainer");

    let post = document.createElement("div");
    post.style.background = "rgba(0,0,0,0.6)";
    post.style.padding = "10px";
    post.style.marginTop = "10px";
    post.style.borderRadius = "8px";

    post.innerHTML = `<p>${desc}</p>`;

    container.appendChild(post);

    document.getElementById("challengeSubmission").value = "";
}


// ====================
// MISSION COMPLETION EVENTS
// ====================

let missionProgress = 0;

function completeMission() {
    if (missionProgress < 100) {
        missionProgress += 10;
        document.getElementById("missionProgress").innerText =
            "Progress: " + missionProgress + "%";
        alert("Mission contribution added! 🚀");
    } else {
        alert("Mission Completed! 🌟");
    }
}


// ====================
// SPACE TRIVIA NIGHT
// ====================

const triviaData = [
    { q: "Which planet is known as the Red Planet?", options: ["Mars","Venus","Jupiter"], answer: "Mars" },
    { q: "What galaxy do we live in?", options: ["Andromeda","Milky Way","Sombrero"], answer: "Milky Way" },
    { q: "Which planet has the most moons?", options: ["Jupiter","Saturn","Neptune"], answer: "Saturn" }
];

let triviaIndex = 0;
let triviaScore = 0;

function loadTrivia() {
    if(triviaIndex >= triviaData.length){
        document.getElementById("triviaQuestion").innerText = "Trivia Complete!";
        document.getElementById("triviaOptions").innerHTML = "";
        document.getElementById("triviaScore").innerText = "Score: " + triviaScore;
        return;
    }

    let q = triviaData[triviaIndex];
    document.getElementById("triviaQuestion").innerText = q.q;

    let optionsDiv = document.getElementById("triviaOptions");
    optionsDiv.innerHTML = "";

    q.options.forEach(opt => {
        let btn = document.createElement("button");
        btn.innerText = opt;
        btn.onclick = () => checkTrivia(opt);
        optionsDiv.appendChild(btn);
    });
}

function checkTrivia(selected){
    if(selected === triviaData[triviaIndex].answer) triviaScore += 10;
    triviaIndex++;
    loadTrivia();
}

loadTrivia();
