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
}
const guest = new Guest([
  new Task("task name 1"),
  new Task("task name 2"),
  new Task("task name 3"),
]);

console.log(guest.getTask(0)); // { name: 'task name 1' }
console.log(guest.getTask(2)); // { name: 'task name 3' }
// console.log(guest.createTask(new Task("task name 4"))); // taskName is not defined, should not work
console.log("---------------------------");

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
}
const user = new User([
  new Task("task name 1"),
  new Task("task name 2"),
  new Task("task name 3"),
]);

console.log(user.getTask(0)); // { name: 'task name 1' }
console.log(user.getTask(2)); // { name: 'task name 3' }
user.createTask(new Task("task name 4"));
console.log(user.getTask(3)); // {name: 'task name 4'}

console.log("---------------------------");
class Admin {
  constructor(userGuestArray) {
    this.userGuestArray = userGuestArray;
  }
  getArray() {
    return this.userGuestArray;
  }

  changeType(index) {
    let mainArray = this.userGuestArray;
    let arr = this.userGuestArray[index];
    if (mainArray[index] instanceof Guest) {
      mainArray[index] = new User(arr.tasks);
    } else if (mainArray[index] instanceof User) {
      mainArray[index] = new Guest(arr.tasks);
    }
    return mainArray;
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
