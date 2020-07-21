// Задача 2. Про 9-ти этажный дом
document.querySelector(".button-2").addEventListener('click', () => {
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
});