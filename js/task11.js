// Задача 11. Про замену переменных местами
document.querySelector(".button-11").addEventListener('click', () => {
	// a) с использованием третьей переменной 
	let firstVar = 10;
	let secondVar = 5;
	const tempVar = firstVar;
	let message = `Были переменные: a = ${firstVar} и b = ${secondVar}.\n`;

	firstVar = secondVar;
	secondVar = tempVar;
	message += `Стали переменные: a = ${firstVar} и b = ${secondVar}.\n`;

	// б) без использования третьей переменной
	let thirdVar = 20;
	let fourthVar = 30;
	message += `Были переменные: c = ${thirdVar} и d = ${fourthVar}.\n`;

	thirdVar = thirdVar + fourthVar;
	fourthVar = thirdVar - fourthVar;
	thirdVar = thirdVar - fourthVar;
	message += `Стали переменные: c = ${thirdVar} и d = ${fourthVar}.`;

	console.log(message);
	alert(message);
});