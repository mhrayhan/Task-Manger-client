import React from 'react';
import CustomLink from '../CustomLink/CustomLink';

const Navbar = () => {
  return (
    <div className='mt-3'>
      <ul className="menu menu-vertical py-3 px-3 menu-horizontal font-serif shadow-lg border rounded-box">
        <><CustomLink className=' py-2 mx-2' to='/todo'>ToDo</CustomLink></>
        <><CustomLink className=' py-2 mx-2' to='completed'>Completed</CustomLink></>
        <><CustomLink className=' py-2 mx-2' to='calender'>Calender</CustomLink></>
      </ul>
    </div>
  );
};

export default Navbar;