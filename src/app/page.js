'use client';

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Leftlink from "@/components/Leftlink";
import Rightlink from "@/components/Rightlink";
import About from '@/components/About';
import Work from '@/components/Work';
import Contact from "@/components/Contact";
import MoreWork from "@/components/MoreWork";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import useScrollTrigger from '../hooks/useScrollTrigger';
import Blog from "@/components/Blog";

export default function Home() {
  const ref = useRef();
  const { controls, animationVariants } = useScrollTrigger(0.4, 0.4);
  return (
    <>
      <main>
          <Navbar />
          <section  className="px-[140px] max-lg:px-0">
            <Hero />
          </section>

          <section ref={ref} className="flex flex-col justify-center items-center mx-auto max-w-[1000px]">
            <About />
          </section>

          <section className="flex flex-col justify-center items-center mx-auto max-w-[1000px] min-h-screen mb-[8rem] max-lg:mb-[4rem]">
            {/* <motion.div 
              initial='hidden'
              animate={controls}
              variants={animationVariants}
            > */}
              <Work />
            {/* </motion.div> */}
          </section>

          <section className="flex flex-col justify-center items-center mx-auto max-w-[1000px] min-h-screen">
            <MoreWork />
          </section>

          <section className="flex flex-col justify-center items-center mx-auto max-w-[1000px] my-[5.5em]">
            <Blog/>
          </section>

          <section className="flex flex-col justify-center items-center">
            <Contact />
          </section>


          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              ease: 'easeIn',
              delay: 2.3
            }}
            className="max-lg:hidden"
          >
            <Leftlink />
            <Rightlink />
          </motion.div>

      </main>
    </>
  );
}