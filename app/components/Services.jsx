import { assets, serviceData } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'
import { motion } from "motion/react"

const Services = ({isDarkMode}) => {
  return (
    <motion.div id="services" className='w-full px-[12%] py-10 scroll-mt-20'
        initial={{ opacity: 0}}
        whileInView= {{ opacity: 1}}
        transition={{ duration: 1}}
    >

        <motion.h4 className='text-center mb-2 text-lg font-Ovo'
            initial={{ y: -20, opacity: 0}}
            whileInView= {{ y:0, opacity: 1}}
            transition={{ delay: 0.3, duration: 0.5}}>
            
            What I offer </motion.h4>

        <motion.h2 className ='text-center text-5xl font-Ovo'
            initial={{ y: -20, opacity: 0}}
            whileInView= {{ y:0, opacity: 1}}
            transition={{ delay: 0.5, duration: 0.5}}>
            
            My Services </motion.h2>
        
        <motion.p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'
            initial={{ opacity: 0}}
            whileInView= {{ opacity: 1}}
            transition={{ delay: 0.7, duration: 0.5}}>
            
            I am a full-stack developer from Philippines, Quezon City with a year of experience in companies developing multiple web applications. </motion.p>
        
        <motion.div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl-grid-cols-4 gap-6 my-10'
            initial={{ opacity: 0}}
            whileInView= {{ opacity: 1}}
            transition={{ delay: 0.9, duration: 0.6}}>
            
            {serviceData.map(({icon, title, description, link}, index)=>(
               
               <motion.div key={index}
                    whileHover={{scale: 1.05}}

                    className='border border-gray-400 rounded-lg px-8 py-12
                     hover:shadow-black cursor-pointer hover:bg-lightHover 
                     hover:-translate-y-1 duration-500 dark:bg-darkHover dark:hover:shadow-white group'>
                    <Image src={icon} alt='' className='w-10' />
                    <h3 className='text-lg my-4 text-gray-700 dark:text-white group-hover:text-black'>{title}</h3>
                    <p className='text-sm text-gray-600 leading-5 dark:text-white group-hover:text-black'> 
                        {description}
                    </p>
                    <a href={link} className='flex items-center gap-2 text-sm mt-5 group-hover:text-black'>
                        Read more <Image alt='' src={assets.right_arrow} className='w-4 hidden dark:block group-hover:block'/>
                    </a>
               </motion.div> 
            ))}

            
        </motion.div>


    </motion.div>
  )
}

export default Services
