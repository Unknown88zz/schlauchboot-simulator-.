const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Boot Eigenschaften
const boat = {
    x: canvas.width / 2 - 20,
    y: canvas.height - 100,
    width: 40,
    height: 60,
    speed: 4,
    color: "#ffd700"
};


const keys = {};

window.addEventListener("keydown", (e) => {
    keys[e.key] = true;
});

window.addEventListener("keyup", (e) => {
    keys[e.key] = false;
});

// Update-Logik
function update() {
    if (keys["ArrowUp"] || keys["w"]) boat.y -= boat.speed;
    if (keys["ArrowDown"] || keys["s"]) boat.y += boat.speed;
    if (keys["ArrowLeft"] || keys["a"]) boat.x -= boat.speed;
    if (keys["ArrowRight"] || keys["d"]) boat.x += boat.speed;


    if (boat.x < 0) boat.x = 0;
    if (boat.x > canvas.width - boat.width) boat.x = canvas.width - boat.width;
    if (boat.y < 0) boat.y = 0;
    if (boat.y > canvas.height - boat.height) boat.y = canvas.height - boat.height;
}

// Render-Logik
function draw() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);


    ctx.fillStyle = boat.color;
    ctx.beginPath();
    ctx.roundRect(boat.x, boat.y, boat.width, boat.height, 15);
    ctx.fill();
    ctx.strokeStyle = "#ff4500"; 
    ctx.stroke();
}

function gameLoop() {
    update();
    draw();
    requestAnimationFrame(gameLoop);
}

gameLoop();
