// Galactic Object
const galacticObject = {
  mercury: 0.24, 
  venus: 0.62 ,
  mars: 1.88,
  jupiter: 11.86 
}

export function galacticAge(planet, age) {
  let convertedAge = Math.floor(age / galacticObject[planet]);
  return convertedAge;
}
