const container = document.querySelector("#grid-container");

for (i = 1; i <= 256; i++) {
	const div = document.createElement('div');
	div.classList.add("grid-item");
	div.textContent = i;
	container.appendChild(div);

	div.addEventListener('mouseover', () => {
		div.classList.add("color");
	});
}
