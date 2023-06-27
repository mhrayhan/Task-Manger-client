import React from 'react';
import { Slide, toast } from 'react-toastify';

const CompletedTodoDeleteModal = ({ completeTodoDelete }) => {
  const { _id } = completeTodoDelete;

  const handleCompleteDelete = id => {
    console.log(id);
    const url = `https://task-manager-server-rose.vercel.app/completed/${id}`;
    fetch(url, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(result => {
        console.log(result);
        toast.success('Task delete successfully', {
          autoClose: 1000,
          transition: Slide,
          theme: 'dark'
        })
        // const remaining = completedTask.filter(item => item._id !== id);
        // setCompletedTask(remaining)
      })
  }

  return (
    <div>
      <div>
        <input type="checkbox" id="completeTodo-delete-modal" className="modal-toggle" />
        <div className="modal modal-middle">
          <div className="modal-box w-[90%] max-w-lg">
            <h3 className="font-semibold text-center text-lg">Are you sure to delete the task?</h3>
            <div className="modal-action w-fit mx-auto">
              <label htmlFor="completeTodo-delete-modal" className="btn btn-sm btn-primary ">Cancel</label>
              <label onClick={() => handleCompleteDelete(_id)} htmlFor="completeTodo-delete-modal" className="btn btn-sm btn-secondary">Delete</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompletedTodoDeleteModal;