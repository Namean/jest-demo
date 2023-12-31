function getSumNum(a, b) {
	const customPromise = new Promise((resolve, reject) => {
		const sum = a + b;

		if (sum <= 5) {
			resolve("Let's go!!");
		} else {
			reject(new Error("Oops!.. Number must be less than 5"));
		}
	});

	return customPromise;
}

// Consuming the promise
getSumNum(1, 3).then((data) => {
	console.log(data);
});

getSumNum(1, 5).then((data) => {
	console.log(data);
});
