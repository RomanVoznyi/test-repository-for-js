// Задача 9.Про кол-во целых чисел в произвольном диапазоне
document.querySelector(".button-9").addEventListener('click', () => {
	const arrayNumb = [];
	let tempNumbOne = prompt("Введите начало дипазона (любое число)");
	for (; Number.isNaN(Number(tempNumbOne));) {
		tempNumbOne = prompt("Введено некорректное значение. Попробуйте еще раз");
	}
	let tempNumbTwo = prompt("Введите окончание дипазона (любое число)");
	for (; Number.isNaN(Number(tempNumbTwo));) {
		tempNumbTwo = prompt("Введено некорректное значение. Попробуйте еще раз");
	}
	const start = Math.ceil(Math.min(Number(tempNumbOne), Number(tempNumbTwo)));
	const end = Math.floor(Math.max(Number(tempNumbOne), Number(tempNumbTwo)));
	const count = end - start + 1;

	console.log(`В диапазоне [${Math.min(Number(tempNumbOne), Number(tempNumbTwo))} : ${Math.max(Number(tempNumbOne), Number(tempNumbTwo))}] количество целых чисел - \"${count}\"`);
	alert(`В диапазоне [${Math.min(Number(tempNumbOne), Number(tempNumbTwo))} : ${Math.max(Number(tempNumbOne), Number(tempNumbTwo))}] количество целых чисел - \"${count}\"`);

});
