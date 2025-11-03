const openModalBtn = document.getElementById("open-modal")
const modal = document.querySelector(".modal")
const modalOverlay = document.querySelector(".modal-overlay")
const modalContent = document.querySelector(".modal-content")

openModalBtn.addEventListener("click", () => {
	modal.classList.add("open")
})

modal.addEventListener("click", () => {
	modal.classList.remove("open")
})