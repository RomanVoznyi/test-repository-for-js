// Задача 8. Про кол-во целых нечетных чисел в произвольном диапазоне
document.querySelector(".button-8").addEventListener('click', () => {
	const arrayNumb = [];
	let start = prompt("Введите начало дипазона (любое целое число)");
	for (; Number.isNaN(Number(start)) || start.includes(".");) {
		start = prompt("Введено некорректное значение. Попробуйте еще раз");
	}
	start = Number(start);
	let end = prompt("Введите окончание дипазона (любое целое число)");
	for (; Number.isNaN(Number(end)) || end.includes(".");) {
		end = prompt("Введено некорректное значение. Попробуйте еще раз");
	}
	end = Number(end);
	for (let i = Math.min(start, end); i <= Math.max(start, end); i++) {
		if (i % 2 !== 0) { arrayNumb.push(i) };
	}

	console.log(`В диапазоне [${Math.min(start, end)} : ${Math.max(start, end)}] количество нечетных чисел - \"${arrayNumb.length}\"`);
	alert(`В диапазоне [${Math.min(start, end)} : ${Math.max(start, end)}] количество нечетных чисел - \"${arrayNumb.length}\"`);

});