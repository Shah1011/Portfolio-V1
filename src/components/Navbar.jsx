'use client';

import Link from 'next/link'
import React from 'react'
import menu from "@/components/icons/menu.png"
import close from "@/components/icons/close.svg"
import { useEffect, useState } from 'react'
import pdfPath from '../../public/assets/Shah-Resume.pdf'
import Image from 'next/image';
import { motion, useAnimationControls } from 'framer-motion';
import { enablePageScroll, disablePageScroll } from 'scroll-lock';
import SpecialButton from './SpecialButton';


const MotionDiv = ({ delay = 0, children }) => (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {
          translateY: -20,
          opacity: 0,
        },
        visible: {
          translateY: 0,
          opacity: 1,
          transition: {
            ease: 'easeIn',
            duration: 0.2,
            delay: delay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );

  const slideNav = {
    hidden: {
        opacity: 0,
        x: '100%', // Initially off-screen
    },
    visible: {
        opacity: 1,
        x: 0, // Slides in
        transition: {

            stiffness: 100, // Adjust stiffness for the spring animation
        },
    },
    exit: {
        opacity: 0,
        x: '100%', // Slides out
    },
};


const Navbar = () => {

const controls = useAnimationControls();

useEffect(() => {
    controls.start("visible");
}, [controls]);

const [scrollDown, setScrollDown] = useState(false);

useEffect(() => {
    const handleScroll = () => {
        const isScrolled = window.scrollY > 0;
        setScrollDown(isScrolled);
    };

    window.addEventListener('scroll', handleScroll)

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);



const [isMenuOpen, setMenuOpen] = useState(false);

const toggleMenu = () => {
    if(isMenuOpen){
        setMenuOpen(false);
        enablePageScroll;
    } else {
        setMenuOpen(true);
        disablePageScroll;
    }
//   setMenuOpen(!isMenuOpen);
//   enablePageScroll;
};

const closeMenu = () => {
    setMenuOpen(false);
    enablePageScroll;
  };

  return (
    <>
    <nav className={`max-sm:px-[2rem] fixed backdrop-blur-md  w-full px-12 py-7 z-40 transition-shadow duration-300 ${scrollDown ? 'shadow-md' : 'shadow-none'}`} >
        <div className='max-md:hidden flex justify-between items-center'>
            <SpecialButton
                buttonText='S'
                padding='px-4 py-3'
                href='/'
            />
            <div className='flex gap-10 items-center'>
                <ol className='flex gap-10 text-primary2 text-sm font-mono font-light'>
                    <MotionDiv delay={0}>
                        <Link href="#about"><li className='hover:text-primary1'><span className='text-primary1'>01. </span>About</li></Link>
                    </MotionDiv>

                    <MotionDiv delay={0.1}>
                        <Link href="#work"><li className='hover:text-primary1'><span className='text-primary1'>02. </span>Work</li></Link>
                    </MotionDiv>

                    <MotionDiv delay={0.2}>
                        <Link href="#blog"><li className='hover:text-primary1'><span className='text-primary1'>03. </span>Blog</li></Link>
                    </MotionDiv>

                    <MotionDiv delay={0.3}>
                        <Link href="#contact"><li className='hover:text-primary1'><span className='text-primary1'>04. </span>Contact</li></Link>
                    </MotionDiv>
                </ol>

                <MotionDiv delay={0.5}>
                    <SpecialButton
                        href={pdfPath}
                        buttonText="Resume"
                        padding='px-3.5 py-2.5'
                        className="text-[14px]"
                    />
                </MotionDiv>

            </div>
        </div>
        <div className="flex items-center justify-between md:hidden">
                <div>
                    <a href='/' className="relative inline-block text-md group">            
                        <span className="relative z-10 block px-4 py-3 overflow-hidden font-medium leading-tight text-primary1 transition-colors duration-300 ease-out border-[1px] border-primary1 rounded-lg group-hover:text-primary2">
                                <span className="absolute inset-0 w-full h-full px-4 py-3 rounded-lg bg-[#0a192f]"></span>
                                <span className="absolute left-0 w-48 h-50 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-[#0a192f] group-hover:-rotate-180 ease"></span>
                                <span className="relative font-semibold">S</span>
                                </span>
                        <span className="absolute bottom-0 right-0 w-10 h-11 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-primary1 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                    </a>
                </div>
                <div>
                    <Image src={menu} alt="menu" onClick={toggleMenu} className='w-[32px] h-[32px]' />
                </div>
        </div>
    </nav>

    {isMenuOpen && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-75 z-50">

            <motion.div
                variants={slideNav}
                initial="hidden"
                animate={isMenuOpen ? 'visible' : 'hidden'}
                exit="exit"
                className="mx-auto h-full flex justify-end transition-transform duration-300 ease-out transform"
            >
            <div className="bg-gridcolor min-h-screen w-[70%] h-full px-8 transform translate-x-0 transition-transform duration-3000 ease-out">
            <div className="flex justify-end">
                <button onClick={closeMenu} className="mt-10 px-3 py-2">
                    <Image src={close} alt="close" className='w-[26px] h-[26px]'/>
                </button>
            </div>                

            <ol className='mt-10 flex flex-col items-start gap-10 text-primary2 text-sm font-mono font-light'>
                    <Link href="#about"><li className='hover:text-primary1'><span className='text-primary1'>01. </span>About</li></Link>
                    <Link href="#work"><li className='hover:text-primary1'><span className='text-primary1'>02. </span>Work</li></Link>
                    <Link href="#blog"><li className='hover:text-primary1'><span className='text-primary1'>03. </span>Blog Writings</li></Link>
                    <Link href="#contact"><li className='hover:text-primary1'><span className='text-primary1'>04. </span>Contact</li></Link>
            </ol>
            <div className='flex items-start '>
                <a href={pdfPath} target='_blank' className="mt-10 relative inline-block text-md group">
                    <span className="relative z-10 block px-4 py-3 overflow-hidden font-medium leading-tight text-primary1 transition-colors duration-300 ease-out border-[1px] border-primary1 rounded-lg group-hover:text-primary2">
                        <span className="absolute inset-0 w-full h-full px-4 py-3 rounded-lg bg-[#0a192f]"></span>
                        <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-[#0a192f] group-hover:-rotate-180 ease"></span>
                        <span className="relative">Resume</span>
                    </span>
                    <span className="absolute bottom-0 right-0 w-full h-10 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-primary1 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                </a>
                </div>
            </div>
            </motion.div>
        </div>

    )}

  </>
  )
}

export default Navbar;
