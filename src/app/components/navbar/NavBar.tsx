'use client'

import NavButton from "./NavButton";
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const pathname = usePathname();
    
    return (
        <div className="flex items-center justify-evenly rounded-full h-20 w-3xl bg-white/30 backdrop-blur-md border border-white/40">
            <NavButton text="Work " href="/work" isSelected={pathname === '/work'} isWork={true} />
            <NavButton text="About" href="/about" isSelected={pathname === '/about'} />
            <NavButton text="Contact" href="/contact" isSelected={pathname === '/contact'} />
        </div>
    );
}
