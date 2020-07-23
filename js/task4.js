// Задача 4. Анализ и разные операции с целым числом

document.querySelector(".button-4").addEventListener('click', () => {
	let tempNumber = prompt(`Введите любое целое число`);
	for (; Number.isNaN(Number(tempNumber)) || tempNumber.includes(".");) {
		tempNumber = prompt("Введено некорректное значение. Попробуйте еще раз");
	}
	const numb = Number(tempNumber);

	const sign = numb < 0 ? "отрицательное" : (numb !== 0) ? "положительное" : "нейтральное";
	const stringNumb = Math.abs(numb).toString();
	const countDigit = stringNumb.length;
	const maxDigit = Math.max(...stringNumb.split(""));
	const parity = numb % 2 === 0 ? "четное" : "нечетное";
	let reversNumb = [];
	for (let i = 0; i < countDigit; i++) {
		reversNumb[i] = stringNumb[countDigit - 1 - i];
	}
	if (sign === "отрицательное") {
		reversNumb.push("-");
	}
	let sumDigits = 0;
	for (const digit of stringNumb) {
		sumDigits += Number(digit);
	}
	let factorial = 1;
	for (let i = 1; i <= Math.abs(numb); i++) {
		factorial = factorial * i;
	}

	let message = `a) Число \"${numb}\" - \"${sign}\", состоит из \"${countDigit}\" чисел, максимальная цифра - \"${maxDigit}\"\n`;
	message += `б) Число \"${numb}\" - \"${parity}\"\n`;
	message += `в) Если перевернуть число \"${numb}\" получится \"${reversNumb.join("")}\"\n`;
	message += `г) Сумма цифр в числе \"${numb}\" равна \"${sumDigits}\"\n`;
	message += `д) Факториал числа \"${Math.abs(numb)}\" равен \"${factorial}\"`;

	console.log(message);
	alert(message);
});