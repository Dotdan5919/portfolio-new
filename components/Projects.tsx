import React from 'react'
import { ThreeDCardDemo } from '@/components/Card'
import { TextHoverEffect } from "@/components/ui/text-hover-effect";

import image_light from '@/images/4.png';
import image_movie from '@/images/1.jpg';
import image_crypto from '@/images/2.png';


export default function Projects() {
const projects = [
  {
    title: "Light House Website",
    description: "The website is a user-friendly e-commerce platform built with React, featuring a seamless search function, effortless cart management, a personalized favorites list, and streamlined development using React hooks. Local storage and Eventbus API were used to manage the state and store some data in the browser",
    image: image_light,
    stack: [ "Tailwind" ,"React" ,"API", "Git" , "Github"  ],
    github: "#",
    live: "#",
  },
  {
    title: "Moplay movie-app",
    description: "This is a Movie app developed with React using various react concepts,also various API's like:Email.js,movie Collection API and firebase auth was used to develop this website,The states were managed using contextual API",
    image: image_movie,
    stack: [ "Tailwind" ,"React" ,"API", "Git" , "Github", "Firebase","API","Framer-motion"  ],
    github: "#",
    live: "#",
  },
  {
    title: "Cynphoni landing page",
    description: "Cynphoni Landing Page: A single-page application serving as a landing page, built with React for dynamic content and Tailwind CSS for rapid, responsive styling. The project emphasizes modern web development practices, including Git and GitHub for source code management and collaboration.",
    image: image_crypto,
    stack: [ "Tailwind" ,"React" ,"API", "Git" , "Github" ],
    github: "#",
    live: "#",
  },


]


  return (
    <div className='flex flex-col min-h-screen  items-center justify-between p-24 bg-black'>
      
      <div className="flex h-">
<TextHoverEffect text="Projects"  />
</div>

<div className="grid grid-cols-2">
  {
projects.map((project, index) => (
    <div key={index} className="h-[550px]">
      <ThreeDCardDemo 
        img={project.image}
        name={project.title}
        description={project.description}
        stack={project.stack}
      />
    </div>
  ))}






  
</div>








    </div>
  )
}
