import { Injectable } from '@angular/core';
import { Todo } from './todo.model'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  todos: Todo[] = [
    { text: 'Test' }
  ]

  constructor() { }


getAllTodos() {
  return this.todos
}

addTodo(todo: Todo){
  this.todo.push(todo)
}

updateTodo(index: number, updateTodo: Todo){
  this.todos[index] = updatedTodo
}

deleteTodo(index: number) {
  this.todos.splice(index, 1)
}
}
