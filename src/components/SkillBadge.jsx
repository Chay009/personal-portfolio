import React from 'react';
import {  motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
// variants import { slideInFromLeft, slideInFromRight } from '../utils/motion';


const SkillBadge = ({ src, width, height, index }) => {
    const { ref, inView } = useInView({
        triggerOnce: true
    });

    const imageVariants = {
        hidden: {
          opacity: 0,
          scale: 0.5, // Start with a smaller scale
        },
        visible: {
          opacity: 1,
          scale: 1, // Scale up to normal size
          transition: {
            
            duration: 0.5, // Adjust the duration as needed
            type: 'spring', // Use spring animation for a smooth pop-up effect
            damping: 5, // Adjust damping to control bounce
          },
        },
      };
      

    const animationDelay = 0.6;

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            variants={imageVariants}
            animate={inView ? "visible" : "hidden"}
            custom={index}
            transition={{ delay: index * animationDelay }}
        >
            <img
                src={src}
                width={width}
                height={height}
                alt='skill image'
            />
        </motion.div>
    );
};

export default SkillBadge;
