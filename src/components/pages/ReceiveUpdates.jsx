import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../partials/Footer'
import Header from '../partials/Header'
import Transition from '../partials/Transition'
import { motion } from 'framer-motion'

const ReceiveUpdates = () => {
  return (
   <>
       <Header/>
    <div>
        <section className='receiveUpdates mt-12 mb-[15rem]'>
          <div className="container">
          <motion.h3 className='text-center md:text-[35px] xs:text-[28px] relative' 
              initial={{ opacity:0, y:20 }}
              animate={{ opacity:1, y:0 }}
              transition={{delay: 0.5 }}

          >Receive Updates</motion.h3>
            <div className="wrapper md:text-center">
              <motion.div className='mt-10 space-y-[70px]'
                 initial={{ opacity:0, y:20 }}
                 animate={{ opacity:1, y:0 }}
                 transition={{delay: 1 }}

              >
              <h5 className='text-[22px] font-extralight'>Get Every Update Abour Our Courses</h5>
              <div>
                <div className='relative'>
                <input type="text" placeholder='Enter Your Email Address' className='md:w-[50%] xs:w-[100%]
                 py-[20px] px-6 rounded-2xl outline-none placeholder:pl-3 md:placeholder:text-[18px] xs:placeholder:text-[14px]'/>
                 <Link><button className=' btn absolute md:left-[960px] xs:left-[240px] md:top-[8px] xs:top-[7px] md:bottom-[8px] xs:bottom-[7px]  md:px-11  md:text-[18px] md:mt-0
                  z-[9999] xs:px-3 md:py-2 rounded-2xl xs:text-[16px]'>Subscribe</button></Link>
                </div>
              </div>
              </motion.div>
            </div>
          </div>
        </section>
    </div>

    <Footer/>
    </>
  )
}

export default  Transition(ReceiveUpdates)
