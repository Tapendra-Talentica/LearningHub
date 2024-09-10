Node.js is known for its single-threaded,
event-driven architecture, which allows 
it to handle many concurrent connections efficiently
using a single thread. However, Node.js can also perform
multithreading when needed, especially for CPU-intensive tasks.

1. Nodejs use a single threaded to execute JavaScript code.It handle
    all incoming request and I/O operation
2. It is a non blocking means it can handle multiple task at the same time
    by using event loop

Q. Why Multithreading?
    1. CPU- Intensive task
    2. it allow to offload heavy task to seprate thread,freeing up the main thread
        to continue handle I/O operation

Q. How Multithreading works in NodeJs.
    Nodejs achieves multithreading through the Worker Thread module.
    This module allows you to run JS operation in seprate threads, parallel to the main thread

1. Worker Threads Module
    Worker Threads are separate threads that can run JavaScript code concurrently

    Key Features of Worker Threads
    1.1 Parallel Execution: Worker threads run in parallel with the main thread, making them ideal for CPU-intensive tasks.
    1.2 Isolated Memory: Each worker thread has its own memory. To share data between threads, you use messaging.
    1.3 Communication: Workers communicate with the main thread using message events.
    1.4 Error Handling: Errors in worker threads can be caught by listening to the error event in the main thread.

2. Child Processes
    Node.js also provides the child_process module to create separate processes. Unlike worker threads, child processes do not share memory and run independently of the main process.

3. Cluster Module
    The cluster module allows you to create multiple instances of a Node.js application, which can run on different CPU cores. This is useful for scaling a Node.js application across multiple CPU cores.
