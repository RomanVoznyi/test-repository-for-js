// Задача 12. Про треугольник
document.querySelector(".button-12").addEventListener('click', () => {
	let sideA = prompt("Введите длину 1-й стороны треугольника (любое положительное число)");
	for (; Number.isNaN(Number(sideA)) || sideA.includes("-");) {
		sideA = prompt("Введено некорректное значение. Попробуйте еще раз");
	}
	sideA = Number(sideA);
	let sideB = prompt("Введите длину 2-й стороны треугольника (любое положительное число)");
	for (; Number.isNaN(Number(sideB)) || sideB.includes("-");) {
		sideB = prompt("Введено некорректное значение. Попробуйте еще раз");
	}
	sideB = Number(sideB);
	let sideC = prompt("Введите длину 3-й стороны треугольника (любое положительное число)");
	for (; Number.isNaN(Number(sideC)) || sideC.includes("-");) {
		sideC = prompt("Введено некорректное значение. Попробуйте еще раз");
	}
	sideC = Number(sideC);

	let message;
	let type;
	const exist = sideA < sideB + sideC && sideB < sideA + sideC && sideC < sideA + sideB ? true : false;
	if (exist) {
		if (sideA === sideB && sideA === sideC && sideB === sideC) {
			type = "равносторонний";
		} else {
			if (sideA === sideB || sideA === sideC || sideB === sideC) {
				type = "равнобедренный";
			} else {
				type = "разносторонний";
			}
			if (Math.pow(sideA, 2) === Math.pow(sideB, 2) + Math.pow(sideC, 2) || Math.pow(sideB, 2) === Math.pow(sideA, 2) + Math.pow(sideC, 2) || Math.pow(sideC, 2) === Math.pow(sideA, 2) + Math.pow(sideB, 2)) {
				type += ", прямоугольный";
			}
		}
		message = `Треугольник со сторонами [${sideA}, ${sideB}, ${sideC}] существует. Он ${type}.`

	} else { message = `Треугольник со сторонами [${sideA}, ${sideB}, ${sideC}] не существует.` }

	console.log(message);
	alert(message);
});