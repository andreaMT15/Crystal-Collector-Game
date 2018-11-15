//global variables
var targetNumber = Math.floor(Math.random() * (120 - 19) + 19);
var wins = 0;
var losses = 0;
var count = 0;
var crystalWorth = Math.floor(Math.random() * (12 - 1) + 1);

//Add the title into the header tag
$("#title").html("<h1> The Crystal Collector</h2>");

//Display the Instructions on the screen
$("#instructions").html(
  "<p>You will be given a random number at the start of the game.</p><p> There are four crystals below. By clicking on a crystal you will add a specific amount of points to your total score.</p><p> You win the game by matching your total score to a random number, you lose the game if your total score goes above the random number.</p><p> The value of each crystal is hidden from you until you click on it.</p><p> Each time the game starts, the game will change the values of each crystal.</p> "
);

//creating an array for the crystal images
var imageList = [
  "assets/images/1.png",
  "assets/images/2.png",
  "assets/images/3.png",
  "assets/images/4.png"
];

$(document).ready(function() {
  $("#score").text("Your Score: ");
  $("#wins").text("Wins: ");
  $("#losses").text("Losses: ");
  $("#number-to-guess").text("Number to Guess: " + targetNumber);
  $("#score").addClass("bottom");
  $("#wins").addClass("bottom");
  $("#losses").addClass("bottom");
  $("#number-to-guess").addClass("bottom");
});

function resetGame() {
  targetNumber = Math.floor(Math.random() * (120 - 19) + 19);
  count = 0;
  $("#score").text("Your Score: ");
  $("#number-to-guess").text("Number to Guess: " + targetNumber);
  // console.log("Reset Game Is Working") + resetGame;
}
function createsImages() {
  for (var i = 0; i < 4; i++) {
    var crystalImage = $("<img>");
    crystalImage.addClass("crystal-image");
    crystalImage.attr("src", imageList[i]);
    crystalWorth = Math.floor(Math.random() * (12 - 1) + 1);
    // console.log("Crystal Worth: " + crystalWorth);
    crystalImage.attr("data-crystalvalue", crystalWorth);
    $("#crystals").append(crystalImage);
    $("img").attr("id", function(arr) {
      return "id" + arr;
    });
  }
}
$(document).on("click", ".crystal-image", function() {
  var crystalNumbers = $(this).data("crystalvalue");
  // console.log("Crystal Numbers: " + crystalNumbers);
  count += crystalNumbers;
  $("#score").text("Your Score: " + count);

  if (count === targetNumber) {
    wins++;
    $("#wins").text("Wins: " + wins);
  } else if (count > targetNumber) {
    losses++;
    $("#losses").text("Losses: " + losses);
  }
  if (count >= targetNumber) {
    resetGame();
    // console.log("score reset");
  }
});

createsImages();
