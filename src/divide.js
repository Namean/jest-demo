const divide = (a, b) => {

	if (b === 0) {
		throw new Error("Division by 0 is undefined!");
	}
	return a / b;
}
module.exports = divide;
