import React,{useEffect,useState} from 'react';
import axios from 'axios';

export default function Todo(){
    const [todos,setTodos]=useState([]);
    const [todosInitial,setTodosInitial]=useState([]);
    const [todoSerach,setTodoSearch]=useState("");

    useEffect(()=>{
     axios({
        url:"https://jsonplaceholder.typeicode.com/todos"
     }).then(response=>{
        setTodos(response.data);
        setTodosInitial(response.data);
     })
    },[]);
    function handleTodoChange(e) {
        e.preventDefault();
        setTodoSearch(e.target.value);
        setTodos(todosInitial.filter(todo=> todo.title.inclides(todoSerach)));
    }
    return (
        <div style={{marginLeft:'50px',marginRigth:'50px'}}>
            <hr/>
            <label>Search</label>
            <input type="text" value={todoSerach}name="todosearch"
            onchange={handleTodoChange}/>
            <hr/>
            <table>
                <tbody>
                <tr>
                    <th>Title</th>
                    <th>Status</th>
                </tr>
                {todos.map(todo =>{
                    <tr>
                        <td>{todo.title}</td>
                        <td>{todo.completed.toString()}</td>
                    </tr>
                })}
                </tbody>
            </table>
        </div>
    )
            } 