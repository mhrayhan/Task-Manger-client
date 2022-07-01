import React, { useEffect, useState } from 'react';

const Completed = () => {
  const [completedTask, setCompletedTask] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/completed')
      .then(res => res.json())
      .then(data => setCompletedTask(data))
  }, [completedTask])

  return (
    <div className="w-[35%] mt-5 mx-auto shadow-lg">
      <h2 className="text-2xl font-semibold bg-primary py-2 text-white">Completed Task </h2>
      <div className="grid grid-cols-1 divide-y text-left ">
        {
          completedTask.map(todoo => <div className='py-2'>
            <p className='text-l w-full pl-3'> {todoo.todo}</p>
          </div>)
        }
      </div>
    </div>
  );
};

export default Completed;