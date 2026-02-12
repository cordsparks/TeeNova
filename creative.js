// ====================
// ART & STORY CORNER
// ====================

function postStory() {
    let title = document.getElementById("storyTitle").value;
    let content = document.getElementById("storyContent").value;

    if (!title || !content) return;

    let container = document.getElementById("storyContainer");

    let post = document.createElement("div");
    post.innerHTML = `<h3>${title}</h3><p>${content}</p>`;

    container.appendChild(post);

    document.getElementById("storyTitle").value = "";
    document.getElementById("storyContent").value = "";
}


// ====================
// MUSIC LAB
// ====================

function uploadMusic() {
    let title = document.getElementById("musicTitle").value;
    let fileInput = document.getElementById("musicFile");
    let container = document.getElementById("musicContainer");

    if (!title || fileInput.files.length === 0) return;

    let audioURL = URL.createObjectURL(fileInput.files[0]);

    let music = document.createElement("div");
    music.innerHTML = `
        <h3>${title}</h3>
        <audio controls src="${audioURL}"></audio>
    `;

    container.appendChild(music);

    document.getElementById("musicTitle").value = "";
    fileInput.value = "";
}


// ====================
// SIMULATION SANDBOX
// ====================

function startSimulation() {
    let canvas = document.getElementById("orbitCanvas");
    let ctx = canvas.getContext("2d");

    let angle = 0;

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Sun
        ctx.fillStyle = "yellow";
        ctx.beginPath();
        ctx.arc(200, 200, 20, 0, Math.PI * 2);
        ctx.fill();

        // Orbiting planet
        let x = 200 + 100 * Math.cos(angle);
        let y = 200 + 100 * Math.sin(angle);

        ctx.fillStyle = "cyan";
        ctx.beginPath();
        ctx.arc(x, y, 10, 0, Math.PI * 2);
        ctx.fill();

        angle += 0.02;
        requestAnimationFrame(draw);
    }

    draw();
}


// ====================
// PHOTO CONTEST
// ====================

function submitPhoto() {
    let input = document.getElementById("photoUpload");
    let gallery = document.getElementById("photoGallery");

    if (input.files.length === 0) return;

    let imgURL = URL.createObjectURL(input.files[0]);

    let img = document.createElement("img");
    img.src = imgURL;

    gallery.appendChild(img);

    input.value = "";
}


// ====================
// IDEA LAB
// ====================

function submitIdea() {
    let idea = document.getElementById("ideaInput").value;
    let container = document.getElementById("ideaContainer");

    if (!idea) return;

    let post = document.createElement("div");
    post.innerHTML = `<p>🚀 ${idea}</p>`;

    container.appendChild(post);

    document.getElementById("ideaInput").value = "";
}
