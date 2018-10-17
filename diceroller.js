//Reina Irizarry,Web & Distributed Programming, project3,Fall 2018//

//This function rolls the dice//
function rollDice(){
  var die1 = document.getElementById("die1");//targets the variables since we use getelement id
  var die2 = document.getElementById("die2");
  var status = document.getElementById("status");
  var d1 = Math.floor(Math.random() * 6) + 1;//multiply decimal value use math floor on random  number for whole number
  var d2 = Math.floor(Math.random() * 6) + 1;
  var diceTotal = d1 + d2; // adds the dice totals
  die1.innerHTML = d1; //random number from 1-6
  die2.innerHTML = d2;
  status.innerHTML = "You rolled "+diceTotal+"."; //tells us what is rolled
  if(d1 == d2){//if these are equal, then doubles 
    status.innerHTML += "  DOUBLES! You get a free turn!!";
      }
  }
