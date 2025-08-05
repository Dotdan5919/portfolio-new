import { StaticImageData } from 'next/image';
import React from 'react'

import Image from 'next/image';

interface Project {



    title: string;
    description: string;
    image: StaticImageData;
    stack: string[];
    github: string;
    live: string;
}

interface MoreProjectsModalProps {
    show: boolean;  
    onClose: () => void;
    projects: Project[];
}




export default function MoreProjectsModal({ show, onClose, projects }: MoreProjectsModalProps) {
  if (!show) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-black text-white rounded-lg p-8 max-w-lg w-full relative animate-popup shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-2 text-white text-xl font-bold"
          onClick={onClose}
        >
          ×
        </button>
        <h2 className="text-2xl font-bold mb-4 text-black">Other Projects</h2>
        <div className="space-y-6">
          {projects.map((project, idx) => (
            <div key={idx} className="border-b pb-4 last:border-b-0 last:pb-0 flex items-center gap-5">
              <div className="w-full flex justify-center mb-2">
               
              <Image src={project.image } alt={project.title} className="rounded-lg shadow-md w-full max-w-xs h-40 object-cover" width={100} height={200} />
              </div>
              <div className="flex flex-col w-full items-start">
                <div className="text-lg font-semibold text-white text-start">{project.title}</div>
                <div className="text-white mb-2 text-start">{project.description}</div>
                <div className="flex flex-wrap gap-2 mb-2 justify-start">
                  {project.stack.map((tool, i) => (
                    <span key={i} className="px-2 py-1 bg-zinc-200 text-xs text-black rounded">
                      {tool}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 justify-center">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline text-sm">Github</a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-green-600 underline text-sm">Live</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
