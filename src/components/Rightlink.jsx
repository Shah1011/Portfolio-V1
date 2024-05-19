'use client';
import React from 'react';
import { PT_Mono } from 'next/font/google';

const pt = PT_Mono({
    subsets: ['latin'],
    weight: ['400'],
})

export default function RightLink() {

    const yourEmail = 'shah.official1011@gmail.com';
    
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
    <section className='position-relative'>
        <div className='fixed bottom-0 right-[-50px] flex flex-col items-center gap-[8rem] '>
        <div className='hover:-translate-y-2 transition-transform duration-300 ease-in-out'>
            <a onClick={handleEmailClick} href='#' target='_blank'>
                <p className={`font-mono hover:text-primary1 tracking-wider text-sm transform rotate-90 text-primary3 `}>shah.official1011@gmail.com</p>
            </a>
        </div>
        <div>
            <span className="border-[1.5px] border-solid border-primary2 bottom-0 h-[5rem] inline-block"></span>
        </div>
        </div>
    </section>
  );
}