import React, { useEffect, useState } from 'react';
import CompletedList from './CompletedList';

const Completed = () => {
  const [completedTask, setCompletedTask] = useState([]);

  useEffect(() => {
    fetch('https://flannel-parliament-48417.herokuapp.com/completed')
      .then(res => res.json())
      .then(data => setCompletedTask(data))
  }, [completedTask])

  const handleCompleteDelete = id => {
    console.log(id);
    const url = `https://flannel-parliament-48417.herokuapp.com/completed/${id}`;
    fetch(url, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(result => {
        console.log(result);
        // const remaining = completedTask.filter(item => item._id !== id);
        // setCompletedTask(remaining)
      })
  }

  return (
    <div className="mx-2 lg:w-[35%] mt-5 lg:mx-auto shadow-lg">
      <h2 className="text-xl font-serif font-semibold bg-primary py-2 text-white">Completed Task </h2>
      <div className="grid grid-cols-1 divide-y text-left p-2">
        {
          completedTask.map(todoo => <CompletedList key={todoo._id}
            todoo={todoo}
            handleCompleteDelete={handleCompleteDelete}
          ></CompletedList>)
        }
      </div>
    </div>
  );
};

export default Completed;