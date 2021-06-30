import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { UserInfo, galacticYears } from './js/age-calculator.js';

$('#submit').on("click", function (event) {
  event.preventDefault();
  console.log('clicked');


  let planet = $("#planet").val();
  let name = $("#name").val();
  let age = parseInt($("#age").val());
  let lifestyle = parseInt($("#lifestyle").val());
  let country = parseInt($("#country").val());
  let activity = parseInt($("#activity-level").val());
  let smoking = parseInt($("#smoking-status").val());

  let user = new UserInfo(planet, name, age, lifestyle, country, activity, smoking);
  console.log(user);

  let galacticAge = galacticYears(planet, age);
  console.log(galacticAge);
  let galacticLifeExpectancy = user.life(this.planet, this.age);
  console.log(galacticLifeExpectancy)

  $("#output").show();
  $("#output").append(`<h5 class="card-title">Your Age on ${user.planet} is ${galacticAge} years old</h5`);
  $("#output").append(`<h5 class="card-title">Your life expectancy on ${user.planet} is ${galacticLifeExpectancy} years old</h5`);

});