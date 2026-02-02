import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo } from './todoSlice'

function Todolist() {

    const todo = useSelector((state)=>state.todos.todo)
    console.log(todo)


    const dispatch = useDispatch()

  return (
    <div>
      <h1>Hello this Todo list</h1>

        <ol>
            {
                todo && todo.map((data,index)=>{
                    return(
                        <li key={index}>{data} <button>Edit</button> <button onClick={()=>dispatch(deleteTodo(index))}>Delete</button></li>
                    )
                })
            }
        </ol>

    </div>
  )
}

export default Todolist
