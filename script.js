var totalLevel = 0;
var modal = document.getElementById("theModal");
var span = document.getElementsByClassName("close")[0];

//Fill in Name
function getName()
{
  var name = prompt("What is your name?");
  document.getElementById("name").innerHTML = name;
}

/** 
* general function for what happens when a pot gets clicked
*/
function plantClicked(plant){
  const level = data[plant].level;
  const input = prompt("Question: " + data[plant].questions[level].question);
  const answer = data[plant].questions[level].answer;

  if(input == answer){
    /**
    Change the Plant!
    yes ma'am :0 
    */
    console.log(document.getElementById(plant).src);
    document.getElementById(plant).src = data[plant].images[level+1];
    console.log(document.getElementById(plant).src);
    //modalPopUp();
    data[plant].level++;
    updateLevel();
  }
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// span.onclick = function() {
//   modal.style.display = "none";
// }

function modalPopUp() {
  console.log("hiii");
  modal.style.display = "block"; //ERROR HERE - NULL VALUE FOR STYLE
  prompt("HI");
  prompt("No");
};


function changeSapling()
{
  // prompt("Hi");
  // document.getElementById("img").src = data[];
  // sapling.src = 'HackVioletSapling.png';

}

function updateLevel()
{
  totalLevel++;
  document.getElementById("level").innerHTML = "Level: " + totalLevel;
  
}
