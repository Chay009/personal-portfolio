import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import img from '../../../public/images/stack.svg'
import { slideInFromLeft,slideInFromRight,slideInFromTop } from '../../utils/motion'
import { Link } from 'react-router-dom'
import { SparklesIcon } from '@heroicons/react/20/solid'
import Logo from '../../../public/images/logo/Logo.png'

const Welcome = () => {
  const words = [  "Web Development", 
    "Mobile Development", " Progressive Web Apps", "Backend Technologies"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000); // Change word every 2 seconds

    return () => clearInterval(interval);
  }, []);
    return (
     <motion.div
     initial="hidden"
     animate="visible"
     >
    



    <motion.div
    variants={slideInFromTop}
    className="flex items-center justify-start text-white mt-5 ml-4">
  <img src={Logo} className='w-14 md:w-20 lg:w-24   rounded-full' alt="" loading='lazy' />
</motion.div>
      <div className=" flex h-full w-full px-4 ">

        
        
        <div
     
      className="flex flex-col md:flex-row items-center justify-center px-5 w-full z-[20]"
    >
      <div className="h-full w-full  flex flex-col gap-5 justify-center m-auto text-start">


     

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
            {/* full stack */}
        <motion.div
          variants={slideInFromTop}
          className="w-max p-4 flex gap-2 rounded-full border border-[#7042f88b] opacity-[0.9]">
          <SparklesIcon className="text-[#b49bff]  h-4 w-6" />
          <p className=" text-[13px] mt-1">
            Fullstack Developer Portfolio
          </p>
        </motion.div>
        {/* full stack */}

       

      
        <motion.div
  variants={slideInFromRight(0.4)}
  className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
>
  <div className='text-[40px] md:text-[72px]'>
    <p>Welcome</p>
    <strong className=' md:flex pt-4'>
       I'm&nbsp;
       <span className=" text-transparent flex-1 bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-300">
  Chaitanya,
</span>
    </strong>

   
  </div>
  <div className="flex items-center justify-start space-x-4">
    {/* Linkedin */}
  <a href="#" className="text-gray-500 hover:text-blue-500 transition duration-300 ease-in-out">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-6 w-6">
  <path d="M21,0H3A3,3,0,0,0,0,3V21a3,3,0,0,0,3,3H21a3,3,0,0,0,3-3V3A3,3,0,0,0,21,0ZM8.53,20H5.25V9H8.53ZM6.89,7.57a2.53,2.53,0,1,1,0-5.05,2.53,2.53,0,0,1,0,5.05ZM20.5,20H17.23V14.39c0-1.14-.42-1.92-1.48-1.92s-1.59.64-1.59,1.92V20H11.7V9h3.12v1.06H15a2.43,2.43,0,0,1,0-4.85h0a2.53,2.53,0,0,1,2.52,2.53Z"/>
</svg>
  </a>
 

  
  {/* <!-- Twitter Icon --> */}
  <a href="#" className="text-gray-500 hover:text-blue-500 transition duration-300 ease-in-out">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-6 w-6">
      <path d="M24,4.58a10,10,0,0,1-2.87.78A5,5,0,0,0,23.33,3a10,10,0,0,1-3.16,1.21A5,5,0,0,0,15.18,2,5,5,0,0,0,10.71,6.4,14.3,14.3,0,0,1,1.71,1.07,5,5,0,0,0,2.62,8.13,5,5,0,0,1,.94,7.6a5,5,0,0,0,4.07,5,5,5,0,0,1-2.26-.61,5,5,0,0,0,4.42,3.26A10,10,0,0,1,.6,18.9,14.27,14.27,0,0,0,7.75,20.8,14.53,14.53,0,0,0,17.85,7.87,5,5,0,0,0,17.45,7,5,5,0,0,1,24,4.58Z"/>
    </svg>
  </a>
  {/* <!-- Github Icon --> */}
  <a href="#" className="text-gray-500 hover:text-blue-500 transition duration-300 ease-in-out">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-6 w-6">
  <path d="M12 0C5.4 0 0 5.4 0 12c0 5.3 3.4 9.8 8.1 11.4.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.6-4-1.6-.5-1.3-1.3-1.6-1.3-1.6-1.1-.7.1-.7.1-.7 1.2.1 1.9 1.3 1.9 1.3 1.1 1.9 2.9 1.3 3.6 1 .1-.8.5-1.3.9-1.6-3.2-.4-6.5-1.6-6.5-7.2 0-1.6.6-2.9 1.5-3.9-.1-.4-.7-1.8.2-3.7 0 0 1.2-.4 4 .7 1.1-.3 2.3-.5 3.5-.5s2.4.2 3.5.5c2.8-1.1 4- .7 4-.7 .9 1.9.3 3.3.2 3.7.9 1 1.5 2.3 1.5 3.9 0 5.6-3.3 6.8-6.5 7.2.5.5.8 1.3.8 2.6v3.9c0 .3.3.7.9.6C20.6 21.8 24 17.3 24 12c0-6.6-5.4-12-12-12z"/>
</svg>

  </a>
  
  {/* <!-- Instagram Icon --> */}
  <a href="#" className="text-gray-500 hover:text-blue-500 transition duration-300 ease-in-out">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-6 w-6">
  <path d="M17.63,0H6.37A6.38,6.38,0,0,0,0,6.37V17.63A6.38,6.38,0,0,0,6.37,24H17.63A6.38,6.38,0,0,0,24,17.63V6.37A6.38,6.38,0,0,0,17.63,0ZM12,18.18A6.18,6.18,0,1,1,18.18,12,6.18,6.18,0,0,1,12,18.18Zm4.88-9.89a1.1,1.1,0,1,1-1.1-1.1A1.1,1.1,0,0,1,16.88,8.29Zm-.15,3.4a3.16,3.16,0,0,1,.09.85c0,1.61-.9,2.47-2.13,2.47s-2.15-.86-2.15-2.47a3.11,3.11,0,0,1,.09-.85c.15-.32.34-.58.61-.84s.54-.45.93-.61.79-.25,1.25-.25,1.11.09,1.49.25.79.42,1.1.68.54.58.61.93ZM12,9.89A2.89,2.89,0,1,0,14.89,12,2.89,2.89,0,0,0,12,9.89Zm0,4.68a1.79,1.79,0,1,1,1.79-1.79A1.79,1.79,0,0,1,12,14.57Z"/>
</svg>

  </a>
</div>


{/* socials add github,linkedin url here */}
</motion.div>

         
        </motion.div>

        <motion.p
  variants={slideInFromLeft(0.8)}
  className="text-lg flex flex-col text-gray-400 my-5 max-w-[600px]"
>
  I&apos;m a Full Stack Software Engineer with experience in{' '}


{/* full stack */}
  <motion.span
    key={currentWordIndex}
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, type: 'spring', ease: 'easeInOut' }}
    className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-lime-200"
    style={{ display: 'inline-block' }} // Ensure it stays in line
  >  
    {words[currentWordIndex]}
  </motion.span>{' '}

  {/*full stack  */}
  <span>Check out my projects and skills.</span>

