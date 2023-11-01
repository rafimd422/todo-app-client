import { createContext, useState } from "react"



export const TaskProvider = createContext(null)


const TaskContext = ({children}) => {
    const [modalVisible, setModalVisible] = useState(false);




const states = {modalVisible,setModalVisible}
  return (
    <TaskProvider.Provider value={states}>
{children}
    </TaskProvider.Provider>
  )
}

export default TaskContext
