import React from 'react';
import PageTitle from './page-title';
import TodoList from './todo-list';
import TodoForm from './todo-form';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.addTodo = this.addTodo.bind(this);
    this.toggleCompleted = this.toggleCompleted.bind(this);
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/todos')
      .then(response => response.json())
      .then(todos => this.setState(prevState => ({
        todos: todos
      })))
      .catch(err => console.error(err));
  }

  addTodo(newTodo) {
    fetch('http://localhost:3000/api/todos/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newTodo)
    })
      .then(response => response.json())
      .then(todo => this.setState(prevState => ({
        todos: prevState.todos.concat(todo)
      })))
      .catch(err => console.error(err));
  }

  toggleCompleted(todoId) {
    const target = this.state.todos.find(todo => todo.todoId === todoId);
    fetch(`http://localhost:3000/api/todos/${todoId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ isCompleted: !target.isCompleted })
    })
      .then(response => response.json())
      .then(updated => this.setState(prevState => ({
        todos: prevState.todos.map(todo => {
          const updatedId = updated.todoId;
          if (todo.todoId === updatedId) {
            return updated;
          } else {
            return todo;
          }
        })
      })))
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col pt-5">
            <PageTitle text="Todo App"/>
            <TodoForm onSubmit={this.addTodo}/>
            <TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted}/>
          </div>
        </div>
      </div>
    );
  }
}
