"use client";

import { motion } from "framer-motion";

interface TextMarqueeProps {
  text: string;
  speed?: number;
}

export default function TextMarquee({ text, speed = 20 }: TextMarqueeProps) {
  return (
    <div className="overflow-hidden whitespace-nowrap w-full py-2 absolute top-0 md:top-2">
      <motion.div
        className="inline-block text-sm md:text-base font-bold w-full text-[#23260D]"
        animate={{ x: ["100%", "-100%"] }}
        transition={{ repeat: Infinity, duration: speed, ease: "linear" }}
      >
        {text}
      </motion.div>
    </div>
  );
}
