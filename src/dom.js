const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const fs = require("fs");

function readHTMLToString(fileName) {
	const file = fs.readFileSync(fileName);
	let fileString = file.toString();
	let fileArray = fileString.split("\n");
	let result = fileArray.reduce(
		(accumulator, currentValue) => accumulator + currentValue,
	);

	return result;
}

// const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
const dom = new JSDOM(readHTMLToString("./index.html"));
console.log(dom.window.document.querySelector("p").textContent); // "Hello world"
