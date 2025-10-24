const startBtn = document.getElementById("start-btn")
const stopBtn = document.getElementById("stop-btn")
const resultEl = document.getElementById("result")
let recognition;

// Don't chain with getElement because addEventListener always returns undefined
startBtn.addEventListener("click", () => {
	startConvert()
})

stopBtn.addEventListener("click", () => {
	stopConvert()
})

const startConvert = () => {
	startBtn.classList.add("pulse", "clicked-btn");
	stopBtn.classList.add("pulse", "clicked-btn");

	// Use Web Browser API
	if ("webkitSpeechRecognition" in window) {
		recognition = new webkitSpeechRecognition()
		setupRecognition(recognition)
		recognition.start()
		console.log("RECORDING START...")
	}

};

// Setup for webkitSpeechRecognition
const setupRecognition = (recognition) => {
	recognition.continuous = true
	recognition.interimResults = true
	recognition.lang = "en-US"
	recognition.onresult = (event) => {
		console.log("onresult triggered!");
		const { finalTranscript, interTranscript } = processResult(event.results)

		resultEl.innerHTML = finalTranscript + interTranscript
	}
}

const processResult = (result) => {
	let finalTranscript = ""
	let interTranscript = ""

	for (let i = 0; i < result.length; i++) {
		let transcript = result[i][0].transcript
		transcript = transcript.replace("\n", "<br>")

		if (result[i].isFinal) {
			finalTranscript += transcript
		} else {
			interTranscript += transcript
		}
	}

	return { finalTranscript, interTranscript }
}

const stopConvert = () => {
	startBtn.classList.remove("pulse", "clicked-btn");
	stopBtn.classList.remove("pulse", "clicked-btn");

	if (recognition) {
		recognition.stop()
		console.log("RECORDING STOPPED...")
	}
}