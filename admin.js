// ====================
// USER MANAGEMENT
// ====================
let users = [];
const userList = document.getElementById("userList");
const totalUsers = document.getElementById("totalUsers");

function approveUser() {
    const username = document.getElementById("newUser").value;
    if (!username) return;

    users.push(username);

    const userDiv = document.createElement("div");
    userDiv.textContent = `✅ ${username} approved`;
    userList.appendChild(userDiv);

    totalUsers.textContent = users.length;

    document.getElementById("newUser").value = "";
}


// ====================
// PROJECT MODERATION
// ====================
let projects = [];
const approvedProjects = document.getElementById("approvedProjects");
const totalProjects = document.getElementById("totalProjects");

function approveProject() {
    const project = document.getElementById("projectModeration").value;
    if (!project) return;

    projects.push(project);

    const projDiv = document.createElement("div");
    projDiv.textContent = `✅ Approved: ${project}`;
    approvedProjects.appendChild(projDiv);

    totalProjects.textContent = projects.length;

    document.getElementById("projectModeration").value = "";
}


// ====================
// EVENT MANAGEMENT
// ====================
let events = [];
const eventList = document.getElementById("eventList");
const activeEvents = document.getElementById("activeEvents");

function createEvent() {
    const name = document.getElementById("eventName").value;
    const date = document.getElementById("eventDate").value;
    if (!name || !date) return;

    events.push({ name, date });

    const li = document.createElement("li");
    li.textContent = `${name} - ${date}`;
    eventList.appendChild(li);

    activeEvents.textContent = events.length;

    document.getElementById("eventName").value = "";
    document.getElementById("eventDate").value = "";
}


// ====================
// CONTENT UPDATES
// ====================
const contentList = document.getElementById("contentList");

function addContent() {
    const title = document.getElementById("newModuleTitle").value;
    const content = document.getElementById("newModuleContent").value;

    if (!title || !content) return;

    const div = document.createElement("div");
    div.innerHTML = `<strong>${title}</strong><p>${content}</p>`;

    contentList.appendChild(div);

    document.getElementById("newModuleTitle").value = "";
    document.getElementById("newModuleContent").value = "";
}
