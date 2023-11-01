
const Main = () => {
  
const addTodos = () =>{
    console.log('todos are added')
}
      return (
    <div className='min-h-screen w-screen p-4 bg-gray-700'>
    <div className=" bg-gray-900 text-white max-w-[600px] mx-auto rounded-md shadow-xl p-4">
      <h3 className="text-3xl font-bold text-center text-amber-50 p-2">
        Todo App
      </h3>
    <button onClick={addTodos} className='border p-4 ml-2 text-slate-100 right-0'>Add Todo</button>
    

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
