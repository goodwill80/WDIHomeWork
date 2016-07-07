//To fill in answer in div id="basic-answer-alert"

//Basic Calculator

function results(){

  var fillInAnswer = document.getElementById('basic-answer-alert').textContent;
  var number1 = document.getElementById("basic-num-1").value;
  var number2 = document.getElementById("basic-num-2").value;
  var operation = document.getElementById('basic-operation').value;

  if (operation === "+"){
    var answer = parseInt(number1) + parseInt(number2);
    fillInAnswer = answer;
    document.getElementById('basic-answer-alert').textContent = answer;
  }
  else if (operation === "-"){
    var answer1 = parseInt(number1) - parseInt(number2);
    fillInAnswer = answer1;
    document.getElementById('basic-answer-alert').textContent = answer1;
  }
  else if (operation === "*"){
    var answer2 = parseInt(number1) * parseInt(number2);
    fillInAnswer = answer2;
    document.getElementById('basic-answer-alert').textContent = answer2;
  }
  else if (operation === "/"){
    var answer3  = parseInt(number1) / parseInt(number2);
    fillInAnswer = answer3;
    document.getElementById('basic-answer-alert').textContent = answer3;
  }
}

document.getElementById("basic-calc").addEventListener('click', results);

//Cost Calculator
function results2 (){
  var distance = document.getElementById("trip-distance").value;
  var mpg = document.getElementById("trip-mpg").value;
  var cost = document.getElementById("trip-cost").value;
  var speed = document.getElementById("trip-speed").value;
  var fillInAnswer2 = document.getElementById('trip-answer-alert').textContent;

  if(parseInt(speed) < 60) {
    var response = (parseInt(distance)/parseInt(mpg))*parseInt(cost);
    fillInAnswer2 = response;
    document.getElementById('trip-answer-alert').textContent = response;
  }
  else if(parseInt(speed) > 60){
    var response1 = (parseInt(distance) / (parseInt(mpg) - (parseInt(speed) - 60) * 2) * parseInt(cost));
    fillInAnswer2 = response1;
    document.getElementById('trip-answer-alert').textContent = response1;
  }
}

document.getElementById("trip-calc").addEventListener('click', results2);


//BMI Calculator
function results3(){
  var mass = document.getElementById('bmi-mass').value;
  var height = document.getElementById('bmi-height').value;
  var fillInAnswer2 = document.getElementById('bmi-answer-alert').innerHTML;
  //( Weight in Pounds / ( Height in inches x Height in inches ) ) x 703 - >1m = 39.3701
  var inches = parseInt(height) * 39.3701;
  // 0.9999988107kg = 2.20461999989109pounds
  var pounds = (2.20461999989109/0.9999988107) * parseInt(mass);
  var bmi = (pounds/(inches * inches)) * 703;
  fillInAnswer2 = bmi;
  document.getElementById('bmi-answer-alert').innerHTML = bmi;
}

document.getElementById('bmi-calc').addEventListener('click', results3);
