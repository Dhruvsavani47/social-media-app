/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react'
import MainLogo from './CompPhoto/MainLogo.png'
import './Navbar.css'
import { FaSearch , FaUserFriends, FaFacebookMessenger } from 'react-icons/fa';
import { TiHome } from "react-icons/ti";
import { IoVideocam } from "react-icons/io5";
import { RiCommunityFill } from "react-icons/ri";
import { Link, useNavigate } from 'react-router-dom';
import { BsFillMenuButtonWideFill } from "react-icons/bs";
import { IoNotifications } from "react-icons/io5";

export default function Navbar() {
  return (
    <header className='bg-gray-200'>
        <div className='flex justify-between items-center max-w-7xl mx-auto p-2'>
            <div className='flex space-x-5'>
                <div>
                    <img src={MainLogo} alt="" height={40} width={40} className='border-2 border-grey rounded-full'/>
                </div>

                <div>
                    <form action="" className='bg-slate-100 p-2 rounded-full flex items-center'>
                        <input type="text" placeholder='Search Sharespace...' className='bg-transparent focus:outline-none w-24 sm:w-52'/>
                        <FaSearch className='text-gray-400'/>
                    </form>
                </div>
            </div>

            <div className='flex space-x-20'>
                <Link to='/home'>
                    <TiHome className='text-black hover:text-blue-500 '/>
                </Link>
                <Link to='/friend'>
                    <FaUserFriends  className='text-black hover:text-blue-500 '/>
                </Link>
                <Link to='/video'>
                    <IoVideocam className='text-black hover:text-blue-500 '/>
                </Link>
                <Link to='/groups'>
                    <RiCommunityFill className='text-black hover:text-blue-500 '/>
                </Link>
            </div>

            <div className='flex space-x-6'>
                <Link to='/menu'>
                    <BsFillMenuButtonWideFill className='text-black hover:text-blue-500 '/>
                </Link>
                <Link to='/message'>
                    <FaFacebookMessenger className='text-black hover:text-blue-500 '/>
                </Link>
                <Link to='/notifications'>
                    <IoNotifications className='text-black hover:text-blue-500 '/>
                </Link>
            </div>
        </div>
    </header>
  )
}
