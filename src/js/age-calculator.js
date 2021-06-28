// Galactic Object
export const galacticObject = {
  mercury: 0.24, 
  venus: 0.62 ,
  mars: 1.88,
  jupiter: 11.86 
};

export function galacticYears(planet, age) {
  let convertedAge = Math.floor(age / galacticObject[planet]);
  return convertedAge;
}

//Galactic Years
export class UserInfo {
  constructor(planet, name, age, lifestyle, country, activity, smoker) {
    this.planet = planet;
    this.name = name;
    this.age = age;
    this.lifestyle = lifestyle;
    this.country = country;
    this.activity = activity;
    this.smoker = smoker;
  }

  life(planet, age) {
   let life = this.lifestyle + this.country + this.activity + this.smoker;
   let lifeExpectancy = galacticYears(this.planet, this.age) + galacticYears(this.planet, life) + 70;
   return lifeExpectancy;
  }
}