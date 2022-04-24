var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
canvas.width = 480;
canvas.height = 320;

var ball = {
    radius: 10,
    x: canvas.width / 2,
    y: canvas.height -30,
    dx:2,
    dy:-2
};

setInterval(moveBall, 1);

function drawBall(){
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI*2);
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.closePath();
}

function moveBall(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    ball.x += ball.dx;
    ball.y += ball.dy;

    if (ball.x + ball.dx > canvas.width - ball.radius || ball.x + ball.dx < ball.radius) {
        ball.dx *= -1;
    }
    if (ball.y + ball.dy > canvas.height - ball.radius || ball.y + ball.dy < ball.radius) {
        ball.dy *= -1;
    }
}

