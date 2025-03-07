import React from 'react'
// import bgmain from '@/assets/images/bg-main.png'
// import bgsub from '@/assets/images/bg-sub.png'
import { cn } from '../../lib/cn';
import bg from "@/assets/images/bg.png"

interface Props {
  children: React.ReactNode
  className?: string
}

function Wrapper({ children, className }: Props) {
  return (
    <div className={cn("w-full h-svh relative ", className)}>
      <div
        className="absolute !-z-10 inset-0 bg-contain lg:bg-cover bg-center bg-repeat lg:bg-no-repeat"
        style={{
          backgroundImage: `url(${bg.src})`,
          filter: "blur(300px)",
          transform: "scale(1)",
        }}
      ></div>
      <div className="!z-[100] px-4 py-6 rounded-2xl">
        {children}
      </div>
    </div>
  );
}

export default Wrapper