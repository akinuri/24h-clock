function drawLinearClock(context) {
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    context.save();

    for (let hour = 0; hour < 24; hour++) {
        let x = hour * oneHourWidthPx;
        x += offsetPx;
        x = loop(x, 0, context.canvas.width, "close");

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
