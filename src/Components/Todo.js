import './todo.css';
import React, { Component } from 'react';
import Todoform from './Todoform'
import Todoitems from "./Todoitems"




class Todo extends Component{ 
  state = {
    todos : [],
    newTodo: ''
  }
  handleChange = event => {
    this.setState({newTodo : event.target.value})
  }
  handleSubmit = event => {
    event.preventDefault();
    let todoslength = this.state.todos.length 
    if(this.state.newTodo === ""){
      return;
    }
    this.setState({
      newTodo:'',
      todos: [
        ...this.state.todos,
        {
          id:(todoslength += 1 ),
          title : this.state.newTodo,
          isCompleted: false
        }]
      
    })
  }
 toggleCompleted = (event,index) =>{
   const todoCompleted =this.state.todos.filter(todo=>{
     if (todo.id === index + 1){
       todo.isCompleted = event.target.checked
     }
     return todo;
   })
    this.setState({
      todos:todoCompleted
    })
  }
  removeTodo =( index ) => {
    const { todos } = this.state ;
    todos.splice(index, 1);
    this.setState({
      todos,
    });

  }
  editTodo = (index) => {
    const newTodo = prompt('Enter a new task');
    const{ todos} = this.state;
    todos.filter(todo => {
      if(todo.id === index + 1){
        todo.title=newTodo ;

      }
      return todo 
    });
    this.setState({
      todos
    })

  }
  render(){
    return ( 
      <div className="todo-list container d-flex-column w-50 mt-5 pb-3"
       >
           <Todoform todos={this.state.todos}
           newTodo={this.state.newTodo} 
           handleChange={this.handleChange}
           handleSubmit={this.handleSubmit}/>
        

        <Todoitems todos={this.state.todos}  
        handleOnChange={this.toggleCompleted}
        handleOnremove={this.removeTodo}
        handleOnedit={this.editTodo}
       />
      </div>
    );

  }
     
 }
  
 export default Todo;