</motion.p>
        <motion.p
  variants={slideInFromRight(0.8)}
  className="text-md text-gray-400  max-w-[600px]"
  
>



I love diving into code that takes things up a notch—whether 
it's developing lightning-fast websites, optimizing for top-notch performance,
 or enhancing user experiences. When I'm in the zone building stuff,
 I'm all in, with serious dedication and a ton of enthusiasm. 
 I'm not your run-of-the-mill developer









</motion.p
>

<motion.p  
variants={slideInFromTop}
 className="text-md text-gray-400  max-w-[600px]">
I'm always eager to learn and spend my free time exploring tech topics like ML-AI, system architecture, and design.



</motion.p>

<motion.p
variants={slideInFromLeft(0.9)}
className="text-md text-gray-400  max-w-[600px]">
Let's connect and create something amazing together!
</motion.p>


{/* link */}

<div className='flex flex-wrap justify-start items-center  gap-3'>

       
        <Link to='/'>
        <motion.button 
        variants={slideInFromLeft(1)}
        className=" relative inline-flex h-9 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
  <span className="  text-nowrap inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-5 py-1 text-sm font-medium text-white backdrop-blur-3xl">
   About
  </span>
</motion.button>


        </Link>
        <Link to='/resume'>
        <motion.button 
        variants={slideInFromLeft(1)}
        className=" relative inline-flex h-9 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
  <span className="  text-nowrap inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-5 py-1 text-sm font-medium text-white backdrop-blur-3xl">
   Resume
  </span>
</motion.button>
</Link>
        <Link to='/contact'>
        <motion.button 
        variants={slideInFromRight(1)}
        className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
  <span className="absolute inset-0 overflow-hidden rounded-full">
    <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
  </span>
  <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-1.5 px-4 ring-1 ring-white/10 ">
    <span>
      Connect with Me
    </span>
    <svg
      fill="none"
      height="16"
      viewBox="0 0 24 24"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.75 8.75L14.25 12L10.75 15.25"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  </div>
  <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
</motion.button>
</Link>




       
</div>

{/* link */}




      </div>



{/* image */}
      <motion.div
            variants={slideInFromTop}
            className=" w-full h-full mt-4 flex flex-col justify-center items-center"
          >
            <img
            
              src={img}
              alt="work icons"
              className='w-96 h-84 md:w-full md:h-full'
             
            />
          
          </motion.div>
    {/* image */}





    </div>

    
    
      </div>
      </motion.div>
      );
}

export default Welcome