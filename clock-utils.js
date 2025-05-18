function drawLinearClock(context) {
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    context.save();
    context.translate(offsetHours * oneHourWidthPx, 0);
    for (let i = 0; i < 24; i++) {
        context.beginPath();
        context.moveTo(i * oneHourWidthPx + 0.5, 0);
        context.lineTo(i * oneHourWidthPx + 0.5, context.canvas.height);
        context.strokeStyle = "silver";
        context.lineWidth = 1;
        context.stroke();

        context.font = "14px Arial";
        context.fontWeight = "bold";
        context.fillStyle = "dimgray";
        context.fillText(i + 1, i * oneHourWidthPx + 5, 20);
    }
    context.restore();
}
