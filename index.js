document.querySelector(".button-one").addEventListener('click', taskOne);
document.querySelector(".button-two").addEventListener('click', taskTwo);

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


