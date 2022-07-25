describe('calculateMonthlyPayment tests', function () {
  beforeEach(function () {
    values = { amount: 30000, years: 8, rate: 8 };
  });

  afterEach(function () {
    values = {};
  });

  it('should calculate the periodicInterestRate correctly', function () {
    expect(
      calculateMonthlyPayment({ amount: 30000, years: 8, rate: 14 })
    ).toEqual('349.67');
  });
  it('should calculate the principleAmount correctly', function () {
    expect(
      calculateMonthlyPayment({ amount: 100000, years: 8, rate: 8 })
    ).toEqual('666.14');
  });
  it('should calculate totalPayments correctly', function () {
    expect(
      calculateMonthlyPayment({ amount: 100000, years: 5, rate: 8 })
    ).toEqual('666.00');
  });
  it('should calculate the monthlyPayment correctly', function () {
    expect(calculateMonthlyPayment(values)).toEqual('199.47');
  });
  it('should return a result with 2 decimal places', function () {
    expect(calculateMonthlyPayment(values).indexOf('.')).toEqual(3);
  });
  it('should return the monthlyPayment as a string', function () {
    expect(typeof calculateMonthlyPayment(values)).toEqual('string');
  });
  it('should throw an error when values are missing', function () {
    expect(() => calculateMonthlyPayment()).toThrowError();
  });
  it('should return 0 when loan amount is 0', function () {
    expect(
      calculateMonthlyPayment((values = { amount: 0, years: 8, rate: 8 }))
    ).toEqual('0');
  });
});
