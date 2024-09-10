When an object no longer has any references pointing to it, or it cannot be reached from any root reference, it becomes "unreachable" and is considered garbage.


1. Garbage Collection in JavaScript (and Node.js) is an automatic process
that helps manage memory by cleaning up unused or unreachable objects,
freeing up space for new data.

2. Garbage Collection (GC) is the process of finding and deleting "garbage"
 — data in memory that is no longer needed by the program.

Benefits

1. Memory Management: Efficient memory management ensures that your application
 doesn't use more memory than necessary.

2. Performance Optimization: Freeing up memory used by unused objects helps improve performance and prevent memory leaks (situations where memory that is no longer needed is not released).

3. Avoiding Crashes: Proper memory management helps prevent crashes due to running out of memory, especially in long-running applications.

Garbage collection algorithms

1. Mark-and-Sweep Algorithm:

    1.1 How It Works: The garbage collector periodically stops the program execution to identify and clean up unused objects.
    1.2 Mark Phase: It starts from the root and marks all reachable objects.
    1.3 Sweep Phase: It then looks for unmarked objects (those that are not reachable) and deletes them, freeing up memory.

2. Generational Garbage Collection

V8 divides memory into two parts: the Young Generation and the Old Generation.
* Young Generation: Stores newly created objects. These objects are checked frequently because most objects quickly become unused.
* Old Generation: Stores objects that have survived the young generation's checks. Objects that remain in memory for a longer time move to the old generation.
Minor and Major Garbage Collections

* Minor GC: Focuses on the young generation. It is fast and runs frequently to clean up short-lived objects.
* Major GC: Focuses on the old generation. It is less frequent but more comprehensive, scanning and cleaning objects that have been around longer.

Best practise to help garbage collections

1. Avoid Memory Leaks: Be careful with global variables, event listeners, and references that are no longer needed.
2. Prefer let and const over var to define variables
3. Close Resources: Manually close resources like database connections or file handles when they are no longer needed.
4. Avoid Circular References: Make sure objects do not reference each other in ways that prevent the garbage collector from freeing them.

Ex: let obj1 = {}; let obj2 = {};

obj1.ref = obj2; obj2.ref = obj1;