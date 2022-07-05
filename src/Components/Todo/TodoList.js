import React from 'react';
import { useNavigate } from 'react-router-dom';

const TodoList = ({ todoo, handleChange, handleDelete }) => {
  const { todo, _id } = todoo;


  const navigate = useNavigate()

  const handleNavigate = id => {
    navigate(`/todo/${id}`)
  }

  return (
    <div className='py-2 flex items-center'>
      <input type="checkbox" className="checkbox checkbox-primary checkbox-xs ml-2" onChange={() => handleChange(todoo)} />
      <p className='text-md w-full pl-3'> {todo}</p>
      <button onClick={() => handleNavigate(_id)} className='btn btn-xs btn-accent text-white mr-2'>Edit</button>
      <button onClick={() => handleDelete(_id)} className=' text-red-600 mr-2'>X</button>
    </div>
  );
};

export default TodoList;