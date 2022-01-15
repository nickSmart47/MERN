import React, { useState } from 'react';
// import { useEffect } from 'react';

const Todo = (props) => {
    const [todo, setTodo] = useState("")
    const [todoCompletion, setTodoCompletion] = useState(false)

    let [listOfTodos, setListOfTodos] = useState([]);

    // useEffect(() => {
    //     localStorage.setItem("todo", String(todo))
    // }, [todo])

    const createTodo = (e) => {
        e.preventDefault();
        let todoObj = { todo, todoCompletion };
        // console.log(todoObj)
        setListOfTodos([...listOfTodos, todoObj])
        // localStorage.setItem("todo", String(todoObj.todo))
        // console.log(localStorage)
    }

    const toggleCompletion = (idx)=>{
        let [...copyListOfTodos] = listOfTodos;
        // console.log(listOfTodos[idx])
        copyListOfTodos[idx].todoCompletion = !copyListOfTodos[idx].todoCompletion

        setListOfTodos(copyListOfTodos)
    }


    const deleteTodo = (idx) => {
        // console.log("deleting todo at index" + idx)
        let [...copyListOfTodos] = listOfTodos.filter((todo, index) => idx !== index);
        // console.log(copyListOfTodos)
        setListOfTodos(copyListOfTodos)
    }

    return (
        <>
            <form onSubmit={createTodo}>
                <div className="form-group">
                    <label>Enter a new Todo</label>
                    <input type="text" name="" id="" onChange={(e) => setTodo(e.target.value)} className="form-control" />
                    <input type="submit" value="Add" className="btn btn-primary mt-2" />
                </div>
            </form>
            <ul className="list-group mt-2">
                {
                    listOfTodos.map((todo, i) => {
                        return (
                            <li className="list-group-item d-flex justify-content-center align-items center gap-3" key={i}>
                                <p style= {{textDecoration: todo.todoCompletion? 'line-through': 'none'}}>{todo.todo}</p>
                                <input type="checkbox" className= "mt-2" onClick = {()=>toggleCompletion(i)} />
                                <button className = "btn btn-dark"onClick={() => deleteTodo(i)}>Delete</button>
                            </li>
                        )
                    })
                }

            </ul>


        </>)
}

export default Todo;