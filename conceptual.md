### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?
- `Asynchronous code can be managed by then/catch method chaining, async/await functions, and promises.`
- What is a Promise?
- `A Promise is an object representing the eventual completion or failure of an asynchronous operation. It is a one-time guarantee of a future value.`
- What are the differences between an async function and a regular function?
- `Async functions wait for certain components to complete before continuining, whereas regular functions will not wait for code that takes longer and will continue running the rest of the code while the code that takes longer runs in the background.`
- What is the difference between Node.js and Express.js?
- `Node is a Javascript environment that runs server-side event-driven code and is used to build server-side Javascript web applications. Express is a framework used in Node similar to Python's Flask framework.`
- `Node is just a Javascript environment with libraries to make it easy to write software, whereas Express (a backend web application framework of node.js) extends Node specifically to add middleware, routing and much more!`
- What is the error-first callback pattern?
- `The pattern is used in Node to promptly handle errors and consistently handle results when using asynchronous code.`
- What is middleware?
- `Middleware is code that runs in-between requests and responses. It can be used to separate code into more logical groupings and to provide better error handling.`
- What does the `next` function do?
- `Next() is used specifically to tell the program to move to the next route in your express application. If any argument is passed into next() Express will always treat it as en error.`
- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```

```
- Performance: this code is making three separate GET requests where it could make only one using Promise.all()
- There is no error handling: should refactor using try/catch methods
- The variable names are not very descriptive and could provide more information about what they represent.
```

