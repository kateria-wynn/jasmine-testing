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
  const amount = document.getElementById('loan-amount').value;
  return {
    amount: amount.includes(',') ? Number(amount.replace(',', '')) : +amount,
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
  const monthlyPayment = calculateMonthlyPayment(values);
  updateMonthly(monthlyPayment);
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  if (Object.keys(values).length === 0) {
    throw new Error('Invalid values');
  } else if (values.amount === 0) {
    return (monthlyPayment = '0');
  } else {
    const principleAmount = values.amount;
    const periodicInterestRate = values.rate / 100 / 12;
    const totalPayments = values.years * 12;
    const monthlyPayment =
      (principleAmount * periodicInterestRate) / 1 -
      Math.pow(1 + periodicInterestRate, -totalPayments);
    return monthlyPayment.toFixed(2);
  }
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthlyPayment = monthly;
  const monthlyPaymentDisplay = document.getElementById('monthly-payment');
  return (monthlyPaymentDisplay.innerText = `$${monthlyPayment}`);
}
