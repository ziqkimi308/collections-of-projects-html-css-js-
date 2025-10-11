// Set images
// Random number 1-6
let randomNumber1 = Math.ceil(Math.random() * 6);
let randomNumber2 = Math.ceil(Math.random() * 6);

// randomImage
let randomImage1 = "./images/dice" + randomNumber1 + ".png";
let randomImage2 = "./images/dice" + randomNumber2 + ".png";

// Set image
let image1 = document.querySelectorAll("img")[0].setAttribute("src", randomImage1)
let image2 = document.querySelectorAll("img")[1].setAttribute("src", randomImage2)

// Set Text
if (randomImage1 > randomImage2) {
	document.querySelector("h1").innerHTML = "Player 1️⃣ Wins!"
}
else if (randomImage2 > randomImage1) {
	document.querySelector("h1").innerHTML = "Player 2️⃣ Wins!"
}
else {
	document.querySelector("h1").innerHTML = "Draw..."
}