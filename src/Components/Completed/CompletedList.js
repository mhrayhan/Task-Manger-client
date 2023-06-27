import React from 'react';

const CompletedList = ({ todoo, setCompleteTodoDelete }) => {
  const { todo } = todoo;
  return (
    <div className='flex items-center py-2'>
      <span>
        <input type="checkbox" readOnly checked='checked' className="checkbox checkbox-xs checkbox-primary" />
      </span>
      <p className='text-l w-full pl-3 break-all'>{todo}</p>
      <label htmlFor='completeTodo-delete-modal' onClick={() => setCompleteTodoDelete(todoo)} className=' text-red-700 ml-1'>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
      </label>
    </div>
  );
};

export default CompletedList;