//global variables
var targetNumber = Math.floor(Math.random() * (120 - 19) + 19);
var wins = 0;
var losses = 0;
var count = 0;
var crystalWorth = Math.floor(Math.random() * (12 - 1) + 1);

//Add the title into the header tag
$("#title").html("<h1> The Crystal Collector</h2>");

//Add text to the screen inidcating what the target number is
$("#number-to-guess").text("Number to Guess: " + targetNumber);

//creating an array for the crystal images
var imageList = [
  "assets/images/1.png",
  "assets/images/2.png",
  "assets/images/3.png",
  "assets/images/4.png"
];

function createsImages() {
  for (var i = 0; i < crystalWorth; i++) {
    var crystalImage = $("<img>");
    crystalImage.addClass("crystal-image");
    crystalImage.attr("src", imageList[i]);
    crystalImage.attr("data-crystalvalue", crystalWorth);
    $("#crystals").append(crystalImage);
  }
}
// $("#crystals").on("click", ".crystal-image", function() {
$(document).on("click", ".crystal-image", function() {
  var crystalNumbers = crystalWorth;
  // crystalNumbers = parseInt(crystalNumbers);
  console.log(crystalNumbers);
  count += crystalNumbers;
  $("#score").text("Your Score: " + count);

  if (count === targetNumber) {
    alert("You Win");
  } else if (count > targetNumber) {
    alert("You Lose!");
  }
});

createsImages();
