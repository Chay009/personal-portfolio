import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import img from '../../../public/images/stack.svg'
import { slideInFromLeft,slideInFromRight,slideInFromTop } from '../../utils/motion'
import { Link } from 'react-router-dom'
import { SparklesIcon } from '@heroicons/react/20/solid'
import Logo from '../../../public/images/logo/Logo.png'
import SocialIcons from '../../components/SocialIcons'

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
<SocialIcons/>



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

       
        <Link to='my/about'>
        <motion.button 
        variants={slideInFromLeft(1)}
        className=" relative inline-flex h-9 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
  <span className="  text-nowrap inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-5 py-1 text-sm font-medium text-white backdrop-blur-3xl">
   About
  </span>
</motion.button>


        </Link>
        <Link to='my/resume'>
        <motion.button 
        variants={slideInFromLeft(1)}
        className=" relative inline-flex h-9 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
  <span className="  text-nowrap inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-5 py-1 text-sm font-medium text-white backdrop-blur-3xl">
   Resume
  </span>
</motion.button>
</Link>
        <Link to='my/contact'>
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