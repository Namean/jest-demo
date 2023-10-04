# Jest Demo

## A demonstration of basic usage of jest

Below are some helpful resources for learning to use Jest, not only for testing Node.js code but DOM (Document Object Model) i.e. Javascript in the context of the browser, using a different test environment.

-   The default environment in Jest is a Node.js environment.

query: "testing dom code",
title: "DOM Manipulation",
url: "https://jestjs.io/docs/tutorial-jquery"

To get the example to work, in the terminal you'll have to install the following

-   npm install --save-dev jest-environment-jsdom
-   npm install --save jquery

The source code can be found here...

[jest / examples / jquery / ](https://github.com/jestjs/jest/tree/main/examples/jquery)

https://jestjs.io/docs/configuration#testenvironment-string

```js
/**
 * @jest-environment jsdom
 */

test("use jsdom in this test file", () => {
	const element = document.createElement("div");
	expect(element).not.toBeNull();
});
```

```
query: "jest-environment-jsdom",
url: "https://jestjs.io/docs/next/tutorial-jquery",
```
