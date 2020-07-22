// Задача 7. Анализ чисел, введеных с клавиатуры
document.querySelector(".button-7").addEventListener('click', () => {
	const arrayNumb = [];
	const arrayCount = [0, 0, 0, 0, 0];								//[negative,pozitive,zero,even,odd];
	const arrayWords = ["чисел", "чисел", "чисел", "чисел", "чисел"];	//[negative,pozitive,zero,even,odd];	
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
	for (let i = 0; i < arrayCount.length; i++) {
		if (arrayCount[i] === 1) {
			arrayWords[i] = "число";
		} else if (arrayCount[i] === 2 || arrayCount[i] === 3 || arrayCount[i] === 4) {
			arrayWords[i] = "числа";
		}
	}

	console.log(`В массиве \"${arrayNumb}\":\n \"${arrayCount[0]}\" отрицательных ${arrayWords[0]},\n \"${arrayCount[1]}\" положительных ${arrayWords[1]},\n
	\"${arrayCount[2]}\" ${arrayWords[2]} равных нулю,\n \"${arrayCount[3]}\" четных ${arrayWords[3]},\n  \"${arrayCount[4]}\" нечетных ${arrayWords[4]}`);
	alert(`В массиве \"${arrayNumb}\":\n \"${arrayCount[0]}\" отрицательных ${arrayWords[0]},\n \"${arrayCount[1]}\" положительных ${arrayWords[1]},\n \"${arrayCount[2]}\" ${arrayWords[2]} равных нулю,\n \"${arrayCount[3]}\" четных ${arrayWords[3]},\n \"${arrayCount[4]}\" нечетных ${arrayWords[4]}`);
});