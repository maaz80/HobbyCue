'use client'
import React, { useEffect, useRef, useState } from 'react'
import HLogo from '../../images/HLogo.png'
import Arrow from '../../images/Arrow.png'
import Explore from '../../images/Explore.png'
import Hobbies from '../../images/Hobbies.png'
import Bookmark from '../../images/Bookmark.png'
import Notification from '../../images/Notification.png'
import Search from '../../images/Search.png'
import Line from '../../images/Line.png'
import Cart from '../../images/Cart.png'
import { BiSearch } from 'react-icons/bi'
import Image from 'next/image'


const Navbar = () => {
    const [isExplore, setisExplore] = useState(false)
    const [islines, setislines] = useState(false)
    const dropdownMenuRef = useRef(null)

    const handleDropdownClick = (dropdown) => {
        if (dropdown === 'lines') {
            setislines(!islines);
        } else if (dropdown === 'explore') {
            setisExplore(!isExplore);
        }
    };

    const handleClickOutside = (event) => {
        if (dropdownMenuRef.current && !dropdownMenuRef.current.contains(event.target)) {
            setislines(false);
            setisExplore(false);
        }
    };

    useEffect(() => {
        if (islines || isExplore) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        // Cleanup the event listener when the component unmounts
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [islines, isExplore]);


    return (
        <div className=' flex justify-around items-center font-inter py-2 lg:py-3 px-2 lg:px-24 shadow-black shadow-xl drop-shadow-[4px] poppins-regular w-[100%]'>
            <div className='w-[45%] lg:w-56'>
                <Image src={HLogo} alt="Hlogo" />
            </div>
            <div className=' justify-center items-center relative w-[25%] hidden lg:flex cursor-pointer'>
                <input className='border rounded-md pl-2 relative overflow-hidden py-2 w-[100%]' type="text" placeholder='Search Here' />
                <div className='absolute right-0 flex w-[10%] justify-center items-center h-[100%] rounded-r-md bg-purple-500 '><BiSearch /></div>
            </div>
            <div className='flex gap-5 relative'>

                <div className=' justify-center items-center gap-1 hidden lg:flex cursor-pointer' onClick={() => handleDropdownClick('explore')}  ref={dropdownMenuRef}>
                    <div><Image className='w-5 ' src={Explore} alt="Explore" /></div>
                    <div>Explore</div>
                    <div><Image src={Arrow} alt="Arrow" /></div>

                    {isExplore &&
                        <ul className='w-[90%] absolute top-12  left-3 z-10 '>
                            <li className='border px-7  bg-white py-2.5'>People-Community</li>
                            <li className='border px-7  bg-white py-2.5'>Place-Venues</li>
                            <li className='border px-7  bg-white py-2.5'>Programs-Events</li>
                            <li className='border px-7  bg-white py-2.5'>Product-Store</li>
                            <li className='border px-7  bg-white py-2.5'>Blog</li>
                        </ul>
                    }

                </div>
                <div className='  justify-center items-center gap-1 hidden lg:flex cursor-pointer'>
                    <div><Image src={Hobbies} alt="Hobbies" /></div>
                    <div>Hobbies</div>
                    <div><Image src={Arrow} alt="" /></div>
                </div>
            </div>
            <div className='flex gap-3 ml-8'>
                <Image src={Bookmark} alt="Bookmark" className='cursor-pointer hover:scale-90 hidden lg:block' />
                <Image src={Search} alt="Bookmark" className='cursor-pointer hover:scale-90 block lg:hidden' />
                <Image src={Notification} alt="Notification" className='cursor-pointer hover:scale-90' />
                <Image src={Cart} alt="Cart" className='cursor-pointer hover:scale-90 hidden lg:block' />
                <div className='relative' ref={dropdownMenuRef}>
                <Image src={Line} alt="Cart" className='cursor-pointer hover:scale-90 block lg:hidden' onClick={() => handleDropdownClick('lines')}/>
                {islines &&
                <ul className='absolute flex flex-col  right-0 top-9'>
                    <li className='bg-white  border py-2 px-6'>Explore</li>
                    <li className='bg-white  border py-2 px-6'>Hobbies</li>
                    <li className='bg-white  border py-2 px-6'>Bookmark</li>
                    <li className='bg-white  border py-2 px-6'>Cart</li>
                    <li className='bg-white  border py-2 px-6'>SignUp</li>
                </ul>
}
                </div>

            </div>
            <div className='w-[10%] hidden lg:block'>
                <button className='border border-purple-600 rounded-md w-[100%] py-2 hover:bg-purple-600 hover:text-white hover:scale-90 '>Sign In</button>
            </div>
        </div>

    )
}

export default Navbar
