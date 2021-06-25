// Galactic Object
const galacticObject = {
  mercury: 0.24, 
  venus: 0.62 ,
  mars: 1.88,
  jupiter: 11.86 
}

export default function ageCalculator(planet) {
  let planetAge = galacticObject[planet] * 365;
  return planetAge;
}