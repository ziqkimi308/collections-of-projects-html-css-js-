// Create function to play sound
function makeSound(key) {
	switch (key) {
		case "w":
			let tom1 = new Audio("./sounds/tom-1.mp3");
			tom1.play();
			break;

		case "a":
			let tom2 = new Audio("./sounds/tom-2.mp3");
			tom2.play();
			break;

		case "s":
			let tom3 = new Audio("./sounds/tom-3.mp3");
			tom3.play();
			break;

		case "d":
			let tom4 = new Audio("./sounds/tom-4.mp3");
			tom4.play();
			break;

		case "j":
			let snare = new Audio("./sounds/snare.mp3");
			snare.play();
			break;

		case "k":
			let crash = new Audio("./sounds/crash.mp3");
			crash.play();
			break;

		case "l":
			let kick = new Audio("./sounds/kick-bass.mp3");
			kick.play();
			break;

		default: console.log()
	}
}

// Detect key pressed
document.addEventListener("keydown", function(event) {
	makeSound(event.key);
	buttonAnimation(event.key);
})

// Detect button clicked
let drumButton = document.querySelectorAll(".drum");
// Apply evenListener to each elements with drum class
for (let i=0; i < drumButton.length; i++) {
	// The function() wraps makeSound(this.innerHTML) so it only executes when the click event is triggered.
	drumButton[i].addEventListener("click", function() {
		makeSound(this.innerHTML)
		buttonAnimation(this.innerHTML)
	})
}

// Create animation when clicked
function buttonAnimation(key) {
	// Find clicked button class
	let activeButton = document.querySelector("." + key);
	// Add more class to the button
	activeButton.classList.add("pressed");
	// Remove the class after certain time
	setTimeout(function() {
		activeButton.classList.remove("pressed");
	}, 100);
}

/*
The reason we don't assigned event listener using loop to the part when key pressed just like we assigned
even listener to the part when button clicked is because the "keydown event" is a global event for the entire document.

Key Differences:
Button Click (Mouse Event) |	Keypress (Keyboard Event)
Applies to specific elements (buttons).	| Applies globally (entire document).
Needs a loop to attach listeners to each button. | One listener can handle all keypresses.
Listener waits for a mouse click. | Listener waits for a key press.
*/
