let sayHiMixin = {
  sayHi() {
    alert(`Hello ${this.name}`);
  },
};

// usage:
class User {
  constructor(name) {
    this.name = name;
   
  }
}
Object.assign(User.prototype, sayHiMixin);

// copy the methods

// now User can say hi
new User("Dude").sayHi();
