'use client';
import React from 'react'
import github  from './icons/github.svg';
import linkedin from './icons/linkedin.svg';
import instagram from './icons/instagram.svg';
import twitter from './icons/twitter.svg';
import facebook from './icons/facebook.svg';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion'; 
import SpecialButton from './SpecialButton';

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

  return (
    
    <motion.section 
      initial='hidden'
      // animate={controls}
      // variants={animationVariants} 
      id='contact' 
      className='p-4'>

    <div className='flex flex-col justify-center items-center max-sm:mt-[4rem]'>
        <div className='flex flex-col items-center'>
            <p className='font-mono text-[20px] text-primary1 max-sm:text-[18px]'>04. What's Next?</p>
            <h1 className='text-primary2 text-[48px] font-bold max-sm:text-[36px]'>Get In Touch</h1>
            <p className='mt-3 text-primary3 text-[18px] text-center w-[62%] max-sm:w-[90%] max-sm:text-[16px]'>I am currently open for new opportunities, Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p>
            <div className='mt-[3rem]'>
              <SpecialButton
                buttonText='Say Hello!'
                padding='px-6 py-5'
                onClick={handleEmailClick}
                className='cursor-pointer'
              />
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
            <p className='p-2 mt-7 text-primary1 text-center font-mono text-[11px]'>Hosted on AWS Amplify | Built By Shah - 2024</p>
        </div>
    </div>
    </motion.section>

  )
}

export default Contact;