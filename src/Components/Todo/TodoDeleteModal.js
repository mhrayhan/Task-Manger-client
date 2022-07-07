import React from 'react';

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

      })
  }

  return (
    <div>
      <div>
        <input type="checkbox" id="todo-delete-modal" class="modal-toggle" />
        <div class="modal modal-middle">
          <div class="modal-box w-[90%] max-w-lg">
            <h3 class="font-semibold text-center text-lg">Are you sure to delete the task?</h3>
            <div class="modal-action w-fit mx-auto">
              <label for="todo-delete-modal" class="btn btn-xs btn-primary ">Cancel</label>
              <label onClick={() => handleDelete(_id)} for="todo-delete-modal" class="btn btn-xs btn-secondary">Delete</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoDeleteModal;