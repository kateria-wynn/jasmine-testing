describe('Payments tests', function () {
  beforeEach(function () {
    billAmtInput.value = '100';
    tipAmtInput.value = '20';
  });

  afterEach(function () {
    for (let payment in allPayments) {
      let paymentNum = payment.slice(-1);
      let currPayment = document.querySelector(`#payment${paymentNum}`);
      currPayment.parentElement.replaceChildren();
    }
    allPayment = {};
  });
});

// billAmt and tipAmt should both be strings
// tip percent should be a num
