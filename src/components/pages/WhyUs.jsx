import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../partials/Header'
import Footer from '../partials/Footer'
import Transition from '../partials/Transition'
import { motion } from 'framer-motion'

const WhyUs = () => {

    const groups = {
        //initial
        hidden: { opacity: 0 },
        
        //animate
        visible: {
          opacity: 1,
          transition: {
            delay: 0.4,
            duration: 1.8,
            staggerChildren: 0.7,
          },
        },
      };
    
    
      const item = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0 },
      };

  return (
   <>
      <Header/>
      <section className='whyUs mb-6'>
            <div className="container">
            <motion.h3 className='text-center md:text-[35px] xs:text-[28px] relative' 
              initial={{ opacity:0, y:20 }}
              animate={{ opacity:1, y:0 }}
              transition={{delay: 0.3 }}
            
            >Why Us?</motion.h3>
                <div className="wrapper grid md:grid-cols-2 xs:ghrid-cols-1 mt-12 gap-20 place-items-center object-cover">
                <motion.img src="https://via.placeholder.com/1250x750" alt="" 
                    initial={{ opacity:0, y:20 }}
                    animate={{ opacity:1, y:0 }}
                    transition={{delay: 0.5 }}
                />

                <motion.div 
                    variants={groups}
                    initial='hidden'
                    animate='visible'
                >
                    <motion.h2 className='font-bold text-[22px]' variants={item}>About Us</motion.h2>
                    <motion.p className='mt-4' variants={item}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                        Facere vero officia necessitatibus, suscipit enim temporibus
                        quibusdam quisquam blanditiis eum deserunt, magni libero, tempore quae iusto. Nihil dolorem ea tenetur hic.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                        Facere vero officia necessitatibus, suscipit enim temporibus
                        quibusdam quisquam blanditiis eum deserunt, magni libero, tempore quae iusto. Nihil dolorem ea tenetur hic.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                        Facere vero officia necessitatibus, suscipit enim temporibus
                    </motion.p>
                    
                    <motion.div variants={item}>
                    <Link><button className='border-solid border-[1.5px] border-[#7f39fb] mt-4 py-2 px-3 rounded-full'>Learn More</button></Link>
                    </motion.div>
                </motion.div>
                </div>
            </div>
        </section>
        <Footer/>
   </>
  )
}

export default  Transition(WhyUs)