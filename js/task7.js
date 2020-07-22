// Задача 7. Анализ чисел, введеных с клавиатуры
document.querySelector(".button-7").addEventListener('click', () => {
	const arrayNumb = [];
	const arrayCount = [0, 0, 0, 0, 0];		//[negative,pozitive,zero,even,odd];
	let answer = true;
	for (; answer;) {
		let tempNumber = prompt("Введите любое число");
		for (; Number.isNaN(Number(tempNumber));) {
			tempNumber = prompt("Введено некорректное значение. Попробуйте еще раз");
		}
		arrayNumb.push(Number(tempNumber));
		answer = confirm("Добавите еще чисел ?");
	}
	for (let i = 0; i < arrayNumb.length; i++) {
		arrayNumb[i] < 0 ? arrayCount[0]++ : (arrayNumb[i] === 0) ? arrayCount[2]++ : arrayCount[1]++;
		arrayNumb[i] % 2 === 0 ? arrayCount[3]++ : arrayCount[4]++;
	}

	console.log(`В массиве \"${arrayNumb}\":\n отрицательных чисел - \"${arrayCount[0]}\",\n положительных чисел - \"${arrayCount[1]}\",\n
	чисел равных нулю - \"${arrayCount[2]}\",\n четных чисел - \"${arrayCount[3]}\",\n нечетных чисел - \"${arrayCount[4]}\"`);
	alert(`В массиве \"${arrayNumb}\":\n отрицательных чисел - \"${arrayCount[0]}\",\n положительных чисел - \"${arrayCount[1]}\",\n чисел равных нулю - \"${arrayCount[2]}\",\n четных чисел - \"${arrayCount[3]}\",\n нечетных чисел - \"${arrayCount[4]}\"`);
});