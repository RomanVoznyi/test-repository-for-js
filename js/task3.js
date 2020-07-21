// Задача 3. Про високосный год
document.querySelector(".button-3").addEventListener('click', () => {
	let tempNumber = prompt(`Введите год`);
	for (; Number.isNaN(Number(tempNumber)) || tempNumber.includes(".") || tempNumber.includes("-") || Number(tempNumber) === 0;) {
		tempNumber = prompt("Введено некорректное значение. Попробуйте еще раз");
	}
	const year = Number.parseInt(tempNumber);
	let flag = false;
	if (year % 4 === 0) {
		flag = true;
		if (year % 100 === 0) { flag = false; }
		if (year % 400 === 0) { flag = true; }
	}
	console.log(flag === true ? `Год \"${year}\" високосный (366 дней)` : `Год \"${year}\" не високосный (365 дней)`);
	alert(flag === true ? `Год \"${year}\" високосный (366 дней)` : `Год \"${year}\" не високосный (365 дней)`);
});