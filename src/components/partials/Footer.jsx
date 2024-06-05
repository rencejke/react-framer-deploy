import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Footer = () => {

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
    <footer className='footer bg-[#7f39fb] p-6'>
        <div className="container">
        <div className="wrapper grid md:grid-cols-[3fr_1fr_1fr_1fr_2fr] xs:grid-cols-1 md:justify-between xs:justify-center xs:gap-5">
         <motion.h2 className='self-center text-[40px]'
         
         initial={{ opacity: 0, y: 20}}
         animate={{ opacity: 1, y: 0}}
         transition={{ delay: 1.5 }}
         
         >eCourse</motion.h2>
         
         <motion.div 
         variants={groups} 
         initial='hidden'
         animate='visible'
         >
         <motion.h4 className='font-bold text-[18px] mb-2' variants={item}>Categories</motion.h4>
         <ul className='text-[17px]'>
            <motion.li variants={item}>Python</motion.li>
            <motion.li variants={item}>Java</motion.li>
            <motion.li variants={item}>PHP</motion.li>
            <motion.li variants={item}>Laravel</motion.li>
         </ul>
         </motion.div>

         <motion.div 
         variants={groups} 
         initial='hidden'
         animate='visible'
         >
         <motion.h4 className='font-bold text-[18px] mb-2' variants={item}>Categories</motion.h4>
         <ul className='text-[17px]'>
            <motion.li variants={item}>Python</motion.li>
            <motion.li variants={item}>Java</motion.li>
            <motion.li variants={item}>PHP</motion.li>
            <motion.li variants={item}>Laravel</motion.li>
         </ul>
         </motion.div>


         <motion.div 
         variants={groups} 
         initial='hidden'
         animate='visible'
         >
         <motion.h4 className='font-bold text-[18px] mb-2' variants={item}>Categories</motion.h4>
         <ul className='text-[17px]'>
            <motion.li>Python</motion.li>
            <motion.li variants={item}>Java</motion.li>
            <motion.li variants={item}>PHP</motion.li>
            <motion.li variants={item}>Laravel</motion.li>
         </ul>
         </motion.div>


       

         <motion.ul className='flex self-end gap-4 text-[30px] md:justify-self-end xs:justify-self-start'
          variants={groups}
          initial='hidden'
          animate='visible'
         >
            <motion.li variants={item}><FaLinkedin /></motion.li>
            <motion.li variants={item}><FaInstagram /></motion.li>
            <motion.li variants={item}><FaFacebook /></motion.li>
            <motion.li variants={item}><FaYoutube /></motion.li>
         </motion.ul>

         
        </div>
        </div>

    </footer>
  )
}

export default Footer