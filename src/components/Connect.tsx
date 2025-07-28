"use client";

import SocialIcons from "./SocialIcons";
import { FaEnvelope } from "react-icons/fa";
import useInViewAnimation from "@/hooks/useInViewAnimation";

export default function Connect() {
    const {ref, isVisible} = useInViewAnimation();

    return(
        <section
            id="connect"
            ref={ref}
            className={`min-h-screen flex flex-col justify-center items-center space-y-6 transition-all duration-700 ease-out 
                ${isVisible ? "slide-up" : "opacity-0 translate-y-8"}`}
        >
            <h2 className="text-3xl geist-mono font-bold text-center my-10">Let's connect.</h2>
            <p className="text-center">Feel free to reach out to me if you're interested in working or collaborating.</p>
            <div className="flex items-center gap-4">
                <FaEnvelope />
                <a href="mailto:adam.janathan@gmail.com">adam.janathan@gmail.com</a>
            </div>
            <SocialIcons className="text-xl" />
        </section>
    )
}