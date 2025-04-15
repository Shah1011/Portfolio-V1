'use client';

import React from 'react';
import me from '../../public/assets/me.jpg';
import Image from 'next/image';
import { motion } from 'framer-motion';
import useScrollTrigger from '../hooks/useScrollTrigger'; // Adjust path as needed

const About = () => {
  const { controls, animationVariants } = useScrollTrigger(0.2, 0);

  return (
    <motion.section       
      initial='hidden'
      animate={controls}
      variants={animationVariants} 
      id='about' 
      className='flex justify-center items-center max-sm:flex-col gap-[3rem] max-sm:mb-[10rem] max-lg:px-[2rem] scroll-mt-2 h-screen'>
      <div id='scroll-trigger'>
        <div className='flex items-center '>
          <p className='text-primary2 text-[28px] font-bold'>
            <span className='font-mono font-extralight text-[24px] text-primary1'>01. </span>About me
          </p>
          <div className="border-t border-gray-700 flex-grow ml-[2rem] "></div>
        </div>
        
        <div className='text-primary3 mt-8 font-normal text-[17px]'>
          <p>Hi! My name is Shah Abulkalam and I enjoy creating things that live on the internet. My interest in web development started back in 2016 when I decided to try making a website using Wix — turns out hacking together a custom webpage taught me a lot about how the websites are built.</p>
          <br />
          <p>Fast-forward to today, I’ve had the privilege of working at multiple start-ups. My main focus these days is automating tasks at <a href='https://netapp.com/' target='_blank' className='text-primary1 '><span>NetApp</span></a>.</p>
          <br />
          <p>Here are a few technologies I’ve been working with recently:</p>
        </div>

        <div className='flex  mt-6 gap-[5rem] text-[14px] text-primary3 font-mono ml-4'>
            <ul className='leading-6 list-square'>
                <li>JavaScript</li>
                <li>Python</li>
                <li>Go</li>
            </ul>
            <ul className='leading-6 list-square'>
                <li>TypeScript</li>
                <li>AWS</li>
                <li>DevOps</li>
            </ul>
        </div>
      </div>

      <div className="relative inline-block group xl:mt-10">
            <Image
                src={me}
                alt="myimage"
                width={1100}
                height={1100}
                className="max-sm:w-[280px] max-lg:right-2 relative z-10 block object-contain filter brightness-50 hover:brightness-100 rounded-md transform duration-300 ease-in-out"
            />
            <span className="absolute max-lg:right-2 bottom-0 right-0 w-[18.5rem] h-[18.5rem] max-lg:w-[13rem] max-lg:h-[13rem] max-sm:h-[16.5rem] max-sm:w-[16.5rem] -mb-4 -mr-4 transition-all duration-300 ease-linear border-2 border-primary1 rounded-md group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-md"></span>
    
      </div>

    </motion.section>
  );
}

export default About;
