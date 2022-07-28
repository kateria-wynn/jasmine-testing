describe('Helpers tests', function () {
  beforeEach(function () {
    billAmtInput.value = 100;
    tipAmtInput.value = 20;
    submitPaymentInfo();
  });
  describe('sumPaymentTotal tests', function () {
    it('should sum total tip percent on sumPaymentTotal()', function () {
      expect(sumPaymentTotal('tipPercent')).toEqual(20);

      billAmtInput.value = 100;
      tipAmtInput.value = 20;

      submitPaymentInfo();

      expect(sumPaymentTotal('tipPercent')).toEqual(40);
    });
    it('should sum total bill amount of all payments on sumPaymentTotal()', function () {
      expect(sumPaymentTotal('billAmt')).toEqual(100);

      billAmtInput.value = 100;
      tipAmtInput.value = 20;

      submitPaymentInfo();

      expect(sumPaymentTotal('billAmt')).toEqual(200);
    });
    it('should sum total tip amount of all payments on sumPaymentTotal()', function () {
      expect(sumPaymentTotal('tipAmt')).toEqual(20);

      billAmtInput.value = 100;
      tipAmtInput.value = 20;

      submitPaymentInfo();

      expect(sumPaymentTotal('tipAmt')).toEqual(40);
    });
  });

  describe('calculateTipPercent tests', function () {
    it('should calculate tip percentage correctly', function () {
      billAmt = allPayments['payment1'].billAmt;
      tipAmt = allPayments['payment1'].tipAmt;

      expect(calculateTipPercent(billAmt, tipAmt)).toEqual(20);
    });
  });

  describe('appendTd tests', function () {
    it('should upate the HTML with the new bill amount', function () {
      tr = document.createElement('tr');
      value = allPayments['payment1'].billAmt;

      appendTd(tr, value);

      expect(tr.children.length).toEqual(1);
      expect(tr.childNodes[0].innerText).toEqual(`${value}`);
    });
  });
  afterEach(function () {
    billAmtInput.value = '';
    tipAmtInput.value = '';
    paymentTbody.innerHTML = '';
    summaryTds[0].innerHTML = '';
    summaryTds[1].innerHTML = '';
    summaryTds[2].innerHTML = '';
    serverTbody.innerHTML = '';
    allPayments = {};
    paymentId = 0;
  });
});
