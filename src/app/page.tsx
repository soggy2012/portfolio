"use client";

import Navbar from '@/components/Navbar'
import HeroSection from "@/components/HeroSection";
import Projects from "@/components/Projects";
import About from "@/components/About"
import Connect from "@/components/Connect"

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <main className="mx-8 max-w-screen-lg lg:mx-auto">
        <Projects />
        <About />
        <Connect />
      </main>
      <footer className='text-center mb-4'>
        <p> 2025 Adam Ardiansyah</p>
      </footer>
    </>
  );
}
