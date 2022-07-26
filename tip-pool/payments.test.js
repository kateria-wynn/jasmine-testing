describe('Payments tests', function () {
  beforeEach(function () {
    billAmtInput.value = '100';
    tipAmtInput.value = '20';
  });

  describe('submitPaymentInfo tests', function () {
    it('should add a new payment to allPayments on submitPaymentInfo()', function () {
      submitPaymentInfo();

      expect(paymentId).toEqual(1);
      expect(Object.keys(allPayments).length).toEqual(1);
      expect(allPayments[`payment${paymentId}`].billAmt).toBe('100');
      expect(allPayments[`payment${paymentId}`].tipAmt).toBe('20');
      expect(allPayments[`payment${paymentId}`].tipPercent).toEqual(20);
    });
    it('should reset bill and tip amount inputs', function () {
      submitPaymentInfo();

      expect(billAmtInput.innerText).toBe('');
      expect(tipAmtInput.innerText).toBe('');
    });
  });

  describe('createCurPayment tests', function () {
    it('should create a new payment on createCurPayment()', function () {
      let expectedPayment = {
        billAmt: '100',
        tipAmt: '20',
        tipPercent: 20,
      };

      expect(createCurPayment()).toEqual(expectedPayment);
    });
    it('should not create payment with empty input on createCurPayment()', function () {
      billAmtInput.value = '';
      tipAmtInput.value = '';

      expect(createCurPayment()).toEqual(undefined);
    });
    it('should return undefined with negative bill amount', function () {
      billAmtInput.value = '-100';

      expect(createCurPayment()).toBe(undefined);
    });
    it('should return undefined with negative tip amount', function () {
      tipAmtInput.value = '-20';

      expect(createCurPayment()).toBe(undefined);
    });
    it('should return billAmt and tipAmt as strings', function () {
      submitPaymentInfo();
      createCurPayment();

      expect(
        typeof allPayments['payment1'].billAmt &&
          typeof allPayments['payment1'].tipAmt
      ).toBe('string');
    });
    it('should return tipPercent as a number', function () {
      submitPaymentInfo();
      createCurPayment();

      expect(typeof allPayments['payment1'].tipPercent).toBe('number');
    });
  });

  describe('appendPaymentTable tests', function () {
    it('should update paymentTable on appendPaymentTable()', function () {
      let curPayment = createCurPayment();

      appendPaymentTable(curPayment);

      let curTdList = document.querySelectorAll('#paymentTable tbody tr td');

      expect(curTdList.length).toEqual(4);
      expect(paymentTable.hasChildNodes()).toBe(true);
      expect(curTdList[0].innerText).toEqual('$100');
      expect(curTdList[1].innerText).toEqual('$20');
      expect(curTdList[2].innerText).toEqual('20%');
    });
  });
  describe('updateSummary tests', function () {
    it('should update summary table correctly', function () {
      submitPaymentInfo();
      createCurPayment();

      expect(summaryTds[0].innerHTML).toEqual(
        `$${allPayments['payment1'].billAmt}`
      );
      expect(summaryTds[1].innerHTML).toEqual(
        `$${allPayments['payment1'].tipAmt}`
      );
      expect(summaryTds[2].innerHTML).toEqual(
        `${allPayments['payment1'].tipPercent}%`
      );
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
    paymentId = 0;
    allPayments = {};
  });
});
