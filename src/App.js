import './App.css';
import { Component } from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';

class App extends Component {
  state = {
    todos: [
      {id:1, content: 'Buy some books'},
      {id:2, content: 'Go to shop'}
    ]
  }
  deleteTodo= (id)=>{
      const todos = this.state.todos.filter((todo)=>{
        return (
          todo.id !== id
        )
      });
      this.setState({
        todos
      })
  }
  addTodo = (todo)=>{
      todo.id = Math.random();
      let todos = [...this.state.todos, todo]
      this.setState({
        todos
      })
  }
  render() {
    return(
      <div className='App space-y-3 space-x-4 p-5'>
        <h1 className='text-center text-blue-600 text-3xl mt-20 tracking-wide mb-4'> Todo Lists</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo}/>
      </div>
    )
  };
  
}

export default App;
