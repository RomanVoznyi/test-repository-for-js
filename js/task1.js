// Задача 1. Про максимум и минимум из 4-х чисел
document.querySelector(".button-1").addEventListener('click', () => {
	const arrayNumb = [];
	let tempNumber;
	for (let i = 0; i < 4; i++) {
		tempNumber = prompt(`Введите ${i + 1} число`);
		for (; Number.isNaN(Number(tempNumber));) {
			tempNumber = prompt("Введено не числовое значение. Попробуйте еще раз");
		}
		arrayNumb[i] = Number(tempNumber);
	}
	const maxNumber = Math.max(...arrayNumb);
	const minNumber = Math.min(...arrayNumb);

	const message = `В массиве [${arrayNumb}] максимум - это число \"${maxNumber}\", минимум - это число \"${minNumber}\"`;

	console.log(message);
	alert(message);
});