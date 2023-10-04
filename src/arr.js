// const arr = [100, 80, 60, 40, 20, 1];
const arr = [2, 3, 4];
// const arr = [];
function percent(a, b) {
	// What is a percent of b?
	let result = (a / 100) * b;
	// if (result > 100) {
	// 	let formating = String(result / 100);
	// 	console.log(`${formating} x times`);
	// 	return;
	// }

	let formating = String(result) + "%";
	// console.log(formating);
	return result;
}

function fn(cb) {
	if (arr.length < 2) return arr[0];
	for (let i = 0; i < arr.length - 1; i++) {
		let a = arr[i];
		let b = arr[i + 1];
		// console.log(arr[i] + arr[i + 1]);
		cb(a, b);
	}
}

function fn2(cb, input) {
	let buffer = [];
	if (arr.length < 2) return percent(arr[0], input);
	for (let i = 0; i < arr.length; i++) {
		let a = input;
		let b = arr[i];
		// console.log(arr[i] + arr[i + 1]);

		buffer.push(cb(a, b));
	}
	return buffer;
}

// fn(percent);
console.log(fn2(percent, 64));
