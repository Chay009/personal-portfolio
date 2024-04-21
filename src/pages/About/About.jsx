/* eslint-disable react/no-unescaped-entities */

import { useEffect, useState } from "react"
import Testimonial from "./Testimonial";
import Service from "./Service";
import { motion } from "framer-motion";
import { slideInFromLeft } from "../../utils/motion";
import { CommandLineIcon } from "@heroicons/react/24/solid";


const servicesData = [
  {
    
    title: "Web development",
    description: "I'm all about building websites that work like a charm and load lightning fast. With my expertise in Progressive Web App (PWA) development, I make sure your site runs smoothly on any device, without sacrificing performance for looks."
  },
  {
    icon: "/images/icon-design.svg",
    title: "Software Engineering",
    description: "I'm all about crafting sleek, top-notch software solutions, especially in cross-platform development."
  },
  {
    icon: "/images/icon-photo.svg",
    title: "Research and Study",
    description: "I'm a total tech geek, always diving into the fascinating realms of software architecture, machine learning, and AI. You'll often find me exploring blogs and articles to keep up with the latest trends and happenings in the tech world. It's my way of staying ahead of the curve!"
  },
  {
    icon: "/images/icon-app.svg",
    title: "Cross-Platform Mobile App Development",
    description: "I specialize in making apps that work like a charm on both iOS and Android. No platform bias here!"
  },
  
];


const About = () => {
  const [testimonials , setTestimonials ] = useState([]);
  useEffect(()=> {
    fetch('src/constants/testimonials.json').then(res => res.json()).then(data => {
      console.log(data)
      setTestimonials(data)
    });
  }, [])
  return (
    
    <article className="about active" data-page="about">
   
   






    <header>
      <h2 className="h2 article-title">About me</h2>
    </header>

    <section className="about-text">
      <p>
      Hey! 👋  I'm Chaitanya, a dedicated full-stack developer with a passion for creating exceptional digital experiences. 
      With a background in both front-end and back-end development,
       I love tackling complex challenges and turning ideas into reality.
      </p>

      <p>
      As a passionate full-stack developer, I specialize in crafting fast and user-friendly web and mobile apps. 
      I've got you covered from front to back-end, making sure everything works seamlessly together. 
      My goal is to build apps that make life easier for users, 
      no matter where they are or what device they're using.
      Let's collaborate and bring your ideas to life!
      </p>
    </section>


    {/* <!--
      - service
    --> */}

    <section className="service">

      <h3 className="h3 service-title">What i'm doing</h3>

      <ul className="service-list">
  {servicesData.map((service, index) => (
    <motion.div
      key={index}
      variants={slideInFromLeft(0.5)}
      initial="hidden"
      animate="visible"
      custom={index} // Pass the index as a custom prop
      transition={{ delay: index * 0.2 }} // Add a delay based on the index
    >
      <Service
        icon={service.icon}
        title={service.title}
        description={service.description}
      />
    </motion.div>
  ))}
</ul>


    </section>


    {/* <!--
      - testimonials
    --> */}

    <section className="testimonials ">

      <h3 className="h3 testimonials-title">Testimonials</h3>

      <ul className="testimonials-list has-scrollbar">
      
 {/* animate hrozontal scroll */}
 <div className="overflow-hidden " style={{ scrollSnapType: 'x mandatory' }}>
  <div className="inline-flex   animate-scroll infinite px-5" style={{ width: 'fit-content' }}>
    {testimonials.map((testimonial, index) => (
      <div key={index} className="w-96 text-nowrap p-3  bg-gray-300 m-4  flex-none rounded-md shadow-md">
        {/* Item content goes here */}
        <Testimonial
              key={index}
              name={testimonial.name}
              avatar={testimonial.avatar}
              testimonial={testimonial.testimonial}
            />
      </div>
    ))}
  </div>
</div>
 {/* animate hrozontal scroll */}

    



      </ul>

    </section>


 


  </article>
  )
}

export default About