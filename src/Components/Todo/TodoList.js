import React from 'react';
import { useNavigate } from 'react-router-dom';

const TodoList = ({ todoo, handleChange }) => {
  const { todo, _id } = todoo;


  const navigate = useNavigate()

  const handleNavigate = id => {
    navigate(`/todo/${id}`)
  }

  // console.log(todos);

  return (
    <div className='py-2 flex items-center'>
      <input type="checkbox" className="checkbox checkbox-primary checkbox-xs ml-2" onChange={() => handleChange(todoo)} />
      <p className='text-md w-full pl-3'> {todo}</p>
      <button onClick={() => handleNavigate(_id)} className='btn btn-xs btn-accent text-white mr-2'>Edit</button>
    </div>
  );
};

export default TodoList;