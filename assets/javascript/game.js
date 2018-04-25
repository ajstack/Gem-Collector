var jewels = [
    "opal",
    "ruby",
    "sapphire",
    "steven"
];
//var randomNumber = $("#random-number");  // Number needed to be matched
var gameAlert = $("game-alert");         // Display if won or lost
var score = 0;                  // Display current user number
var winCount = 0;                        // Initial win count
var lossCount = 0;                       // Initial loss count
 
$(document).ready(function(){

    // Display how many times user has won or lost {I got this to work by getting rid of the variables and linking directly to the html}
    $("#win").text(winCount);
    $("#lose").text(lossCount);
    $("#score").text(score);
    
    // Assign values to jewels {I think this is working}
    for (i = 0; i < jewels.length; i++){
        jewels[i] = Math.floor((Math.random() * 11) + 1);
    }
        //console.log(jewels);
      
    // Pick random number to match
    randomNumber = Math.floor((Math.random() * 101) + 19);
    //console.log(randomNumber);

    // Display random number 
    $("#random-number").text(randomNumber);

    function reset(){
        for (i = 0; i < jewels.length; i++){
            jewels[i] = Math.floor((Math.random() * 11) + 1);
        }
        randomNumber = Math.floor((Math.random() * 101) + 19);
        $("#random-number").text(randomNumber);
    };

    function winner(){
        //Display "you win!" to #game-alert
        //winCount++
        //reset()
    };

    function loser(){
        //Display "you lose!" to #game-alert
        //lossCount++
        //reset()
    };

    $("opal").click(function(){

    });

});