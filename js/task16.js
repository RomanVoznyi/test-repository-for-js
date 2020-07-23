// Задача 16. Про амеб
document.querySelector(".button-16").addEventListener('click', () => {
	let count = 1;
	let message = "В начале была 1 амеба\n";
	for (let hour = 3; hour <= 24; hour += 3) {
		count = Math.pow(2, hour / 3);
		message += `Через часов - ${hour}, амеб будет - ${count} \n`
	}

	console.log(message);
	alert(message);
});