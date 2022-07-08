import React from 'react';
import { Slide, toast } from 'react-toastify';

const TodoDeleteModal = ({ todoDelete }) => {
  const { _id } = todoDelete;


  const handleDelete = id => {
    console.log(id);
    const deleteUrl = `https://flannel-parliament-48417.herokuapp.com/todo/${id}`;
    fetch(deleteUrl, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(result => {
        toast.success('Task delete successfully', {
          autoClose: 1000,
          transition: Slide,
          theme: 'dark'
        })
      })
  }

  return (
    <div>
      <div>
        <input type="checkbox" id="todo-delete-modal" className="modal-toggle" />
        <div className="modal modal-middle">
          <div className="modal-box w-[90%] max-w-lg">
            <h3 className="font-semibold text-center text-lg">Are you sure to delete the task?</h3>
            <div className="modal-action w-fit mx-auto">
              <label htmlFor="todo-delete-modal" className="btn btn-xs btn-primary ">Cancel</label>
              <label onClick={() => handleDelete(_id)} htmlFor="todo-delete-modal" className="btn btn-xs btn-secondary">Delete</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoDeleteModal;