import { earthYears } from "../src/js/age-calculator.js";
import { galacticAge } from "../src/js/age-calculator.js";

describe('Galactic Age Converter', () => {

  test('should test that earthYears returns number of earth years for particular planet', () => {

    expect(earthYears('mercury')).toEqual(87.6);
  });

  test('should test that a users age will be converted to the selected planets years', () => {

    expect(galacticAge('mercury', 10)).toEqual(876);
  });
})