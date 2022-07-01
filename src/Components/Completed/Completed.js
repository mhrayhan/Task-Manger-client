import React, { useEffect, useState } from 'react';

const Completed = () => {
  const [completedTask, setCompletedTask] = useState([]);

  useEffect(() => {
    fetch('https://flannel-parliament-48417.herokuapp.com/completed')
      .then(res => res.json())
      .then(data => setCompletedTask(data))
  }, [completedTask])

  return (
    <div className="w-[35%] mt-5 mx-auto shadow-lg">
      <h2 className="text-xl font-serif font-semibold bg-primary py-2 text-white">Completed Task </h2>
      <div className="grid grid-cols-1 divide-y text-left p-2">
        {
          completedTask.map(todoo => <div key={todoo._id} className='py-2 flex items-center'>
            <span className=' '>  <input type="checkbox" checked="checked" class="checkbox checkbox-xs checkbox-primary" /></span>
            <p className='text-l w-full pl-3'>{todoo.todo}</p>
          </div>)
        }
      </div>
    </div>
  );
};

export default Completed;