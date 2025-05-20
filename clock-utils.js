function drawLinearClock(context) {
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    context.save();

    let hourStart = Math.floor(offsetPx / oneHourWidthPx) * -1;
    hourStart = loop(hourStart, 0, 24, "close");

    let realOffsetPx = offsetPx % oneHourWidthPx;
    realOffsetPx = loop(realOffsetPx, 0, oneHourWidthPx, "close");

    context.translate(realOffsetPx, 0);

    for (let i = 0; i < 24; i++) {
        let x = i * oneHourWidthPx;

        let hour = i + hourStart;
        hour = loop(hour, 0, 24, "close");

        context.beginPath();
        context.moveTo(x + 0.5, 0);
        context.lineTo(x + 0.5, context.canvas.height);
        context.strokeStyle = "silver";
        if (hour == 0) {
            context.strokeStyle = "black";
        }
        context.lineWidth = 1;
        context.stroke();

        context.font = "14px Arial";
        context.fontWeight = "bold";
        context.fillStyle = "dimgray";
        if (hour == 0) {
            context.fillStyle = "black";
        }
        context.fillText(hour, x + 5, 20);
    }

    context.restore();
}
