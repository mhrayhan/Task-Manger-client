import React, { useEffect, useState } from 'react';
import CompletedList from './CompletedList';
import CompletedTodoDeleteModal from './CompletedTodoDeleteModal';

const Completed = () => {
  const [completedTask, setCompletedTask] = useState([]);

  const [completeTodoDelete, setCompleteTodoDelete] = useState(null);

  useEffect(() => {
    fetch('https://task-manager-server-rose.vercel.app/completed')
      .then(res => res.json())
      .then(data => setCompletedTask(data))
  }, [completedTask])



  return (
    <div className="mx-2 lg:w-[35%] mt-5 lg:mx-auto shadow-lg">
      <h2 className="text-xl font-serif font-semibold bg-primary py-2 text-white">Completed Task </h2>
      <div className="grid grid-cols-1 divide-y text-left p-2">
        {
          completedTask.map(todoo => <CompletedList key={todoo._id}
            todoo={todoo}
            setCompleteTodoDelete={setCompleteTodoDelete}
          ></CompletedList>)
        }
      </div>
      {completeTodoDelete && <CompletedTodoDeleteModal completeTodoDelete={completeTodoDelete}></CompletedTodoDeleteModal>}
    </div>
  );
};

export default Completed;