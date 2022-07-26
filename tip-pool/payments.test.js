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
  });
  describe('createCurPayment tests', function () {
    it('should not add a new payment to allPayments if the billAmt is empty and return undefined', function () {
      billAmtInput.value = '';

      createCurPayment();
      expect(Object.keys(allPayments).length).toEqual(0);
      expect(createCurPayment()).toBe(undefined);
    });
    it('should not add a new payment to allPayments if the tipAmt is empty and return undefined', function () {
      tipAmtInput.value = '';

      createCurPayment();
      expect(Object.keys(allPayments).length).toEqual(0);
      expect(createCurPayment()).toBe(undefined);
    });
    it('should return undefined with negative bill amount', function () {
      billAmtInput.value = '-100';

      createCurPayment();
      expect(Object.keys(allPayments).length).toEqual(0);
      expect(createCurPayment()).toBe(undefined);
    });
    it('should return undefined with negative tip amount', function () {
      tipAmtInput.value = '-20';

      createCurPayment();
      expect(Object.keys(allPayments).length).toEqual(0);
      expect(createCurPayment()).toBe(undefined);
    });
    it('should return billAmt and tipAmt as strings', function () {
      expect(
        typeof createCurPayment().billAmt && typeof createCurPayment().billAmt
      ).toBe('string');
    });
    it('should return tipPercent as a number', function () {
      expect(typeof createCurPayment().tipPercent).toBe('number');
    });
  });
  describe('appendPaymentTable tests', function () {
    it('should not create a new table row if allPayments is empty', function () {
      const paymentTable = document.querySelector('#paymentTable');
      createCurPayment();
      allPayments = {};

      expect(Object.keys(allPayments).length).toEqual(0);
      expect(paymentTable.hasChildNodes()).toBe(true);
    });
  });
  //   describe('updateSummary tests', function () {});

  afterEach(function () {
    if (allPayments)
      for (let payment in allPayments) {
        let paymentNum = payment.slice(-1);
        let currPayment = document.querySelector(`#payment${paymentNum}`);
        currPayment.parentElement.replaceChildren();
      }
    allPayments = {};
  });
});
