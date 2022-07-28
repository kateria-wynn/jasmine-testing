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
    it('should not add a new payment to allPayments if the billAmt is empty and return undefined', function () {
      billAmtInput.value = '';

      submitPaymentInfo();

      expect(Object.keys(allPayments).length).toEqual(0);
      expect(createCurPayment()).toBe(undefined);
    });
    it('should not add a new payment to allPayments if the tipAmt is empty and return undefined', function () {
      tipAmtInput.value = '';

      submitPaymentInfo();

      expect(Object.keys(allPayments).length).toEqual(0);
      expect(createCurPayment()).toBe(undefined);
    });
    it('should return undefined with negative bill amount', function () {
      billAmtInput.value = '-100';

      submitPaymentInfo();

      expect(Object.keys(allPayments).length).toEqual(0);
      expect(createCurPayment()).toBe(undefined);
    });
    it('should return undefined with negative tip amount', function () {
      tipAmtInput.value = '-20';

      submitPaymentInfo();

      expect(Object.keys(allPayments).length).toEqual(0);
      expect(createCurPayment()).toBe(undefined);
    });
    it('should return billAmt and tipAmt as strings', function () {
      submitPaymentInfo();

      expect(
        typeof allPayments['payment1'].billAmt &&
          typeof allPayments['payment1'].tipAmt
      ).toBe('string');
    });
    it('should return tipPercent as a number', function () {
      submitPaymentInfo();

      expect(typeof allPayments['payment1'].tipPercent).toBe('number');
    });
  });

  // describe('appendPaymentTable tests', function () {
  //   it('should not create a new table row if allPayments is empty', function () {
  //     allPayments = {};
  //     expect(Object.keys(allPayments).length).toEqual(0);
  //     expect(paymentTable.hasChildNodes()).toBe(true);
  //   });
  // });
  // describe('updateSummary tests', function () {
  //   it('should update summary table correctly', function () {
  //     createCurPayment();

  //     console.log(allPayments);

  //     expect(summaryTds[0].innerHTML).toEqual(
  //       `$${allPayments['payment1'].billAmt}`
  //     );
  //     expect(summaryTds[1].innerHTML).toEqual(
  //       `$${allPayments['payment1'].tipAmt}`
  //     );
  //     expect(summaryTds[2].innerHTML).toEqual(
  //       `${allPayments['payment1'].tipPercent}%`
  //     );
  //   });
  // });
  afterEach(function () {
    billAmtInput.value = '';
    tipAmtInput.value = '';
    serverTbody.innerHTML = '';
    summaryTds[0].innerHTML = '';
    summaryTds[1].innerHTML = '';
    summaryTds[2].innerHTML = '';

    if (allPayments) {
      for (let payment in allPayments) {
        let paymentNum = payment.slice(-1);
        let currPayment = document.querySelector(`#payment${paymentNum}`);
        currPayment.parentElement.replaceChildren();
      }
      paymentId = 0;
      allPayments = {};
    }
  });
});
