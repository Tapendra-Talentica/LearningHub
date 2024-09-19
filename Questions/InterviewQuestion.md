Here are the answers to all your questions in a detailed and easy-to-understand manner:

### Q1. Call vs Apply vs Bind

`call`, `apply`, and `bind` are methods that allow you to invoke functions in different contexts (i.e., with different values of `this`).

- **`call`**: Invokes a function immediately, allowing you to pass arguments one by one.
  
- **`apply`**: Invokes a function immediately, allowing you to pass arguments as an array.

- **`bind`**: Returns a new function with a specific context (`this` value) and optional arguments. It does not call the function immediately; it creates a new one with a bound context.

**Demo:**

```javascript
const person = {
  name: 'John',
  greet: function(age) {
    console.log(`Hello, my name is ${this.name} and I am ${age} years old.`);
  }
};

const anotherPerson = { name: 'Jane' };

// Call
person.greet.call(anotherPerson, 25); // Output: Hello, my name is Jane and I am 25 years old.

// Apply
person.greet.apply(anotherPerson, [30]); // Output: Hello, my name is Jane and I am 30 years old.

// Bind
const boundGreet = person.greet.bind(anotherPerson, 35);
boundGreet(); // Output: Hello, my name is Jane and I am 35 years old.
```

### Q2. Map vs Filter

- **`map`**: Creates a new array by applying a function to every element in the array.

- **`filter`**: Creates a new array containing only the elements that meet a certain condition.

**Demo:**

```javascript
const numbers = [1, 2, 3, 4, 5];

// Map: Multiply each element by 2
const doubled = numbers.map(num => num * 2); // [2, 4, 6, 8, 10]

// Filter: Keep only even numbers
const evens = numbers.filter(num => num % 2 === 0); // [2, 4]
```

### Q3. Function Currying Example

**Function currying** is a technique of transforming a function with multiple arguments into a sequence of functions that each take a single argument.

**Example:**

```javascript
function add(a) {
  return function(b) {
    return function(c) {
      return a + b + c;
    };
  };
}

console.log(add(2)(3)(5)); // Output: 10
```

### Q4. Event Loop

The **event loop** in JavaScript is a mechanism that allows asynchronous code to execute non-blocking. It continuously checks if the call stack is empty and then processes the callbacks in the callback queue.

- JavaScript is single-threaded; it uses an event loop to handle asynchronous operations like I/O, timers, etc.
  
**Example of Event Loop:**

```javascript
console.log('Start');

setTimeout(() => {
  console.log('Timeout');
}, 0);

console.log('End');

// Output:
// Start
// End
// Timeout
```

### Q5. Libraries in Node.js

Some popular libraries in Node.js:

- **Express**: Web framework for building APIs.
- **Mongoose**: Object Data Modeling (ODM) library for MongoDB.
- **Axios**: Promise-based HTTP client for making requests.
- **Lodash**: Utility library for JavaScript functions.
- **jsonwebtoken**: For working with JSON Web Tokens (JWT).

### Q6. What is Middleware? Name any.

**Middleware** is a function in Node.js that has access to the request and response objects and can modify them, end the request-response cycle, or call the next middleware function in the stack.

**Example: Logging Middleware**

```javascript
app.use((req, res, next) => {
  console.log(`${req.method} request to ${req.url}`);
  next();
});
```

### Q7. What are Closures in JavaScript?

**Closures** are functions that have access to variables from their outer (enclosing) function even after the outer function has returned.

**Example:**

```javascript
function outer() {
  const outerVar = 'I am outside!';
  return function inner() {
    console.log(outerVar);
  };
}

const innerFunc = outer();
innerFunc(); // Output: I am outside!
```

### Q8. Definition for Function `add(4)(5)(1)();`

This function uses **currying**. It keeps accepting arguments until it encounters an empty call `()`, at which point it returns the sum.

**Implementation:**

```javascript
function add(a) {
  return function(b) {
    return function(c) {
      return function() {
        return a + b + c;
      };
    };
  };
}

console.log(add(4)(5)(1)()); // Output: 10
```

### Q9. Make the Sum Function Typed

If using **TypeScript**, you can make `sum` typed:

```typescript
const sum = (a: number, b: number): number => a + b;
```

### Q10. Solve `Sum(3)(4)(2)` in JavaScript

This uses **currying** to create a chain of function calls.

**Example:**

```javascript
function sum(a) {
  return function(b) {
    return function(c) {
      return a + b + c;
    };
  };
}

console.log(sum(3)(4)(2)); // Output: 9
```

### Q11. Write a Debounce Function

A **debounce** function ensures that a function is not called again until a certain amount of time has passed.

**Example:**

```javascript
function debounce(func, delay) {
  let timer;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), delay);
  };
}

// Usage
const debouncedFunc = debounce(() => console.log('Debounced!'), 1000);
window.addEventListener('resize', debouncedFunc);
```

