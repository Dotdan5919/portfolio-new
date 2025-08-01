"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faPhp,faJs,faReact,faLaravel, faWordpress, faHtml5, faCss3Alt, faNodeJs } from "@fortawesome/free-brands-svg-icons";
import { faAd } from "@fortawesome/free-solid-svg-icons";
import Tailwindcss from "./logos/tailwind";
import Typescript from "./logos/typescript";
import Nextjs from "./logos/nextjs";
import Firebase from "./logos/firebase";
import Mysql from "./logos/mysql";
import Expressjs from "./logos/express";
import Mongodb from "./logos/mongodb";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "slow",
  pauseOnHover = true,
  className,
}: {
  items: {
    
    name: string;
    
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards",
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse",
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };


  const iconMap = {
  "Github": faGithub,
  "PHP": faPhp,
  "Laravel": faLaravel,
  "HTML": faHtml5,
  "Css": faCss3Alt,
  "Javascript": faJs,
  "WordPress": faWordpress,
  "Node.js": faNodeJs,
  "React": faReact,
  

//   "Typescript": faTypescript,
//     "Tailwind CSS": faTailwind  
//     "Next.js": faNextjs,
//     "Firebase": faFirebase,
//     "MySQL": faMysql,
}


const renderIcon = (itemName: string) => {
    switch (itemName) {
      case "Tailwind":
        return <Tailwindcss />;
      case "TypeScript":
        return <Typescript />;
      case "Next.js":
        return <Nextjs />;
      case "Firebase":
        return <Firebase />;
      case "MySQL":
        return <Mysql />;

        case "express":
            return <Expressjs/>;

            case "MongoDB":
                return <Mongodb/>
      default:
        return (
          <FontAwesomeIcon
            icon={iconMap[itemName] || faAd}
            className="text-zinc-500"
          />
        );
    }
  };


  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
      >
        {items.map((item, idx) => (
          <li
            className="relative w-fit items-center flex justify-center text-white shrink-0 rounded-2xl border border-b-0  px-4 py-3 gap-2  border-zinc-700 bg-[linear-gradient(180deg,#27272a,#18181b)]"
            key={item.name}
          >
{renderIcon(item.name)}           


 
 <p> {item.name} </p>
              
        
          </li>
        ))}
      </ul>
    </div>
  );
};
