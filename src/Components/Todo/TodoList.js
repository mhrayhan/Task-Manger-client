import React from 'react';

import deleteImg from '../../assets/delete.png'
import editImg from '../../assets/edit.png'

const TodoList = ({ todoo, handleChange, setTodoDelete, setOpenModal }) => {
  const { todo } = todoo;

  return (
    <div>
      <div className='p-1 mb-1 shadow-sm rounded-md flex items-center justify-between border bg-slate-50'>
        <div className='flex items-center'>
          <input type="checkbox" className="checkbox checkbox-primary checkbox-sm" onChange={() => handleChange(todoo)} />
          <p className='text-md px-2 break-all text-justify'> {todo}</p>
        </div>
        <div className='flex items-center min-w-fit '>
          <label htmlFor='update-modal' onClick={() => setOpenModal(todoo)} className='mr-1 '>
            <img src={editImg} width={25} alt="" />
          </label>
          <label htmlFor='todo-delete-modal' onClick={() => setTodoDelete(todoo)} className=' text-red-700'>
            <img src={deleteImg} width={25} alt="" />
          </label>
        </div>
      </div>



    </div>
  );
};

export default TodoList;