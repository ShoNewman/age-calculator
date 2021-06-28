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
   console.log(life);
   let lifeExpectancy = galacticYears(this.planet, this.age) + galacticYears(this.planet, life) + 70;
   console.log('years: ' + galacticYears(planet, age));
   console.log('planet' + galacticYears(planet, life));
   return lifeExpectancy;
  }
}