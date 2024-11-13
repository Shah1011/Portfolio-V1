'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import useScrollTrigger from '../hooks/useScrollTrigger'; 
import blogsData from '@/data/blogs.json';

const About = () => {
  const { controls, animationVariants } = useScrollTrigger(0.2, 0);

  return (
    <motion.section       
      initial='hidden'
      animate={controls}
      variants={animationVariants} 
      id='blog' 
      className='flex justify-center items-center max-sm:flex-col gap-[3rem] max-lg:px-[2rem] h-screen scroll-mt-4'>
      <div id='scroll-trigger'>
        <div className='flex items-center justify-center'>
          <p className='text-primary2 text-[28px] font-bold'>
            <span className='font-mono font-extralight text-[24px] text-primary1'>03. </span>Blog Writings
          </p>
          <div className="border-t border-gray-700 flex-grow ml-[2rem] "></div>
        </div>

        <div className="flex w-full mt-[3rem] max-sm:mt-[2rem] gap-5 justify-center items-start max-sm:flex-col">
          {/* Left side (larger image) */}
          <div className="w-3/4 max-sm:w-auto">
            {blogsData.slice(0, 1).map((blog, index) => (
              <a key={index} href={blog.link} target="blank" className="block">
                <Image
                  src={blog.image}
                  alt={blog.name}
                  width={200}
                  height={200}
                  layout="responsive"
                  className="hover:brightness-75 rounded-md transform duration-300 ease-in-out"
                />
                <p className="text-primary2 mt-2 text-[30px] font-bold ml-3 hover:text-primary1 transform duration-300 ease-in-out max-sm:text-lg">{blog.name}</p>
                <p className="text-primary2 mt-2 text-[14px] ml-3 hover:text-primary3 transform duration-300 ease-in-out max-sm:hidden">{blog.desc}</p>
              </a>
            ))}
          </div>

          {/* Right side (two smaller stacked images) */}
          <div className="flex flex-col gap-[1rem] justify-center items-center w-[40%] max-sm:w-auto">
            {blogsData.slice(1, 3).map((blog, index) => (
              <a key={index} href={blog.link} target="blank" className="block w-full">
                <Image
                  src={blog.image}
                  alt={blog.name}
                  width={400}
                  height={300}  // Set uniform dimensions for all images in the right section
                  className="object-cover hover:brightness-75 rounded-md transform duration-300 ease-in-out"
                />
                <p className="text-primary2 mt-2 w-full ml-3 font-semibold hover:text-primary3 transform duration-300 ease-in-out max-sm:text-lg">{blog.name}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default About;
