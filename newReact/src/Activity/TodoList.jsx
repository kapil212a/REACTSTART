import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function TodoList(){
    //let [todos , setTodo] = useState(["sample"]);
    let [todos, setTodo] = useState([{task : "sample" , id : uuidv4()}])
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () => {
        //console.log("new task added");
        //setTodo([...todos , newTodo]);
        //setTodo([...todos , {task : newTodo , id : uuidv4()}])  //OR\\
        setTodo((prev) => {
            return [...prev, {task : newTodo , id : uuidv4()}];
        })
        setNewTodo("");
    }

    let updateTodoValue = (event) => {
        //console.log(event.target);
        setNewTodo(event.target.value);
        
    }

    let delTodo = (id) =>{
        //setTodo(todos.filter((todo) => todo.id != id));
        setTodo((prev)=> todos.filter((prev) => prev.id != id));
    }

    let upperCase = () =>{
        setTodo((todos) =>  
            todos.map((todo) =>{
                return{
                    ...todo, task: todo.task.toUpperCase(),
                }
            })
        );
    }

    return(
        <div>
            <input 
                placeholder = "Add Task" 
                value={newTodo} 
                onChange={updateTodoValue} >

            </input>
            <button onClick = {addNewTask}>Add Task</button>
            <br></br><br></br><br></br>

            <hr></hr>
            <h1>This Is My To-Do List</h1>
            <ul>
                {/* {todos.map((todo) =>(
                    <li >{todo}</li>
                ))} */}
                {todos.map((todo) =>(
                    <li key = {todo.id}>
                        <spam>{todo.task}</spam>
                        &nbsp;&nbsp;&nbsp;
                        <button onClick={()=> delTodo(todo.id)}>Delete</button>
                    </li>
                ))}
                <button onClick={upperCase}>upperCase</button>
            </ul>
        </div>
    )
}