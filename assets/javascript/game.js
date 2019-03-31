var jewels = [                           //I'm not sure if this array thing is going to work the way I want it to...
    "opal",
    "ruby",
    "sapphire",
    "steven"
]

var score = 0;                           // Display current user number
var winCount = 0;                        // Initial win count
var lossCount = 0;                       // Initial loss count
 
$(document).ready(function(){

    // Display how many times user has won or lost 
    $("#win").text(winCount);
    $("#lose").text(lossCount);
    $("#score").text(score);
    
    // Assign values to jewels 
    for (var i = 0; i < jewels.length; i++){
        jewels[i] = Math.floor((Math.random() * 11) + 1);
    }
        console.log(jewels[0]);
        console.log(jewels[1]);
        console.log(jewels[2]);
        console.log(jewels[3]);
      
    // Pick random number to match
    randomNumber = Math.floor((Math.random() * 101) + 19);

    // Display random number 
    $("#random-number").text(randomNumber);

    function reset(){
        for (var i = 0; i < jewels.length; i++){
            jewels[i] = Math.floor((Math.random() * 11) + 1);
        }
        randomNumber = Math.floor((Math.random() * 101) + 19);
        $("#random-number").text(randomNumber);
        score = 0;
        $("#score").text(score);
    };

    function winner(){
        //Display "you win!" to #game-alert
        $("#game-alert").text("You win!")
        //winCount++
        winCount++
        //Display updated win count
        $("#win").text(winCount);
        //reset()
        reset();
    };

    function loser(){
        //Display "you lose!" to #game-alert
        $("#game-alert").text("You lose!")
        //lossCount++
        lossCount++
        //Display updated loss count
        $("#lose").text(lossCount);
        //reset()
        reset();
    };

    function checkScore(){
        if (score === randomNumber) {
            winner();
        } else if (score > randomNumber) {
            loser();
        }
    };

    $("#opal").click(function(){
        score = jewels[0] + score;
        $("#score").text(score);
        checkScore();
    });

    $("#ruby").click(function(){
        score = jewels[1] + score;
        $("#score").text(score);
        checkScore();
    });

    $("#sapphire").click(function(){
        score = jewels[2] + score;
        $("#score").text(score);
        checkScore();
    });    

    $("#steven").click(function(){
        score = jewels[3] + score;
        $("#score").text(score);
        checkScore();
    });

   







});