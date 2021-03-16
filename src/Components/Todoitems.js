import './todoitems.css';
import Checkbox from './checkbox'

const Todoitems = (props) => {
    const {todos} = props;
    const todoItem = todos.map((todo,index) =>{
        return (
            <div key={todo.id} className="todoComponent d-flex w-75 mx-auto">
                 <div className="todoCompLeft">
                     <label>
                         <Checkbox 
                            className="checkbox-element"
                            checked={todo.isCompleted}
                            size={20}
                            checkedColor="#2e3238"
                            uncheckedColor="#2e3238"
                            hoverColor="#343a40"
                            onChange={event => props.handleOnChange(event,
                                index)}
                         />
                     </label>
                 </div>
                <div className="todoCompRight d-flex justify-content-between flex-grow-1 px-3 ">
                    <div className="todoTitle">
                        <span style={{textDecoration: todo.isCompleted ? "line-through" : "none"}
                    }>
                            {todo.title}
                        </span>
                    </div>
                    <div>
                    <i onClick={() => props.handleOnedit(index)} class="fa fa-pencil"></i>
                    
                    <i onClick={() => props.handleOnremove(index)} className="fa fa-trash"></i>
                    </div>
                </div>
            </div>
              
            )
    })
    return (  
        <div className="todoListItems w-full">
                    <hr />
                    {todos.length ===0 &&(
                        <h3 className="noTodos"> Let's Do somework</h3>
                    )}
                    {todos.length > 0 && 
                       todoItem
                   }

        </div>
    );
}
 
export default Todoitems;