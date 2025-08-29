'use client'
import React from 'react'
import { ThreeDCardDemo } from '@/components/Card'
import { TextHoverEffect } from "@/components/ui/text-hover-effect";

import image_light from '@/images/4.png';
import image_movie from '@/images/1.jpg';
import image_crypto from '@/images/2.png';
import image_indesign from '@/images/3.jpg';




export default function Projects() {
 
  const projects = [
    {
    title: "E-commerce Shop",
    description: "A modern e-commerce web application built with Next.js 14 and TypeScript, featuring product catalog, cart functionality, and checkout process. Demonstrates advanced React patterns, server-side rendering, and responsive design for optimal performance across all devices. Deployed on Vercel with type-safe development and component-based architecture.",
     image: image_indesign,
    stack: [ "Tailwind" ,"Next.js" ,"API", "Git" , "Github","Typescript","motion","express.js" ],
    github: "https://github.com/Dotdan5919/indesign",
    live: "https://indesign-roan.vercel.app/",
  },
  {
    title: "Light House Website",
    description: "The website is a user-friendly e-commerce platform built with React, featuring a seamless search function, effortless cart management, a personalized favorites list, and streamlined development using React hooks. Local storage and Eventbus API were used to manage the state and store some data in the browser",
    image: image_light,
    stack: [ "Tailwind" ,"React" ,"API", "Git" , "Github"  ],
    github: "https://github.com/Dotdan5919/Lighthouse",
    live: "https://www.lighthouse.ighodarodaniel.com.ng/",
  },
  {
    title: "Moplay movie-app",
    description: "This is a Movie app developed with React using various react concepts,also various API's like:Email.js,movie Collection API and firebase auth was used to develop this website,The states were managed using contextual API",
    image: image_movie,
    stack: [ "Tailwind" ,"React" ,"API", "Git" , "Github", "Firebase","API","motion"  ],
    github: "https://github.com/Dotdan5919/Movie-App",
    live: "https://moplay.ighodarodaniel.com.ng/",
  },
  {
    title: "Cynphoni landing page",
    description: "Cynphoni Landing Page: A single-page application serving as a landing page, built with React for dynamic content and Tailwind CSS for rapid, responsive styling. The project emphasizes modern web development practices, including Git and GitHub for source code management and collaboration.",
    image: image_crypto,
    stack: [ "Tailwind" ,"React" , "Git" , "Github" ],
    github: "https://github.com/Dotdan5919/crypto-landing",
    live: "https://www.cynphoni.ighodarodaniel.com.ng/",
  },
  ];



  return (
    <div className='flex flex-col min-h-screen  items-center justify-between sm:p-24 pt-20 bg-black' id="projects">
      
      <div className="flex h-">
<TextHoverEffect text="Projects"  />
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 w-full ">
  {
projects.map((project, index) => (
    <div key={index} className={`w-full sm:mt-auto -mt-30 `}>
      <ThreeDCardDemo 
        img={project.image}
        name={project.title}
        description={project.description}
        stack={project.stack}
        live={project.live}
        github={project.github}
      />
    </div>
  ))}
</div>

    </div>
  )
}

// Add Tailwind animation class
// In your global CSS (e.g., globals.css), add:
// @layer utilities {
//   .animate-popup {
//     @apply transition-all duration-500 ease-out scale-90 opacity-0;
//     animation: popup-fade-in 0.4s cubic-bezier(0.4,0,0.2,1) forwards;
//   }
//   @keyframes popup-fade-in {
//     to {
//       opacity: 1;
//       scale: 1;
//     }
//   }
// }
