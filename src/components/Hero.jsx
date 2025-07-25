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
    <main className='flex justify-center items-center flex-col h-screen mb-[-10rem] max-sm:mb-[1.2rem]'>
      <div className='flex flex-col w-3/4'>
        <AnimatedSection delay={1.1}>
          <div className='text-primary1 text-[16px] font-mono font-medium mb-2'>
            <h1>Hi, My name is</h1>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={1.2}>
          <div className='text-primary2 font-pop font-[650] text-[62px] leading-snug max-lg:text-[52px] max-sm:text-[32px]'>
            <h1>Shah Abulkalam.</h1>
            <TypeAnimation
              sequence={[
                'I build things for the Web.',
                2000,
                "Aspiring Cloud Architect.",
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

        <AnimatedSection delay={1.4}>
          <p className='text-primary3 w-[33rem] max-sm:w-[17rem] font-normal text-[16px] mt-6 max-sm:mt-2 max-sm:text-[18px]'>
            I am a computer science engineering student, specializing in building digital experiences (and occasionally designing).
            Currently working as a Creative designer at {' '}
            <a href='https://www.duolearn.tech/' target='_blank' className='text-primary1 '>
              <span>Duolearn</span>
            </a>
            .
          </p>
        </AnimatedSection>

        <AnimatedSection delay={1.6} >
            <SpecialButton
              href="https://iamshah.hashnode.dev/" 
              buttonText="Checkout my writings!"
              className="mt-[2rem]"
              padding='px-4 py-5'
            />
        </AnimatedSection>
      </div>
    </main>
  );
};

export default Hero;