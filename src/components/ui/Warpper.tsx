import React from 'react'
import bgmain from '@/assets/images/bg-main.png'
import bgsub from '@/assets/images/bg-sub.png'
import { cn } from '../../libs/cn';

interface Props {
  children: React.ReactNode
  className?: string
}

function Warpper({ children, className }: Props) {
  return (
    <div className="w-full h-svh bg-cover px-4 py-6" style={{ backgroundImage: `url(${bgmain.src})` }}>
      <div className={cn(className, 'w-full h-full bg-cover px-4 py-6 rounded-2xl md:rounded-none')} style={{ backgroundImage: `url(${bgsub.src})` }} >
        {children}
      </div>
    </div>
  )
}

export default Warpper