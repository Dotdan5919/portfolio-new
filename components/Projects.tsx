import React from 'react'
import { ThreeDCardDemo } from '@/components/Card'
import { TextHoverEffect } from "@/components/ui/text-hover-effect";

export default function Projects() {
  return (
    <div className='flex flex-col min-h-screen  items-center justify-between p-24 bg-black'>
      
      <div className="flex h-">
<TextHoverEffect text="Projects"  />
</div>

<div className="grid grid-cols-2">
  <div className="h-[550px]"><ThreeDCardDemo /></div>
  <div className="h-[550px]"><ThreeDCardDemo /></div>
  <div className="h-[550px]"><ThreeDCardDemo /></div>
  <div className="h-[550px]"><ThreeDCardDemo /></div>
</div>








    </div>
  )
}
