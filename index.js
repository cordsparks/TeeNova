// Simulate dashboard progress
let missions = 0;
let points = 0;
let badges = 0;

function simulateProgress() {
    missions += 1;
    points += 50;
    badges += 1;

    document.getElementById("missionsCompleted").textContent = missions;
    document.getElementById("novaPoints").textContent = points;
    document.getElementById("badgesEarned").textContent = badges;
}
