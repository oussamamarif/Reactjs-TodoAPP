import './todoform.css';
import React, { Component } from 'react';

class Todoform extends Component{ 
    render() {
        return ( 
            <div>
                <form onSubmit={this.props.handleSubmit}>
    
                    <div className="input-icon">
                    <i className="fa fa-list-ol icon"></i>
    
                    <input type="text" placeholder="Add a task" autoComplete="off" 
                    value={this.props.newTodo}
                    onChange={this.props.handleChange}></input>
                    </div>
    
                </form>
            </div>
         );
    }
  
}
 
export default Todoform;