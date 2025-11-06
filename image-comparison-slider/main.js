const container = document.querySelector(".container")
const slider = document.querySelector(".slider")
const before = document.querySelector(".img-container-before")
const after = document.querySelector(".img-container-after")

let isDragging = false
let isAnimating = false

const dragSlider = (e) => {
	if (!isAnimating) {
		isAnimating = true
		requestAnimationFrame(() => {
			let x = e.clientX - container.getBoundingClientRect().left
			let size = container.offsetWidth

			// Clamp x within bounds
			x = Math.max(0, Math.min(x, size))

			// Edge snapping
			if (x < 30) x = 0
			if (x + 30 > size) x = size

			after.style.width = x + "px"
			slider.style.left = x + "px"

			isAnimating = false
		})
	}
}

slider.addEventListener("pointerdown", () => {
	isDragging = true
	slider.setPointerCapture(pointerId)
})

document.addEventListener("pointerup", () => {
	isDragging = false
})

container.addEventListener("pointermove", (e) => {
	if (isDragging) dragSlider(e)
})
