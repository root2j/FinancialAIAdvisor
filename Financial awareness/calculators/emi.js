// script.js
document.getElementById('calculateBtn').addEventListener('click', function() {
    var loanAmount = parseFloat(document.getElementById('loanAmount').value);
    var interestRate = parseFloat(document.getElementById('interestRate').value) / 100 / 12; // Monthly interest rate
    var loanTenureMonths = parseFloat(document.getElementById('loanTenure').value) * 12; // Total months
  
    var emi = (loanAmount * interestRate * Math.pow(1 + interestRate, loanTenureMonths)) / (Math.pow(1 + interestRate, loanTenureMonths) - 1);
    
    document.getElementById('result').innerHTML = "Your EMI: $" + emi.toFixed(2);
  });
  