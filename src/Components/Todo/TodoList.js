import React from 'react';

const TodoList = ({ todoo, handleChange }) => {
  const { todo } = todoo;

  // console.log(todos);

  return (
    <div className='py-2 flex items-center'>
      <input type="checkbox" className="checkbox checkbox-primary checkbox-sm ml-2" onChange={() => handleChange(todoo)} />
      <p className='text-xl w-full pl-3'> {todo}</p>
      <button className='btn btn-xs btn-accent text-white mr-2'>Edit</button>
    </div>
  );
};

export default TodoList;