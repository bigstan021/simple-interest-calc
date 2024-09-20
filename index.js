function sICalculator(principal, rate, time) {
    return principal * rate * time / 100;
}

function pCalculator(rate, time, simpleInterest) {
    return simpleInterest * 100 / (rate * time);
}

function rCalculator(principal, time, simpleInterest) {
    return simpleInterest * 100 / (principal * time);
}

function tCalculator(principal, rate, simpleInterest) {
    return simpleInterest * 100 / (principal * rate);
}

let firstCmd = prompt("Welcome to the Simple Interest Calculator!\nWhat would you like to calculate? (S.I, Principal, Time, or Rate)").toLowerCase();

if (firstCmd === "simple interest") {
    let principal = parseFloat(prompt('Please enter your principal($)'));
    let rate = parseFloat(prompt('Please enter the rate (%)'));
    let time = parseFloat(prompt('Please enter the time (in years)'));
    // console.log(`Simple Interest: ${sICalculator(principal, rate, time)}`);
    alert(`Simple Interest: ${sICalculator(principal, rate, time)}`);
} else if (firstCmd === "principal") {
    let rate = parseFloat(prompt('Please enter the rate (%)'));
    let time = parseFloat(prompt('Please enter the time (in years)'));
    let simpleInterest = parseFloat(prompt('Please enter the simple interest($)'));
    // console.log(`Principal: ${pCalculator(rate, time, simpleInterest)}`);
    alert(`Principal: ${pCalculator(rate, time, simpleInterest)}`);
} else if (firstCmd === "rate") {
    let principal = parseFloat(prompt('Please enter your principal($)'));
    let time = parseFloat(prompt('Please enter the time (in years)'));
    let simpleInterest = parseFloat(prompt('Please enter the simple interest($)'));
    // console.log(`Rate: ${rCalculator(principal, time, simpleInterest)}%`);
    alert(`Rate: ${rCalculator(principal, time, simpleInterest)}%`);
} else if (firstCmd === "time") {
    let principal = parseFloat(prompt('Please enter your principal($)'));
    let rate = parseFloat(prompt('Please enter the rate (%)'));
    let simpleInterest = parseFloat(prompt('Please enter the simple interest($)'));
    // console.log(`Time: ${tCalculator(principal, rate, simpleInterest)} years`);
    alert(`Time: ${tCalculator(principal, rate, simpleInterest)} years`);
} else {
    // console.log("Invalid choice. Please enter 'Simple Interest', 'Principal', 'Rate', or 'Time'.");
    alert("Yo! Be fucking serious for once man");
}
