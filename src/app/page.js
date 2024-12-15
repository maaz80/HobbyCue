'use client'
import React, { useState } from 'react'
import Humans from './images/Humans.png'
import CutEye from './images/CutEye.png'
import Google from './images/Google.webp'
import Facebook from './images/Facebook.png'
import Lock from './images/Lock.png'
import Password from './images/Password.png'
import People from './images/People.png'
import Program from './images/Program.png'
import Top from './images/Top.png'
import Shopping from './images/Shopping.png'
import Location from './images/Location.png'
import Add from './images/Add.png'
import Mic from './images/Mic.png'
import quote from './images/quote.png'
import FootPeople from './images/FootPersons.png'
import Dp from './images/Dp.png'
import FB from './images/FB.png'
import UpArrow from './images/UpArrow.png'
import P from './images/P.png'
import Tele from './images/Tele.png'
import Twitter from './images/Twitter.png'
import Arrow from './images/Arrow.png'
import Insta from './images/Insta.png'
import Yt from './images/Yt.png'
import Mail from './images/Mail.png'
import GoogleIcon from './images/Google.png'
import Card from './components/Card/Card'
import { PiPlayCircleFill } from 'react-icons/pi'
import Navbar from './components/Navbar/Navbar'
import Image from 'next/image'

const Home = () => {
    const [isSignIn, setIsSignIn] = useState(true)
    const [isJoinIn, setIsJoinIn] = useState(false)
    const [isHobbie, setIsHobbie] = useState(true)
    const [isHowDoI, setIsHowDoI] = useState(true)
    const [isQuick, setIsQuick] = useState(true)
    const [ispassword, setIspassword] = useState(true)

    const handleSignIn = () => {
        setIsSignIn(!isSignIn)
        setIsJoinIn(false)
    }

    const handleJoinIn = () => {
        setIsJoinIn(!isJoinIn)
        setIsSignIn(false)
    }
    const handleHobbie = () => {
        setIsHobbie(!isHobbie)
    }
    const handleHowDoI = () => {
        setIsHowDoI(!isHowDoI)
    }
    const handleQuick = () => {
        setIsQuick(!isQuick)
    }
    const handlepassword = () => {
        setIspassword(!ispassword)
    }
    const handleTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }
    return (
        <div className='inter'>
            <Navbar />
            <Image src={Top} alt="Top" className='fixed right-0 bottom-3 drop-shadow-md z-20' onClick={handleTop} />
            <div className='w-[100%] h-[100%] bg-purple-50 px-4 lg:px-32 pt-8 lg:pt-24  flex flex-col lg:flex-row'>
                <div className='w-[100%] lg:w-[65%]'>
                    <div className='text-xl lg:text-4xl  '>
                        <h1>Explore Your <span className='text-blue-500'>Hobby</span> Or <span className='text-purple-600'>Passion</span></h1>
                    </div>
                    <div className='flex flex-col gap-5 mt-8 w-[100%] md:w-[90%] poppins-regular'>
                        <p className='hidden lg:block'>Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers, suppliers, classes, workshops, and places to practice, participate or perform. Your hobby may be about visual or performing arts, sports, games, gardening, model making, cooking, indoor or outdoor activities…
                        </p>
                        <p className='hidden lg:block'>If you are an expert or a seller, you can Add your Listing and promote yourself, your students, products,  services or events.  Hop on your hobbyhorse and enjoy the ride.</p>
                        <p className='block lg:hidden text-md px-2'>Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers, suppliers, classes, workshops, and places to practice, participate or perform.</p>
                    </div>
                    <div className='w-[100%] mt-[121px] hidden lg:block'>
                        <Image src={Humans} alt="Humans" className='w-[80%]' />
                    </div>
                </div>
                {isSignIn &&
                    <div className='w-[100%] lg:w-[35%] signIn mt-16 lg:mt-0'>
                        <div className='flex gap-7 text-2xl'>
                            <div className='underline underline-offset-8 text-purple-800 cursor-pointer' onClick={handleSignIn}>Sign In</div>
                            <div className='text-gray-400 cursor-pointer' onClick={handleJoinIn}>Join In</div>
                        </div>

                        <div className='flex flex-col w-[100%] mt-10 gap-3'>
                            <div className='relative'>
                                <button className='border border-purple-700 w-[100%] rounded-md py-1'>Continue with google</button>
                                <Image className='absolute w-7 left-4 top-1' src={Google} alt="Google" />
                            </div>
                            <div className='relative'>
                                <button className='border border-purple-700 w-[100%] rounded-md py-1'>Continue with facebook</button>
                                <Image className='absolute w-5 left-5 top-2' src={Facebook} alt="Facebook" />
                            </div>
                        </div>
                        <div className='w-[100%] flex my-5'>
                            <div className='w-[100%] flex justify-center items-center gap-5'>
                                <div className='bg-gray-600 min-h-0.5 w-[29%] lg:w-[34%]'></div>
                                <div className=''>Or Sign with</div>
                                <div className='bg-gray-600 min-h-0.5 w-[29%] lg:w-[34%]'></div>
                            </div>
                        </div>
                        <div className='w-[100%] flex flex-col gap-3'>
                            <input type="text" className='w-[100%] border rounded-md py-1 pl-3 poppins-regular' placeholder='Email' />
                            <div className='relative w-[100%]'>
                                <input type={ispassword ? 'password' : 'text'} className='w-[100%] border rounded-md py-1 pl-3 poppins-regular' placeholder='Password' />
                                <Image src={ispassword ? Password : CutEye} alt="Password" className='absolute right-3 top-2' onClick={handlepassword} />
                            </div>
                        </div>
                        <div className='w-[100%] my-5'>
                            <div className='w-[100%] flex justify-between items-center'>
                                <div className='flex gap-1'>
                                    <input type="checkbox" />
                                    <div className='text-[11px] poppins-regular'>Remember Me</div>
                                </div>
                                <div className='flex'>
                                    <Image src={Lock} alt="Lock" />
                                    <button className='text-[11px] poppins-regular'>Forgot Password?</button>
                                </div>
                            </div>
                        </div>
                        <div className='w-[100%]'>
                            <button className='border border-black w-[100%] rounded-md py-1 font-normal hover:bg-purple-600 hover:border-none hover:text-white poppins-regular'>Continue</button>
                        </div>
                    </div>
                }


                {isJoinIn &&
                    <div className='w-[100%] lg:w-[35%] JoinIn mt-16 lg:mt-0'>
                        <div className='flex gap-7 text-2xl'>
                            <div className='text-gray-400 cursor-pointer' onClick={handleSignIn}>Sign In</div>
                            <div className='underline underline-offset-8 text-purple-800 cursor-pointer'>Join In</div>
                        </div>
                        <div className='flex flex-col w-[100%] mt-10 gap-3'>
                            <div className='relative'>
                                <button className='border border-purple-700 w-[100%] rounded-md py-1'>Continue with google</button>
                                <Image className='absolute w-7 left-4 top-1' src={Google} alt="Google" />
                            </div>
                            <div className='relative'>
                                <button className='border border-purple-700 w-[100%] rounded-md py-1'>Continue with facebook</button>
                                <Image className='absolute w-5 left-5 top-2' src={Facebook} alt="Facebook" />
                            </div>
                        </div>
                        <div className='w-[100%] flex my-5'>
                            <div className='w-[100%] flex justify-center items-center gap-5'>
                                <div className='bg-gray-600 min-h-0.5 w-[29%] lg:w-[34%]'></div>
                                <div className=''>Or Sign with</div>
                                <div className='bg-gray-600 min-h-0.5 w-[29%] lg:w-[34%]'></div>
                            </div>
                        </div>
                        <div className='w-[100%] flex flex-col gap-3'>
                            <input type="text" className='w-[100%] border rounded-md py-1 pl-3 poppins-regular' placeholder='Email' />
                            <div className='relative w-[100%]'>
                                <input type={ispassword ? 'password' : 'text'} className='w-[100%] border rounded-md py-1 pl-3 poppins-regular' placeholder='Password' />
                                <Image src={ispassword ? Password : CutEye} alt="Password" className='absolute right-3 top-2' onClick={handlepassword} />
                            </div>
                        </div>
                        <div className='w-[100%] my-2'>
                            <div className='w-[100%] flex justify-end items-center'>
                                <div className='text-[11px] text-gray-500 poppins-regular'>
                                    Password Strength
                                </div>
                            </div>
                            <div className='w-[100%] my-5 text-center'>
                                <div className='w-[100%] text-[9px] lg:text-[11px] text-gray-500 poppins-regular'>
                                    By continuing, you agree to our <span className='text-black text-[10px] lg:text-[12px]'>Terms of Service</span> and <span className='text-black text-[10px] lg:text-[12px]'>Privacy Policy.</span>
                                </div>
                            </div>
                        </div>
                        <div className='w-[100%]'>
                            <button className='border border-black w-[100%] rounded-md py-1 font-normal hover:bg-purple-600 hover:border-none hover:text-white poppins-regular'>Agree and Continue</button>
                        </div>
                    </div>
                }
                <div className='w-[100%] mt-16 block lg:hidden'>
                    <Image src={Humans} alt="Humans" className='w-[100%]' />
                </div>
            </div>

            <div className='w-[100%] flex-wrap flex gap-10 px-4 lg:px-32 py-16 lg:py-24'>
                <Card
                    Image1={People}
                    Heading="People"
                    Para="Find a teacher, coach, or expert for your hobby interest in your locality. Find a partner, teammate, accompanist or collaborator."
                    Button="Connect"
                    Width='w-[100%] lg:w-[48%]'
                    IconWidth='w-6'
                    hovercolor='hover:bg-purple-400'
                    hovertext='hover:text-gray-800'
                />
                <Card
                    Image1={Location}
                    Heading="Place"
                    Para="Find a class, school, playground, auditorium, studio, shop or an event venue. Book a slot at venues that allow booking through hobbycue."
                    Button="Meet up"
                    Width='w-[100%] lg:w-[48%]'
                    IconWidth='w-8'
                    hovercolor='hover:bg-green-200'
                    hovertext='hover:text-gray-800'
                />
                <Card
                    Image1={Shopping}
                    Heading="Product"
                    Para="Find equipment or supplies required for your hobby. Buy, rent or borrow from shops, online stores or from community members."
                    Button="Get it"
                    Width='w-[100%] lg:w-[48%]'
                    IconWidth='w-6'
                    hovercolor='hover:bg-red-100'
                    hovertext='hover:text-gray-800'
                />
                <Card
                    Image1={Program}
                    Heading="Program"
                    Para="Find events, meetups and workshops related to your hobby. Register or buy tickets online."
                    Button="Attend"
                    Width='w-[100%] lg:w-[48%]'
                    IconWidth='w-6'
                    hovercolor='hover:bg-blue-400'
                    hovertext='hover:text-gray-800'
                />
            </div>
            <div className='w-[100%] bg-blue-50 px-4 lg:px-32 py-16 lg:py-24'>
                <Card Image1={Add} Heading="Add your own" Para="Are you a teacher or expert? Do you sell or rent out equipment, venue or event tickets? Or, you know someone who should be on hobbycue? Go ahead and Add your Own page" Button="Add New" Width='w-[100%]' BG='bg-white' IconWidth='w-7' />
            </div>

            <div className='w-[100%] px-4 lg:px-32 py-16 lg:py-24'>
                {/* Cards */}
                <div className={`card border bg-purple-50 border-gray-500 rounded-md w-[100%] p-10 gap-10 flex flex-col h-[100%] m-auto`}>
                    <div className='flex gap-2'>
                        <Image className='w-6 h-6' src={quote} alt="People" />
                        <div className='font-bold text-xl'>Testimonials</div>
                    </div>
                    <p className='text-sm lg:text-lg poppins-regular'>In a fast growing and ever changing city like Bangalore, it sometimes becomes very difficult to find or connect with like minded people. Websites like hobbycue.com is a great service which helps me get in touch with, communicate, connect, and exchange ideas with other dancers. It also provides the extra benefit of finding products and services that I can avail, which I can be assured is going to be of great quality as it comes recommended by people of the hobbycue community. To have discussions, to get visibility, and to be able to safely explore various hobbies and activities in my city, all under one roof, is an excellent idea and I highly recommend it.</p>
                    <div className='w-[100%] flex flex-col-reverse lg:flex-row justify-between items-center gap-5 lg:gap-0'>
                        <div className='w-[100%] lg:w-[50%] bg-purple-300 rounded-md flex justify-center gap-3 lg:gap-8 items-center h-16'>
                            <div className='invert '><PiPlayCircleFill className='w-7 h-7' /></div>
                            <div className='flex gap-2 w-[60%] justify-center items-center'>
                                <input type="range" className='w-[90%] h-0.5 text-white' />
                                <div className='poppins-regular text-[9px] lg:text-lg'>00:00</div>
                            </div>
                            <div className='relative'>
                                <Image src={Dp} alt="Dp" className='w-9' />
                                <Image src={Mic} alt="Mic" className='absolute w-5 z-10 bottom-[0px] left-[-7px]' />
                            </div>
                        </div>
                        <div className='flex justify-center items-center gap-3'>
                            <div>
                                <Image src={Dp} alt="DP" className='w-12' />
                            </div>
                            <div>
                                <div className='font-semibold text-purple-600'>Shubha Nagarajan</div>
                                <div className='text-blue-500 text-[11px] poppins-regular'>Classical Dancer</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className='w-[100%] bg-blue-50 px-4 lg:px-32 pt-16 lg:pt-24 pb-8 lg:pb-24'>
                <div className='text-xl lg:text-4xl '>
                    <h1>Explore Your <span className='text-blue-500'>Hobby</span> Or <span className='text-purple-600'>Passion</span></h1>
                </div>
                <div className='w-[100%] mt-6 lg:mt-10'>
                    <button className=' w-[30%] lg:w-[10%] rounded-md py-1 font-normal bg-purple-600 text-white poppins-regular'>Get Started</button>
                </div>
                <div className='w-[100%] mt-10'>
                    <Image src={FootPeople} alt='Footer' className='w-full'/>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row justify-between items-start bg-white  w-[100%] px-4 lg:px-32 py-16 lg:py-24 gap-12 lg:gap-0">
                <div className='flex flex-col gap-2 w-[100%] lg:w-auto'>
                    <div className='flex justify-between font-semibold mb-2 lg:mb-4 ' onClick={handleHobbie}><div>HobbieCue</div> <Image src={isHobbie ? UpArrow : Arrow} alt="" className='block lg:hidden w-6' /></div>
                    {isHobbie &&
                        <ul className='flex flex-col gap-2'>
                            <li><a href="#about-us" className='hover:text-blue-500 cursor-pointer poppins-regular'>About Us</a></li>
                            <li><a href="#our-services" className='hover:text-blue-500 cursor-pointer poppins-regular'>Our Services</a></li>
                            <li><a href="#work-with-us" className='hover:text-blue-500 cursor-pointer poppins-regular'>Work with Us</a></li>
                            <li><a href="#faq" className='hover:text-blue-500 cursor-pointer poppins-regular'>FAQ</a></li>
                            <li><a href="#contact-us" className='hover:text-blue-500 cursor-pointer poppins-regular'>Contact Us</a></li>
                        </ul>
                    }
                </div>
                <div className='flex flex-col gap-2 w-[100%] lg:w-auto'>
                    <div className='flex justify-between font-semibold mb-2 lg:mb-4 ' onClick={handleHowDoI}><div>How Do I</div> <Image src={isHowDoI ? UpArrow : Arrow} alt="" className='block lg:hidden w-6' /></div>
                    {isHowDoI &&
                        <ul className='flex flex-col gap-2'>
                            <li><a href="#signup" className='hover:text-blue-500 cursor-pointer poppins-regular'>SignUp</a></li>
                            <li><a href="#add-listing" className='hover:text-blue-500 cursor-pointer poppins-regular'>Add a Listing</a></li>
                            <li><a href="#claim-listing" className='hover:text-blue-500 cursor-pointer poppins-regular'>Claim Listing</a></li>
                            <li><a href="#post-query" className='hover:text-blue-500 cursor-pointer poppins-regular'>Post a Query</a></li>
                            <li><a href="#add-blog-post" className='hover:text-blue-500 cursor-pointer poppins-regular'>Add a Blog Post</a></li>
                            <li><a href="#other-queries" className='hover:text-blue-500 cursor-pointer poppins-regular'>Other Queries</a></li>
                        </ul>
                    }
                </div>
                <div className='flex flex-col gap-2 w-[100%] lg:w-auto'>
                    <div className='flex justify-between font-semibold mb-2 lg:mb-4 ' onClick={handleQuick}><div>Quick Links</div> <Image src={isQuick ? UpArrow : Arrow} alt="" className='block lg:hidden w-6' /></div>
                    {isQuick &&
                        <ul className='flex flex-col gap-2'>
                            <li><a href="#listing" className='hover:text-blue-500 cursor-pointer poppins-regular'>Listing</a></li>
                            <li><a href="#blog-posting" className='hover:text-blue-500 cursor-pointer poppins-regular'>Blog Posting</a></li>
                            <li><a href="#shop-store" className='hover:text-blue-500 cursor-pointer poppins-regular'>Shop / Store</a></li>
                            <li><a href="#community" className='hover:text-blue-500 cursor-pointer poppins-regular'>Community</a></li>
                        </ul>
                    }
                </div>
                <div>
                    <div className='font-semibold mb-2 lg:mb-4'>Social Media</div>
                    <ul className='flex gap-5 lg:gap-3 mb-8'>
                        <li><a href="#facebook"><Image src={FB} alt="FB" className='w-7 lg:w-5 cursor-pointer poppins-regular' /></a></li>
                        <li><a href="#twitter"><Image src={Twitter} alt="Twitter" className='w-7 lg:w-5 cursor-pointer poppins-regular' /></a></li>
                        <li><a href="#instagram"><Image src={Insta} alt="Insta" className='w-7 lg:w-5 cursor-pointer poppins-regular' /></a></li>
                        <li><a href="#pinterest"><Image src={P} alt="P" className='w-7 lg:w-5 cursor-pointer poppins-regular' /></a></li>
                        <li><a href="#google"><Image src={GoogleIcon} alt="Google" className='w-7 lg:w-5 cursor-pointer poppins-regular' /></a></li>
                        <li><a href="#youtube"><Image src={Yt} alt="Yt" className='w-7 lg:w-5 cursor-pointer poppins-regular' /></a></li>
                        <li><a href="#telegram"><Image src={Tele} alt="Tele" className='w-7 lg:w-5 cursor-pointer poppins-regular' /></a></li>
                        <li><a href="#email"><Image src={Mail} alt="Mail" className='w-7 lg:w-5 cursor-pointer poppins-regular' /></a></li>
                    </ul>
                    <div>
                        <div className='font-semibold mb-2 lg:mb-4'>Invite Friends</div>
                        <div className='flex justify-center items-center relative overflow-hidden'>
                            <input className='border border-purple-600 rounded-md pl-2 relative overflow-hidden py-2 w-[100%] lg:w-60' type="text" placeholder='Search Here' />
                            <button className='absolute right-0 p-2.5 rounded-r-md bg-purple-500 text-white cursor-pointer poppins-regular hover:bg-purple-700'>Invite</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-[100%] bg-purple-100 text-center py-3 poppins-regular'>
                © Purple Cues Private Limited
            </div>
        </div>
    )
}

export default Home;
