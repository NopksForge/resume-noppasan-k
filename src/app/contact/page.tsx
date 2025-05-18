"use client";

import ContactCard from "../components/ContactCard";

export default function Contact() {
  return (
    <div className="flex flex-col justify-center items-center mt-60 w-full h-full font-sans">
      <ContactCard
        text="NopksForge"
        textColor="text-white"
        logoTextSrc="/images/logo_github.png"
        logoImageSrc="/github.svg"
        link="https://github.com/NopksForge"
        color="bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900"
      />
      <ContactCard
        text="Noppasan Kerdsomjit"
        textColor="text-blue-600"
        logoTextSrc="text-LinkedIn"
        logoImageSrc="/linkedin.svg"
        link="https://www.linkedin.com/in/noppasan-kerdsomjit-b55297206/"
        color="bg-white/60"
      />
      <ContactCard
        text="Noppasan.ksj@gmail.com"
        textColor="text-black/80"
        logoTextSrc="text-e-mail"
        logoTextColor="bg-gradient-to-r from-blue-500 via-green-500 to-red-500 bg-clip-text text-transparent"
        logoImageSrc="/email.svg"
        link="mailto:Noppasan.ksj@gmail.com"
        color="bg-white/60"
      />
    </div>
  );
}
