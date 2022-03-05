const container = document.querySelector("#grid-container");

for (i = 1; i <= 256; i++) {
	const div = document.createElement('div');
	div.textContent = i;
	container.appendChild(div);
}
