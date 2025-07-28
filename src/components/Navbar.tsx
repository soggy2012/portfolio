"use client"

import SocialIcons from "./SocialIcons";
import { useState } from "react"
import Link from 'next/link'
import { FaBars, FaXmark } from "react-icons/fa6";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNav = () => setIsOpen(prev => !prev)
    const closeNav = () => setIsOpen(false)

    const navLinks = [
        { href: "#projects", label: "Projects", delay: "0.3s" },
        { href: "#about", label: "About", delay: "0.6s" },
        { href: "#", label: "CV", delay: "0.8s" },
        { href: "#connect", label: "Connect", delay: "1s" },  
    ];
    const NavLinks = () => (
        <div className="flex flex-col text-center gap-12 lg:flex-row">
            {navLinks.map((link, index) => (
                <a
                    key={index}
                    href={link.href}
                    className="slide-up hover:text-stone-400"
                    style={{ animationDelay: link.delay}}
                >
                    {link.label}
                </a>
            ))}
        </div>
    );

    
    return (
        <header className="relative min-h-scren flex lg:flex-col">  
            <div className="w-full z-50 p-6">
                <div className="flex justify-between items-center lg:justify-center slide-up" style={{animationDelay: "0.2s"}}>
                    <Link href="#" className="font-berghan text-4xl tracking-[.15em] lg:text-6xl">
                        damJ
                    </Link>
                    <button
                        onClick={toggleNav}
                        className="lg:hidden"
                        aria-label="Toggle menu"
                    >
                        <i className="fa fa-bars text-2xl"></i>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <nav className={`
                fixed inset-0 z-50 bg-zinc-950/90 font-berghan transform transition-all duration-500 ease-in-out
                ${isOpen ? 'translate-y-0 opacity-100 pointer-events-auto' : '-translate-y-full opacity-0 pointer-events-none'}
                `}>
                <button
                    className="absolute top-4 right-4 text-3xl"
                    onClick={closeNav}
                    aria-label="Close menu"
                >
                    <i className="fa-solid fa-xmark"></i>
                </button>
                <div className="flex flex-col min-h-screen items-center justify-center gap-12 text-2xl geist-mono">
                    <NavLinks
                    />
                    <SocialIcons className="text-2xl" />
                </div>
            </nav>
            

            {/* Desktop Menu */}
            <nav className="hidden justify-center gap-16 text-lg pt-4 geist-mono lg:flex">
                <NavLinks />
            </nav>
        </header>
    )
}