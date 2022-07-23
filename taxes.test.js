describe('calculateTaxes tests', function () {
  it('should calculate lower-bracket taxes', function () {
    expect(calculateTaxes(10000)).toEqual(1500);
    expect(calculateTaxes(20000)).toEqual(3000);
  });
  it('should calculate higher-bracket taxes', function () {
    expect(calculateTaxes(50000)).toEqual(12500);
    expect(calculateTaxes(80000)).toEqual(20000);
  });
  // have to wrap these error tests in a seperate function bc of the error being thrown
  // arrow funcs are the easiest way to do this
  it('should reject invalid incomes', function () {
    expect(() => calculateTaxes('50000')).toThrowError();
    expect(() => calculateTaxes('afdsasad')).toThrowError();
    expect(() => calculateTaxes([])).toThrowError();
    expect(() => calculateTaxes(true)).toThrowError();
  });
});

describe('removeDupes tests', function () {
  it('should remove duplicates from an array', function () {
    expect(removeDupes([1, 1, 2, 2, 3, 4])).toEqual([1, 2, 3, 4]);
    expect(removeDupes([1, 2, 3])).toEqual([1, 2, 3]);
    expect(removeDupes([1, 2, 3])).toBeInstanceOf(Array);
  });
  it('should remove duplicates from a string', function () {
    expect(removeDupes('hellloo')).toEqual('helo');
    expect(removeDupes('hello')).toBeInstanceOf(String);
  });
});

describe('remove tests', function () {
  it('should remove value from array', function () {
    expect(remove([1, 2, 3, 4, 5, 6], 6)).not.toContain(6);
  });
});
describe('submitForm tests', () => {
  it('saves input val to usernames array', () => {
    input.value = 'chica33';
    submitForm();
    expect(usernames.length).toBe(1);
    expect(usernames).toContain('chica33');
  });
  it('saves long usernames', () => {
    input.value = 'i am a panda luver 33';
    submitForm();
    // expect it to be 1 bc we always reset back to 0 after each test
    expect(usernames.length).toBe(1);
  });
});
afterEach(() => {
  input.value = '';
  usernames = [];
});
