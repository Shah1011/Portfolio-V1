import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

const AnimatedSection = ({ delay, children }) => (
  <motion.div
    initial="hidden"
    animate="visible"
    variants={{
      hidden: {
        translateY: 10,
        opacity: 0,
      },
      visible: {
        translateY: 0,
        opacity: 1,
        transition: {
          ease: 'easeIn',
          duration: 0.4,
          delay: delay,
        },
      },
    }}
  >
    {children}
  </motion.div>
);

const Hero = () => {
  return (
    <main className='flex justify-center items-center flex-col min-h-screen h-screen '>
      <div className='flex flex-col w-3/4'>
        <AnimatedSection delay={1.2}>
          <div className='text-primary1 text-[16px] font-mono font-medium mb-2'>
            <h1>Hi, My name is</h1>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={1.5}>
          <div className='text-primary2 font-pop font-[650] text-[62px] leading-snug max-lg:text-[52px] max-sm:text-[32px]'>
            <h1>Shah Abul Kalam.</h1>
            <TypeAnimation
              sequence={[
                'I build things for the Web.',
                2000,
                'I am a blockchain enthusiast.',
                2000,
                'And I like coffee ;)',
                2000,
              ]}
              wrapper='span'
              speed={50}
              className='text-primary3 font-[650] text-[60px] max-lg:text-[40px] max-sm:text-[22px]'
              repeat={Infinity}
            />
          </div>
        </AnimatedSection>

        <AnimatedSection delay={1.8}>
          <p className='text-primary3 w-[33rem] max-sm:w-[17rem] font-normal text-[16px] mt-6 max-sm:mt-2 max-sm:text-[18px]'>
            I am a computer science engineering student, specializing in building digital experiences (and occasionally designing).
            Currently interning and working on freelance projects at{' '}
            <a href='https://duolearn.tech' target='_blank' className='text-primary1 '>
              <span>Duolearn</span>
            </a>
            .
          </p>
        </AnimatedSection>

        <AnimatedSection delay={2.1} >
          <a
            href='https://marketplace.visualstudio.com/items?itemName=ShahAbulKalam.flavia-dark'
            target='_blank'
            className='relative inline-block text-md group mt-[2rem]'
          >
            <span className='relative z-10 block px-7 py-5 overflow-hidden font-medium leading-tight text-primary1 transition-colors duration-300 ease-out border-[1px] border-primary1 rounded-lg group-hover:text-primary2'>
              <span className='absolute inset-0 w-full h-full px-7 py-5 rounded-lg bg-[#0a192f]'></span>
              <span
                className='absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-[#0a192f] group-hover:-rotate-180 ease'
              ></span>
              <span className='relative'>Checkout my theme</span>
            </span>
            <span
              className='absolute bottom-0 right-0 w-full h-[60px] -mb-1 -mr-1 transition-all duration-200 ease-linear bg-primary1 rounded-lg group-hover:mb-0 group-hover:mr-0'
              data-rounded='rounded-lg'
            ></span>
          </a>
        </AnimatedSection>
      </div>
    </main>
  );
};

export default Hero;