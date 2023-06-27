import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import todoImg from '../../assets/todo.png'
import completeImg from '../../assets/complete.png'
import calenderImg from '../../assets/calender.png'

const Navbar = () => {
  return (
    <div className='mt-3'>
      <ul className="menu menu-vertical py-1 px-3 menu-horizontal font-serif shadow-lg border rounded-box">
        <><CustomLink className='flex items-center py-2 mx-2' to='/todo'> <img src={todoImg} width={35} alt="" /> ToDo</CustomLink></>
        <><CustomLink className='flex items-center py-2 mx-2' to='completed'> <img src={completeImg} width={30} alt="" /> Completed</CustomLink></>
        <><CustomLink className='flex items-center py-2 mx-2' to='calender'> <img src={calenderImg} width={25} alt="" /> Calender</CustomLink></>
      </ul>
    </div>
  );
};

export default Navbar;