var jewels = [
    "opal",
    "ruby",
    "sapphire",
    "steven"
];
var randomNumber = $("#random-number");  // Number needed to be matched
var win = $("win");                      // How many times the user has won
var lose = $("lose");                    // How many times the user has lost
var gameAlert = $("game-alert");         // Display if won or lost
var score = $("score");                  // Display current user number
var winCount = 0;                        // Initial win count
var lossCount = 0;                       // Initial loss count
 
$(document).ready(function(){

    // Display how many times user has won or lost {not working}
    $(win).text(winCount);
    $(lose).text(lossCount);
    
    // Assign values to jewels {I think this is working}
    for (i = 0; i < jewels.length; i++){
        jewels[i] = Math.floor((Math.random() * 11) + 1)
    }
        console.log(jewels);








});