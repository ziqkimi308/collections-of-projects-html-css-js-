const allCounters = document.querySelectorAll(".counter")
const animationSpeed = 500

const udpdateCounter = (counter) => {
	// Fix value
	const targetCount = Number(counter.getAttribute("data-target"))
	const animationStep = targetCount / animationSpeed

	// Keep changing value
	let currentCount = Number(counter.textContent)
	
	if (currentCount < targetCount) {
		counter.textContent = currentCount + animationStep

		// setTimeout keeps calling updateCounter again and again until else statement
		setTimeout(()=>{
			udpdateCounter(counter)
		}, 1)
	} else {
		counter.textContent = targetCount
	}
}

allCounters.forEach((counter) => udpdateCounter(counter))