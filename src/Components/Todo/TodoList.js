import React from 'react';
import { useNavigate } from 'react-router-dom';

const TodoList = ({ todoo, handleChange, setTodoDelete }) => {
  const { todo, _id } = todoo;




  const navigate = useNavigate()

  const handleNavigate = id => {
    navigate(`/todo/${id}`)
  }

  return (
    <div>
      <div className='py-2 flex items-center'>
        <input type="checkbox" className="checkbox checkbox-primary checkbox-xs ml-2" onChange={() => handleChange(todoo)} />
        <p className='text-md w-full pl-3'> {todo}</p>
        <button onClick={() => handleNavigate(_id)} className='btn btn-xs btn-accent text-white mr-2'>Edit</button>
        <label for='todo-delete-modal' onClick={() => setTodoDelete(todoo)} className=' text-red-700 mr-1'>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </label>
      </div>
    </div>
  );
};

export default TodoList;