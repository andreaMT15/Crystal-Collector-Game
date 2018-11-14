//global variables
var targetNumber = Math.floor(Math.random() * (120 - 19) + 19);
var wins = 0;
var losses = 0;
var count = 0;
var crystalWorth = Math.floor(Math.random() * (12 - 1) + 1);
// var crystalWorth = [];

//Add the title into the header tag
$("#title").html("<h1> The Crystal Collector</h2>");

//Add text to the screen inidcating what the target number is

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
});

function resetGame() {
  targetNumber = Math.floor(Math.random() * (120 - 19) + 19);
  crystalWorth = Math.floor(Math.random() * (12 - 1) + 1);
  count = 0;
  $("#score").text("Your Score: ");
  $("#number-to-guess").text("Number to Guess: " + targetNumber);
  console.log(resetGamefunction());
}
function createsImages() {
  for (var i = 0; i < crystalWorth; i++) {
    var crystalImage = $("<img>");
    crystalImage.addClass("crystal-image");
    crystalImage.attr("src", imageList[i]);
    crystalImage.attr("data-crystalvalue", crystalWorth);
    // crystalImage.append(crystalWorth);
    // crystalWorth.push(Math.floor(Math.random() * (12 - 1) + 1));
    $("#crystals").append(crystalImage);
    // $("#crystals").append(crystalWorth);
  }
}
// $("#crystals").on("click", ".crystal-image", function() {
$(document).on("click", ".crystal-image", function() {
  var crystalNumbers = crystalWorth;
  console.log(crystalNumbers);
  count += crystalNumbers;
  $("#score").text("Your Score: " + count);

  if (count === targetNumber) {
    wins++;
    $("#wins").text("Wins: " + wins);
  } else if (count > targetNumber) {
    losses++;
    $("#losses").text("Losses: " + losses);
  }
  if (score >= targetNumber) {
    resetGame();
  }
});

createsImages();
