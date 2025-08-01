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
     href:"#" ,  
  },
    {
        title: "mail",
        icon: (<IconBrandMailgun className="h-full w-full text-neutral-500 dark:text-neutral-300" />),
        href: "#",


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
      href: "#",
    },
  ];
  return (
    <div className="flex items-center justify-center h-28 w-full">
      <FloatingDock
        mobileClassName="translate-y-20" // only for demo, remove for production
        items={links}
      />
    </div>
  );
}
