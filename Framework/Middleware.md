Middleware in Node.js is a function that sits between the incoming HTTP request and the server’s response. It acts as a middle layer that can manipulate the request and response objects, execute any code, or stop the request-response cycle.

## Why use Middleware?
* Code Reusability: Middleware allows you to reuse code for common tasks (e.g., parsing request bodies or checking authentication) across multiple routes or endpoints.
* Separation of Concerns: Middleware helps separate different aspects of request processing (like logging, validation, and error handling) into separate functions, making the codebase easier to manage and maintain.
* Enhanced Functionality: Middleware enables developers to build modular and extensible applications by adding functionality to the request/response processing.

## How Middleware Works
Middleware functions in Node.js are executed in sequence, one after another, as part of the request-response cycle. Each middleware function has access to:
* req,
* res
* next:A function that, when called, passes control to the next middleware function in the stack. If not called, the request will hang and never reach the next middleware or the endpoint handler.

## Types of Middleware
* Application-Level Middleware: Middleware that is bound to an instance of the Express application. It can be applied to all routes or specific routes.

  * Application-level middleware is defined using app.use() or app.METHOD(), where METHOD is an HTTP method (e.g., GET, POST).
```
const express = require('express');
const app = express();

// Application-level middleware function to log request details
function logRequestDetails(req, res, next) {
  console.log(`${req.method} request to ${req.url}`);
  next();  // Call next() to pass control to the next middleware or route handler
}

// Use the middleware for all routes
app.use(logRequestDetails);

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

The logRequestDetails middleware logs every incoming request's HTTP method and URL.
The middleware is registered using app.use(), so it runs for all routes.


```

* Router-Level Middleware: Middleware that is bound to an instance of an Express router. It is used for modularizing and grouping routes.

```
const express = require('express');
const app = express();
const router = express.Router();

// Router-level middleware to authenticate requests
function checkAuthentication(req, res, next) {
  if (req.headers.authorization === 'mysecrettoken') {
    next();  // User is authenticated, proceed to the next middleware or route handler
  } else {
    res.status(401).send('Unauthorized');
  }
}

// Apply middleware to specific routes
router.use('/admin', checkAuthentication);

router.get('/admin/dashboard', (req, res) => {
  res.send('Welcome to the Admin Dashboard');
});

app.use('/', router);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

The middleware is only applied to routes starting with /admin by using router.use('/admin', checkAuthentication).
```

* Error-Handling Middleware: Middleware that handles errors in the application. It is defined with four parameters (err, req, res, next).

```
const express = require('express');
const app = express();

// Example route that throws an error
app.get('/', (req, res) => {
  throw new Error('Something went wrong!');
});

// Error-handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Internal Server Error!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

If any route throws an error, the error-handling middleware catches it and sends a 500 Internal Server Error response.
The error-handling middleware is defined with four parameters and should be placed at the end of all middleware and routes.

```

* Built-in Middleware: Middleware provided by the Express framework itself (e.g., express.json(), express.static()).

* Third-Party Middleware: Middleware provided by third-party packages (e.g., body-parser, morgan).

## Key Points to Remember:
* Order Matters: Middleware functions are executed in the order they are defined. Make sure to define your middleware in the correct order to avoid issues.
* Don’t Forget next(): Always call next() in your middleware unless you want to terminate the request-response cycle (e.g., in error handling or sending a response).
* Reusable and Modular: Middleware can be reused across multiple routes and projects, making your codebase more modular and maintainable.