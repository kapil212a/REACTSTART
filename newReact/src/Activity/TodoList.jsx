import { useState } from "react";
export default function TodoList(){
    let [todos , setTodo] = useState(["sample"]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () => {
        //console.log("new task added");
        setTodo([...todos , newTodo]);
        setNewTodo("");
    }

    let updateTodoValue = (event) => {
        //console.log(event.target);
        setNewTodo(event.target.value);
        
    }
    return(
        <div>
            <input placeholder = "Add Task" value={newTodo} onChange={updateTodoValue} ></input>
            <button onClick = {addNewTask}>Add Task</button>
            <br></br><br></br><br></br>

            <hr></hr>
            <h1>This Is My To-Do List</h1>
            <ul>
                {todos.map((todo) =>(
                    <li>{todo}</li>
                ))}
            </ul>
        </div>
    )
}