import React from 'react';

const CompletedTodoDeleteModal = ({ completeTodoDelete }) => {
  const { _id } = completeTodoDelete;

  const handleCompleteDelete = id => {
    console.log(id);
    const url = `https://flannel-parliament-48417.herokuapp.com/completed/${id}`;
    fetch(url, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(result => {
        console.log(result);
        // const remaining = completedTask.filter(item => item._id !== id);
        // setCompletedTask(remaining)
      })
  }

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
    </div>
  );
};

export default CompletedTodoDeleteModal;