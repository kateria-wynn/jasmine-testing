window.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('calc-form');
  if (form) {
    setupIntialValues();
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +document.getElementById('loan-amount').value,
    years: +document.getElementById('loan-years').value,
    rate: +document.getElementById('loan-rate').value,
  };
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const loanAmountInput = (document.querySelector(
    '#loan-amount'
  ).defaultValue = 30000);
  const loanYearsInput = (document.querySelector(
    '#loan-years'
  ).defaultValue = 8);
  const yearlyRateInput = (document.querySelector(
    '#loan-rate'
  ).defaultValue = 8);

  const values = getCurrentUIValues();
  calculateMonthlyPayment(values);
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const values = getCurrentUIValues();
  return calculateMonthlyPayment(values);
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const principleAmount = values.amount;
  const periodicInterestRate = values.rate / 100 / 12;
  const totalPayments = values.years * 12;
  const monthlyPayment =
    (principleAmount * periodicInterestRate) / 1 -
    Math.pow(1 + periodicInterestRate, -totalPayments);

  updateMonthly(monthlyPayment);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthlyPayment = monthly.toFixed(2);
  const monthlyPaymentDisplay = document.getElementById('monthly-payment');
  monthlyPaymentDisplay.innerText = `$${monthlyPayment}`;
}
