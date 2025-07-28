"use client";


import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";


const SocialIcons = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex gap-8 slide-up ${className}`}>
      <a href="https://github.com/soggy2012" target="_blank" rel="noopener noreferrer">
        <FaGithub className="hover:text-stone-400 transition" />
      </a>
      <a href="https://www.linkedin.com/in/adam-ardiansyah-48637630a/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="hover:text-stone-400 transition" />
      </a>
      <a href="https://www.instagram.com/adamjanathan/" target="_blank" rel="noopener noreferrer">
        <FaInstagram className="hover:text-stone-400 transition" />
      </a>
    </div>
  );
};

export default SocialIcons;
