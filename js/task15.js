// Задача 15. О часах и времени через 1 секунду
document.querySelector(".button-15").addEventListener('click', () => {
	let hours = prompt("Введите сколько сейчас часов (целое число от 0 до 23)");
	for (; Number.isNaN(Number(hours)) || hours.includes("-") || hours.includes(".") || Number(hours) < 0 || Number(hours) > 23;) {
		hours = prompt("Введено некорректное значение. Попробуйте еще раз");
	}
	hours = Number(hours);
	let minutes = prompt("Введите сколько сейчас минут (целое число от 0 до 59)");
	for (; Number.isNaN(Number(minutes)) || minutes.includes("-") || minutes.includes(".") || Number(minutes) < 0 || Number(minutes) > 59;) {
		minutes = prompt("Введено некорректное значение. Попробуйте еще раз");
	}
	minutes = Number(minutes);
	let seconds = prompt("Введите сколько сейчас секунд (целое число от 0 до 59)");
	for (; Number.isNaN(Number(seconds)) || seconds.includes("-") || seconds.includes(".") || Number(seconds) < 0 || Number(seconds) > 59;) {
		seconds = prompt("Введено некорректное значение. Попробуйте еще раз");
	}
	seconds = Number(seconds);

	const visual = (numb) => {
		let tempNumb = numb < 10 ? `0${numb}` : numb;
		return tempNumb;
	}

	let message = `Сейчас на часах время: ${visual(hours)}:${visual(minutes)}:${visual(seconds)}.\n`;
	if (seconds !== 59) {
		message += `Через 1 секунду время будет: ${visual(hours)}:${visual(minutes)}:${visual(seconds + 1)}.`;
	} else {
		if (minutes !== 59) {
			message += `Через 1 секунду время будет: ${visual(hours)}:${visual(minutes + 1)}:${visual(seconds - 59)}.`;
		} else {
			if (hours !== 23) {
				message += `Через 1 секунду время будет: ${visual(hours + 1)}:${visual(minutes - 59)}:${visual(seconds - 59)}.`;
			} else {
				message += `Через 1 секунду время будет: 00:00:00.`;
			}
		}
	}

	console.log(message);
	alert(message);
});