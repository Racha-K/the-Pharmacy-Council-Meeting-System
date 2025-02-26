import React from 'react'
// import bgmain from '@/assets/images/bg-main.png'
// import bgsub from '@/assets/images/bg-sub.png'
import { cn } from '../../lib/cn';

interface Props {
  children: React.ReactNode
  className?: string
}

function Warpper({ children, className }: Props) {
  return (
    <div
      className={cn(className, "w-full h-svh bg-cover px-4 py-6 bg-white relative overflow-hidden",
        "before:content-[''] before:absolute before:-top-48 before:-left-48 before:bg-[#C1C457] before:lg:w-[634px] before:w-[534px] before:aspect-square before:rounded-full before:blur-[400px]",
        "after:content-[''] after:absolute after:-bottom-48 after:-right-48 after:bg-[#C1C457] after:lg:w-[634px] after:w-[334px] after:aspect-square after:rounded-full after:blur-[400px]",
      )}
    >
      {/* <div className={cn(className, 'w-full h-full bg-cover px-4 py-6 rounded-2xl md:rounded-none')} style={{ backgroundImage: `url(${bgsub.src})` }} > */}
      {children}
      {/* </div> */}
    </div>
  )
}

export default Warpper