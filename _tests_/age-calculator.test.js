import { galacticYears } from "../src/js/age-calculator.js";
import { UserInfo } from "../src/js/age-calculator.js";


describe('Galactic Age Converter', () => {

  test('should test that age is converted to mercury years', () => {
    expect(galacticYears('mercury', 10)).toEqual(41);
  });

  test('should test that age is converted to venus years', () => {
    expect(galacticYears('venus', 10)).toEqual(16);
  });

  test('should test that age is converted to mars years', () => {
    expect(galacticYears('mars', 10)).toEqual(5);
  });

  test('should test that age is converted to mars years', () => {
    expect(galacticYears('jupiter', 10)).toEqual(0);
  });
});

describe('user info', () => {
  let newUser;

  beforeEach(() => {
    newUser = new UserInfo('mercury', 'Sho', 10, -10, -10, -5, 20);
  });

  test('should test that user info object can be created from constructor', () => {
    expect(newUser.planet).toEqual('mercury');
    expect(newUser.name).toEqual('Sho');
    expect(newUser.age).toEqual(10);
    expect(newUser.lifestyle).toEqual(-10);
    expect(newUser.country).toEqual(-10);
    expect(newUser.activity).toEqual(-5);
    expect(newUser.smoker).toEqual(20);
  });

  test('should test that lifeExpectancy method returns a value that increases or decreases the life expectancy based on user info', () => {
    expect(newUser.life(newUser.planet, newUser.age)).toEqual(90);
  })
 
});