import React from 'react';
import { BiSearch } from 'react-icons/bi';
import { BsCartFill } from 'react-icons/bs';
import { IoPersonCircle } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="header sticky top-0 bg-white w-full shadow-md flex items-center justify-between px-2 md:px-8 py-02">
      {/* <!-- logo --> */}
      <h1 className="w-3/12 hidden md:block text-2xl font-bold border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer active">
        <Link to=''>
          <p>ART</p>
        </Link>
      </h1>

      {/* <!-- navigation --> */}
      <nav className="nav font-semibold text-lg">
        <ul className="flex items-center">
          <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer active">
            <Link to=''>Home</Link>
          </li>
          <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
            <Link to=''>About</Link>
          </li>
          <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
            <Link to=''>Contact</Link>
          </li>
          <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
            <Link to=''>Dashboard</Link>
          </li>
        </ul>
      </nav>
      {/* <!-- buttons ---> */}
      <div className="w-4/12 flex justify-end border-b-2 border-green-500 border-opacity-0">
        <button className='p-4 hidden md:block border-green-500 text-xl text-black hover:text-green-500 duration-200 cursor-pointer'>
          <BiSearch />
        </button>
        <Link to='' className='p-4 border-green-500 text-xl text-black hover:text-green-500 duration-200 cursor-pointer'>
          <BsCartFill />
        </Link>
        <Link to='' className='p-4 border-green-500 text-2xl text-black hover:text-green-500 duration-200 cursor-pointer'>
          <IoPersonCircle />
        </Link>
      </div>

    </header>
  );
};

export default Navbar;