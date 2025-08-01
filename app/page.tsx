import { SpotlightNewDemo, SpotlightPreview } from "@/components/Hero";
import { NavbarDemo } from "@/components/Navbar";
import { Navbar } from "@/components/ui/resizable-navbar";
import Image from "next/image";

import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import { InfiniteMovingCards} from "@/components/ui/infinite-moving-cards";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import { MyText } from "@/components/MyText";
import { faGithub, faPhp,faJs,faReact,faLaravel, faWordpress, faHtml5, faCss3Alt, faNodeJs } from "@fortawesome/free-brands-svg-icons";
import { faAd } from "@fortawesome/free-solid-svg-icons";
import Tailwindcss from "@/components/ui/logos/tailwind";
import Typescript from "@/components/ui/logos/typescript";
import Nextjs from "@/components/ui/logos/nextjs";
import Firebase from "@/components/ui/logos/firebase";
import Mysql from "@/components/ui/logos/mysql";
import Expressjs from "@/components/ui/logos/express";
import Mongodb from "@/components/ui/logos/mongodb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FloatingDockDemo, MyfloatingDock } from "@/components/Myfloatingdocs";


export default function Home() {

  const Stack = [

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
    name: "PHP",
  },
  {
    name:"express"
  }
 
  

];
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
                return <Mongodb/>;

                case "Github":
                  return <FontAwesomeIcon icon={faGithub} className="text-zinc-500" />;
        case "PHP":
          return <FontAwesomeIcon icon={faPhp} className="text-zinc-500" />;
        case "Laravel":
          return <FontAwesomeIcon icon={faLaravel} className="text-zinc-500" />;
        case "HTML":
          return <FontAwesomeIcon icon={faHtml5} className="text-zinc-500" />;
        case "Css":
          return <FontAwesomeIcon icon={faCss3Alt} className="text-zinc-500" />;
        case "Javascript":
          return <FontAwesomeIcon icon={faJs} className="text-zinc-500" />;
        case "WordPress":
          return <FontAwesomeIcon icon={faWordpress} className="text-zinc-500" />;
        case "Node.js":
          return <FontAwesomeIcon icon={faNodeJs} className="text-zinc-500" />;
        case "React":
          return <FontAwesomeIcon icon={faReact} className="text-zinc-500" />;
              
        default:
          return (
            <FontAwesomeIcon
              icon={faAd}
              className="text-zinc-500"
            />
          );
      }
    };
  return (
   

   <div className="flex min-h-screen gap-0 flex-col">


    
    
<NavbarDemo/>     
<SpotlightPreview/>
<Projects/>

<div className=" px-36 flex flex-col items-start justify-start bg-black w-full">

<div className="flex-w-full ">
<MyText/>
</div>


<div className="flex flex-row gap-4  w-full">

<ul className="w-[40%] grid grid-cols-2 bg-zinc-900 text-white text-2xl gap-x-4 gap-y-8 rounded-md p-10">
{Stack.map((item, idx) => ( 

<li key={item.name} className="flex items-center gap-2">
  {renderIcon(item.name)}
<p >{item.name}</p>
</li>
))}


</ul>

<div className="w-[60%] bg-zinc-900 rounded-md  p-10 text-white leading-8">



My journey began with simple curiosity and a <span className="font-bold">design background</span> that taught me visual storytelling. I started exploring <span className="font-bold">HTML, CSS, JavaScript, and PHP</span>, then naturally evolved my toolkit to include <span className="font-bold">Laravel, React, Express.js, and Node.js</span> for full-stack development.

<div className="mt-4"> </div>

<span className="font-bold">"What drives me isn't just writing code—it's translating someone's vision into a digital reality they can see, touch, and experience."</span>


<div className="mt-4"> </div>

My design roots run deep through everything I build. I still create <span className="font-bold">graphics</span> and edit <span className="font-bold">videos</span>, and these creative skills transform my development work. Every project starts with understanding the vision, and I'm always asking: "What story are we telling, and how can technology serve that narrative?" <span className="font-bold">"The best code doesn't just function—it breathes life into ideas and makes the impossible feel inevitable." ✨</span>
</div>



</div>
</div>



<div className="flex flex-col px-24  bg-black w-full justify-center items-center py-10">


<h1 className="text-white font-black text-3xl">Get in touch</h1>

<FloatingDockDemo/>
</div>
  




    </div>
  );
}



