//set a global variable for the number to guess 
var targetNumber = 28;

//Add the title into the header tag
$("#title").html("<h1> The Crystal Collector</h2>");

//Add text to the screen inidcating what the target number is
$("#number-to-guess").text("Number to Guess: " + targetNumber);

var counter = 0;
//creating an array of the values that each crystal will have
var crystalWorth = [10, 8, 6, 2];

$("#crystal-1").html('<img src="assets/images/1.png">');
$("#crystal-2").html('<img src="assets/images/2.png">');
$("#crystal-3").html('<img src="assets/images/3.png">');
$("#crystal-4").html('<img src="assets/images/4.png">');


for (var i = 0; i < numberOptions.length; i++) {

var crsytalImages = $("<img>");

crsytalImages.addClass("crystal-images");
crsytalImages.attr("data-crystalvalue", numberOptions[i]);

}

//     // Each imageCrystal will be given a data attribute called data-crystalValue.
//     // This data attribute will be set equal to the array value.
//     imageCrystal.attr("data-crystalvalue", numberOptions[i]);

//     // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
//     $("#crystals").append(imageCrystal);
//   }

//   // This time, our click event applies to every single crystal on the page. Not just one.
//   $(".crystal-image").on("click", function() {

//     // Determining the crystal's value requires us to extract the value from the data attribute.
//     // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
//     // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
//     // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter

//     var crystalValue = ($(this).attr("data-crystalvalue"));
//     crystalValue = parseInt(crystalValue);
//     // We then add the crystalValue to the user's "counter" which is a global variable.
//     // Every click, from every crystal adds to the global counter.
//     counter += crystalValue;

//     // All of the same game win-lose logic applies. So the rest remains unchanged.
//     alert("New score: " + counter);

//     if (counter === targetNumber) {
//       alert("You win!");
//     }

//     else if (counter >= targetNumber) {
//       alert("You lose!!");
//     }

//   });