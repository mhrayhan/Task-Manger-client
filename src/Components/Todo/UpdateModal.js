import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Slide, toast } from 'react-toastify';

const UpdateModal = ({ openModal, setOpenModal }) => {
  const { _id } = openModal;
  const { register, handleSubmit, reset } = useForm();

  const [task, setTask] = useState({})



  useEffect(() => {
    const url = `https://task-manager-server-rose.vercel.app/todo/${_id}`
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setTask(data)
      })
  }, [_id])

  const onSubmit = data => {
    console.log(data.todo);
    // setTask(data)
    const updateTodo = data;
    const url = `https://task-manager-server-rose.vercel.app/todo/${_id}`;
    fetch(url, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(updateTodo)
    })
      .then(res => res.json())
      .then(data => {
        console.log('todo updated', data);
        toast.success('Task updated successfully', {
          autoClose: 1000,
          transition: Slide,
          theme: 'dark'
        })
        reset()
        setOpenModal(null)
      })
  }
  return (
    <div>
      <input type="checkbox" id="update-modal" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box relative">
          <label for="update-modal" class="btn btn-sm btn-circle border-none hover:bg-blue-700 hover:text-white bg-white text-black absolute right-2 top-2">✕</label>
          <div className='mx-2 lg:w-[95%] lg:mx-auto mt-5'>
            <div className="form-control ">
              <form onSubmit={handleSubmit(onSubmit)}>
                <label className="w-full ">
                  <textarea defaultValue={task.todo} type="text" placeholder="Type here" className="textarea textarea-bordered w-full h-32" {...register("todo")} />
                  <input type="submit" className='btn btn-primary text-white font-semibold' value='UPDATE' />
                </label>
              </form>
            </div>
            {/* <p className=' w-full mx-auto p-2 border rounded-md mt-5 shadow-md'>{todo}</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateModal;