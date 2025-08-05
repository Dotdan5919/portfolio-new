import React from "react";
import { FloatingDock } from "@/components/ui/floatingdocs";
import {
  IconBrandGithub,
  IconBrandGmail,
  IconBrandLinkedin,
  IconBrandMailgun,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";

export function FloatingDockDemo() {
  const links = [


  {title:"LinkedIn",
     icon:(<IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />),
     href:"https://www.linkedin.com/in/osakpolo-ighodaro-7281a6157/" ,  
  },
    {
        title: "mail",
        icon: (<IconBrandMailgun className="h-full w-full text-neutral-500 dark:text-neutral-300" />),
        href: "mailto:dighodaro95@gmail.com",


    },

    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/Dotdan5919",
    },
  ];
  return (
    <div className="flex items-center justify-center h-28 w-full" id="contact">
      <FloatingDock
       // only for demo, remove for production
        items={links}
      />
    </div>
  );
}
