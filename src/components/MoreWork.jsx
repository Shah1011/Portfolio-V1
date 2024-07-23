'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import folder from '@/components/icons/folder.svg';
import externallink from '@/components/icons/externallink.svg';
import github from '@/components/icons/github.svg';
import projectsData from '@/data/projects.json';

export default function MoreWork() {
  return (
    <motion.section
      initial='hidden'
      id='more-work'
      className='max-lg:mx-[3rem] max-sm:mx-auto max-sm:px-8'
    >
      <div>
        <h1 className='text-primary2 text-center font-bold text-[26px] max-sm:text-[24px]'>
          Other Noteworthy Projects
        </h1>
      </div>
      <div className='mt-[2rem] grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-x-4 gap-y-5'>
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            className='p-6 bg-gridcolor rounded-[5px] h-[320px] max-sm:h-[310px] max-sm:overflow-scroll overflow-hidden xl:hover:-translate-y-3 transition ease-in duration-280 flex flex-col justify-between'
            initial='hidden'
            transition={{ delay: index * 0.5 }}
          >
            <div className='flex justify-between items-center'>
              <a href={project.externalLink} target='_blank'>
                <Image src={folder} width={40} alt='foldericon' />
              </a>
              <div className='flex gap-3'>
                <a href={project.githubLink} target='_blank' className='text-primary1'>
                  <Image src={github} alt='github' />
                </a>
                <a href={project.externalLink} target='_blank' className='text-primary1'>
                  <Image src={externallink} alt='externallink' />
                </a>
              </div>
            </div>

            <a href={project.externalLink} className='mt-6 flex flex-col flex-grow'>
              <h1 className='text-primary2 font-bold text-[19px] hover:text-primary1'>
                {project.name}
              </h1>
              <p className='mt-2 text-primary3 font-medium text-[14px]'>
                {project.description}
              </p>
            </a>

            <ul className='text-primary3 font-mono text-[13px] flex gap-4 mt-6'>
              {project.technologies.map((tech, techIndex) => (
                <li key={techIndex}>{tech}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
