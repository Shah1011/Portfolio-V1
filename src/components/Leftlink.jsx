import React from 'react';
import github  from './icons/github.svg';
import linkedin from './icons/linkedin.svg';
import instagram from './icons/instagram.svg';
import twitter from './icons/twitter.svg';
import facebook from './icons/facebook.svg';
import Image from 'next/image';
import '../app/globals.css';

export default function LeftLink() {



  return (
    <section className='fixed bottom-0 left-[50px] flex flex-col items-center gap-6 '>
      <div className='flex flex-col gap-6 items-center'>
        <a href="https://github.com/DanishQ1011" target='_blank' className='hover:text-primary1 hover:-translate-y-2 transition-transform duration-300 ease-in-out '>
          <Image src={github} alt="GitHub Icon" />
        </a>
        <a href='https://twitter.com/Danishhh1011' target='_blank' className='hover:-translate-y-2 transition-transform duration-300 ease-in-out'>
            <Image src={twitter} alt='Twitter Icon'/>
        </a>
        <a href='https://www.instagram.com/danishhh1011/' target='_blank' className='hover:-translate-y-2 transition-transform duration-300 ease-in-out'>
            <Image src={instagram} alt='Instagram Icon'/>
        </a>
        <a href='https://www.linkedin.com/in/shah-abul-kalam-a-k-90a52324a/' target='_blank' className='hover:-translate-y-2 transition-transform duration-300 ease-in-out'>
            <Image src={linkedin} alt='linkedin'/>
        </a>
        <a className='hover:-translate-y-2 transition-transform duration-300 ease-in-out'>
            <Image src={facebook} alt='facebook'/>
        </a>
      </div>
      <div className=''>
        <span className="border-[1.5px] border-solid border-primary2 bottom-0 h-[5rem] inline-block"></span>
      </div>
    </section>
  );
}