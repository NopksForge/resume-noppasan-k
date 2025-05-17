'use client'

import NavButton from "./NavButton";
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Navbar() {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);
    
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 20; // Show background after scrolling 20px
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };
        
        window.addEventListener('scroll', handleScroll);
        
        // Clean up the event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);
    
    return (
        <div className={`flex items-center justify-evenly rounded-full h-20 w-3xl ${scrolled ? 'backdrop-blur-md  bg-white/30' : 'bg-transparent'} transition-all duration-300`}>
            <NavButton text="Work " href="/work" isSelected={pathname === '/work'} isWork={true} />
            <NavButton text="About" href="/about" isSelected={pathname === '/about'} />
            <NavButton text="Contact" href="/contact" isSelected={pathname === '/contact'} />
        </div>
    );
}
