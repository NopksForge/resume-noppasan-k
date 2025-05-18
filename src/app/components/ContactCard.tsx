import { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface ContactCardProps {
  text: string;
  textColor: string;
  logoTextSrc: string;
  logoTextColor?: string;
  logoImageSrc: string;
  link?: string;
  color?: string;
}

//add prop for another card
export default function ContactCard({ text, textColor, logoTextSrc = "/terminal.svg", logoTextColor, logoImageSrc, link, color }: ContactCardProps) {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!cardRef.current) return;
      
      const rect = cardRef.current.getBoundingClientRect();
      const cardCenterX = rect.left + rect.width / 2;
      const cardCenterY = rect.top + rect.height / 2;
      
      const mouseX = e.clientX - cardCenterX;
      const mouseY = e.clientY - cardCenterY;
      
      const rotateY = mouseX * 0.01;
      const rotateX = -mouseY * 0.01;
      
      setRotation({ x: rotateX, y: rotateY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);


  return (
    <div 
      ref={cardRef}
      className={`flex flex-col justify-center h-[450px] font-bold text-white border backdrop-blur-md rounded-4xl w-3xl ${color ? `${color}` : 'bg-black/20'} border-white/50`}
      style={{ 
        transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        transformStyle: 'preserve-3d'
      }}
      onClick={() => window.open(link, "_blank")}
    >
      <div className="absolute top-10 right-10" style={{ transform: 'translateZ(20px)' }}>
        {logoTextSrc.startsWith('text-') ? (
          <h2 className={`text-6xl ${logoTextColor ? `${logoTextColor}` : 'text-blue-600'}`}>{logoTextSrc.substring(5)}</h2>
        ) : (
          <Image src={logoTextSrc} alt={text+" text"} width={200} height={100} />
        )}

      </div>
      <div className="absolute bottom-10 left-10" style={{ transform: 'translateZ(30px)' }}>
        <h2 className={`text-3xl ${textColor ? `${textColor}` : 'text-white'}`}>{text}</h2>
      </div>
      <div className="absolute right-10 bottom-10" style={{ transform: 'translateZ(20px)' }}>
        <Image src={logoImageSrc} alt={text+" logo"} width={50} height={50} />
      </div>
    </div>
  );
} 