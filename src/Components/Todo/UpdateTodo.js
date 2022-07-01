import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

const UpdateTodo = () => {
  const { register, handleSubmit, reset } = useForm();

  const { id } = useParams();

  const [task, setTask] = useState({})

  useEffect(() => {
    const url = `https://flannel-parliament-48417.herokuapp.com/todo/${id}`
    fetch(url)
      .then(res => res.json())
      .then(data => setTask(data))
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
        alert('todo added successfully!!!');

        reset()
      })
  }

  return (
    <div>
      <div className='mx-2 lg:w-[35%] lg:mx-auto mt-5'>
        <div className="form-control ">
          <form onSubmit={handleSubmit(onSubmit)}>
            <label className="input-group w-full">
              <input type="text" placeholder="Type here" className="input input-bordered w-full" {...register("todo")} />
              <input type="submit" className='btn btn-primary text-white font-semibold' value='UPDATE' />
            </label>
          </form>
        </div>
        <p className=' w-full mx-auto p-2 rounded-md mt-5 shadow-md'>{task?.todo}</p>
      </div>
    </div>

  );
};

export default UpdateTodo;