"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image, { StaticImageData } from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";



interface CardProps {  img: StaticImageData;
  name: string;
  description: string;
  stack: string[];
  github: string;
  live: string;
}
export function ThreeDCardDemo({name,description,stack,img,github,live}: CardProps) {
  return (
    <CardContainer className="inter-var scale-90 w-full  h-full">
      <CardBody className="bg-black shadow-emarald-500/[.1] border-2 border-white relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2]  w-full sm:w-[40rem] h-auto rounded-xl p-6   ">
       
        
        <CardItem translateZ="100" className="w-full mt-4">
      
          <Image src={img} height="1000"
            width="1000" alt="thumbnail" 
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl" />
        </CardItem>

 <CardItem
        
          className="text-xl font-bold text-neutral-600 dark:text-white mb-2 mt-3"
        >
            {name}
         
        </CardItem>
        <CardItem className="text-white">
{description}
        </CardItem>
        <div className="flex flex-col items-start  justify-between gap-10 mt-10">
          <div className="grid grid-cols-5  gap-2">
            {stack.map((item, index) => (
             
             <span
                key={index}
                className="text-xs font-medium bg-zinc-800 text-white px-2 py-1 rounded-md items-center justify-center"
              >
                {item}
              </span>
            
            
             
            ))} </div>
          <CardItem
            translateZ={20}
          
            target="__blank"
            className="px-4 py-2 flex items-center  gap-3 text-white rounded-xl text-xs font-normal dark:text-white"
          >
            
            <Link href={github || "#"} className="flex items-center" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} className="mr-2 scale-150" />
            Github
            </Link>

            <Link href={live || "#"} className="flex items-center" target="_blank" rel="noopener noreferrer">
            View Project →</Link>
          </CardItem>
         
        </div>
      </CardBody>
    </CardContainer>
  );
}
