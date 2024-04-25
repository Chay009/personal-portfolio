import React,{lazy,Suspense, useEffect, useState} from 'react';
import { BookOpenIcon, BriefcaseIcon,ArchiveBoxArrowDownIcon,ArrowDownTrayIcon } from '@heroicons/react/24/outline';
import TimelineItem from './TimelineItem';
const MySkillsLazy = lazy(() => import('./MySkills'));
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

import { slideInFromRight } from '../../utils/motion';

const Resume = () => {
  const { ref, inView } = useInView();
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);
  const experienceData = [
    {
      title: "Creative director",
      date: "2015 — Present",
      description: "Nemo enim ipsam voluptatem blanditiis praesentium voluptum delenit atque corrupti, quos dolores et qvuas molestias exceptur."
    },
    {
      title: "Art director",
      date: "2013 — 2015",
      description: "Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur."
    },
    {
      title: "Web designer",
      date: "2010 — 2013",
      description: "Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur."
    }
  ];

  const educationData = [
    {
      title: "Indian Institute of Technology Dhanbad",
      date: "2021 — 2025",
      description: "Bachelor of technology in chemical engineering "
    },
    {
      title: "New york academy of art",
      date: "2006 — 2007",
      description: "Ratione voluptatem sequi nesciunt, facere quisquams facere menda ossimus, omnis voluptas assumenda est omnis."
    },
    {
      title: "High school of art and design",
      date: "2002 — 2004",
      description: "Duis aute irure dolor in reprehenderit in voluptate, quila voluptas mag odit aut fugit, sed consequuntur magni dolores eos."
    }
  ];



  return (
    <section>
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      {/* Experience */}
      <div className="timeline ">
        <div className='flex justify-between'>

        <div className=" items-center py-1  px-2 gap-2 flex ">
          
          <div className="icon-box">
            <BriefcaseIcon width={25}/>
          </div>
          <h3 className="h3">Experience</h3>
          
        </div>


        
      
        <button className="inline-flex gap-2 h-9 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        <ArrowDownTrayIcon  className= " mt-1 animate-bounce" width={20}/>
<p className='hidden md:block'>Resume</p>
        </button>

      
     
        </div>


        <motion.ol  className="timeline-list pt-3" initial="hidden" animate="visible" variants={slideInFromRight(0.5)} transition={{ duration: 0.5 }}>
          {experienceData.map((item, index) => (
           <TimelineItem key={index} title={item.title} date={item.date} description={item.description} />
          ))}
        </motion.ol>
      </div>

      {/* Education */}
      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <BookOpenIcon width={25}/>
          </div>
          <h3 className="h3">Education</h3>
        </div>
        <motion.ol  className="timeline-list flex flex-col gap-2" initial="hidden" animate="visible" variants={slideInFromRight(0.5)} transition={{ duration: 0.5 }}>
          {educationData.map((item, index) => (
            <TimelineItem key={index} title={item.title} date={item.date} description={item.description} />
          ))}
        </motion.ol>
      </div>
<div>

      {/* <MySkills/> */}
      <div ref={ref}>
      {isVisible && (
        <Suspense fallback={<div className='flex justify-center text-teal-400'>Loading...<span className='animate-spin'>+</span></div>}>
          <MySkillsLazy />
        </Suspense>
      )}
    </div>
</div>
    </section>
  );
};



export default Resume;
