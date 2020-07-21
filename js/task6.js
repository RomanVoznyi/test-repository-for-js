// Задача 6. Про счастливое 6-ти значное число
document.querySelector(".button-6").addEventListener('click', () => {
	let tempNumber = prompt("Введите шестизначное число");
	for (; Number.isNaN(Number(tempNumber)) || tempNumber.includes("-") || tempNumber.includes(".") || tempNumber.length !== 6;) {
		tempNumber = prompt("Введено некорректное значение или число не шестизначное. Попробуйте еще раз");
	}
	let leftSum = 0;
	let rightSum = 0;
	for (let i = 0; i < 3; i++) {
		leftSum += Number(tempNumber[i]);
		rightSum += Number(tempNumber[tempNumber.length - 1 - i]);
	}
	const happy = leftSum === rightSum ? "счастливый" : "не является счастливым билетом";

	console.log(`Билет номер ${tempNumber} - ${happy}`);
	alert(`Билет номер ${tempNumber} - ${happy}`);
});