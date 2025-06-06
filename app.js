let linearClockCanvas = document.getElementById("linear-clock");
let linearClockContext = linearClockCanvas.getContext("2d");

let oneHourWidthPx = 50;
let dayWidthPx = oneHourWidthPx * 24;
let oneMinuteWidthPx = dayWidthPx / 60;
let offsetPx = 0;

linearClockCanvas.width = dayWidthPx;
linearClockCanvas.height = 200;

drawLinearClock(linearClockContext);

linearClockCanvas.addEventListener("wheel", (event) => {
    event.preventDefault();
    offsetPx += 25 * Math.sign(event.deltaY) * -1;
});

let rafHandle = null;
function draw() {
    drawLinearClock(linearClockContext);
    rafHandle = requestAnimationFrame(draw);
}

draw();
