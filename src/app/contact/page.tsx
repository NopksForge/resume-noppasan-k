"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function Contact() {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!cardRef.current) return;
      
      // Get card position and dimensions
      const rect = cardRef.current.getBoundingClientRect();
      const cardCenterX = rect.left + rect.width / 2;
      const cardCenterY = rect.top + rect.height / 2;
      
      // Calculate mouse position relative to card center
      const mouseX = e.clientX - cardCenterX;
      const mouseY = e.clientY - cardCenterY;
      
      // Calculate rotation (limit the rotation to a reasonable amount)
      const rotateY = mouseX * 0.01; // Horizontal rotation
      const rotateX = -mouseY * 0.01; // Vertical rotation (negative to make it follow the mouse)
      
      setRotation({ x: rotateX, y: rotateY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center w-full h-screen font-sans bg-gradient-to-r from-purple-200 to-red-200">
      <div 
        ref={cardRef}
        className="flex flex-col justify-center h-[450px] font-bold text-white border backdrop-blur-md rounded-4xl w-3xl bg-black/20 border-white/50 transition-transform duration-200 ease-out"
        style={{ 
          transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transformStyle: 'preserve-3d'
        }}
      >
        <div className="absolute top-10 right-10" style={{ transform: 'translateZ(20px)' }}>
          <Image src="/terminal.svg" alt="terminal" width={50} height={50} />
        </div>
        <div className="flex flex-col ml-10" style={{ transform: 'translateZ(30px)' }}>
          <h2 className="text-7xl">Noppasan</h2>
          <h2 className="text-7xl">Kerdsomjit</h2>
          <p className="text-2xl">Software Engineer</p>
        </div>
        <div className="flex fixed right-10 bottom-10 flex-row gap-4" style={{ transform: 'translateZ(40px)' }}>
          <button className="transition-all duration-300 hover:cursor-pointer hover:scale-110">
            <Image
              src="/email.svg"
              alt="email"
              width={70}
              height={70}
              onClick={() =>
                window.open("mailto:noppasan.ksj@gmail.com", "_blank")
              }
            />
          </button>
          <button className="transition-all duration-300 hover:cursor-pointer hover:scale-110">
            <Image
              src="/linkedin.svg"
              alt="linkedin"
              width={50}
              height={50}
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/noppasan-kerdsomjit-b55297206/",
                  "_blank"
                )
              }
            />
          </button>
          <button className="transition-all duration-300 hover:cursor-pointer hover:scale-110">
            <Image
              src="/github.svg"
              alt="github"
              width={50}
              height={50}
              onClick={() =>
                window.open("https://github.com/NopksForge", "_blank")
              }
            />
          </button>
        </div>
      </div>
    </div>
  );
}
