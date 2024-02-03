var totalLevel = 0;
var modal = document.getElementByID("theModal");
var span = document.getElementsByClassName("close")[0];

document.getElementById("name").innerHTML = name;

//Fill in Name
function getName()
{
  var name = prompt("What is your name?");
  document.getElementById("name").innerHTML = name;
}


function plantClicked(plant){
  const level = data[0].level;
  const input = prompt("Question: " + data[0].questions[level].question);
  const answer = data[0].questions[level].answer;

  if(input == answer){
    data[0].level++;
    totalLevel++;
  }
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

span.onclick = function() {
  modal.style.display = "none";
}

function modalPopUp() {
  modal.style.display = "block";
  prompt("HI");
  prompt("No");
}

function updateLevel()
{
  totalLevel++;
  document.getElementById("level").innerHTML = "Level: " + totalLevel;
  
}
