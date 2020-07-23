// Задача 13. Про строку из символа
document.querySelector(".button-13").addEventListener('click', () => {
	let symbol = prompt("Введите любой символ");
	for (; symbol.length > 1;) {
		symbol = prompt("Введено слишком много значений. Попробуйте еще раз");
	}
	let size = prompt("Введите число символов, которые нужно вывести (целое положительное число)");
	for (; Number.isNaN(Number(size)) || size.includes("-") || size.includes(".");) {
		size = prompt("Введено некорректное значение. Попробуйте еще раз");
	}
	size = Number(size);
	let direction = prompt("Введите направление строки (1 - горизонтально; 2 - вертикально)");
	for (; Number.isNaN(Number(direction)) || (Number(direction) !== 1 && Number(direction) !== 2);) {
		direction = prompt("Введено некорректное значение. Попробуйте еще раз");
	}
	direction = Number(direction);
	let message = "";

	for (let i = 0; i < size - 1; i++) {
		message += direction === 1 ? symbol : `${symbol}\n`;
	}

	console.log(message);
	alert(message);
});