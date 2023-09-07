class Counter {
  private static instance: Counter;

  /**
   * The Singleton's constructor should always be private to prevent direct
   * construction calls with the `new` operator.
   */
  private constructor() {}

  /**
   * The static method that controls the access to the singleton instance.
   *
   * This implementation let you subclass the Singleton class while keeping
   * just one instance of each subclass around.
   */
  public static getInstance(): Counter {
    if (!Counter.instance) {
      Counter.instance = new Counter();
    }

    return Counter.instance;
  }

  /**
   * Finally, any singleton should define some business logic, which can be
   * executed on its instance.
   */
  state: number = 0;

  getInstance() {
    return this;
  }
  destroy() {
    this.state = 0;
  }
  increase() {
    this.state += 1;
  }
  decrease() {
    this.state -= 1;
  }
  getState() {
    return this.state;
  }
}
