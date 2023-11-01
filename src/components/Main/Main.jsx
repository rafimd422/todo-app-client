import { useState } from "react";
import Modal from './../Modal/Modal';

const Main = () => {
  

    const [modalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
      setModalVisible(!modalVisible);
    };
  

  






      return (
    <div className='min-h-screen w-screen p-4 bg-gray-700'>
    <div className=" bg-gray-900 text-white max-w-[600px] mx-auto rounded-md shadow-xl p-4">
      <h3 className="text-3xl font-bold text-center text-amber-50 p-2">
        Todo App
      </h3>
    <button 
    data-modal-target="todo-modal"
    data-modal-toggle="todo-modal"
    onClick={toggleModal} className='border p-4 ml-2 text-slate-100 right-0'>Add Todo</button>
    




    {modalVisible && (
        <div
          id="todo-modal"
          tabIndex="-1"
          aria-hidden="true"
          className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-screen max-h-full mx-auto flex justify-center items-center"
        >
<Modal setModalVisible={setModalVisible}/>
        </div>
      )}





    <ul>
      <p className='text-center p-2'>
        You Have  todos
      </p>
    </ul>
    </div>
    </div>
  )
}

export default Main
