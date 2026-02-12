let currentRoom = "";

// OPEN ROOM
function openRoom(roomName) {
    currentRoom = roomName;
    document.getElementById("roomSection").classList.remove("hidden");
    document.getElementById("roomTitle").innerText = roomName;
    loadIdeas();
}

// IDEA SUBMISSION + VOTING
function submitIdea() {
    let ideaText = document.getElementById("ideaInput").value;
    if (!ideaText) return;

    let ideas = JSON.parse(localStorage.getItem(currentRoom)) || [];
    ideas.push({ text: ideaText, votes: 0 });

    localStorage.setItem(currentRoom, JSON.stringify(ideas));
    document.getElementById("ideaInput").value = "";
    loadIdeas();
}

function loadIdeas() {
    let ideas = JSON.parse(localStorage.getItem(currentRoom)) || [];
    let list = document.getElementById("ideaList");
    list.innerHTML = "";

    ideas.forEach((idea, index) => {
        let li = document.createElement("li");
        li.innerHTML = `
            ${idea.text} 
            <button onclick="voteIdea(${index})">👍 ${idea.votes}</button>
        `;
        list.appendChild(li);
    });
}

function voteIdea(index) {
    let ideas = JSON.parse(localStorage.getItem(currentRoom));
    ideas[index].votes++;
    localStorage.setItem(currentRoom, JSON.stringify(ideas));
    loadIdeas();
}

// WHITEBOARD
let canvas = document.getElementById("whiteboard");
let ctx = canvas.getContext("2d");
let drawing = false;

canvas.addEventListener("mousedown", () => drawing = true);
canvas.addEventListener("mouseup", () => drawing = false);
canvas.addEventListener("mousemove", draw);

function draw(e) {
    if (!drawing) return;
    ctx.lineWidth = 2;
    ctx.lineCap = "round";
    ctx.strokeStyle = "black";

    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.offsetX, e.offsetY);
}

function clearBoard() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// TEAM PROJECTS
function addTeam() {
    let name = document.getElementById("teamName").value;
    let task = document.getElementById("taskInput").value;
    let deadline = document.getElementById("deadlineInput").value;

    let teams = JSON.parse(localStorage.getItem("teams")) || [];
    teams.push({ name, task, deadline });

    localStorage.setItem("teams", JSON.stringify(teams));
    loadTeams();
}

function loadTeams() {
    let teams = JSON.parse(localStorage.getItem("teams")) || [];
    let list = document.getElementById("teamList");
    list.innerHTML = "";

    teams.forEach(team => {
        let li = document.createElement("li");
        li.innerText = `${team.name} - Task: ${team.task} - Deadline: ${team.deadline}`;
        list.appendChild(li);
    });
}

loadTeams();

// PRIVATE NOTES
function savePrivate() {
    let notes = document.getElementById("privateNotes").value;
    localStorage.setItem("private_" + currentRoom, notes);
    document.getElementById("privateMsg").innerText = "Saved privately 🔒";
}
