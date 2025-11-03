document.addEventListener("DOMContentLoaded", function () {
	const hueInput = document.getElementById("hue")
	const saturationInput = document.getElementById("saturation")
	const lightnessInput = document.getElementById("lightness")

	const hueValueSpan = document.getElementById("hue-value")
	const saturationValueSpan = document.getElementById("saturation-value")
	const lightnessValueSpan = document.getElementById("lightness-value")

	const colorDisplay = document.getElementById("color-display")
	const copyButton = document.getElementById("copy-button")

	hueInput.addEventListener("input", updateColor)
	saturationInput.addEventListener("input", updateColor)
	lightnessInput.addEventListener("input", updateColor)

	updateColor(); // run once after adding listeners

	function updateColor() {
		const hue = hueInput.value
		const saturation = saturationInput.value
		const lightness = lightnessInput.value

		const color = `hsl(${hue}, ${saturation}%, ${lightness}%)`
		colorDisplay.style.backgroundColor = color
		document.body.style.backgroundColor = color

		hueValueSpan.textContent = hue
		saturationValueSpan.textContent = saturation
		lightnessValueSpan.textContent = lightness
	}

	copyButton.addEventListener("click", copyToClipboard)

	function copyToClipboard() {
		const textToCopy = `hsl(${hueInput.value}, ${saturationInput.value}%, ${lightnessInput.value}%)`

		navigator.clipboard.writeText(textToCopy)
			.then(() => alert("Color successfully copied to the clipboard."))
			.catch((err) => console.error("Unable to copy the data.", err))
	}

})