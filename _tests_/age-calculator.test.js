import { galacticAge } from "../src/js/age-calculator.js";
import { userInfo } from "../src/js/age-calculator.js";


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

  test('should test that age is converted to mars years', () => {
    expect(galacticAge('jupiter', 10)).toEqual(0);
  });
});

describe('user info', () => {
  test('should test that user info object can be created from constructor', () => {
    let newUser = new userInfo('Sho', 10, 10, -10, -5, 20);
    expect(newUser.name).toEqual('Sho');
    expect(newUser.age).toEqual(10);
    expect(newUser.lifestyle).toEqual(10);
    expect(newUser.country).toEqual(-10);
    expect(newUser.activity).toEqual(-5);
    expect(newUser.smoker).toEqual(20);
  });
});