// script.js
function calculateEMI() {
    // Get input values
    const loanAmount = parseFloat(document.getElementById('loanAmount').value);
    const interestRate = parseFloat(document.getElementById('interestRate').value) / 100 / 12; // Monthly interest rate
    const loanTerm = parseInt(document.getElementById('loanTerm').value);
  
    // Calculate EMI
    const emi = (loanAmount * interestRate * Math.pow(1 + interestRate, loanTerm)) / (Math.pow(1 + interestRate, loanTerm) - 1);
  
    // Display result
    const output = document.getElementById('output');
    output.innerHTML = `<p>Your EMI: ₹${emi.toFixed(2)}</p>`;
  }
  