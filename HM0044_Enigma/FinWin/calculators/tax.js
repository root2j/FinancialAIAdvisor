// script.js
function calculateTax() {
  const income = parseFloat(document.getElementById("income").value);

  let tax = 0;

  if (income <= 250000) {
    tax = 0;
  } else if (income > 250000 && income <= 500000) {
    tax = (income - 250000) * 0.05;
  } else if (income > 500000 && income <= 1000000) {
    tax = 12500 + (income - 500000) * 0.2;
  } else {
    tax = 112500 + (income - 1000000) * 0.3;
  }

  const output = document.getElementById("output");
  output.innerHTML = `<p>Your Income Tax: ₹${tax.toFixed(2)}</p>`;
}
