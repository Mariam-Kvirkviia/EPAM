class Subject {
  constructor() {
    this.observers = [];
  }
  subscribe(observer) {
    this.observers.push(observer);
  }
  unsubscribe(observer) {
    this.observers = this.observers.filter((item) => item !== observer);
  }
  fire(action) {
    this.observers.forEach((obs) => {
      //obs will be a class
      obs.update(action);
    });
  }
}

class Observer {
  constructor(state = 1) {
    this.state = state;
    this.initialState = state;
  }
  update(action) {
    switch (action.type) {
      case "inc":
        this.state += 1;
        break;
      case "dec":
        this.state -= 1;
        break;
      case "add":
        this.state += action.payload;
        break;
      default:
        this.state = this.initialState;
    }
  }
}
let stream = new Subject();
let obs1 = new Observer();
let obs2 = new Observer(13);
let obs3 = new Observer(31);

stream.subscribe(obs1);
stream.subscribe(obs2);
stream.subscribe(obs3);
stream.fire({ type: "inc" });
// stream.fire({ type: "add", payload: 10 });
console.log(obs1.state);
console.log(obs2.state);
console.log(obs3.state);
