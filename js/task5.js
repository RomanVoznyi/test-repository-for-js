// Задача 5. Про перестановку цифр в четырехзначном числе.
document.querySelector(".button-5").addEventListener('click', () => {
	let tempNumber = prompt("Введите целое положительное четырехзначное число");
	for (; Number.isNaN(Number(tempNumber)) || tempNumber.includes("-") || tempNumber.includes(".") || tempNumber.length !== 4;) {
		tempNumber = prompt("Введено некорректное значение или число не четырехзначное. Попробуйте еще раз");
	}
	const changeNumber = [];
	for (let i = 0; i < tempNumber.length; i += 2) {
		changeNumber[i] = tempNumber[i + 1];
		changeNumber[i + 1] = tempNumber[i];
	}

	console.log(`Из числа ${tempNumber} получилось число ${changeNumber.join("")}`);
	alert(`Из числа ${tempNumber} получилось число ${changeNumber.join("")}`);
});