import React from 'react'
import { ThreeDCardDemo } from '@/components/Card'
import { TextHoverEffect } from "@/components/ui/text-hover-effect";

import image_light from '@/components/images/4.jpg';

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
