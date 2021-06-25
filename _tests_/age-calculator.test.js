import { galacticAge } from "../src/js/age-calculator.js";


describe('Galactic Age Converter', () => {

  test('should test that age is converted to mercury years', () => {
    expect(galacticAge('mercury', 10)).toEqual(41);
  });

  test('should test that age is converted to venus years', () => {
    expect(galacticAge('venus', 10)).toEqual(16);
  });

  test('should test that age is converted to mars years', () => {
    expect(galacticAge('mars', 10)).toEqual(5);
  });
})