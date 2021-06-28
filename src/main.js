import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { galacticYears, UserInfo } from './js/age-calculator';

$(document).ready(function() {
$('#needs-validation').submit(function(event) {
  event.preventDefault();

  let planet = $("#planet").val();
  let name = $("#name").val();
  let age = parseInt($("#age").val());
  let lifestyle = Math.Number($("#lifestyle").val());
  let country = Math.Number($("#country").val());
  let activity = Math.Number($("#activity-level").val());
  let smoking = Math.Number($("#smoking-status").val());
  console.log(age);
  
  let user = new UserInfo(planet, name, age, lifestyle, country, activity, smoking); 
  console.log(user);

  let galacticAge = galacticYears(planet, age);
  
  let galacticLifeExpectancy = user.life(this.planet, this.age);
  


    $("#output").append(`<h5 class="card-title">Your Age on ${user.planet} is ${galacticAge}</h5`);
    $("#output").append(`<h5 class="card-title">Your life expectancy on ${user.planet} is ${galacticLifeExpectancy}</h5`);

  
});

})






