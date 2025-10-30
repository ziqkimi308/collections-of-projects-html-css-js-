const text = document.getElementById("textarea")
const convertBtn = document.getElementById("convert-btn")

convertBtn.addEventListener("mousedown", textToAudio)

function textToAudio() {
	const speech = new SpeechSynthesisUtterance()

	speech.lang = "en-US"
	speech.text = text.value
	speech.volume = 1
	speech.rate = 1
	speech.pitch = 1

	speechSynthesis.speak(speech)
}