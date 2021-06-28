import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { galacticYears, UserInfo } from './js/age-calculator';

$(document).ready(function() {
$('#needs-validation').on('click', function(event) {
  event.preventDefault();

  let planet = $("#planet").val();
  let name = $("#name").val();
  let age = $("#age").val();
  let lifestyle = $("#lifestyle").val();
  let country = $("#country").val();
  let activity = $("#activity-level").val();
  let smoking = $("#smoking-status").val();
  console.log(smoking);
  
  let user = new UserInfo(name, age, lifestyle, country, activity, smoking); 
  console.log(user);

  let galacticAge = galacticYears(planet, age);
  console.log('age ' + galacticAge);
  let galacticLifeExpectancy = user.life();
  console.log('expectancy ' + galacticLifeExpectancy);


    $("#output").append(`<h5 class="card-title">${galacticAge}</h5`);
    $("#output").append(`<h5 class="card-title">${galacticLifeExpectancy}</h5`);

  
});

})






