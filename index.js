document.querySelector(".button-one").addEventListener('click', taskOne);
document.querySelector(".button-two").addEventListener('click', taskTwo);
document.querySelector(".button-three").addEventListener('click', taskThree);

function taskOne() {
	// Задача про максимум из 4-х чисел
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
	console.log(`Максимальным числом в массиве [${arrayNumb}] является число \"${maxNumber}\"`);
	alert(`Максимальным числом в массиве [${arrayNumb}] является число \"${maxNumber}\". \nВы также можете увидеть результат в консоли.`);
}

function taskTwo() {
	// Задача про 9-ти этажный дом
	let tempNumber = prompt(`Введите номер квартиры`);
	for (; Number.isNaN(Number(tempNumber));) {
		tempNumber = prompt("Введено не числовое значение. Попробуйте еще раз");
	}

	const flat = Number(tempNumber);
	if ((flat < 1) || (flat > 144)) {
		console.log(`В этом доме нет квартиры с номером \"${flat}\"`);
		alert(`В этом доме нет квартиры с номером \"${flat}\"`);
	} else {
		const entrance = Math.ceil(flat / 36);
		const floor = Math.ceil((flat - (entrance - 1) * 36) / 4);

		console.log(`Квартира номер \"${flat}\" находится в \"${entrance}\" подъезде на \"${floor}\" этаже`);
		alert(`Квартира номер \"${flat}\" находится в \"${entrance}\" подъезде на \"${floor}\" этаже. \nВы также можете увидеть результат в консоли.`);
	}
}

function taskThree() {
	// Задача про високосный год
	let tempNumber = prompt(`Введите год`);
	for (; Number.isNaN(Number(tempNumber)) || tempNumber.includes(".") || tempNumber.includes("-") || Number(tempNumber) === 0;) {
		tempNumber = prompt("Введено некорректное значение. Попробуйте еще раз");
	}

	const year = Number.parseInt(tempNumber);
	let flag = false;
	if (year % 4 === 0) {
		flag = true;
		if (year % 100 === 0) {
			flag = false;
		}
		if (year % 400 === 0) {
			flag = true;
		}
	}

	if (flag === true) {
		console.log(`Год \"${year}\" високосный (366 дней)`);
		alert(`Год \"${year}\" високосный (366 дней)`);
	} else {
		console.log(`Год \"${year}\" не високосный (365 дней)`);
		alert(`Год \"${year}\" не високосный (365 дней)`);
	}
}
