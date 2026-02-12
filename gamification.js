let user = JSON.parse(localStorage.getItem("novaUser")) || {
    points: 0,
    level: "Rookie Explorer",
    badges: [],
    avatar: "👨‍🚀"
};

function saveUser() {
    localStorage.setItem("novaUser", JSON.stringify(user));
    updateUI();
}

// UPDATE UI
function updateUI() {
    document.getElementById("points").innerText = user.points;
    document.getElementById("level").innerText = user.level;
    document.getElementById("avatarDisplay").innerText = user.avatar;

    // Update badges
    const badgeDiv = document.getElementById("badges");
    badgeDiv.innerHTML = "";
    user.badges.forEach(b => {
        let span = document.createElement("span");
        span.classList.add("badge");
        span.innerText = b;
        badgeDiv.appendChild(span);
    });

    updateLeaderboard();
}

// EARN POINTS
function earnPoints(amount) {
    user.points += amount;
    checkLevel();
    checkBadges();
    saveUser();
}

// LEVEL SYSTEM
function checkLevel() {
    if (user.points >= 200) {
        user.level = "Galaxy Hero";
    } else if (user.points >= 100) {
        user.level = "Star Captain";
    } else {
        user.level = "Rookie Explorer";
    }
}

// BADGE SYSTEM
function checkBadges() {
    if (user.points >= 50 && !user.badges.includes("🌟 Active Explorer")) {
        user.badges.push("🌟 Active Explorer");
    }

    if (user.points >= 150 && !user.badges.includes("🚀 Space Master")) {
        user.badges.push("🚀 Space Master");
    }
}

// DAILY CHALLENGE
const dailyChallenges = [
    "Post one new idea in a Mission Room.",
    "Complete a Mini Learning Mission.",
    "Help another teen improve their idea."
];

document.getElementById("dailyText").innerText =
    dailyChallenges[Math.floor(Math.random() * dailyChallenges.length)];

function completeDaily() {
    earnPoints(15);
    alert("Daily Challenge Completed! +15 Points 🌠");
}

// AVATAR UNLOCK
function unlockGear(item, cost) {
    if (user.points >= cost) {
        user.points -= cost;
        user.avatar = item.includes("Helmet") ? "🚀" : "🛸";
        alert("Gear Unlocked!");
        saveUser();
    } else {
        alert("Not enough points!");
    }
}

// LEADERBOARD (Demo)
function updateLeaderboard() {
    let leaderboard = document.getElementById("leaderboard");
    leaderboard.innerHTML = "";

    let demoUsers = [
        { name: "NovaKid", points: 250 },
        { name: "StarGenius", points: 180 },
        { name: "GalaxyGirl", points: 120 },
        { name: "You", points: user.points }
    ];

    demoUsers.sort((a, b) => b.points - a.points);

    demoUsers.forEach(u => {
        let li = document.createElement("li");
        li.innerText = `${u.name} - ${u.points} pts`;
        leaderboard.appendChild(li);
    });
}

updateUI();
