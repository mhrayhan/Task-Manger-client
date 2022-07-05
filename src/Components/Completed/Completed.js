import React, { useEffect, useState } from 'react';

const Completed = () => {
  const [completedTask, setCompletedTask] = useState([]);

  useEffect(() => {
    fetch('https://flannel-parliament-48417.herokuapp.com/completed')
      .then(res => res.json())
      .then(data => setCompletedTask(data))
  }, [completedTask])

  const handleDelete = id => {
    console.log(id);
    const deleteUrl = `https://flannel-parliament-48417.herokuapp.com/completed/${id}`;
    fetch(deleteUrl, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(result => {
        console.log(result);
        const remaining = completedTask.filter(item => item._id !== id);
        setCompletedTask(remaining)
      })
  }

  return (
    <div className="mx-2 lg:w-[35%] mt-5 lg:mx-auto shadow-lg">
      <h2 className="text-xl font-serif font-semibold bg-primary py-2 text-white">Completed Task </h2>
      <div className="grid grid-cols-1 divide-y text-left p-2">
        {
          completedTask.map(todoo => <div
            key={todoo._id}
            className='py-2 flex items-center'>
            <span>
              <input type="checkbox" defaultChecked className="checkbox checkbox-xs checkbox-primary" />
            </span>
            <p className='text-l w-full pl-3'>{todoo.todo}</p>
            <button onClick={() => handleDelete(todoo._id)} className=' text-red-600 ml-5 p-2'>X</button>
          </div>)
        }
      </div>
    </div>
  );
};

export default Completed;