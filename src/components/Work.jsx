'use client';

import React from 'react';
import Image from 'next/image';
import github from '@/components/icons/github.svg';
import externallink from '@/components/icons/externallink.svg';
import homeprotein from '../../public/assets/homeprotein.png';
import brainwave from '../../public/assets/brainwave.png';
import flavia from '../../public/assets/flavia.png';
import nike from '../../public/assets/nike.png';
import { motion, useAnimation } from 'framer-motion';


const Work = () => {

  // const controls = useAnimation();

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const element = document.getElementById('work');
  //     if (element) {
  //       const offset = window.scrollY + window.innerHeight;
  //       const elementOffset = element.offsetTop;
  //       if (offset > elementOffset) {
  //         controls.start('visible', {delay: 0.6, once: true});
  //       }
  //     }
  // };

  // window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, [controls]);

  // const animationVariants = {
  //   hidden: {
  //     translateY: 10,
  //     opacity: 0,
  //   },
  //   visible: {
  //     translateY: 0,
  //     opacity: 1,
  //     transition: {
  //       ease: 'easeIn',
  //       duration: 1,
  //     },
  //   },
  // };

  return (
    <>
    {/* //DESKTOP AND TABLET DEVICE VIEW */}

    <motion.section 
      initial='hidden'
      // animate={controls}
      // variants={animationVariants}  
      id='work' 
      className='max-lg:hidden'>

        <div className='flex items-center'>
          <p className='text-primary2 text-[28px] font-bold'>
            <span className='font-mono font-extralight  text-primary1 max-sm:text-center'>02. </span>Some things I've built.
          </p>
            <div className="border-t border-gray-700 flex-grow ml-[2rem] "></div>
        </div>

      <div className='mt-[5rem] relative'>
        <div className='flex flex-row-reverse justify-between items-center'>
          <Image
            src={flavia}
            alt='flavia'
            className='object-contain w-[60%] brightness-75 hover:brightness-100 transform duration-300 ease-in-out'
          />

          <div className='absolute flex flex-col ' style={{ pointerEvents: 'none' }}>
            <div className=''>
              <p className='flex justify-start text-primary1 font-mono text-sm'>Featured Project</p>
              <h1 className='flex justify-start text-primary2 font-bold text-[28px]'>Flavia Theme</h1>
            </div>

            <div className='mt-2 bg-[#102241] rounded-sm mr-[28rem] shadow-2xl p-5 z-30'>
              <p className='text-primary3'>
                Developed a personalized VS Code theme called Flavia, brimming with vibrant colors, now available on the Microsoft Marketplace. To enhance its online presence, I designed a sleek landing page using Next.js and Tailwind CSS.
              </p>
            </div>

            <div className='p-3'>
              <ul className='flex gap-7 text-primary3 text-sm font-mono '>
                <li>VS Code</li>
                <li>Next.js</li>
                <li>TailwindCSS</li>
              </ul>
            </div>

            <div className='p-2 flex gap-4 text-primary3 text-sm font-mono ' style={{ pointerEvents: 'auto' }}>
              <a href='https://github.com/DanishQ1011/Flavia-Dark-Theme' target='_blank'>
                <Image src={github} alt='github' />
              </a>
              <a href='https://flavia-theme.vercel.app' target='_blank'>
                <Image src={externallink} alt='externallink' />
              </a>
            </div>
          </div>
        </div>
      </div>


      <div className='mt-[5rem] relative'>
        <div className='flex flex-row justify-between items-center'>
          <Image
            src={homeprotein}
            alt='homeprotein'
            className='object-contain w-[60%] brightness-75 hover:brightness-100 transform duration-300 ease-in-out'
          />

          <div className='absolute flex flex-col ' style={{ pointerEvents: 'none' }}>
            <div className=''>
              <p className='flex justify-end text-primary1 font-mono text-sm'>Featured Project</p>
              <h1 className='flex justify-end text-primary2 font-bold text-[28px]'>HomeProtein</h1>
            </div>

            <div className='mt-2 bg-[#102241] rounded-sm ml-[28rem] text-right shadow-2xl p-5 z-30'>
              <p className='text-primary3'>
                Designed and developed the HomeProtein website for a startup using Next.js, React, Tailwind CSS, and JavaScript. The website promotes the startup's meal subscription service, featuring protein-rich dishes crafted by dedicated moms in their kitchens.
              </p>
            </div>

            <div className='p-3'>
              <ul className='flex justify-end gap-7 text-primary3 text-sm font-mono '>
                <li>React</li>
                <li>Next.js</li>
                <li>TailwindCSS</li>
              </ul>
            </div>

            <div className='p-2 flex justify-end gap-4 text-primary3 text-sm font-mono ' style={{ pointerEvents: 'auto' }}>
              <a href='https://github.com/DanishQ1011/homeprotein' target='_blank'>
                <Image src={github} alt='github' />
              </a>
              <a href='https://homeprotein.in' target='_blank'>
                <Image src={externallink} alt='externallink' />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className='mt-[5rem] relative'>
        <div className='flex flex-row-reverse justify-between items-center'>
          <Image
            src={brainwave}
            alt='brainwave'
            className='object-contain w-[60%] brightness-75 hover:brightness-100 transform duration-300 ease-in-out'
          />

          <div className='absolute flex flex-col ' style={{ pointerEvents: 'none' }}>
            <div className=''>
              <p className='flex justify-start text-primary1 font-mono text-sm'>Featured Project</p>
              <h1 className='flex justify-start text-primary2 font-bold text-[28px]'>Brainwave</h1>
            </div>

            <div className='mt-2 bg-[#102241] rounded-sm mr-[28rem] shadow-2xl p-5 z-30'>
              <p className='text-primary3'>
                For a hands-on learning experience in Tailwind CSS and mobile responsiveness, I crafted this mini project - Learnt from the popular YouTube channel JavaScript Mastery. Undertaking this allowed me to explore and refine my skills in building a sleek and responsive website..
              </p>
            </div>

            <div className='p-3'>
              <ul className='flex gap-7 text-primary3 text-sm font-mono '>
                <li>JavaScript</li>
                <li>Next.js</li>
                <li>TailwindCSS</li>
              </ul>
            </div>

            <div className='p-2 flex gap-4 text-primary3 text-sm font-mono ' style={{ pointerEvents: 'auto' }}>
              <a href='https://github.com/DanishQ1011/Brainwave' target='_blank'>
                <Image src={github} alt='github' />
              </a>
              <a href='https://brainwave-shah.netlify.app' target='_blank'>
                <Image src={externallink} alt='externallink' />
              </a>
            </div>
          </div>
        </div>
      </div>
      
</motion.section>


    {/* //MOBILE DEVICE VIEW */}

    <motion.section 
      initial='hidden'
      // animate={controls}
      // variants={animationVariants}  
      id='work' 
      className='p-8 lg:hidden'>

  <div className='flex items-center justify-center'>
    <p className='text-primary2 text-[25px] font-bold'>
      <span className='font-mono font-extralight text-[24px] text-primary1 max-sm:text-center'>02. </span>Some things I've built.
    </p>
  </div>

  <div className='grid grid-cols-1'>

    <div href='https://flavia-theme.vercel.app'>
      <div className='mt-[2rem]'>
        <div className="flex flex-col justify-between items-center bg-[url('../../public/assets/bg/flavia.png')] bg-cover bg-center mt-2 rounded-sm shadow-2xl">

          <div className='p-6'>
            <a href='https://flavia-theme.vercel.app' target='_blank'>
              <p className='flex justify-start text-primary1 font-mono text-sm'>Featured Project</p>
              <h1 className='flex justify-start text-primary2 font-bold text-[28px]'>Flavia Theme</h1>
            </a>

            <a href='https://flavia-theme.vercel.app' target='_blank' className='mt-4'>
              <p className='text-primary3'>
                Developed a personalized VS Code theme called Flavia, brimming with vibrant colors, now available on the Microsoft Marketplace. To enhance its online presence, I designed a sleek landing page using Next.js and Tailwind CSS.              </p>
            </a>

            <div className='mt-4'>
              <ul className='flex gap-7 text-primary3 text-sm font-mono '>
                <li>VS Code</li>
                <li>Next.js</li>
                <li>TailwindCSS</li>
              </ul>
            </div>

            <div className='mt-5 flex gap-4 text-primary3 text-sm font-mono'>
              <a href='https://github.com/DanishQ1011/Flavia-Dark-Theme' target='_blank'>
                <Image src={github} alt='github' />
              </a>
              <a href='https://flavia-theme.vercel.app' target='_blank'>
                <Image src={externallink} alt='externallink' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>


      <div href='https://homeprotein.vercel.app' className='mt-[2rem]'>
        <div className="flex flex-col justify-between items-center  mt-2 bg-[url('../../public/assets/bg/homeprotein.png')] bg-cover bg-center rounded-sm shadow-2xl">

          <div className='p-6' >
            <a href='https://homeprotein.in' target='_blank'>
              <p className='flex  text-primary1 font-mono text-sm'>Featured Project</p>
              <h1 className='flex  text-primary2 font-bold text-[28px]'>HomeProtein</h1>
            </a>

            <a href='https://homeprotein.in' target='_blank' className='mt-4'>
              <p className='text-primary3 '>
                Designed and developed the HomeProtein website for a startup using Next.js, React, Tailwind CSS, and JavaScript. The website promotes the startup's meal subscription service, featuring protein-rich dishes crafted by dedicated moms in their kitchens.
              </p>
            </a>

            <div className='mt-4'>
              <ul className='flex gap-7 text-primary3 text-sm font-mono '>
                <li>React</li>
                <li>Next.js</li>
                <li>TailwindCSS</li>
              </ul>
            </div>

            <div className='mt-5 flex gap-4 text-primary3 text-sm font-mono ' >
              <a href='https://github.com/DanishQ1011/homeprotein' target='_blank'>
                <Image src={github} alt='github' />
              </a>
              <a href='https://homeprotein.in' target='_blank'>
                <Image src={externallink} alt='externallink' />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div href='https://brainwave-shah.netlify.app'  className='mt-[2rem]'>
        <div className="flex flex-col justify-between items-center mt-2 bg-[url('../../public/assets/bg/nike.png')] bg-cover bg-center rounded-sm  shadow-2xl ">

          <div className='p-6' >
            <a href='https://brainwave-shah.netlify.app' target='_blank' className=''>
              <p className='flex justify-start text-primary1 font-mono text-sm'>Featured Project</p>
              <h1 className='flex justify-start text-primary2 font-bold text-[28px]'>Brainwave</h1>
            </a>

            <a href='https://brainwave-shah.netlify.app' target='_blank' className='mt-4'>
              <p className='text-primary3'>
              For a hands-on learning experience in Tailwind CSS and mobile responsiveness, I crafted this mini project. Undertaking this allowed me to explore and refine my skills in building a sleek and responsive website, mimicking the style of the renowned brand.
              </p>
            </a>

            <div className='mt-4'>
              <ul className='flex gap-7 text-primary3 text-sm font-mono '>
                <li>JavaScript</li>
                <li>Next.js</li>
                <li>TailwindCSS</li>
              </ul>
            </div>

            <div className='mt-5 flex gap-4 text-primary3 text-sm font-mono ' >
              <a href='https://github.com/DanishQ1011/Brainwave' target='_blank'>
                <Image src={github} alt='github' />
              </a>
              <a href='https://brainwave-shah.netlify.app' target='_blank'>
                <Image src={externallink} alt='externallink' />
              </a>
            </div>
          </div>
        </div>
      </div>

      </div>
</motion.section>
</>
  );
}

export default Work;