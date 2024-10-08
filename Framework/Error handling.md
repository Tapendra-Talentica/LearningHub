Error handling is critical part of building and application
It ensure that your application can handle expected and unexpected error without crashing application 

## Approch to handle error handling
1. Use try...catch for synchronous code, to catch and hadle errors
    : If an error occurs inside the try block, it will be caught by the catch block, where you can handle it appropriately

2. Using Error-First Callbacks
    In Node.js applications, many asynchronous functions use error-first callbacks. These callbacks have the first parameter as an error (if any), followed by the result data.
    ``` 
    fs.readFile('file.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err.message);
        return;
    }
    console.log('File content:', data); });
     ```

3. Using Promises and .catch()
    Promises provide a cleaner way to handle asynchronous operations. You can use .catch() to handle errors when working with promises.

4. Using async/await with try...catch
     The async/await syntax provides a more synchronous-like way to write asynchronous code, making it easier to read and handle errors.

5. Centralized Error Handling with Middleware
    frameworks like Express.js, using centralized error-handling middleware is a good practice to manage errors in a single place

``` 
    app.get('/', (req, res, next) => {
        // Simulating an error
        const error = new Error('Something went wrong!');
        error.status = 500;
        next(error); // Passing error to the next middleware
    });

    // Error-handling middleware
    app.use((err, req, res, next) => {
        console.error('Error:', err.message);
        res.status(err.status || 500).json({ error: err.message });
    });
```
## Best Practise for error handling in Nodejs

1. Always handle error : Never leave error unhandled
2. Use Meaningful Error message : Provide meaningful error msg
3. Log Errors Properly: Log error with enough context to help debug
4. Graceful Shutdown::  In case of a critical error, perform a graceful shutdown, freeing up resources like database connections, file handles, etc.
5. Centralize Error Handling: For larger applications, centralize error handling in middleware or utility functions to avoid repetitive code.
6. Avoid Leaking Sensitive Information: Do not expose sensitive information to end users

## Global Level Error Handling
It prevent your app from crashing due to unexpected errors

I.  Types of Errors:
* Synchronous Errors: Errors that happen immediately when the code is executed (e.g., throw new Error("Something went wrong!")).
* Asynchronous Errors: Errors that occur in callbacks or async operations (e.g., a failed database query).

II. Handling Uncaught Exceptions:

* Use process.on('uncaughtException', (err) => { ... }) to handle errors not caught by other means. This approach prevents the app from crashing but should be used carefully, as it could lead to an unstable state.

III. Promise Rejections:

* Use process.on('unhandledRejection', (reason, promise) => { ... }) to handle unhandled promise rejections. This is important in a Node.js app using Promises or async/await to handle async operations.

IV. Best Practices:

* Use try/catch for synchronous code and Promise.catch() for async operations.
Prefer more localized error handling rather than relying solely on global handlers, as it makes debugging easier.