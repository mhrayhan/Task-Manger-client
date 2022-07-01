import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Calender = () => {
  return (
    <div className='w-fit mx-auto mt-5'>
      <h2 className='text-2xl font-semibold text-blue-600 mb-3'>Calender</h2>
      <Calendar />
    </div>
  );
};

export default Calender;