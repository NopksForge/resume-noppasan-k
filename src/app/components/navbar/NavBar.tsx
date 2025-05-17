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
    
    // Determine the position of the sliding background
    const getSliderPosition = () => {
        if (pathname === '/work') return 'left-0';
        if (pathname === '/about') return 'left-1/3';
        if (pathname === '/contact') return 'left-2/3';
        return 'left-0'; // Default position
    };
    
    return (
        <div className={`flex items-center justify-around rounded-full h-20 w-3xl ${scrolled ? 'backdrop-blur-md bg-white/30' : 'bg-transparent'} transition-all duration-300 relative`}>
            {/* Sliding background indicator */}
            <div className={`flex absolute justify-center w-1/3 transition-all duration-300 ease-in-out ${getSliderPosition()}`}>
                <div className="w-32 h-10 rounded-full bg-white/50"></div>
            </div>
            
            {/* Navigation buttons */}
            <NavButton text="Work " href="/work" isSelected={pathname === '/work'} isWork={true} />
            <NavButton text="About" href="/about" isSelected={pathname === '/about'} />
            <NavButton text="Contact" href="/contact" isSelected={pathname === '/contact'} />
        </div>
    );
}
