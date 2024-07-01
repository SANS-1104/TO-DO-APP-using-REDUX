import { useState } from "react"
import { useDispatch } from "react-redux";
import { addTodo } from "../features/TODO/todoSlice";


export default function AddForm (){
    let [task , setTask] = useState();
    const dispatch  = useDispatch();


    let onChangeHandler = (event) =>{
        setTask(event.target.value)
    }

    let submitHandler = (event)=>{
        event.preventDefault();
        console.log(task);
        dispatch(addTodo(task));
        let x = ""
        setTask(x)
    }
    

    return(
        <>
            <form onSubmit={submitHandler}>
                <label htmlFor="inpTask">Enter a Task To Do</label> <br />
                <input type="text" name="inpTask" id="inpTask" onChange={onChangeHandler}/> <br /><br />
                <button type="submit">Add Task</button>
            </form>
        </>
    )
}