import ageCalculator from "../src/js/age-calculator.js";

describe('ageCalculator', () => {

  test('should test that ageCalculator return number of earth years for particular planet', () => {

    expect(ageCalculator('mercury')).toEqual(87.6);
  });
})