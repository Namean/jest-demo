const divide = require('../src/divide.js');

test('divides 1 / 2 to equal 0.5', () => {
	expect(divide(1, 2)).toBe(0.5);
});

test('throws on zero division', () => {
	expect(() => {
		divide(0, 0);
	}).toThrow();
});

