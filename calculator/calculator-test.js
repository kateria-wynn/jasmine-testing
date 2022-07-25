describe('calculateMonthlyPayment tests', function () {
  const values = { amount: 30000, years: 8, rate: 8 };

  afterEach(function () {
    const values = {};
  });

  it('should calculate the periodicInterestRate correctly', function () {
    expect(calculateMonthlyPayment(values)).toEqual(199.47);
  });
  it('should calculate the principleAmount correctly', function () {});
  it('should calculate totalPayments correctly', function () {});
  it('should return a result with 2 decimal places', function () {
    // ..
  });
  it('should return the monthlyPayment as a string', function () {});
  it('should calculate the totalPayments correctly', function () {});
  it('should throw an error when values are missing', function () {});
});
