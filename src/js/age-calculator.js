// Galactic Object
const galacticObject = {
  mercury: 0.24, 
  venus: 0.62 ,
  mars: 1.88,
  jupiter: 11.86 
}

export function earthYears(planet) {
  let planetYears = galacticObject[planet] * 365;
  return planetYears;
}

export function galacticAge(planet, age) {
  let planetAge = earthYears(planet) * age;
  return planetAge;
}