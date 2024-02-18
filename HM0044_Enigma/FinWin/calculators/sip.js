// scripts.js

function calculateSIP() {
  var investmentAmount = parseFloat(
    document.getElementById("investmentAmount").value
  );
  var interestRate =
    parseFloat(document.getElementById("interestRate").value) / 100;
  var investmentPeriod = parseInt(
    document.getElementById("investmentPeriod").value
  );

  var monthlyInterestRate = interestRate / 12;
  var totalMonths = investmentPeriod * 12;

  var futureValue = 0;
  for (var i = 0; i < totalMonths; i++) {
    futureValue = (futureValue + investmentAmount) * (1 + monthlyInterestRate);
  }

  // Round to two decimal places
  futureValue = Math.round(futureValue * 100) / 100;

  var outputElement = document.getElementById("output");
  outputElement.innerHTML =
    "At the end of " +
    investmentPeriod +
    " years, your investment will grow to ₹" +
    futureValue.toFixed(2);
}
