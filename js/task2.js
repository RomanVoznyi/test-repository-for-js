// Задача 2. Про 9-ти этажный дом
document.querySelector(".button-2").addEventListener('click', () => {
	let tempNumber = prompt(`Введите номер квартиры`);
	for (; Number.isNaN(Number(tempNumber));) {
		tempNumber = prompt("Введено не числовое значение. Попробуйте еще раз");
	}
	const flat = Number(tempNumber);
	let message;

	if ((flat < 1) || (flat > 144)) {
		message = `В этом доме нет квартиры с номером \"${flat}\"`;
	} else {
		const entrance = Math.ceil(flat / 36);
		const floor = Math.ceil((flat - (entrance - 1) * 36) / 4);
		message = `Квартира номер \"${flat}\" находится в \"${entrance}\" подъезде на \"${floor}\" этаже`;
	}

	console.log(message);
	alert(message);
});