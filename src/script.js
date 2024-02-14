function toBinary(num) {
    let binaryString = num.toString(2).padStart(32, '0');
    let formattedBinary = '';
    for (let i = 0; i < binaryString.length; i++) {
        formattedBinary += binaryString[i];
        if ((i + 1) % 8 === 0 && i !== binaryString.length - 1) {
            formattedBinary += ' ';
        }
    }

    return formattedBinary;
}

function updateDisplay(binaryRepresentation, decimal) {
    document.getElementById('binaryDisplay').textContent = binaryRepresentation;
    document.getElementById('decimalDisplay').textContent = decimal;
}

// Calculate the initial value based on the elapsed time since July 28, 2000, 17:30
const startDate = new Date('July 28, 2000 17:30:00');
const currentTime = new Date();
const elapsedTimeInSeconds = (currentTime - startDate) / 1000;

let num = Math.floor(elapsedTimeInSeconds);

updateDisplay(toBinary(num), num);

setInterval(function() {
    num++;
    updateDisplay(toBinary(num), num);
}, 1000);
