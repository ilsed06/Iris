var lives = 3;
var totalLevel = 0;
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
  //I'll find questions for the trivia bit sounds good
// can i delete modal stuff? Yeah
  
  //check that the plant is not fully bloomed && check level requirement
  if((level < 3) && (level > 0) && (lives > 0)){ 
    //ask the question
    const input = prompt("Question: " + data[plant].questions[level].question);
    const answer = data[plant].questions[level].answer;
    
    //check validity of answer
    if(input.toUpperCase() == answer.toUpperCase()){
      //changes image of plant
      document.getElementById(plant).src = "images/" + data[plant].images[level];

      //share info
      alert(data[plant].questions[level].info);
      
      data[plant].level++;
      updateLevel(data[plant].level);

      
    }
    else if ((input != "") && (input != null))
    {
      //incorrect answer loses a life (empty answers don't count)
      removeLife();
    }
  }
  //congrats popup if in full bloom
  if (level == 3){
    alert("Congrats! Your" + data[plant].type +" plant is in full bloom! :)");
    data[plant].level++;
    }
  else if (level > 3)
  {
    //Gives links and helps about certain topics!
    if (document.getElementById('modal-content').style.display == "none")
      {
        document.getElementById('sectionTitle').innerHTML = data[plant].title;
        document.getElementById('description').innerHTML = data[plant].info;
        document.getElementById('modal-content').style.display = "block";
        document.getElementById('seed-container').style.display = "none";
      }
      else
      {
        document.getElementById('sectionTitle').innerHTML = "Seeds";
        document.getElementById('modal-content').style.display = "none";
        document.getElementById('seed-container').style.display = "grid";
  }
  }
}

/** 
* function to remove lives
*/
function removeLife()
{
  lives--;
  if (lives == 2)
  {
    document.getElementById('heart').src = "images/HackVioletHeartTwo.png";
  }
  else if (lives == 1)
  {
    document.getElementById('heart').src = "images/HackVioletHeartOne.png";
  }
  else
  {
    //Failure 
    document.getElementById('heart').style.display = "none";
    document.getElementById('fail').innerHTML = "Try Again!"; 
  }
  
}

/** 
Makes pot appear
*/
function codeClicked(seed, plant){

  //check that plant is unlocked
  if ((data[seed].unlockLevel <= totalLevel) && (lives > 0))
  {
      //Make sure to check if seeds has already been clicked
      if (document.getElementById(plant).style.opacity == "1")
      {
        alert("You already answered this. Click on a flower pot to answer more questions and help your plant grow");
      }
      else
      {
        //ask first question to plant seed
        const input = prompt("Question: " + data[seed].questions[0].question);
        const answer = data[seed].questions[0].answer;

        //check validity of answer
        if(input.toUpperCase() == answer.toUpperCase()){
          //changes image of plant
          document.getElementById(plant).style.opacity = "1";
          document.getElementById(seed).style.display = "block";
          //report unlock to user
          alert(data[seed].type + " unlocked!\n" + data[seed].questions[0].info);
          //update levels
          data[seed].level++;
          updateLevel(data[seed].level);
        }
        else if ((input != "") && (input != null))
        {
          //incorrect answer loses a life (empty answers don't count)
          removeLife();
        }
      }
  }
  else if (lives > 0)
  {
    alert("Unlock Level is " + data[seed].unlockLevel);
  }
  else
  {
    alert("Please refresh the page to try again.");
  }
  
}

/** 
* update total level based on level of the plant
*/
function updateLevel(level)
{
  totalLevel+= level;
  document.getElementById("level").innerHTML = "Level: " + totalLevel;
  
}
