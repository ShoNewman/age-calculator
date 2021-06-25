import ageCalculator from "../src/js/age-calculator.js";

describe('ageCalculator', () => {

  test('should test that ageCalculator function exists and is linked properly to test', () => {

    expect(ageCalculator(10)).toEqual(10);
  });
})