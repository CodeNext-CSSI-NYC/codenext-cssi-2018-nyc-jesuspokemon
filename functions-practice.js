var readline = require("readline-sync");

function doTheThing() {
  var theThing = readline.question("What do you want me to do?: ");
  if(theThing == "eat") {
    console.log("Computers can't eat!");
  } else {
    console.log("I'm sorry, I don't understand you!");
  }
}

doTheThing();
