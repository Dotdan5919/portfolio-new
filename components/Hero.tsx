'use client';
import React from "react";
import { cn } from "@/lib/utils";
import { Spotlight } from "@/components/ui/Spotlight";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { AnimatedTooltip } from "./ui/animated-tooltip";

export function SpotlightPreview() {
  return (
    <div id="about" className="relative flex sm:h-[90rem]  sm:max-h-dvh pt-64 pb-20 w-full overflow-hidden  bg-black/[0.96] antialiased md:items-center md:justify-center">
      <div
        className={cn(
          "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none",
          "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]",
        )}
      />

      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />
      <div className="relative z-10 mx-auto w-full max-w-7xl  md:pt-0">
        <h1 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-4xl font-bold text-transparent md:text-7xl">
       Ighodaro osakpolo <br/> Daniel
        </h1>
        <p className=" flex mx-auto mb-10 mt-4 max-w-lg text-center text-base font-normal text-neutral-300">
       I'm a Full-Stack Developer who transforms creative visions into scalable, aesthetically stunning applications using TypeScript, Next.js, Laravel, Node.js,Firebase, MySQL, and WordPress—delivering exceptional user experiences that perform flawlessly under pressure.
        </p>
         <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />

     <div className="flex flex-row items-center justify-center mb-10 w-full mt-8">
      <AnimatedTooltip items={item} />
    </div>

      </div>
      
    </div>
  );
}

const item=[{

id:1,
  name: "Github",
  image: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
  link:"https://github.com/Dotdan5919"
},
{
  id:2,
  name: "Linkedin",
  image: "https://cdn-icons-png.flaticon.com/512/174/174857.png",
  link:"https://www.linkedin.com/in/osakpolo-ighodaro-7281a6157/"
}


]

const testimonials = [

  {
name: "Github",

  },
  {
    name: "Javascript",
  },
  {
    name: "Next.js",
  },
  {
    name: "Firebase",
  },
  {
    name: "Laravel",
  },
  {
    name: "MySQL",
  },
  {
    name: "WordPress",
  },
  {
    name: "TypeScript",
  },
  {
    name: "Node.js",
  },
  {
    name: "React",
  },
  {
    name: "Tailwind",
  },
  {
    name: "HTML",
  },
  {
    name: "Css",
  },
  {
    name: "PHP",
  },
  {
    name:"express"
  },
  {

    name: "MongoDB"
  }
 
  

];