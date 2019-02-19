//global variables
var targetNumber = Math.floor(Math.random() * (120 - 19) + 19);
var wins = 0;
var losses = 0;
var count = 0;
var crystalWorth = 0;

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
  $("#crystals").empty();
  createsImages();
}

function createsImages() {
  for (var i = 0; i < 4; i++) {
    var crystalImage = $("<img>");
    crystalImage.addClass("crystal-image");
    crystalImage.attr("src", imageList[i]);
    crystalWorth = Math.floor(Math.random() * (12 - 1) + 1);
    crystalImage.attr("data-crystalvalue", crystalWorth);
    $("#crystals").append(crystalImage);
    $("img").attr("id", function(arr) {
      return "id" + arr;
    });
  }
}
$(document).on("click", ".crystal-image", function() {
  var crystalNumbers = $(this).data("crystalvalue");
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
  }
});

createsImages();
