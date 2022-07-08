import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Slide, toast } from 'react-toastify';

const UpdateModal = ({ openModal }) => {
  const { _id } = openModal;
  let id = _id;
  const { register, handleSubmit, reset } = useForm();

  const [task, setTask] = useState({})

  useEffect(() => {
    const url = `https://flannel-parliament-48417.herokuapp.com/todo/${id}`
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setTask(data)
      })
  }, [id])

  const onSubmit = data => {
    console.log(data.todo);
    setTask(data)
    const updateTodo = data;
    const url = `https://flannel-parliament-48417.herokuapp.com/todo/${id}`;
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
      })
  }
  return (
    <div>
      <input type="checkbox" id="update-modal" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box relative">
          <label for="update-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <div className='mx-2 lg:w-[95%] lg:mx-auto mt-5'>
            <div className="form-control ">
              <form onSubmit={handleSubmit(onSubmit)}>
                <label className="input-group w-full">
                  <input type="text" placeholder="Type here" className="input input-bordered w-full" {...register("todo")} />
                  <input type="submit" className='btn btn-primary text-white font-semibold' value='UPDATE' />
                </label>
              </form>
            </div>
            <p className=' w-full mx-auto p-2 border rounded-md mt-5 shadow-md'>{task?.todo}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateModal;