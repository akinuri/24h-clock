let linearClockCanvas = document.getElementById("linear-clock");
let linearClockContext = linearClockCanvas.getContext("2d");

let oneHourWidthPx = 50;

linearClockCanvas.width = oneHourWidthPx * 24;
linearClockCanvas.height = 200;

drawLinearClock(linearClockContext);
