import { Injectable } from '@angular/core';
import { Todo } from './todo-list.model'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  todo-list: Todo[]

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
}
