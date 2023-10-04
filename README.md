# Jest Demo

## A demonstration of basic usage of jest

Below are some helpful resources for learning to use Jest, not only for testing Node.js code but DOM (Document Object Model) i.e. Javascript in the context of the browser, using a different test environment.

I would to test the following types of code

-   Node.js
-   DOM i.e. browser code
-   Networking code, synchrone and asynchronouse i.e. promise based code
-   Database code

-   The default environment in Jest is a Node.js environment.

Setting up and tearing down seems to be related to testing database code,
https://jestjs.io/docs/setup-teardown

[Testing Asynchronous Code](https://jestjs.io/docs/asynchronous);

[Mock Functions](https://jestjs.io/docs/mock-functions)

Mock functions allow you to test the links between code by erasing the actual implementation of a function, capturing calls to the function (and the parameters passed in those calls), capturing isntances of constructor functions when instantiated with new, and allowing test-time configuration of return values.

There are two ways to mock functions: Either by creating a mock function to use in test code, or writing a manual mock to override a module dependency.

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
