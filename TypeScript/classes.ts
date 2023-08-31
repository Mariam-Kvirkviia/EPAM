class TodoService3 {
  static lastId: number = 0;
  constructor(private todos: Todo[]) {}
  getAll() {
    return this.todos;
  }
}
interface Todo {
  name: string;
  id: number;
}
