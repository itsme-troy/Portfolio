import { assets, serviceData } from '@/assets/assets'
import React, {useState} from 'react'
import Image from 'next/image'
import { motion } from "motion/react"

const Services = () => {
  const [expandedIndex, setExpandedIndex] = useState(null)

  const toggle = (i) => {
    setExpandedIndex(expandedIndex === i ? null : i)
  }

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
            
            {serviceData.map(({icon, title, description, details}, i)=>(
               
               <motion.div key={i}
                    whileHover={{scale: 1.05}}

                    className='border border-gray-400 rounded-lg px-8 py-12
                     hover:shadow-black cursor-pointer hover:bg-lightHover 
                     hover:-translate-y-1 duration-500 dark:bg-darkHover dark:hover:shadow-white group'>
                    
                    <Image src={icon} alt='' className='w-10' />
                    <h3 className='text-lg my-4 text-gray-700 dark:text-white group-hover:text-black'>{title}</h3>
                    <p className='text-sm text-gray-600 leading-5 dark:text-white group-hover:text-black'> 
                        {description} </p>

                    {/* collpsed content */}

                    <div
                        className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-out
                        ${expandedIndex === i ? 'max-h-96 opacity-100 mt-3' : 'max-h-0 opacity-0'}`}
                            id={`svc-details-${i}`}
                            >

                               <p className="text-sm text-gray-600 dark:text-gray-200 group-hover:text-black 
                                dark-group-hover:text-black">
                            {details ?? 'More info coming soon…'} </p>
                    </div>
                        
                        {/* toggle lives OUTSIDE so it's always visible */}
                    <div className='mt-5 flex items-center gap-2'>
                        <button 
                            onClick={() => toggle(i)}
                                className='text-sm underline-offset-2 hover:underline group-hover:text-black'
                                aria-expanded={expandedIndex === i}
                                aria-controls={`svc-details-${i}`}
                            >
                                {expandedIndex === i ? 'See less' : 'Read more'}
                        </button>
                            
                            {/* Optional arrow that flips on expand */}
                        <Image 
                            src = {assets.right_arrow }
                            alt = "arrow"
                            className={`w-4 transition-transform ${expandedIndex === i ? 'rotate-90' : '' }`}/>
                    </div>


                    {/* <a href={link} className='flex items-center gap-2 text-sm mt-5 group-hover:text-black'>
                        Read more <Image alt='' src={assets.right_arrow} className='w-4 hidden dark:block group-hover:block'/>
                    </a> */}
               </motion.div> 
            ))}

            
        </motion.div>


    </motion.div>
  )
}

export default Services
