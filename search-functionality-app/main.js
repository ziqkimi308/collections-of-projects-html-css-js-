const searchInput = document.getElementById("search-input")
const itemList = document.querySelectorAll("#item-list li")

searchInput.addEventListener("input", () => {
	const searchText = searchInput.value.toLocaleLowerCase()
	// for (let i=0; i<itemList.length; i++) {
	// 	const itemName = itemList[i].textContent.toLowerCase()
	// 	if (itemName.includes(searchText)) {
	// 		itemList[i].style.display = "block"
	// 	} else {
	// 		itemList[i].style.display = "none"
	// 	}
	// }
	itemList.forEach((item) => {
		const itemName = item.textContent.toLowerCase()
		item.style.display = itemName.includes(searchText) ? "block" : "none"
	})
})