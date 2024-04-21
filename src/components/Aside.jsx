import React, { useState } from 'react';

import { ChevronDownIcon,EnvelopeIcon,MapPinIcon,BriefcaseIcon } from '@heroicons/react/16/solid';

const Aside = () => {
  const [showContacts, setShowContacts] = useState(false);

  const toggleContacts = () => {
    console.log('toggle contacts')
    setShowContacts(!showContacts);
  };

  return (
    <aside className={"sidebar " + (showContacts ? "active" : "")}>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img
            src={"/images/mamun.jpg"}
            alt="Richard hanrick"
            width="80"
          />
        </figure>

        <div className="info-content">
          <h1 className="name" title="Richard hanrick">
            Chaitanya
          </h1>

          <p className="title">Web developer</p>
        </div>

       
  {/* Content goes here */}
        <button className=' block xl:hidden absolute right-0 top-0 m-0 text-sky-400' onClick={toggleContacts}>
          
        
          

          
          <ChevronDownIcon width={25} className='bg-gray-600 rounded-full'/>
                  
         
                
                   

        </button>
      </div>

       
        <div className="sidebar-info_more">
          <div className="separator"></div>

          <ul className="contacts-list">
            <li className="contact-item">
              <div className="icon-box">
               <EnvelopeIcon width={30}/>
              </div>

              <div className="contact-info">
                <p className="contact-title">Email</p>
                <a href="mailto:richard@example.com" className="contact-link">
                  richard@example.com
                </a>
              </div>
            </li>

      

            <li className="contact-item">
              <div className="icon-box">
                <BriefcaseIcon width={30}/>
              </div>

              <div className="contact-info">
                <p className="contact-title">Experience</p>
                <time dateTime="1982-06-23">June 23, 1982</time>
              </div>
            </li>

            <li className="contact-item">
              <div className="icon-box">
                <MapPinIcon width={30}/>
              </div>

              <div className="contact-info">
                <p className="contact-title">Location</p>
                <address>Sacramento, California, USA</address>
              </div>
            </li>
          </ul>

          <div className="separator"></div>

          <ul className="social-list">
            <li className="social-item">
              <a href="#" className="social-link">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
            </li>

            <li className="social-item">
              <a href="#" className="social-link">
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
            </li>

            <li className="social-item">
              <a href="#" className="social-link">
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
            </li>
          </ul>
        </div>
      
    </aside>
  );
};

export default Aside;
