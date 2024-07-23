'use client';

import React, { useEffect } from 'react';
import me from '../../public/assets/me.jpg';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';

const About = () => {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('about');
      if (element) {
        const offset = window.scrollY + window.innerHeight;
        const elementOffset = element.offsetTop;
        if (offset > elementOffset) {
          controls.start('visible', {once: true});
        }
      }
  };

  window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [controls]);

  const animationVariants = {
    hidden: {
      translateY: 10,
      opacity: 0,
    },
    visible: {
      translateY: 0,
      opacity: 1,
      transition: {
        ease: 'easeIn',
        duration: 1,
      },
    },
  };

  return (
    <motion.section       
      initial='hidden'
      animate={controls}
      variants={animationVariants} 
      id='about' 
      className='flex justify-center items-center max-sm:flex-col gap-[3rem] max-sm:mb-[4rem] max-lg:px-[2rem]'>
      <div>
        
        <div className='flex items-center '>
          <p className='text-primary2 text-[28px] font-bold'>
            <span className='font-mono font-extralight text-[24px] text-primary1'>01. </span>About me
          </p>
          <div className="border-t border-gray-700 flex-grow ml-[2rem] "></div>
        </div>
        
        <div className='text-primary3 mt-8 font-normal text-[17px]'>
          <p>Hi! My name is Shah Abul Kalam and I enjoy creating things that live on the internet. My interest in web development started back in 2016 when I decided to try making a website using Wix — turns out hacking together a custom webpage taught me a lot about how the websites are built.</p>
          <br />
          <p>Fast-forward to today, I’ve had the privilege of working at multiple start-ups. My main focus these days is building accessible, digital experiences at <a href='https://duolearn.tech' target='_blank' className='text-primary1 '><span>Duolearn</span></a>.</p>
          <br />
          <p>Here are a few technologies I’ve been working with recently:</p>
        </div>

        <div className='flex  mt-6 gap-[5rem] text-[14px] text-primary3 font-mono ml-4'>
            <ul className='leading-6 list-square'>
                <li>JavaScript</li>
                <li>React</li>
                <li>Node.js</li>
            </ul>
            <ul className='leading-6 list-square'>
                <li>TypeScript</li>
                <li>React Native</li>
                <li>Gatsby</li>
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