// Задача 10. Математический блок: расчет разных показателей.
document.querySelector(".button-10").addEventListener('click', () => {
	// а) вывод всех двухзначных чисел, кратных 5;
	let arrayMultyFive = [];
	for (let i = 10; i < 100; i++) {
		if (i % 5 === 0) { arrayMultyFive.push(i) };
	}

	let message = `Существуют следующие двузначные числа, кратные 5 - [${arrayMultyFive}]`;

	console.log(message);
	alert(message);

	// б) найте все четырехзначные числа, сумма цифр каждого из которых равна 15; 
	let arrayFourDigit = [];
	let tempNumber;
	let tempSum = 0;
	for (let i = 1000; i < 10000; i++) {
		tempNumber = i.toString();
		for (let j = 0; j < tempNumber.length; j++) {
			tempSum += Number(tempNumber[j]);
		}
		if (tempSum === 15) { arrayFourDigit.push(i) };
		tempSum = 0;
	}

	message = `Существуют следующие четырехзначные числа, сумма цифр которых равна 15 - [${arrayFourDigit}]`;

	console.log(message);
	alert(message);

	// в) даны натуральные числа от 20 до 50. Вывести те из них, которые делятся на 3, но не делятся на 5;
	let arrayNaturalDigit = [];
	for (let i = 20; i <= 50; i++) {
		if (i % 3 === 0 && i % 5 !== 0) { arrayNaturalDigit.push(i) };
	}

	message = `В диапазоне [20:50] существуют следующие числа, которые делятся на 3, но не делятся на 5 - [${arrayNaturalDigit}]`;

	console.log(message);
	alert(message);

	// г) вывести на экран квадраты чисел от 10 до 20 включительно;
	let arrayPower = [[], []];
	for (let i = 10; i <= 20; i++) {
		arrayPower[0][i - 10] = i;
		arrayPower[1][i - 10] = Math.pow(i, 2);
	}

	message = `Квадраты чисел от 10 до 20: \n[${arrayPower[0]}]\n[${arrayPower[1]}]`;

	console.log(message);
	alert(message);

	// д) подсчитать, сколько чисел от 1 до 100 делится на 3 без остатка.
	let countMultyThree = 0;
	for (let i = 1; i <= 100; i++) {
		if (i % 3 === 0) { countMultyThree++ };
	}
	message = `В диапазоне [1:100] чисел, которые делятся на 3 без остатка - \"${countMultyThree}\"`;

	console.log(message);
	alert(message);
})