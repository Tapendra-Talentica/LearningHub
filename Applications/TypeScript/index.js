var Task = /** @class */ (function () {
    function Task(name, dueDate) {
        this.id = "".concat(Math.floor(Math.random() * 106661));
        this.name = name;
        this.dueDate = new Date(dueDate); // Use Date object for better handling
        this.isCompleted = false;
        this.tags = [];
        this.subTasks = [];
    }
    Task.prototype.markCompleted = function () {
        this.isCompleted = true;
    };
    Task.prototype.addTag = function (tag) {
        if (!this.tags.includes(tag)) {
            this.tags.push(tag);
        }
    };
    Task.prototype.addSubTask = function (subTaskName) {
        this.subTasks.push({
            id: "".concat(Date.now()),
            name: subTaskName,
            isCompleted: false
        });
    };
    Task.prototype.markSubTaskCompleted = function (subTaskName) {
        var subTask = this.subTasks.find(function (st) { return st.name === subTaskName; });
        if (subTask) {
            subTask.isCompleted = true;
        }
    };
    return Task;
}());
var TaskManagement = /** @class */ (function () {
    function TaskManagement() {
        this.tasks = [];
    }
    TaskManagement.prototype.addTask = function (name, dueDate) {
        var newTask = new Task(name, dueDate);
        this.tasks.push(newTask);
        return newTask;
    };
    TaskManagement.prototype.getTaskList = function (isCompletion) {
        if (isCompletion === void 0) { isCompletion = null; }
        if (isCompletion === null) {
            return this.tasks;
        }
        return this.tasks.filter(function (t) { return (isCompletion === 'completed') ? t.isCompleted : !t.isCompleted; });
    };
    TaskManagement.prototype.markTaskCompleted = function (taskName) {
        var task = this.tasks.find(function (t) { return t.name === taskName; });
        task === null || task === void 0 ? void 0 : task.markCompleted();
    };
    TaskManagement.prototype.addTaskTag = function (taskName, tagName) {
        var task = this.tasks.find(function (t) { return t.name === taskName; });
        task === null || task === void 0 ? void 0 : task.addTag(tagName);
    };
    TaskManagement.prototype.searchTasksByTags = function (tags) {
        return this.tasks.filter(function (task) { return tags.some(function (tag) { return task.tags.includes(tag); }); });
    };
    TaskManagement.prototype.addTaskSubTask = function (taskName, subTaskName) {
        var task = this.tasks.find(function (t) { return t.name === taskName; });
        task === null || task === void 0 ? void 0 : task.addSubTask(subTaskName);
    };
    TaskManagement.prototype.markSubTaskComplete = function (taskName, subTaskName) {
        var task = this.tasks.find(function (t) { return t.name === taskName; });
        task === null || task === void 0 ? void 0 : task.markSubTaskCompleted(subTaskName);
    };
    return TaskManagement;
}());
// Test the Task Management System
var tasks = new TaskManagement();
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
