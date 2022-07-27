describe('Helpers tests', function () {
  describe('sumPaymentTotal tests', function () {
    it('should accept a tip percentage', function () {
      submitPaymentInfo();

      expect(sumPaymentTotal('tipPercent')).toEqual(20);
    });
    it('should accept a bill amount', function () {
      submitPaymentInfo();

      billAmt = allPayments['payment1'].billAmt;

      expect(sumPaymentTotal('billAmt')).toEqual(100);
    });
    it('should accept a tip amount', function () {
      submitPaymentInfo();

      expect(sumPaymentTotal('tipAmt')).toEqual(20);
    });
  });

  describe('calculateTipPercent tests', function () {
    it('should calculate tip percentage correctly', function () {
      submitPaymentInfo();
      createCurPayment();

      billAmt = allPayments['payment1'].billAmt;
      tipAmt = allPayments['payment1'].tipAmt;

      expect(calculateTipPercent(billAmt, tipAmt)).toEqual(20);
    });
  });

  describe('appendTd tests', function () {
    it('should upate the HTML with the new bill amount', function () {
      tr = document.createElement('tr');
      value = billAmt;

      appendTd(tr, value);

      expect(tr.childNodes[0].innerText).toEqual(`${value}`);
    });
  });
});
