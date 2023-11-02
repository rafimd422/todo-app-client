import { useContext } from 'react'
import { TaskProvider } from './../Context/TaskContext';


const ComplatedTask = () => {
  
    const {todos} =  useContext(TaskProvider);
    const complatedTodo = todos.filter(todo => todo.status === 'Completed')
    
    
      return (
        complatedTodo.map(todo => <li key={todo._id} className="w-full border border-red-500 rounded-lg p-3 md:px-5 flex justify-between items-center mb-2 shadow-lg">
        <div>
          <p className="text-xl font-semibold">{todo.title}</p>
          <p className="text-sm mt-2 pe-2 ">{todo.description}</p>
        </div>
        <p className={todo.status ==='In Progress' ? `bg-red-500 text-center p-2 rounded-md font-bold` : todo.status ==='Completed' ? `bg-green-500 text-center p-2 rounded-md font-bold` :  `bg-gray-800  text-center p-2 rounded-md font-bold`}>{todo.status}</p>
        </li>)
      )
    }
  

export default ComplatedTask
