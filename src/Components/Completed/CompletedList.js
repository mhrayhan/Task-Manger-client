import React from 'react';
import deleteImg from '../../assets/delete.png'

const CompletedList = ({ todoo, setCompleteTodoDelete }) => {
  const { todo } = todoo;
  return (
    <div className='flex items-center py-2'>
      <span>
        <input type="checkbox" readOnly checked='checked' className="checkbox checkbox-xs checkbox-primary" />
      </span>
      <p className='text-l w-full pl-3 break-all'>{todo}</p>
      <label htmlFor='completeTodo-delete-modal' onClick={() => setCompleteTodoDelete(todoo)} className=' text-red-700 ml-1'>
        <img src={deleteImg} width={30} alt="" />
      </label>
    </div>
  );
};

export default CompletedList;