// ====================
// ACTIVITY NOTIFICATIONS
// ====================

const activityList = document.getElementById("activityList");

function generateActivity() {
    const activities = [
        "Your idea got an upvote! 🚀",
        "Someone commented on your project. 🌌",
        "Your artwork was featured in the gallery! 🎨"
    ];

    const activity = activities[Math.floor(Math.random() * activities.length)];
    const li = document.createElement("li");
    li.textContent = activity;
    activityList.appendChild(li);
}

// ====================
// MISSION REMINDERS
// ====================

const missionList = document.getElementById("missionList");

function generateMissionReminder() {
    const missions = [
        "Don't forget to complete your daily mission!",
        "Mission: Build your mini space station is ending soon!",
        "New mission available: Design a Mars Rover!"
    ];

    const reminder = missions[Math.floor(Math.random() * missions.length)];
    const li = document.createElement("li");
    li.textContent = reminder;
    missionList.appendChild(li);
}

// ====================
// ACHIEVEMENT ALERTS
// ====================

const achievementList = document.getElementById("achievementList");

function generateAchievement() {
    const achievements = [
        "Congratulations! You earned 50 Nova Points! 🌟",
        "Badge Unlocked: Galaxy Hero 🏅",
        "Level Up! You are now a Star Captain! 🚀"
    ];

    const achievement = achievements[Math.floor(Math.random() * achievements.length)];
    const li = document.createElement("li");
    li.textContent = achievement;
    achievementList.appendChild(li);
}

// ====================
// WEEKLY DIGEST
// ====================

const weeklyDigest = document.getElementById("weeklyDigest");

function generateWeeklyDigest() {
    weeklyDigest.innerHTML = `
        <p>Top Ideas This Week:</p>
        <ul>
            <li>🛰 Build your own satellite</li>
            <li>🌌 Mars colonization proposal</li>
        </ul>
        <p>Top Projects:</p>
        <ul>
            <li>🚀 Mini space shuttle design</li>
            <li>👽 Alien life exploration simulation</li>
        </ul>
        <p>Community Highlights:</p>
        <ul>
            <li>🎨 Best artwork: "Nebula Dreams"</li>
            <li>💻 Hackathon winner: NovaKid</li>
        </ul>
    `;
}
