Let's work through the exercises below using just the dependencies already present.

---

### Basic Task Management

**Part 1:**
**Description**: Implement a task management system with the following functionality:

- Add a task (task name, due date).
- Mark a task as completed.
- Retrieve all tasks (with an option to filter by completion status).

**Part 2:**
**Description**: Extend the task management system to include:

- Adding tags to tasks.
- Searching tasks by tags.
- Adding subtasks to tasks and managing their completion status.

---

### My Solution

```javascript
let tasks = [];

function addTask(taskName, duedate, tags) {
  const taskLen = tasks.length || 0;
  const newTask = {
    id: taskLen + 1,
    taskName: taskName,
    duedate: duedate,
    status: "ToDo",
    tags: tags,
  };
  tasks.push(newTask);
  return newTask;
}

function updateTaskStatus(taskId) {
  tasks.forEach((task) => {
    if (task.id == taskId) {
      task.status = "completed";
    }
  });
}

function getTaskList(completeStatus) {
  let status = completeStatus == false ? "ToDo" : "completed";
  return tasks.filter((task) => task.status == status);
}

function searchByTag(reqTags) {
  let result = [];
  tasks.forEach((task) => {
    if (task.tags !== undefined && task.tags.length > 0) {
      reqTags.forEach((reqTag) => {
        if (task.tags.includes(reqTag)) {
          result.push(task);
        }
      });
    }
  });
  return result;
}

console.log("Initial tasks:", tasks);
addTask("Task 1", "27 September", ["happy", "friday", "monday", "sunday"]);
addTask("Task 2", "29 September", ["saturday", "evening"]);
console.log("After addition:", tasks);
updateTaskStatus(1);
console.log("After update:", tasks);
console.log("Task list (ToDo):", getTaskList(false));
console.log("Search by tag:", searchByTag(["friday", "monday"]));
```

---

### Optimal Solution

```javascript
class Task {
  constructor(name, dueDate) {
    this.id = `${Math.floor(Math.random() * 106661)}`;
    this.name = name;
    this.dueDate = dueDate;
    this.isCompleted = false;
    this.tags = [];
    this.subtasks = [];
  }

  markCompleted() {
    this.isCompleted = true;
  }

  addTag(tag) {
    if (!this.tags.includes(tag)) {
      this.tags.push(tag);
    }
  }

  addSubTask(subtaskName) {
    this.subtasks.push({
      id: Date.now(),
      name: subtaskName,
      isCompleted: false,
    });
  }

  markSubTaskCompleted(subTaskName) {
    const subTask = this.subtasks.find((st) => st.name === subTaskName);
    if (subTask) {
      subTask.isCompleted = true;
    }
  }
}

class TaskManagement {
  constructor() {
    this.tasks = [];
  }

  addTask(name, dueDate) {
    const newTask = new Task(name, dueDate);
    this.tasks.push(newTask);
  }

  getTaskList(isCompletion = null) {
    if (isCompletion === null) {
      return this.tasks;
    } else if (isCompletion === "completed") {
      return this.tasks.filter((t) => t.isCompleted);
    } else if (isCompletion === "pending") {
      return this.tasks.filter((t) => !t.isCompleted);
    }
  }

  markTaskCompleted(taskName) {
    const task = this.tasks.find((t) => t.name === taskName);
    if (task) {
      task.markCompleted();
    }
  }

  addTaskTag(taskName, tagName) {
    const task = this.tasks.find((t) => t.name === taskName);
    if (task) {
      task.addTag(tagName);
    }
  }

  searchTasksByTags(tags) {
    return this.tasks.filter((task) =>
      tags.some((tag) => task.tags.includes(tag))
    );
  }

  addTaskSubTask(taskName, subTaskName) {
    const task = this.tasks.find((t) => t.name === taskName);
    if (task) {
      task.addSubTask(subTaskName);
    }
  }

  markSubTaskComplete(taskName, subTaskName) {
    const task = this.tasks.find((t) => t.name === taskName);
    if (task) {
      task.markSubTaskCompleted(subTaskName);
    }
  }
}

const tasks = new TaskManagement();
tasks.addTask("Weekend work", "29 September");
tasks.addTaskTag("Weekend work", "cleaning");
tasks.addTaskTag("Weekend work", "car driving");
tasks.addTask("Monday Gym", "30 September");
tasks.markTaskCompleted("Weekend work");
tasks.addTaskSubTask("Monday Gym", "shoulder");
tasks.markSubTaskComplete("Monday Gym", "shoulder");

console.log(tasks.getTaskList());
console.log(tasks.searchTasksByTags(["cleaning"]));
console.log(tasks.getTaskList("completed"));
console.log(tasks.getTaskList("pending"));
```

