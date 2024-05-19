'use client';
import React from 'react'
import github  from './icons/github.svg';
import linkedin from './icons/linkedin.svg';
import instagram from './icons/instagram.svg';
import twitter from './icons/twitter.svg';
import facebook from './icons/facebook.svg';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion'; 

const Contact = () => {

const yourEmail = 'shah.official1011@gmail.com'

  const handleEmailClick = (event) => {
    event.preventDefault();
    const subject = encodeURIComponent('Subject of the email');
    const body = encodeURIComponent('Body of the email');

    // Construct the mailto link
    const mailtoLink = `mailto:${yourEmail}?subject=${subject}&body=${body}`;

    // Open the default email client with the pre-filled fields
    window.location.href = mailtoLink;

  };

  // const controls = useAnimation();

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const element = document.getElementById('more-work');
  //     if (element) {
  //       const offset = window.scrollY + window.innerHeight;
  //       const elementOffset = element.offsetTop;
  //       if (offset > elementOffset) {
  //         controls.start('visible', { delay: 0.8, once: true });
  //       }
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);

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
  //       duration: 0.4,
  //     },
  //   },
  // };


  return (
    
    <motion.section 
      initial='hidden'
      // animate={controls}
      // variants={animationVariants} 
      id='contact' 
      className='mt-[14rem] max-sm:mt-[10rem] p-4'>

    <div className='flex flex-col justify-center items-center '>
        <div className='flex flex-col items-center'>
            <p className='font-mono text-[20px] text-primary1 max-sm:text-[18px]'>03. What's Next?</p>
            <h1 className='text-primary2 text-[48px] font-bold max-sm:text-[36px]'>Get In Touch</h1>
            <p className='mt-3 text-primary3 text-[18px] text-center w-[62%] max-sm:w-[90%] max-sm:text-[16px]'>I am currently open for new opportunities, Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p>
            <div className='mt-[3rem]'>
            <a onClick={handleEmailClick} href="#" target='_blank' className="relative inline-block text-md group">
                <span className="relative z-10 block px-7 py-5 overflow-hidden font-medium leading-tight text-primary1 transition-colors duration-300 ease-out border-[1px] border-primary1 rounded-lg group-hover:text-primary2">
                <span className="absolute inset-0 w-full h-full px-7 py-5 rounded-lg bg-[#0a192f]"></span>
                <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-[#0a192f] group-hover:-rotate-180 ease"></span>
                <span className="relative">Say Hello!</span>
                </span>
                <span className="absolute bottom-0 right-0 w-full h-[60px] -mb-1 -mr-1 transition-all duration-200 ease-linear bg-primary1 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
            </a>
            </div>
        </div>
        <div className='mt-[12rem] '>
          <div className='lg:hidden'>
            <div className='flex justify-center gap-10'>
              <a href="https://github.com/DanishQ1011" target='_blank' >
                <Image src={github} alt="GitHub Icon" />
              </a>
              <a href='https://www.instagram.com/danishhh1011/' target='_blank'>
                  <Image src={instagram} alt='Instagram Icon'/>
              </a>
              <a href='https://www.linkedin.com/in/shah-abul-kalam-a-k-90a52324a/' target='_blank'>
                  <Image src={linkedin} alt='linkedin'/>
              </a>
              <a>
                  <Image src={facebook} alt='facebook'/>
              </a>
              <a href='https://twitter.com/Danishhh1011' target='_blank'>
                  <Image src={twitter} alt='Twitter Icon'/>
              </a>
            </div>
          </div>
            <p className='p-2 mt-7 text-primary1 text-center font-mono text-[12px]'>Built By Shah - 2024</p>
        </div>
    </div>
    </motion.section>

  )
}

export default Contact;