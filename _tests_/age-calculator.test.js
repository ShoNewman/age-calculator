import { galacticAge } from "../src/js/age-calculator.js";


describe('Galactic Age Converter', () => {

  test('should test that age is converted to planets years based on age and planet inputted', () => {

    expect(galacticAge('mercury', 10)).toEqual(41);
  });
})