### Q12. Function to Print Nested Properties of an Object

**Recursive Function Example:**

```javascript
function printNestedProperties(obj, prefix = '') {
  for (const key in obj) {
    if (typeof obj[key] === 'object') {
      printNestedProperties(obj[key], `${prefix}${key}.`);
    } else {
      console.log(`${prefix}${key}: ${obj[key]}`);
    }
  }
}

const exampleObj = { a: 1, b: { c: 2, d: { e: 3 } } };
printNestedProperties(exampleObj);
```

### Q13. Need and Purpose of NestJS

**NestJS** is a framework for building efficient, scalable, and maintainable server-side applications. It uses TypeScript and is built on top of Express or Fastify. It helps organize your code into modules and offers built-in features for routing, middleware, validation, and more.

### Q14. Server-Side Rendering

**Server-Side Rendering (SSR)** is a technique where the server generates the HTML content of a web page and sends it to the client, providing faster initial load times and improved SEO.

### Q15. How to Do Rendering in NestJS?

In NestJS, you can use the `@Render` decorator to specify a template engine and render a view.

**Example:**

```typescript
@Controller('home')
export class HomeController {
  @Get()
  @Render('index')
  getHome() {
    return { message: 'Hello, World!' };
  }
}
```

### Q16. What is an Event Loop?

The **event loop** is a mechanism in JavaScript to handle asynchronous tasks. It checks if the call stack is empty and processes the callback queue to execute asynchronous code.

### Q17. Asynchronous vs. Synchronous Tasks

- **Synchronous**: Tasks are executed in sequence, blocking further execution until the current task is complete.
  
- **Asynchronous**: Tasks are executed non-blocking, allowing other tasks to run while waiting for completion (e.g., I/O operations).

### Q18. Purpose of the `package.json` File

`package.json` is a configuration file in Node.js that defines the metadata, scripts, dependencies, and versions of the application or package.

### Q19. How to Handle Errors in Node.js?

You can handle errors using:

1. **`try/catch` blocks**: For synchronous code.
2. **Error-handling middleware**: In Express.
3. **`process.on('uncaughtException')`**: For catching uncaught exceptions.

### Q20. Node.js Garbage Collection: Old Space vs New Space

- **New Space**: Where newly created objects are stored. The garbage collector quickly removes unreachable objects.
- **Old Space**: Where long-lived objects are stored after surviving multiple garbage collection cycles.

### Q21. Common Debugging Techniques in Node.js

- **Using `console.log`**: Simple but effective.
- **Node.js Debugger**: Using `node inspect`.
- **Chrome DevTools**: For visual debugging.
- **VSCode Debugger**: For an integrated debugging environment.

### Q22. Use Cases of Docker and Debugging in Containers

- **Use Cases**: Isolate environments, deploy applications consistently, manage dependencies.
- **Debugging**: Use Docker’s `logs` and `exec` commands, or integrate with IDEs.

### Q23. Create a Server and Route Using HTTP Module

```javascript
const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/' && req.method

 === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, World!');
  } else {
    res.writeHead(404);
    res.end('Not Found');
  }
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});
```

### Q24. Write an Error Handling Middleware

**Error Handling Middleware:**

```javascript
function errorHandler(err, req, res, next) {
  console.error(err.message);
  res.status(500).send('Something went wrong!');
}

// Usage in Express
app.use(errorHandler);
```

### Q25. Implement Caching in the Created Server

You can use **Redis** or **Memory Cache**:

**Example: Memory Cache:**

```javascript
const cache = new Map();

function cacheMiddleware(req, res, next) {
  const key = req.url;
  if (cache.has(key)) {
    return res.send(cache.get(key));
  }
  res.sendResponse = res.send;
  res.send = (body) => {
    cache.set(key, body);
    res.sendResponse(body);
  };
  next();
}

// Usage
app.use(cacheMiddleware);
```

### Q26. Handle File Uploading Using FS in Node.js

Use `multer` for handling multipart/form-data.

```javascript
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

app.post('/upload', upload.single('file'), (req, res) => {
  res.send('File uploaded!');
});
```

### Q27. Read Data from File Line by Line

Use `readline` module:

```javascript
const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: fs.createReadStream('file.txt'),
});

rl.on('line', (line) => {
  console.log(line);
});
```

### Q28. Handle Event Emitting

Use Node.js’s `EventEmitter`:

```javascript
const EventEmitter = require('events');
const myEmitter = new EventEmitter();

myEmitter.on('event', () => {
  console.log('An event occurred!');
});

myEmitter.emit('event');
```

### Q29. Optimize a Slow Database Query

- **Use Indexes**: Ensure proper indexing on columns used in queries.
- **Optimize Query Structure**: Avoid `SELECT *`, use specific fields.
- **Database Configuration**: Tune the database for performance.
- **Caching**: Use Redis or in-memory caching to store results of frequent queries.
- **Pagination**: Implement pagination to reduce data load.

