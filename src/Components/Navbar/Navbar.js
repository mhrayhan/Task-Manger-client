import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='mt-3'>
      <ul className="menu menu-vertical lg:menu-horizontal bg-yellow-400 font-serif text-white font-semibold rounded-box">
        <li><Link to='/todo'>ToDo</Link></li>
        <li><Link to='completed'>Completed</Link></li>
        <li><Link to='calender'>Calender</Link></li>
      </ul>
    </div>
  );
};

export default Navbar;