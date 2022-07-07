import React from 'react';

const CompletedList = ({ todoo, setCompleteTodoDelete }) => {
  const { _id, todo } = todoo;
  return (
    <div>

      <div>
        <span>
          <input type="checkbox" readOnly checked='checked' className="checkbox checkbox-xs checkbox-primary" />
        </span>
        <p className='text-l w-full pl-3'>{todo}</p>
        <label for='completeTodo-delete-modal' onClick={() => setCompleteTodoDelete(todoo)} className=' text-red-700 mr-1'>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </label>
      </div>
    </div>
  );
};

export default CompletedList;