import { useContext, useState } from "react";
import Modal from './../Modal/Modal';
import { TaskProvider } from "../Context/TaskContext";
import { TabList, TabPanel, Tabs,Tab } from "react-tabs";







const Main = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTab = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  const {modalVisible,setModalVisible} = useContext(TaskProvider)
  


    const toggleModal = () => {
      setModalVisible(!modalVisible);
    };

      return (
    <div className='min-h-screen w-screen p-16 bg-gray-700'>
    <div className=" bg-gray-900 text-white max-w-[600px] mx-auto rounded-md shadow-xl p-4">
      <h3 className="text-3xl font-bold text-center text-amber-50 p-2">
        Todo App
      </h3>
    <button 
    data-modal-target="todo-modal"
    data-modal-toggle="todo-modal"
    onClick={toggleModal} className='border p-4 ml-2 text-slate-100 right-0 rounded-md'>Add Todo</button>
    




    {modalVisible && (
        <div
          id="todo-modal"
          tabIndex="-1"
          aria-hidden="true"
          className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-screen max-h-full mx-auto flex justify-center items-center"
        >
<Modal/>
        </div>
      )}


<Tabs>
<TabList className={'flex justify-between'}>
      <Tab
        className={`w-[33.33%] text-center my-4 cursor-pointer p-4 ${
          activeTab === 0 ? 'bg-red-800' : ''
        }`}
        onClick={() => handleTab(0)}
      >
        All Task
      </Tab>
      <Tab
        className={`w-[33.33%] text-center my-4 cursor-pointer p-4 ${
          activeTab === 1 ? 'bg-red-800' : ''
        }`}
        onClick={() => handleTab(1)}
      >
        In Progress
      </Tab>
      <Tab
        className={`w-[33.33%] text-center my-4 cursor-pointer p-4 ${
          activeTab === 2 ? 'bg-red-800' : ''
        }`}
        onClick={() => handleTab(2)}
      >
        Completed
      </Tab>
    </TabList>

    <TabPanel>
      <ul>
        <li>
        hehe
      </li>

      
      </ul>
    </TabPanel>
    <TabPanel>
      <h2>hahahah</h2>
    </TabPanel>
    <TabPanel>
      <h2>hohohoho</h2>
    </TabPanel>
  </Tabs>







    <ul>
      <p className='text-center p-2'>
        You Have TodoLength pending todos
      </p>
    </ul>
    </div>


    
    </div>
  )
}

export default Main
