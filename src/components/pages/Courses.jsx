import React from 'react'
import { RiStarSFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import Header from '../partials/Header'
import Footer from '../partials/Footer'
import Transition from '../partials/Transition'
import { motion } from 'framer-motion'

const Courses = () => {
  return (
 <>
       <Header/>                                                                                                                                                              
    <section className='courses mt-12 mb-20'>
        <div className="container">
            <motion.h3 className='text-center  md:text-[35px] xs:text-[28px] relative'
              initial={{ opacity:0, y:20 }}
              animate={{ opacity:1, y:0 }}
              transition={{delay: 1 }}
              
            >Courses</motion.h3>
            <div className="wrapper md:flex md:justify-between mt-12 xs:grid xs:griod-cols-1 xs:gap-5">


            <motion.div className="courses_card bg-[#1c1c1c] h-[340px] md:w-[400px] xs:h-[350px] xs:w-[300px] xs:mx-auto md:mx-0 p-5 rounded-md"
             
             initial={{ opacity: 0, y:20 }}
             animate={{ opacity: 1, y:0 }}
             transition={{ delay: 0.8 }}
             
            >
             <div>

             <img src="https://via.placeholder.com/200x200" alt="" className='w-[350px] h-[200px] mx-auto rounded-md object-cover'
             
             />

               <h4 className='text-center md:pt-1 xs:pt-2 md:text-[18px] xs:text-[16px]'>Learning Python within 30 days</h4>
                 
                 <ul className='flex items-center justify-center text-[19px]'>
                    <li><RiStarSFill /></li>
                    <li><RiStarSFill /></li>
                    <li><RiStarSFill /></li>
                    <li><RiStarSFill /></li>
                    <li><RiStarSFill /></li>
                 </ul>

                 <div className='text-center pt-3'>
                 <Link><button className='btn'>Enroll Now</button></Link>
                 </div>


             </div>


            </motion.div>
            
            <motion.div className="courses_card bg-[#1c1c1c] h-[340px] md:w-[400px] xs:h-[350px] xs:w-[300px] xs:mx-auto md:mx-0 p-5 rounded-md"
             
             initial={{ opacity: 0, y:20 }}
             animate={{ opacity: 1, y:0 }}
             transition={{ delay: 1.6 }}
             
            >
             <div>

             <img src="https://via.placeholder.com/200x200" alt="" className='w-[350px] h-[200px] mx-auto rounded-md object-cover'
             
             />

               <h4 className='text-center md:pt-1 xs:pt-2 md:text-[18px] xs:text-[16px]'>Learning Python within 30 days</h4>
                 
                 <ul className='flex items-center justify-center text-[19px]'>
                    <li><RiStarSFill /></li>
                    <li><RiStarSFill /></li>
                    <li><RiStarSFill /></li>
                    <li><RiStarSFill /></li>
                    <li><RiStarSFill /></li>
                 </ul>

                 <div className='text-center pt-3'>
                 <Link><button className='btn'>Enroll Now</button></Link>
                 </div>


             </div>


            </motion.div>


            <motion.div className="courses_card bg-[#1c1c1c] h-[340px] md:w-[400px] xs:h-[350px] xs:w-[300px] xs:mx-auto md:mx-0 p-5 rounded-md"
             
             initial={{ opacity: 0, y:20 }}
             animate={{ opacity: 1, y:0 }}
             transition={{ delay: 2.4 }}
             
            >
             <div>

             <img src="https://via.placeholder.com/200x200" alt="" className='w-[350px] h-[200px] mx-auto rounded-md object-cover'
             
             />

               <h4 className='text-center md:pt-1 xs:pt-2 md:text-[18px] xs:text-[16px]'>Learning Python within 30 days</h4>
                 
                 <ul className='flex items-center justify-center text-[19px]'>
                    <li><RiStarSFill /></li>
                    <li><RiStarSFill /></li>
                    <li><RiStarSFill /></li>
                    <li><RiStarSFill /></li>
                    <li><RiStarSFill /></li>
                 </ul>

                 <div className='text-center pt-3'>
                 <Link><button className='btn'>Enroll Now</button></Link>
                 </div>


             </div>


            </motion.div>
       

      
            </div>
        </div>
    </section>
    <Footer/>
 </>
 
  )
}

export default Transition(Courses)