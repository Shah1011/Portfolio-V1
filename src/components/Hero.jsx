import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import SpecialButton from './SpecialButton';

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
    <main className='flex justify-center items-center flex-col h-screen'>
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
                'I am a web3 enthusiast.',
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
            <SpecialButton
              href="https://marketplace.visualstudio.com/items?itemName=ShahAbulKalam.flavia-dark" 
              buttonText="Checkout my code theme!"
              className="mt-[2rem]"
              padding='px-4 py-5'
            />
        </AnimatedSection>
      </div>
    </main>
  );
};

export default Hero;