describe('Payments tests', function () {
  beforeEach(function () {
    billAmtInput.value = '100';
    tipAmtInput.value = '20';
  });

  describe('submitPaymentInfo tests', function () {
    it('should add a new payment to allPayments on submitServerInfo()', function () {
      submitPaymentInfo();

      expect(Object.keys(allPayments).length).toEqual(1);
      expect(allPayments[`payment${paymentId}`].billAmt).toBe('100');
      expect(allPayments[`payment${paymentId}`].tipAmt).toBe('20');
    });
    it('should not add a new payment to allPayments if the billAmt or tipAmt is empty', function () {
      billAmtInput.value = '';
      tipAmtInput.value = '';

      submitPaymentInfo();

      expect(Object.keys(allPayments).length).toEqual(0);
    });
  });
  //   describe('createCurPayment tests', function () {});
  //   describe('appendPaymentTable tests', function () {});
  //   describe('updateSummary tests', function () {});

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
