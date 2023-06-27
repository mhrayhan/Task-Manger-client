import React from 'react';

const TodoList = ({ todoo, handleChange, setTodoDelete, setOpenModal }) => {
  const { todo } = todoo;


  return (
    <div>
      <div className='py-2 flex items-center'>
        <input type="checkbox" className="checkbox checkbox-primary checkbox-xs" onChange={() => handleChange(todoo)} />
        <p className='text-md w-full pl-3 break-all'> {todo}</p>
        {/* <button onClick={() => handleNavigate(_id)} className='btn btn-xs btn-accent text-white mx-2'>Edit</button> */}
        <label htmlFor='update-modal' onClick={() => setOpenModal(todoo)} className=' btn btn-xs btn-accent text-white mx-2'>
          Edit
        </label>
        <label htmlFor='todo-delete-modal' onClick={() => setTodoDelete(todoo)} className=' text-red-700'>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </label>
      </div>

    </div>
  );
};

export default TodoList;