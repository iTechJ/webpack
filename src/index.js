
var calculateMonthlyPayment = function (principal, years, rate) {
    let monthlyRate = 1;
    if (rate) {
        monthlyRate = rate / 100 / 12;
    }
    let monthlyPayment = principal * monthlyRate / (1 - (Math.pow(1 / (1 + monthlyRate), years * 12)));
    return monthlyPayment;
};

document.getElementById('calcBtn').addEventListener('click', () => {
    const principal = document.getElementById("principal").value;
    const years = document.getElementById("years").value;
    const rate = document.getElementById("rate").value;
    const monthlyPayment = calculateMonthlyPayment(principal, years, rate);
    document.getElementById("monthlyPayment").innerHTML = monthlyPayment.toFixed(2);
});

