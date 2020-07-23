// Задача 14. Про x,y,z и их замену в зависимости от их суммы
document.querySelector(".button-14").addEventListener('click', () => {
	let varX = prompt("Введите значение переменной X");
	for (; Number.isNaN(Number(varX));) {
		varX = prompt("Введено некорректное значение. Попробуйте еще раз");
	}
	varX = Number(varX);
	let varY = prompt("Введите значение переменной Y");
	for (; Number.isNaN(Number(varY));) {
		varY = prompt("Введено некорректное значение. Попробуйте еще раз");
	}
	varY = Number(varY);
	let varZ = prompt("Введите значение переменной Z");
	for (; Number.isNaN(Number(varZ));) {
		varZ = prompt("Введено некорректное значение. Попробуйте еще раз");
	}
	varZ = Number(varZ);

	const sum = varX + varY + varZ;
	let message = `Были введены переменные: X = ${varX}, Y = ${varY}, Z = ${varZ}. Их сумма = ${sum}\n`;

	const minAll = Math.min(varX, varY, varZ);
	const minXY = Math.min(varX, varY);

	if (sum > 100) {
		switch (minAll) {
			case varX: varX = (varY + varZ) / 2; break;
			case varY: varY = (varX + varZ) / 2; break;
			case varZ: varZ = (varX + varY) / 2; break;
		}
		message += `Т.к. сумма > 100 данные изменились на следующие: X = ${varX}, Y = ${varY}, Z = ${varZ}`;
	} else {
		switch (minXY) {
			case varX: varX = (varY + varZ) / 2; break;
			case varY: varY = (varX + varZ) / 2; break;
		}
		message += `Т.к. сумма <= 100 данные изменились на следующие: X = ${varX}, Y = ${varY}, Z = ${varZ}`;
	}

	console.log(message);
	alert(message);
});