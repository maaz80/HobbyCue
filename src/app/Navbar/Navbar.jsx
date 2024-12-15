import React, { useState } from 'react';
import Frame from "../images/Frame.png";

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    }

    return (
        <div className='flex justify-between md:justify-around items-center p-4 font-sans bg-white'>
            <div className='flex items-center'>
                <div className='flex items-center'>
                    <img className='mr-2' src={Frame} alt="Frame" />
                    <div className='text-2xl font-extrabold text-gray-800 mr-8'>UIFRY</div>
                </div>
                <ul className='hidden md:flex gap-2 md:gap-6 text-sm md:text-lg text-gray-700'>
                    <li className='hover:text-red-500 transition duration-300 font-semibold cursor-pointer'>Home</li>
                    <li className='hover:text-red-500 transition duration-300 font-semibold cursor-pointer'>About Us</li>
                    <li className='hover:text-red-500 transition duration-300 font-semibold cursor-pointer'>Pricing</li>
                    <li className='hover:text-red-500 transition duration-300 font-semibold cursor-pointer'>Features</li>
                </ul>
            </div>
            <div className='hidden md:block'>
                <button className='bg-black text-white px-4 py-2 rounded-md hover:bg-red-500 transition duration-300'>
                    Download
                </button>
            </div>
            <div className='block md:hidden'>
                <button onClick={toggleDropdown} className='text-gray-800 focus:outline-none'>
                    ☰
                </button>
            </div>
            {isDropdownOpen && (
                <div className='absolute top-16 right-0 bg-white w-1/2 shadow-md md:hidden z-50'>
                    <ul className='flex flex-col items-center gap-2 text-sm text-gray-700 p-4'>
                        <li className='hover:text-red-500 transition duration-300 font-semibold cursor-pointer border-b pb-4'>Home</li>
                        <li className='hover:text-red-500 transition duration-300 font-semibold cursor-pointer border-b pb-4'>About Us</li>
                        <li className='hover:text-red-500 transition duration-300 font-semibold cursor-pointer border-b pb-4'>Pricing</li>
                        <li className='hover:text-red-500 transition duration-300 font-semibold cursor-pointer border-b pb-4'>Features</li>
                        <li className='mt-2'>
                            <button className='bg-black text-white px-4 py-2 rounded-md hover:bg-red-500 transition duration-300'>
                                Download
                            </button>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Navbar;
