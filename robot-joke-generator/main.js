const chat = document.getElementById("chat")
const jokeBtn = document.getElementById("joke-btn")
jokeBtn.addEventListener("click", generateJoke)

async function generateJoke() {
	jokeBtn.disabled = true;

	const message = createMessageElement("Hey Robot! Tell me a joke?")
	appendMessage(message)

	const joke = createMessageElement()
	setElementContent(joke, '<i class="fa-solid fa-ellipsis"></i>')
	appendMessage(joke)

	try {
		const res = await fetch("https://icanhazdadjoke.com/", {
			headers: {
				Accept: "application/json"
			}
		})
		const data = await res.json()
		console.log(data)
		setElementContent(joke, data.joke)
		jokeBtn.disabled = false
	} catch (error) {
		console.log({error})
	}
}

function createMessageElement(content) {
	const element = document.createElement("div")
	element.classList.add("message")
	if (content) {
		element.classList.add("response")
		setElementContent(element, content)
	} else {
		element.classList.add("joke")
	}

	return element
}

function setElementContent(element, content) {
	element.innerHTML = content
}

function appendMessage(element) {
	chat.appendChild(element)
}