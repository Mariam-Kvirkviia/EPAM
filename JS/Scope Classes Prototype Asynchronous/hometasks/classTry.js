class Task {
  constructor(n) {
    this.name = n;
  }
}

class Guest {
  constructor(tasks) {
    this.tasks = tasks;
  }
  getTask(index) {
    return this.tasks[index];
  }
  createTask() {
    throw Error("method 'createTask' is not defined");
  }
  changeType() {
    throw Error("method 'changeType' is not defined");
  }
}
class User {
  constructor(tasks) {
    this.tasks = tasks;
  }
  getTask(index) {
    return this.tasks[index];
  }
  createTask(newTask) {
    return this.tasks.push(newTask);
  }
  changeType() {
    throw Error("method 'changeType' is not defined");
  }
}
const guest = new Guest([
  new Task("task name 1"),
  new Task("task name 2"),
  new Task("task name 3"),
]);

guest.getTask(0); // { name: 'task name 1' }
guest.getTask(2); // { name: 'task name 3' }
// guest.createTask(new Task("task name 4")); // taskName is not defined, should not work

const user = new User([
  new Task("task name 1"),
  new Task("task name 2"),
  new Task("task name 3"),
]);

user.getTask(0); // { name: 'task name 1' }
user.getTask(2); // { name: 'task name 3' }
// user.createTask(new Task("task name 4"));s
user.getTask(3); // {name: 'task name 4'}
class Admin {
  constructor(userGuestArray) {
    this.userGuestArray = userGuestArray;
  }
  getArray() {
    return this.userGuestArray;
  }
  changeType(index) {
    if (this.userGuestArray[index] instanceof Guest) {
      this.userGuestArray[index] = new User(this.userGuestArray[index].tasks);
    } else if (this.userGuestArray[index] instanceof User) {
      this.userGuestArray[index] = new Guest(this.userGuestArray[index].tasks);
    }
  }
}

const admin = new Admin([
  new Guest([]),
  new Guest([new Task("task name 1")]),
  new User([]),
  new User([new Task("task name 2")]),
]);

console.log(admin.getArray()); // [Guest, Guest, User, User]
admin.changeType(1);
console.log(admin.getArray()); // [Guest, User, User, User]
