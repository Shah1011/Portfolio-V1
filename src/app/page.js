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

export default function Home() {
  const ref = useRef();

  return (
    <>
      <main>
          <Navbar />
          <section  className="px-[140px] max-lg:px-0">
            <Hero />
          </section>

          <section ref={ref} className="flex justify-center items-center min-h-screen flex-col h-screen max-w-[900px] mx-auto">
            <About />
          </section>

          <section className="max-sm:px-0 mx-auto max-w-[1000px] mt-[10rem]  min-h-screen max-lg:h-[110vh] max-sm:h-[170vh]">
            <Work />
          </section>

          <section className="flex flex-col justify-center items-center max-sm:px-0  xl:mt-[12rem] mx-auto max-w-[1000px] ">
            <MoreWork />
          </section>

          <section className="flex flex-col justify-center items-center">
            <Contact />
          </section>


          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              ease: 'easeIn',
              delay: 2.6
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