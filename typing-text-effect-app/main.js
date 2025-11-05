const span = document.getElementById("span")
const words = ["Fun", "Love", "the World", "Life", "True"]

let wordIndex = 0
let charIndex = 0

const typingEffect = () => {
	const currentWord = words[wordIndex]
	const currentChar = currentWord.slice(0, charIndex)
	span.textContent = currentChar

	// Continues writing current word till the end
	if (charIndex < currentWord.length) {
		charIndex++
		console.log(charIndex)
		setTimeout(typingEffect,100) // recursive

	} 
	// Afte a word finish wrote
	else {
		charIndex = 0
		// If current word is the last word in the words array, restart from the first again
		if (wordIndex >= words.length - 1) {
			wordIndex = 0
		} 
		// If current word is not the last word in word array, move through until the last word
		else {
			wordIndex++
		}
		setTimeout(typingEffect, 1000)
	}
}

typingEffect()