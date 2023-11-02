import axios from "axios";
import { createContext, useEffect, useState } from "react"



export const TaskProvider = createContext(null)


const TaskContext = ({children}) => {
    const [modalVisible, setModalVisible] = useState(false);
const [todos,setTodos] = useState([])

useEffect(()=>{
  axios.get('http://localhost:3000/todo')
  .then(res => setTodos(res.data))
}
  ,[])

const states = {modalVisible,setModalVisible,todos,setTodos}
  return (
    <TaskProvider.Provider value={states}>
{children}
    </TaskProvider.Provider>
  )
}

export default TaskContext
