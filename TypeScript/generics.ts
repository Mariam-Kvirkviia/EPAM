function clonef<T>(value: T) {
  let serialized = JSON.stringify(value);
  let data = JSON.parse(serialized);
  return data;
}
class Queue<T> {
  private arr: T[] = [];

  public push(value: T): void {
    this.arr.push(value);
  }

  public pop(): T {
    let value: any = this.arr.pop();
    return value;
  }

  public getValue(): T[] {
    return this.arr;
  }
}
const numberQueue = new Queue<number>();
numberQueue.push(1);
numberQueue.push(2);
numberQueue.push(3);
// 1
console.log(numberQueue.pop());
// [2,3]
console.log(numberQueue.getValue());
