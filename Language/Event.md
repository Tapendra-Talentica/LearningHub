How JS program execute in background
``` https://www.youtube.com/@theavocoder/videos```

Events: Actions that happen in your application (like clicks, file reads).

Event Queue: A line where events (callback functions) wait to be processed.

Event Stack (Call Stack): Keeps track of currently executing functions. When the stack is empty, the event loop picks up the next event from the queue.

Event Loop: The mechanism that checks the stack and the queue and processes them in order. It ensures asynchronous operations do not block the main thread, allowing your application to stay responsive.


