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
    tags: Array<string>;
    subTasks: SubTask[];

    constructor(name: string, dueDate: string) {
        this.id = `${Math.floor(Math.random() * 106661)}`;
        this.name = name;
        this.dueDate = new Date(dueDate);  // Use Date object for better handling
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
            isCompleted: false
        });
    }

    markSubTaskCompleted(subTaskName: string): void {
        const subTask = this.subTasks.find(st => st.name === subTaskName);
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

    getTaskList(isCompletion: 'completed' | 'pending' | null = null): Task[] {
        if (isCompletion === null) {
            return this.tasks;
        }
        return this.tasks.filter(t => (isCompletion === 'completed') ? t.isCompleted : !t.isCompleted);
    }

    markTaskCompleted(taskName: string): void {
        const task: Task | undefined = this.tasks.find(t => t.name === taskName);
        task?.markCompleted();
    }

    addTaskTag(taskName: string, tagName: string): void {
        const task: Task | undefined = this.tasks.find(t => t.name === taskName);
        task?.addTag(tagName);
    }

    searchTasksByTags(tags: string[]): Task[] {
        return this.tasks.filter(task => tags.some(tag => task.tags.includes(tag)));
    }

    addTaskSubTask(taskName: string, subTaskName: string): void {
        const task: Task | undefined = this.tasks.find(t => t.name === taskName);
        task?.addSubTask(subTaskName);
    }

    markSubTaskComplete(taskName: string, subTaskName: string): void {
        const task: Task | undefined = this.tasks.find(t => t.name === taskName);
        task?.markSubTaskCompleted(subTaskName);
    }
}

// Test the Task Management System
const tasks = new TaskManagement();

tasks.addTask('Weekend work', '2023-09-29');
tasks.addTaskTag('Weekend work', 'cleaning');
tasks.addTaskTag('Weekend work', 'car driving');
tasks.addTask('Monday Gym', '2023-09-30');
tasks.markTaskCompleted('Weekend work');
tasks.addTaskSubTask('Monday Gym', 'shoulder');
tasks.markSubTaskComplete('Monday Gym', 'shoulder');

console.log(tasks.getTaskList());
console.log(tasks.searchTasksByTags(['cleaning']));
console.log(tasks.getTaskList('completed'));
console.log(tasks.getTaskList('pending'));
