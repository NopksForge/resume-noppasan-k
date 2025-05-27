"use client";

import { useState, useEffect } from "react";
import ContactCard from "../components/ContactCard";

export default function Contact() {
  const cards = [
    {
      text: "NopksForge0",
      textColor: "text-white",
      logoTextSrc: "/images/logo_github.png",
      logoImageSrc: "/github.svg",
      link: "https://github.com/NopksForge",
      color: "bg-gradient-to-r from-purple-900/60 via-indigo-900/60 to-blue-900/60"
    },
    {
      text: "Noppasan Kerdsomjit",
      textColor: "text-blue-600",
      logoTextSrc: "text-LinkedIn",
      logoImageSrc: "/linkedin.svg",
      link: "https://www.linkedin.com/in/noppasan-kerdsomjit-b55297206/",
      color: "bg-white/60"
    },
    {
      text: "Noppasan.ksj@gmail.com",
      textColor: "text-black/80",
      logoTextSrc: "text-e-mail",
      logoTextColor: "bg-gradient-to-r from-blue-500 via-green-500 to-red-500 bg-clip-text text-transparent",
      logoImageSrc: "/email.svg",
      link: "mailto:Noppasan.ksj@gmail.com",
      color: "bg-white/60"
    },
    {
      text: "Noppasan Kerdsomjit",
      textColor: "text-blue-200",
      logoTextSrc: "text-LinkedIn",
      logoImageSrc: "/linkedin.svg",
      link: "https://www.linkedin.com/in/noppasan-kerdsomjit-b55297206/",
      color: "bg-black/60"
    },
  ];
  const [cardPosition, setCardPosition] = useState(cards.length-1);
  const [isWarpToTop, setIsWarpToTop] = useState(false);

  const positionWarpToTop = "-mt-20 z-0 opacity-0"
  const positionHidden = "mt-20 z-0"
  const positionTop = "mt-40 z-10"
  const positionMiddle = "mt-60 z-20"
  const positionBottom = "mt-80 z-30 rotate-x-90 origin-bottom opacity-0"



  useEffect(() => {
    const interval = setInterval(() => {
      setIsWarpToTop(true);
      setTimeout(() => {
        setIsWarpToTop(false);
      },700);
      setCardPosition(prev => prev === 0 ? cards.length - 1 : prev - 1);
    }, 2000);

    return () => clearInterval(interval);
  }, [cards.length]);

  return (
    <div className="flex flex-col justify-center items-center w-full h-full font-helvetica">
      {cards.map((card, index) => {
        const relativePosition = (index - cardPosition + cards.length) % cards.length;
        return (
          <div  
            key={index}
            className={`absolute top-1/4  ease-in-out transition-all duration-1000 ${
              relativePosition === 0 ? `${isWarpToTop ? positionWarpToTop :   positionHidden}` :
              relativePosition === 1 ? `${positionTop}` :
              relativePosition === 2 ? `${positionMiddle}` :
              relativePosition === 3 ? `${positionBottom}` :
              ""
            }`
          }
          >
            <ContactCard
              text={card.text}
              textColor={card.textColor}
              logoTextSrc={card.logoTextSrc}
              logoTextColor={card.logoTextColor}
              logoImageSrc={card.logoImageSrc}
              link={card.link}
              color={card.color}
            />
          </div>
        );
      })}
    </div>
  );
}
