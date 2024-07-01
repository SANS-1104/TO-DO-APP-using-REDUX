import { useSelector } from "react-redux"
import AddForm from "./AddForm";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../features/TODO/todoSlice";
import { markAsDone } from "../features/TODO/todoSlice";


export default function Todo (){
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();
    console.log(todos);
    const clickHandler = (id)=>{
        console.log("delete",id);
        dispatch(deleteTodo(id))
    }

    let markDone = (id)=>{
        console.log("mark as done", id);
        // dispatch(markAsDone(id))
    }

    return (
        <>
            <h2>Todo List App</h2>
            <AddForm />
            <hr />
            <ul>
                {todos.map((todo) =>(
                    <li key={todo.id}>{todo.task} 
                        <button type="submit" onClick={() => clickHandler(todo.id)}>Delete</button>
                        <button type="submit" onClick={() => markDone(todo.id)}>Mark As Done</button>
                    </li>
                ))}
            </ul>
        </>
    )
}