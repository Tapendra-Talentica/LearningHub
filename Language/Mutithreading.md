# Multithreading in Node.js

Node.js is known for its **single-threaded, event-driven architecture**, which allows it to handle many concurrent connections efficiently using a single thread. However, Node.js can also perform multithreading when needed, especially for **CPU-intensive tasks**.

## Key Concepts

1. **Single Thread Execution**: Node.js uses a single thread to execute JavaScript code. This thread handles all incoming requests and I/O operations.
2. **Non-Blocking**: Node.js is non-blocking, meaning it can handle multiple tasks at the same time using the **event loop**.

## Why Multithreading?

1. **CPU-Intensive Tasks**: Multithreading is useful for offloading **heavy tasks** (like calculations or data processing) to separate threads.
2. **Offloading Heavy Tasks**: By using separate threads, Node.js frees up the main thread to continue handling I/O operations and maintain responsiveness.

## How Multithreading Works in Node.js

Node.js achieves multithreading through the **Worker Threads module**. This module allows you to run JavaScript operations in **separate threads**, parallel to the main thread.

### 1. Worker Threads Module

Worker threads are separate threads that can run JavaScript code concurrently with the main thread.

#### Key Features of Worker Threads

1. **Parallel Execution**: Worker threads run in parallel with the main thread, making them ideal for CPU-intensive tasks.
2. **Isolated Memory**: Each worker thread has its own memory space. To share data between threads, message passing is used.
3. **Communication**: Workers communicate with the main thread using message events (`postMessage` and `onmessage`).
4. **Error Handling**: Errors in worker threads can be caught by listening to the `error` event in the main thread.

### 2. Child Processes

Node.js also provides the **child_process** module to create separate processes. Unlike worker threads, child processes do not share memory and run independently of the main process. This is useful when you need isolated processes for certain tasks.

### 3. Cluster Module

The **cluster** module allows you to create multiple instances of a Node.js application, which can run on different CPU cores. This is useful for scaling a Node.js application across multiple CPU cores, improving performance under high load.

## Recommended Resource

For more details, you can watch this video:  
[Source](https://www.youtube.com/watch?v=WldMTtUWqTg)
