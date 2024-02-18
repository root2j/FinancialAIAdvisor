var income,
  incomeChanges,
  expenses,
  expenseReduction,
  assets,
  assetValues,
  debts,
  debtDetails,
  shortTermGoals,
  longTermGoals,
  riskTolerance,
  investmentFluctuations,
  emergencyFund,
  insuranceTypes,
  insuranceGaps,
  financialConfidence,
  financeAreas,
  financialResponses;
function submitFinancialForm() {
  // Retrieve values from the form
  income = document.getElementById("income").value;
  incomeChanges = document.getElementById("incomeChanges").value;
  expenses = document.getElementById("expenses").value;
  expenseReduction = document.getElementById("expenseReduction").value;
  assets = document.getElementById("assets").value;
  assetValues = document.getElementById("assetValues").value;
  debts = document.getElementById("debts").value;
  debtDetails = document.getElementById("debtDetails").value;
  shortTermGoals = document.getElementById("shortTermGoals").value;
  longTermGoals = document.getElementById("longTermGoals").value;
  riskTolerance = document.getElementById("riskTolerance").value;
  investmentFluctuations = document.getElementById(
    "investmentFluctuations"
  ).value;
  emergencyFund = document.getElementById("emergencyFund").value;
  insuranceTypes = document.getElementById("insuranceTypes").value;
  insuranceGaps = document.getElementById("insuranceGaps").value;
  financialConfidence = document.getElementById("financialConfidence").value;
  financeAreas = document.getElementById("financeAreas").value;

  // Construct the string variable
  financialResponses =
    "Income: " +
    income +
    "\n" +
    "Expected Income Changes: " +
    incomeChanges +
    "\n" +
    "Expenses: " +
    expenses +
    "\n" +
    "Expense Reduction Opportunities: " +
    expenseReduction +
    "\n" +
    "Assets: " +
    assets +
    "\n" +
    "Asset Values: " +
    assetValues +
    "\n" +
    "Debts: " +
    debts +
    "\n" +
    "Debt Details: " +
    debtDetails +
    "\n" +
    "Short-Term Financial Goals: " +
    shortTermGoals +
    "\n" +
    "Long-Term Financial Goals: " +
    longTermGoals +
    "\n" +
    "Risk Tolerance: " +
    riskTolerance +
    "\n" +
    "Accept Investment Fluctuations: " +
    investmentFluctuations +
    "\n" +
    "Emergency Fund: " +
    emergencyFund +
    "\n" +
    "Insurance Types: " +
    insuranceTypes +
    "\n" +
    "Insurance Coverage Gaps: " +
    insuranceGaps +
    "\n" +
    "Financial Confidence: " +
    financialConfidence +
    "\n" +
    "Areas to Learn More: " +
    financeAreas;

  // Output the string variable (you can do whatever you want with it here)
  // console.log("Financial Responses:\n" + financialResponses);
  // alert("Thank you! Your financial responses have been recorded.");

  // Call the function to make the API call when the page loads
  callChatbotAPI();
}
// Function to make the API call and display the response
function callChatbotAPI() {
  var chatbotOutputDiv = document.getElementById("chatbotOutput");
  chatbotOutputDiv.innerHTML = "<strong>Interpreting the answer</strong><br>";
  var data = {
    contents: [
      {
        parts: [
          {
            text:
              "Interpret the financial data I wrote below and provide some observations and ways to improve if possible as a financial advisor." +
              " Answer in simple paragraphs only. Here is the data\n" +
              financialResponses,
          },
        ],
      },
    ],
  };

  fetch(
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyByIBiNyR7JcACVnMcir9yDcU8dB7aHUI0",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  )
    .then((response) => response.json())
    .then((data) => {
      // Display the response in the chatbotOutput
      var chatbotOutputDiv = document.getElementById("chatbotOutput");
      chatbotOutputDiv.innerHTML =
        "<strong>Chatbot Output:</strong><br>" +
        // data.candidates[0].content.parts[0].text;
        parseText(data.candidates[0].content.parts[0].text);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
function parseText(text) {
  var parsedData = "";
  for (let i = 0; i < text.length; i++) {
    if (text[i] === "*") {
      while (i !== text.length && text[i + 1] === "*") {
        i++;
      }
      parsedData += "<br>";
    } else {
      parsedData += text[i];
    }
  }
  return parsedData;
}
