// Задача 18. Про обои
document.querySelector(".button-18").addEventListener('click', () => {
	let paperWidth = prompt("Введите ширину рулона обоев (любое число > 0)");
	for (; Number.isNaN(Number(paperWidth)) || Number(paperWidth) <= 0;) {
		paperWidth = prompt("Введено некорректное значение. Попробуйте еще раз");
	}
	paperWidth = Number(paperWidth);
	let paperLength = prompt("Введите длину рулона обоев (любое число > 0)");
	for (; Number.isNaN(Number(paperLength)) || Number(paperLength) <= 0;) {
		paperLength = prompt("Введено некорректное значение. Попробуйте еще раз");
	}
	paperLength = Number(paperLength);
	let roomWidth = prompt("Введите ширину комнаты (любое число > 0)");
	for (; Number.isNaN(Number(roomWidth)) || Number(roomWidth) <= 0;) {
		roomWidth = prompt("Введено некорректное значение. Попробуйте еще раз");
	}
	roomWidth = Number(roomWidth);
	let roomLength = prompt("Введите длину комнаты (любое число > 0)");
	for (; Number.isNaN(Number(roomLength)) || Number(roomLength) <= 0;) {
		roomLength = prompt("Введено некорректное значение. Попробуйте еще раз");
	}
	roomLength = Number(roomLength);
	let roomHeight = prompt("Введите высоту комнаты (любое число > 0)");
	for (; Number.isNaN(Number(roomHeight)) || Number(roomHeight) <= 0;) {
		roomHeight = prompt("Введено некорректное значение. Попробуйте еще раз");
	}
	roomHeight = Number(roomHeight);
	let choise = prompt("Укажите как проводить расчет рулонов: с использованием остатков - 1, без использования остатков - 2)");
	for (; Number.isNaN(Number(choise)) || (Number(choise) !== 1 && Number(choise) !== 2);) {
		choise = prompt("Введено некорректное значение. Попробуйте еще раз");
	}
	choise = Number(choise);

	const roomArea = paperWidth * roomHeight * 2 + roomLength * roomHeight * 2;
	const paperArea = paperWidth * paperLength;
	let count = 0;
	let message = "";

	if (choise === 1) {
		count = Math.ceil(roomArea / paperArea);
	} else {
		if (roomHeight > paperLength) {
			message = `Комнату ${paperWidth}/${roomLength}/${roomHeight}м (Ш/Д/В) нельзя обклеить рулонами ${paperWidth}/${paperLength}м (Ш/Д) без "остатков" (рулон короче высоты стены)`;
		} else {
			const paperPieceArea = paperWidth * roomHeight;
			const totalPieces = roomArea / paperPieceArea;
			count = Math.ceil(totalPieces / (paperArea / paperPieceArea));
		}
	}

	if (message === "") {
		message = `Для поклейки комнаты ${paperWidth}/${roomLength}/${roomHeight}м (Ш/Д/В) рулонами ${paperWidth}/${paperLength}м (Ш/Д) потребуется ${count} рулонов`;
	}

	console.log(message);
	alert(message);

});