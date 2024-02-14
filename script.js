// Function to convert a number to binary string representation
function toBinary(num) {
    let binaryString = num.toString(2).padStart(32, '0'); // Pad to ensure 32 bits
    let formattedBinary = ''; // Initialize empty string for formatted binary

    // Loop through the binary string
    for (let i = 0; i < binaryString.length; i++) {
        // Add the current character to the formatted binary string
        formattedBinary += binaryString[i];
        // Insert a space after every 8 bits
        if ((i + 1) % 8 === 0 && i !== binaryString.length - 1) {
            formattedBinary += ' ';
        }
    }

    return formattedBinary;
}


// Function to update the display with the current binary representation
function updateDisplay(binaryRepresentation, decimal) {
    document.getElementById('binaryDisplay').textContent = binaryRepresentation;
    document.getElementById('decimalDisplay').textContent = decimal;
}

// Calculate the initial value based on the elapsed time since July 28, 2000, 17:30
const startDate = new Date('July 28, 2000 17:30:00');
const currentTime = new Date();
const elapsedTimeInSeconds = (currentTime - startDate) / 1000;

// Calculate the initial value of the 32-bit variable based on elapsed time
let num = Math.floor(elapsedTimeInSeconds);

// Output the initial binary representation
updateDisplay(toBinary(num));

// Set interval to update the display every one second (1000 milliseconds)
setInterval(function() {
    // Update the variable and display its binary representation
    num++;
    updateDisplay(toBinary(num), num);
}, 1000);
