'use client'

import Image from "next/image";
import { useState, useEffect } from "react";

export default function HelloWorld() {
  const [isClicked, setIsClicked] = useState(false);
  
  useEffect(() => {
    if (isClicked) {
      const timer = setTimeout(() => {
        setIsClicked(false);
      }, 2000);
      
      return () => clearTimeout(timer);
    }
  }, [isClicked]);
  
  return (
    <div 
      className="flex flex-row justify-center items-center h-60 rounded-md border backdrop-blur-md bg-white/30 border-white/40 w-2xl group hover:shadow-2xl hover:shadow-black/10"
      onClick={() => setIsClicked(true)}
    >
      <div className={`flex absolute top-0 left-5 flex-row justify-center items-center opacity-0 transition-all duration-700 -center ${isClicked ? '':'group-hover:-top-8 group-hover:opacity-100'}`}>
        <Image src="/terminal.svg" alt="terminal" width={60} height={60} />
        <span className="ml-2 text-5xl font-bold text-white"></span>
      </div>
      <h1 className="text-4xl font-bold text-blue-600 transition-all duration-700 ease-in-out group-hover:text-5xl group-hover:opacity-50">
        <span className={`inline-block text-transparent bg-clip-text font-mono ${isClicked ? 'bg-gradient-to-r from-red-800 to-red-500 scale-110 -translate-y-1' : 'bg-gradient-to-r from-teal-800 to-blue-500 scale-100'} transition-all duration-700`}>
          {isClicked ? "> print" : "> HelloWorld(\"print\")"}
        </span>
      </h1>
    </div>
  );
}
