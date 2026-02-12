// ====================
// DIRECT MESSAGING
// ====================

function sendMessage() {
    let input = document.getElementById("chatInput");
    let chatBox = document.getElementById("chatBox");

    if (input.value.trim() === "") return;

    let message = document.createElement("p");
    message.innerHTML = "👩‍🚀 You: " + input.value;

    chatBox.appendChild(message);
    input.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
}


// ====================
// FORUM SYSTEM
// ====================

function postDiscussion() {
    let title = document.getElementById("forumTitle").value;
    let content = document.getElementById("forumContent").value;

    if (!title || !content) return;

    let container = document.getElementById("forumContainer");

    let post = document.createElement("div");
    post.classList.add("post");

    post.innerHTML = `
        <h3>${title}</h3>
        <p>${content}</p>
        <div class="reactions">
            <button onclick="addReaction(this)">👍</button>
            <button onclick="addReaction(this)">🚀</button>
            <button onclick="addReaction(this)">🌟</button>
        </div>
        <div class="comment-box">
            <input type="text" placeholder="Add a comment..." 
            onkeydown="addComment(event, this)">
            <div class="comments"></div>
        </div>
    `;

    container.appendChild(post);

    document.getElementById("forumTitle").value = "";
    document.getElementById("forumContent").value = "";
}

function addReaction(button) {
    button.innerHTML += " +1";
}

function addComment(event, input) {
    if (event.key === "Enter" && input.value.trim() !== "") {
        let comment = document.createElement("p");
        comment.textContent = "💬 " + input.value;

        input.nextElementSibling.appendChild(comment);
        input.value = "";
    }
}


// ====================
// POLL SYSTEM
// ====================

let votes = {
    Mars: 0,
    Venus: 0,
    Europa: 0
};

function vote(option) {
    votes[option]++;
    document.getElementById("pollResults").innerHTML =
        `Mars: ${votes.Mars} | Venus: ${votes.Venus} | Europa: ${votes.Europa}`;
}


// ====================
// MENTOR FEEDBACK
// ====================

function requestFeedback() {
    let input = document.getElementById("mentorInput");
    let container = document.getElementById("mentorResponses");

    if (input.value.trim() === "") return;

    let response = document.createElement("div");
    response.innerHTML = `
        <p><strong>🧑‍🚀 Mentor:</strong> Great concept! 
        Try improving your propulsion efficiency and consider 
        energy sustainability for long-term missions.</p>
    `;

    container.appendChild(response);
    input.value = "";
}
