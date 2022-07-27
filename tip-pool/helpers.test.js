describe('Helpers tests', function () {
  describe('sumPaymentTotal tests', function () {
    it('should accept a tip percentage', function () {
      submitPaymentInfo();

      expect(sumPaymentTotal('tipPercent')).toEqual(20);
    });
    it('should accept a bill amount', function () {
      submitPaymentInfo();

      expect(sumPaymentTotal('billAmt')).toEqual(100);
    });
    it('should accept a tip amount', function () {
      submitPaymentInfo();

      expect(sumPaymentTotal('tipAmt')).toEqual(20);
    });
  });
  describe('calculateTipPercent tests', function () {
    it('should calculate tip percentage correctly', function () {
      allPayments = {
        payment1: { billAmt: '100', tipAmt: '20', tipPercent: 20 },
      };
      billAmt = allPayments['payment1'].billAmt;
      tipAmt = allPayments['payment1'].tipAmt;
      expect(calculateTipPercent(billAmt, tipAmt)).toEqual(20);
    });
  });
});
