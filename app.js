let linearClockCanvas = document.getElementById("linear-clock");
let linearClockContext = linearClockCanvas.getContext("2d");

let oneHourWidthPx = 50;
let offsetHours = 0;

linearClockCanvas.width = oneHourWidthPx * 24;
linearClockCanvas.height = 200;

drawLinearClock(linearClockContext, offsetHours);

linearClockCanvas.addEventListener("wheel", (event) => {
    event.preventDefault();
    let dir = event.deltaY > 0 ? -1 : 1;
    offsetHours += dir;
    drawLinearClock(linearClockContext, offsetHours);
});
