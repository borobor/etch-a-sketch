const container = document.querySelector("#grid-container");

for (i = 1; i <= 256; i++) {
	const div = document.createElement('div');
	div.classList.add("grid-item");
	container.appendChild(div);
}

let gridItems = document.querySelectorAll(".grid-item");
draw();

const resetButton = document.querySelector(".reset");
resetButton.addEventListener('click', () => {
	createNewGrid();
});


function createNewGrid() {
	userPrompt = +prompt("Enter new grid size:", "60 max");
	if (userPrompt > 60 || isNaN(userPrompt) || userPrompt == 0) return;
	while (container.firstChild) {
		container.removeChild(container.lastChild);
	}
	for (i = 1; i <= userPrompt**2; i++) {
		const div = document.createElement('div');
		div.classList.add("grid-item");
		container.appendChild(div);
	}
	gridItems = document.querySelectorAll(".grid-item");
	container.style.cssText = `grid-template-columns: repeat(${userPrompt}, auto);`;
	resetGrid();
	draw();
};

function resetGrid() {
	gridItems.forEach(item => {
		item.classList.remove("color");
	})
};

function draw() {
gridItems.forEach(item => {
	item.addEventListener('mouseover', function(event) {
		randomColor();
	});
});
}

function blackColor() {
	event.target.classList.add("color");
}

function randomColor() {
	let rand = () => Math.random()*256;
	event.target.style.cssText = `background-color: rgb(${rand()}, ${rand()}, ${rand()})`;	
}
