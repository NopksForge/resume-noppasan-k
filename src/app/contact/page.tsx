"use client";

import Image from "next/image";

export default function Contact() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen font-sans bg-gradient-to-r from-purple-200 to-red-200">
      <div className="flex flex-col justify-center h-[450px] font-bold text-white border backdrop-blur-md rounded-4xl w-3xl bg-black/20 border-white/50">
        <div className="absolute top-10 right-10">
          <Image src="/terminal.svg" alt="terminal" width={50} height={50} />
        </div>
        <div className="flex flex-col ml-10">
          <h2 className="text-7xl">Noppasan</h2>
          <h2 className="text-7xl">Kerdsomjit</h2>
          <p className="text-2xl">Software Engineer</p>
        </div>
        <div className="flex fixed right-10 bottom-10 flex-row gap-4">
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
