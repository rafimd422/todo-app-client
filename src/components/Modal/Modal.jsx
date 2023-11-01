import React from 'react'

const Modal = ({setModalVisible}) => {



    const hideModal = () => {
        setModalVisible(false);
      };



  return (
    <div className="relative w-full mx-auto max-w-md max-h-full">
    {/* Modal content */}
    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
      <button
        type="button"
        className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
        data-modal-hide="todo-modal"
        onClick={hideModal}
      >
        <svg
          className="w-3 h-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
          />
        </svg>
        <span className="sr-only">Close modal</span>
      </button>
      <div className="px-6 py-6 lg:px-8">
        <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
          Sign in to our platform
        </h3>
        <form className="space-y-6" action="#">
          <div>
            <label
              for="todo-title"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
            Todo Title
            </label>
            <input
              type="todo-title"
              name="todo-title"
              id="todo-title"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="Title"
              required
            />
          </div>
          <div>
            <label
              for="Descripton"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your Descripton
            </label>
            <input
              type="Descripton"
              name="Descripton"
              id="Descripton"
              placeholder="Description of Todo"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            Add Todo
          </button>
        </form>
      </div>
    </div>
  </div>
  )
}

export default Modal
