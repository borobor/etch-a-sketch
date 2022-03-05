const container = document.querySelector("#grid-container");

for (i = 1; i <= 256; i++) {
	const div = document.createElement('div');
	div.classList.add("grid-item");
	div.textContent = i;
	container.appendChild(div);
}

const gridItems = document.querySelectorAll(".grid-item");

gridItems.forEach(item => {
	item.addEventListener('mouseover', () => {
		item.classList.add("color");
	});
});

const resetButton = document.querySelector(".reset");
resetButton.addEventListener('click', resetGrid);

function resetGrid() {
	gridItems.forEach(item => {
		item.classList.remove("color");
	})
}
