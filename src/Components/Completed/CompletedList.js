import React from 'react';

const CompletedList = ({ todoo, handleCompleteDelete }) => {
  const { _id, todo } = todoo;
  return (
    <div>
      <div>
        <input type="checkbox" id="completeTodo-delete-modal" class="modal-toggle" />
        <div class="modal modal-middle">
          <div class="modal-box w-[90%] max-w-lg">
            <h3 class="font-semibold text-center text-lg">Are you sure to delete the task?</h3>
            <div class="modal-action w-fit mx-auto">
              <label for="completeTodo-delete-modal" class="btn btn-xs btn-primary ">Cancel</label>
              <label onClick={() => handleCompleteDelete(_id)} for="completeTodo-delete-modal" class="btn btn-xs btn-secondary">Delete</label>
            </div>
          </div>
        </div>
      </div>
      <div>
        <span>
          <input type="checkbox" readOnly checked='checked' className="checkbox checkbox-xs checkbox-primary" />
        </span>
        <p className='text-l w-full pl-3'>{todo}</p>
        <label for='completeTodo-delete-modal' className=' text-red-700 mr-1'>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </label>
      </div>
    </div>
  );
};

export default CompletedList;