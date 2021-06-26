// Galactic Object
const galacticObject = {
  mercury: 0.24, 
  venus: 0.62 ,
  mars: 1.88,
  jupiter: 11.86 
}

export function galacticYears(planet, age) {
  let convertedAge = Math.floor(age / galacticObject[planet]);
  return convertedAge;
}

export class userInfo {
  constructor(name, age, lifestyle, country, activity, smoker) {
    this.name = name;
    this.age = age;
    this.lifestyle = lifestyle;
    this.country = country;
    this.activity = activity;
    this.smoker = smoker;
  }

  life(planet, age) {
   let life = this.lifestyle + this.country + this.activity + this.smoker;
   let lifeExpectancy = galacticYears(planet, age) + galacticYears(planet, life) + 70;
   return lifeExpectancy;
  }
}