Feel free to ask for further clarification or details on any specific topic!


## More questions
### Database Design for Flipkart-like Application

**Tables:**

1. **Users**
   - `id` (Primary Key)
   - `name`
   - `email`
   - `password`
   - `address`

2. **Products**
   - `id` (Primary Key)
   - `name`
   - `description`
   - `price`
   - `stock_quantity`

3. **Carts**
   - `id` (Primary Key)
   - `user_id` (Foreign Key references Users)
   - `status` (active/ordered)

4. **CartItems**
   - `id` (Primary Key)
   - `cart_id` (Foreign Key references Carts)
   - `product_id` (Foreign Key references Products)
   - `quantity`

5. **Orders**
   - `id` (Primary Key)
   - `user_id` (Foreign Key references Users)
   - `cart_id` (Foreign Key references Carts)
   - `total_price`
   - `status` (pending/confirmed/shipped/delivered)
   - `order_date`

**Relationships:**
- One `User` can have many `Carts`.
- One `Cart` can have many `CartItems`.
- Each `CartItem` corresponds to one `Product`.
- One `Cart` can become an `Order`.

---

### Adding Second Product to Cart

- Check if an active cart exists for the user. If not, create one.
- Add the product to the `CartItems` table with the respective `cart_id` and `product_id`.

```sql
INSERT INTO CartItems (cart_id, product_id, quantity)
VALUES (active_cart_id, second_product_id, quantity);
```

---

### Adding New Product After Placing Order

- Place the order by setting the cart’s status to "ordered" and creating an order entry.
- Once an order is placed, create a new active cart for the user to add new products.

---

### API to View Cart

**Input:**
- User ID (`user_id`)

**SQL Query:**

```sql
SELECT Products.id, Products.name, Products.price, CartItems.quantity
FROM CartItems
JOIN Products ON CartItems.product_id = Products.id
JOIN Carts ON CartItems.cart_id = Carts.id
WHERE Carts.user_id = user_id AND Carts.status = 'active';
```

---

### `import` vs `require`

- **`require`:** CommonJS module system used in Node.js. Synchronous and works in all Node.js versions.
- **`import`:** ES6 module system, mostly used in modern JavaScript. It is asynchronous and works natively in newer versions of Node.js or with Babel transpilation.

---

### Middlewares

Middlewares are functions in Express.js that have access to the `req`, `res`, and `next` objects. They can modify the request and response or terminate the request-response cycle. Examples include authentication, logging, and parsing request bodies.

---

### Callback Hell

Callback hell refers to deeply nested callbacks, which makes the code difficult to read and maintain. It often occurs when dealing with asynchronous code in JavaScript.

Example:
```javascript
asyncFunction1((err, result1) => {
  asyncFunction2(result1, (err, result2) => {
    asyncFunction3(result2, (err, result3) => {
      // More nested callbacks...
    });
  });
});
```

---

### Promises

Promises represent an eventual completion or failure of an asynchronous operation and its resulting value.

Example:
```javascript
let promise = new Promise((resolve, reject) => {
  // async operation
  if(success) resolve(result);
  else reject(error);
});
```

---

### Async/Await

`async/await` is syntactic sugar for working with Promises, providing cleaner and more readable asynchronous code.

Example:
```javascript
async function fetchData() {
  try {
    let data = await fetchAPI();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
```

---

### Promise.all

`Promise.all` takes an array of Promises and resolves when all promises are resolved. It returns an array of results. If any promise fails, `Promise.all` will reject.

Example:
```javascript
Promise.all([promise1, promise2, promise3])
  .then(results => {
    console.log(results);
  })
  .catch(error => {
    console.error(error);
  });
```

---

### Running 5 Promises in Parallel, Moving Forward When Any 2 Resolve

You can use `Promise.race()` in combination with tracking the resolved promises:

```javascript
async function runInParallel(promises) {
  let resolvedPromises = [];
  
  while (resolvedPromises.length < 2) {
    const result = await Promise.race(promises);
    resolvedPromises.push(result);
    promises = promises.filter(p => p !== result); // Remove resolved promise
  }
  
  // Continue processing after two promises are resolved
}
```

---

### Tracing a Bug in Production

To trace a bug in production, I typically use logging and monitoring tools (e.g., AWS CloudWatch, Sentry) to track errors. For example, in a food delivery system, we encountered a bug where the order status was not updated correctly. By logging the order status changes and checking the logs, we traced the issue to a missing database update in a certain flow of the code.

---

### MVC Structure in Express

- **Model:** Represents the data (e.g., database interaction).
- **View:** Represents the user interface (e.g., templates or frontend code).
- **Controller:** Handles the logic and responds to user input (e.g., routes and request handling).

Example:
- **Model:** Defines the schema for users or products in the database.
- **View:** Renders the product page with data from the controller.
- **Controller:** Receives a request to view a product, fetches the data, and passes it to the view for rendering.