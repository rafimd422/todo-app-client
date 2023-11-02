import React, { useContext } from 'react'
import { TaskProvider } from '../Context/TaskContext'
import axios from 'axios'
import swal from 'sweetalert'

const AllTodos = () => {

    const {todos} = useContext(TaskProvider)
console.log(todos)

const updateComplation = id => {
  console.log(id)
  axios.patch(`http://localhost:3000/todo/${id}`,{status:'Completed'})
  .then(res => {
    console.log(res.data)
    if(res.data.modifiedCount > 0){
      swal({
        title: "Wow Great job",
        text: "congratulation for completing your task",
        icon: "success",
      });
      setTimeout(()=> {
        window.location.reload()
      },2000)
    }

  })
}

  return (
todos.map(todo => <li key={todo._id} className="w-full border border-red-500 rounded-lg p-3 md:px-5 flex justify-between items-center mb-2 shadow-lg">
<div>
  <p className="text-xl font-semibold">{todo.title}</p>
  <p className="text-sm mt-2 pe-2">{todo.description}</p>
</div>
<div className="flex flex-col gap-2">


<button onClick={()=> updateComplation(todo._id)} className={todo.status === "Completed" ? 'hidden' : 'bg-green-700 hover:bg-green-800 p-2 font-semibold text-center rounded-lg cursor-pointer'}>Mark as Completed</button>

<p className={todo.status ==='In Progress' ? `bg-red-500 text-center p-2 rounded-md font-bold` : todo.status ==='Completed' ? `bg-green-500 text-center p-2 rounded-md font-bold` :  `bg-gray-800  text-center p-2 rounded-md font-bold`}>{todo.status}</p>
</div>
</li>)
  )
}

export default AllTodos
