import React from 'react'
import { FaTimes } from 'react-icons/fa';
import { RiMenu2Line } from 'react-icons/ri';
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

const Header = () => {
   
     const [showNav, setShowNav] = React.useState(false);
     const handleShowNav = () => setShowNav(!showNav)

     console.log(showNav)
  return (
   <AnimatePresence>
     <header>
    <div className="container flex justify-between items-center text-white text-[18px]">
       <div className='flex gap-5'>
       <button className='xs:block md:hidden xs:text-[22px]' onClick={handleShowNav}><RiMenu2Line /></button>
        <h3 className='text-[30px] xs:text-[18px]'>eCourse</h3>
       </div>
       <nav className={`${showNav ? "left-0" : "-left-full"}  fixed md:static top-0 w-full 
        h-screen bg-black z-[9999] pt-20 px-6 pb-6 transition-all md:bg-transparent 
        md:pt-0 md:px-0 md:pb-0 md:h-auto md:flex  md:justify-center` }>
        <ul className='md:flex md:flex-row md:gap-12 xs:flex xs:flex-col xs:gap-8 xs:text-[20px] cursor-pointer'>
            <Link to='/'><li>Home</li></Link>
            <Link to='/courses'><li>Courses</li></Link>
            <Link to='/teach'><li>Services</li></Link>
            <Link to='/receiveUpdates'><li>Updates</li></Link>
            <Link to='/whyUs'><li>Why us?</li></Link>
        </ul>
        <button className='absolute top-8 right-5 text-lg md:hidden' onClick={handleShowNav}><FaTimes/></button>
       </nav>   
        
        <div className='flex gap-4 '>
            <Link><button className='btn xs:text-[15px] xs:px-4 md:text-[18px] md:py-2 md:px-7 whitespace-nowrap'>Sign Up</button></Link>
            <Link><button className='btn xs:text-[15px] xs:px-4 md:text-[18px] md:py-2 md:px-7 '>Login</button></Link>
        </div>
    </div>
   </header>
   </AnimatePresence>

  
  )
}

export default Header