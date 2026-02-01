const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');
const scoreElement = document.getElementById('score');
const startBtn = document.getElementById('start-btn');

// Game Variables
let gameRunning = false;
let score = 0;
let animationId;
let frames = 0;
let gameSpeed = 5;

// Canvas Size
function resizeCanvas() {
    const container = canvas.parentElement;
    if (window.innerWidth < 768) {
        // Mobile: Taller and wider
        canvas.width = container.clientWidth; // Use full width
        canvas.height = 500; // Stretch vertically for mobile
    } else {
        // Desktop: Standard size
        canvas.width = Math.min(800, container.clientWidth - 40);
        canvas.height = 300;
    }
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

// Player
const player = {
    x: 50,
    y: 200,
    width: 30,
    height: 30,
    dy: 0,
    jumpStrength: 12,
    gravity: 0.6,
    grounded: false,
    color: '#00ff9d',
    draw: function () {
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.shadowBlur = 0;
    },
    update: function () {
        // Jump
        if (keys['Space'] || keys['Click']) {
            if (this.grounded) {
                this.dy = -this.jumpStrength;
                this.grounded = false;
            }
        }

        this.y += this.dy;

        // Gravity
        if (this.y + this.height < canvas.height - 20) {
            this.dy += this.gravity;
        } else {
            this.dy = 0;
            this.grounded = true;
            this.y = canvas.height - 20 - this.height;
        }

        this.draw();
    }
};

// Obstacles
const obstacles = [];
class Obstacle {
    constructor() {
        this.width = 20 + Math.random() * 30;
        this.height = 30 + Math.random() * 30;
        this.x = canvas.width;
        this.y = canvas.height - 20 - this.height;
        this.color = '#00b8ff';
        this.markedForDeletion = false;
    }

    draw() {
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.shadowBlur = 0;
    }

    update() {
        this.x -= gameSpeed;
        if (this.x + this.width < 0) {
            this.markedForDeletion = true;
            score++;
            scoreElement.innerText = `Score: ${score}`;
            // Increase speed every 2 points
            if (score % 2 === 0) gameSpeed += 0.5;
        }
        this.draw();
    }
}

// Controls
const keys = {};
startBtn.addEventListener('click', startGame);

window.addEventListener('keydown', function (e) {
    if (e.code === 'Space') {
        keys['Space'] = true;
        if (!gameRunning && startBtn.style.display !== 'none') {
            startGame();
        }
        e.preventDefault(); // Prevent scrolling
    }
});
window.addEventListener('keyup', function (e) {
    if (e.code === 'Space') keys['Space'] = false;
});
canvas.addEventListener('mousedown', function () {
    keys['Click'] = true;
    if (!gameRunning && startBtn.style.display !== 'none') {
        startGame();
    }
});
canvas.addEventListener('mouseup', function () {
    keys['Click'] = false;
});
canvas.addEventListener('touchstart', function (e) {
    keys['Click'] = true;
    if (!gameRunning && startBtn.style.display !== 'none') {
        startGame();
    }
    e.preventDefault();
});
canvas.addEventListener('touchend', function () {
    keys['Click'] = false;
});

// Game Loop
function animate() {
    if (!gameRunning) return;

    animationId = requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Ground Line
    ctx.beginPath();
    ctx.moveTo(0, canvas.height - 20);
    ctx.lineTo(canvas.width, canvas.height - 20);
    ctx.strokeStyle = '#333';
    ctx.stroke();

    player.update();

    // Obstacle Spawning
    frames++;
    if (frames % 100 === 0 || (frames % 60 === 0 && gameSpeed > 8)) {
        obstacles.push(new Obstacle());
    }

    // Obstacle Management
    for (let i = 0; i < obstacles.length; i++) {
        obstacles[i].update();

        // Collision Detection
        if (
            player.x < obstacles[i].x + obstacles[i].width &&
            player.x + player.width > obstacles[i].x &&
            player.y < obstacles[i].y + obstacles[i].height &&
            player.y + player.height > obstacles[i].y
        ) {
            gameOver();
        }
    }

    // Remove off-screen obstacles
    for (let i = obstacles.length - 1; i >= 0; i--) {
        if (obstacles[i].markedForDeletion) {
            obstacles.splice(i, 1);
        }
    }
}

function startGame() {
    gameRunning = true;
    score = 0;
    gameSpeed = 5;
    frames = 0;
    obstacles.length = 0;
    scoreElement.innerText = `Score: ${score}`;
    startBtn.style.display = 'none';
    animate();
}

function gameOver() {
    gameRunning = false;
    cancelAnimationFrame(animationId);
    ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#fff';
    ctx.font = '30px Outfit';
    ctx.textAlign = 'center';
    ctx.fillText('Game Over', canvas.width / 2, canvas.height / 2 - 20);
    ctx.font = '20px Outfit';
    ctx.fillText(`Score: ${score}`, canvas.width / 2, canvas.height / 2 + 20);

    startBtn.innerText = 'Play Again';
    startBtn.style.display = 'block';
}

// Initial Draw
ctx.fillStyle = '#000';
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.fillStyle = '#fff';
ctx.font = '20px Outfit';
ctx.textAlign = 'center';
ctx.fillText('Press Space or Click to Start', canvas.width / 2, canvas.height / 2);
