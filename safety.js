// ====================
// TEEN-ONLY ACCESS
// ====================
function verifyAge() {
    const age = parseInt(document.getElementById("userAge").value);
    const result = document.getElementById("ageResult");

    if (age >= 13 && age <= 19) {
        result.textContent = "✅ Access granted. Welcome to Teenova!";
        result.style.color = "lightgreen";
    } else {
        result.textContent = "❌ Access denied. You must be 13–19 years old.";
        result.style.color = "red";
    }
}

// ====================
// CONTENT MODERATION
// ====================
function checkContent() {
    const text = document.getElementById("userPost").value;
    const result = document.getElementById("moderationResult");

    const bannedWords = ["badword1","badword2","badword3"]; // example
    let containsBanned = false;

    bannedWords.forEach(word => {
        if(text.toLowerCase().includes(word)){
            containsBanned = true;
        }
    });

    if(containsBanned){
        result.textContent = "⚠ Post contains inappropriate content and was blocked.";
        result.style.color = "red";
    } else {
        result.textContent = "✅ Post submitted successfully!";
        result.style.color = "lightgreen";
    }
}

// ====================
// PRIVACY SETTINGS
// ====================
function savePrivacy() {
    const showPosts = document.getElementById("showPosts").checked;
    const showProjects = document.getElementById("showProjects").checked;
    const allowMessages = document.getElementById("allowMessages").checked;

    document.getElementById("privacyResult").textContent =
        `Privacy settings saved! 
        Show posts: ${showPosts}, Show projects: ${showProjects}, Allow messages: ${allowMessages}`;
}

// ====================
// REPORTING & BLOCKING
// ====================
function submitReport() {
    const username = document.getElementById("reportUser").value;
    const reason = document.getElementById("reportReason").value;
    const result = document.getElementById("reportResult");

    if(!username){
        result.textContent = "❌ Please enter a username.";
        result.style.color = "red";
        return;
    }

    result.textContent = `✅ Report submitted for user "${username}" for reason: ${reason}. Mentor will review.`;
    result.style.color = "lightgreen";
}
