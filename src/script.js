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
function convertSeconds(seconds) {
    const oneMinute = 60;
    const oneHour = oneMinute * 60;
    const oneDay = oneHour * 24;
    const oneWeek = oneDay * 7;
    const oneMonth = oneDay * 30.44; // Average days in a month
    const oneYear = oneDay * 365.25; // Average days in a year (considering leap years)

    let years, months, weeks, days, hours, minutes, remainingSeconds;

    years = Math.floor(seconds / oneYear);
    seconds %= oneYear;

    months = Math.floor(seconds / oneMonth);
    seconds %= oneMonth;

    weeks = Math.floor(seconds / oneWeek);
    seconds %= oneWeek;

    days = Math.floor(seconds / oneDay);
    seconds %= oneDay;

    hours = Math.floor(seconds / oneHour);
    seconds %= oneHour;

    minutes = Math.floor(seconds / oneMinute);
    remainingSeconds = seconds % oneMinute;

    return {
        years,
        months,
        weeks,
        days,
        hours,
        minutes,
        seconds: remainingSeconds
    };
}

function updateDisplay(binaryRepresentation, decimal) {
    document.getElementById('binaryDisplay').textContent = binaryRepresentation;
    document.getElementById('decimalDisplay').textContent = decimal;

    var time = convertSeconds(decimal);

    document.getElementById('normal').textContent = `${time.years} years, ${time.months} months, ${time.weeks} weeks, ${time.days} days, ${time.hours} hours, ${time.minutes} minutes, ${time.seconds} seconds`;
}

// Calculate the initial value based on the elapsed time since July 28, 2000, 17:30
const startDate = new Date('2000-07-28T17:30:00.000+04:00');
const currentTime = new Date();
const elapsedTimeInSeconds = (currentTime - startDate) / 1000;


let num = Math.floor(elapsedTimeInSeconds);

updateDisplay(toBinary(num), num);

setInterval(function() {
    num++;
    updateDisplay(toBinary(num), num);
}, 1000);



