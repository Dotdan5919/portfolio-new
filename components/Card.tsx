"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image, { StaticImageData } from "next/image";
import image_1 from "@/images/1.jpg";



interface CardProps {  img: StaticImageData;
  name: string;
  description: string;
  stack: string[];
}
export function ThreeDCardDemo({name,description,stack,img}: CardProps) {
  return (
    <CardContainer className="inter-var scale-90">
      <CardBody className="bg-black shadow-emarald-500/[.1] border-2 border-white relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2]  w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
       
        
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
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as="a"
            href="https://twitter.com/mannupaaji"
            target="__blank"
            className="px-4 py-2 text-white rounded-xl text-xs font-normal dark:text-white"
          >
            Try now →
          </CardItem>
         
        </div>
      </CardBody>
    </CardContainer>
  );
}
