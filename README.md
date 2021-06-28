# _Age Calculator_

#### _Web application where you can determine your age in earth year on 4 different planets _

#### By _**Shoshana Newman**_

## Technologies Used

* _HTML_
* _CSS_
* _Bootstrap_
* _JavaScript_
* _jQuery_
* _Git and Github_
* _NPM Run time Environment_
* _Jest Testing_

## Description

_This browser application allows a user to order a custom made pizza by selecting the size, type of crust, type of sauce and a variety of toppings. The price for the pizza is adjusted based on the user's selections._

## Setup/Installation Requirements

* _Navigate to: [Age Calculator](https://github.com/ShoNewman/age-calculator.git "Age Calculator")_
* _To clone and run this application you will need to have [Git](https://git-scm.com/"Git" "Git") installed on your system_
* _Then clone this repository [Repository](https://github.com/ShoNewman/age-calculator.git "Repository") to your computer using the following commands in your terminal:_
- Clone repository to your computer:
  - $ git clone https://github.com/ShoNewman/pizza-parlor.git
- Open the index.html in your browser
  - $ open index.html
* _Next install all dependencies by using the following commmand in your terminal:_
  - $ npm install
* _Finally start the live development server by using the following command in your terminal_
  - $ npm run start

## Known Bugs

* _The life expectancy is not adding the negative numbers correctly_

## License

_Copyright 2021 Shoshana Newman_

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


## Contact Information

_Shoshana Newman [sho.newman@gmail.com](mailto:sho.newman@gmail.com)_


------------------------------------------
Buisness Logic

1. Determine user's age based on planet's solar years

  -Create a galactic object housing all planets with corresponding earth years
  Earth: 365 days
  Mercury: 0.24 Earth Years
  Venus: 0.62 Earch Years
  Mars: 1.88 Earth Years
  Jupiter: 11.86 Earth Years
  -Compute age based on planet selected -> via method on that object?


2. Determine how many years a user has left to live on each planet

  -Collect info from user into a User Object:
  Lifestyle
  Country of Residence
  Activity Level
  Smoker Status
  -Determine life expectancy based on User Object 
    -Assign an increase/decrease in number of years to base year based on inputs
  -Convert life expectancy into solar years based on planet
    -use method to convert age here
  -Subtract current age from life expectacy based on planet
    -create a method to use with User Object

3. If user has lived past life expectancy return number of years past life expectancy
  
  -Create conditional statement checking to see if life expectancy is a negative number

