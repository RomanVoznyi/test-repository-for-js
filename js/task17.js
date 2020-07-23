// Задача 17. Про лыжника
document.querySelector(".button-17").addEventListener('click', () => {
	let day = 1;
	let distance = 10;
	let sum = distance;
	const array = [[distance], [sum]];

	for (; sum < 100;) {
		distance = distance * 1.1;
		sum += distance;
		array[0].push(distance.toFixed(1));
		array[1].push(sum.toFixed(1));
		day++;
	}

	const message = `Суммарный пробег лыжника превысил 100 км на ${day} день\n дистанция в день - [${array[0]}]\n суммарный пробег - [${array[1]}]`;

	console.log(message);
	alert(message);
});