```typescript
interface SubTask {
  id: string;
  name: string;
  isCompleted: boolean;
}

class Task {
  id: string;
  name: string;
  dueDate: Date;
  isCompleted: boolean;
  tags: string[];
  subTasks: SubTask[];

  constructor(name: string, dueDate: string) {
    this.id = `${Math.floor(Math.random() * 106661)}`;
    this.name = name;
    this.dueDate = new Date(dueDate); // Use Date object for better handling
    this.isCompleted = false;
    this.tags = [];
    this.subTasks = [];
  }

  markCompleted(): void {
    this.isCompleted = true;
  }

  addTag(tag: string): void {
    if (!this.tags.includes(tag)) {
      this.tags.push(tag);
    }
  }

  addSubTask(subTaskName: string): void {
    this.subTasks.push({
      id: `${Date.now()}`,
      name: subTaskName,
      isCompleted: false,
    });
  }

  markSubTaskCompleted(subTaskName: string): void {
    const subTask = this.subTasks.find((st) => st.name === subTaskName);
    if (subTask) {
      subTask.isCompleted = true;
    }
  }
}

class TaskManagement {
  tasks: Task[];

  constructor() {
    this.tasks = [];
  }

  addTask(name: string, dueDate: string): Task {
    const newTask: Task = new Task(name, dueDate);
    this.tasks.push(newTask);
    return newTask;
  }

  getTaskList(isCompletion: "completed" | "pending" | null = null): Task[] {
    if (isCompletion === null) {
      return this.tasks;
    }
    return this.tasks.filter((t) =>
      isCompletion === "completed" ? t.isCompleted : !t.isCompleted
    );
  }

  markTaskCompleted(taskName: string): void {
    const task: Task | undefined = this.tasks.find((t) => t.name === taskName);
    task?.markCompleted();
  }

  addTaskTag(taskName: string, tagName: string): void {
    const task: Task | undefined = this.tasks.find((t) => t.name === taskName);
    task?.addTag(tagName);
  }

  searchTasksByTags(tags: string[]): Task[] {
    return this.tasks.filter((task) =>
      tags.some((tag) => task.tags.includes(tag))
    );
  }

  addTaskSubTask(taskName: string, subTaskName: string): void {
    const task: Task | undefined = this.tasks.find((t) => t.name === taskName);
    task?.addSubTask(subTaskName);
  }

  markSubTaskComplete(taskName: string, subTaskName: string): void {
    const task: Task | undefined = this.tasks.find((t) => t.name === taskName);
    task?.markSubTaskCompleted(subTaskName);
  }
}

// Test the Task Management System
const tasks = new TaskManagement();

tasks.addTask("Weekend work", "2023-09-29");
tasks.addTaskTag("Weekend work", "cleaning");
tasks.addTaskTag("Weekend work", "car driving");
tasks.addTask("Monday Gym", "2023-09-30");
tasks.markTaskCompleted("Weekend work");
tasks.addTaskSubTask("Monday Gym", "shoulder");
tasks.markSubTaskComplete("Monday Gym", "shoulder");

console.log(tasks.getTaskList());
console.log(tasks.searchTasksByTags(["cleaning"]));
console.log(tasks.getTaskList("completed"));
console.log(tasks.getTaskList("pending"));
```
