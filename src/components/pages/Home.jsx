import React from 'react'
import Header from '../partials/Header'
import { Link } from 'react-router-dom'
import CountUp from "react-countup";
import Footer from '../partials/Footer';
import Transition from '../partials/Transition';
import { motion } from 'framer-motion'


const Home = () => {
   
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

     <section className='banner'>
      <div className="container grid md:grid-cols-2 xs:grid-cols-1 md:gap-12 xs:gap-2 pt-20">
        <div className='md:order-1 xs:order-2 xs:px-2 md:px-0'>
        <motion.h1 className='md:text-[80px] xs:text-[25px]'
         
        initial={{ opacity: 0, y: 20 }}
        animate = {{ opacity: 1, y: 0 }}
        transition = {{ delay: 0.5 }}
        
        >First Heading Will Go Here</motion.h1>
        <motion.p className='md:text-left md:text-[18px] xs:text-[9px] '
           initial={{ opacity: 0, x: -20 }}
           animate = {{ opacity: 1, x: 0 }}
           transition = {{ delay: 1 }}
        >
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Eius sed distinctio vitae placeat animi repudiandae qui, eum laudantium repellendus dolores delectus culpa ipsam earum deleniti at sequi ducimus accusantium ullam
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed pariatur dolores, corrupti ducimus obcaecati repellendus eaque animi neque beatae necessitatibus?
        </motion.p>

       <motion.div className='btn-container mt-6 flex gap-6 items-center'
        variants={groups}
        initial='hidden'
        animate='visible'
       >
        <motion.div variants={item}>
        <Link><button className='btn'>Start Now</button></Link>
        </motion.div>
         
         <motion.div variants={item}>
         <Link><button className='btn-transparent'>Learn More</button></Link>
         </motion.div>
         
       </motion.div>
        </div>

        <div className='img-banner md:size-[100%] xs:order-1 xs:w-[300px] xs:mx-auto xs:mb-2'>
        <motion.img src="../../public/home-img.png" alt="" 
          initial={{ opacity: 0, y: -20 }}
          animate = {{ opacity: 1, y: 0 }}
          transition = {{ delay: 1 }}

        />
        </div>
      </div>
     </section>

     <section className='countUp mt-6 mb-12 md:text-[18px] xs:text-[8px] xs:px-[22px]'> 
      <motion.div className="container flex justify-around bg-[#1c1c1c]"

      variants={groups}
      initial="hidden"
      animate="visible"

      >
        
       <motion.div variants={item}>
       <div className='count-item'>
       <CountUp end={2000} duration={7}/>+
        </div> 
        <p>Students Enrolled</p>
       </motion.div>

       <motion.div variants={item}>
       <div className='count-item'>
       <CountUp end={50} duration={8}/>+
        </div> 
        <p>Teachers</p>
       </motion.div>

       <motion.div variants={item}>
       <div className='count-item'>
       <CountUp end={100} duration={8}/>+
        </div> 
        <p>Teachers</p>
       </motion.div>

       <motion.div variants={item}>
       <div className='count-item'>
       <CountUp end={20} duration={12}/>+
        </div> 
        <p>Teachers</p>
       </motion.div>
      </motion.div>
      </section>
   
     <Footer/>













   </>
  )
}

export default  Transition(Home)
