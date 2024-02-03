var totalLevel = 0;
document.getElementById("name").innerHTML = name;

//Fill in Name
function getName()
{
  var name = prompt("What is your name?");
  document.getElementById("name").innerHTML = name;
}

var levels = [0, 0, 0, 0, 0, 0];

//code plant
function codePlant() {
  const questions = ["1?", "2?", "3?"];
  prompt("Question: " + questions[0] + totalLevel);

  totalLevel++;  
}
