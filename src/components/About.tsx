"use client";

import useInViewAnimation from "@/hooks/useInViewAnimation";

export default function About () {
    const {ref, isVisible} = useInViewAnimation();

    return (
        <section 
            id="about"
            ref={ref}    
            className={`min-h-screen flex flex-col justify-center transition-all duration-700 ease-out 
                ${isVisible ? "slide-up" : "opacity-0 translate-y-8"}`}
        >
            <h2 className="text-3xl geist-mono font-bold text-center my-10">About</h2>
            <div className="text-justify space-y-4">
                <p>
                    Art comes in many different forms — each with its own creativity, vision and ideas. Over the years, I’ve explored a few of them: picking up hobbies, trying new things, and diving into different creative outlets like painting, playing and even producing music or sounds that helped me express myself.
                </p>
                <p>
                    Now, I find that same spark in coding. It challenges me and pushes me to learn, extending my creativity through design and interaction. Seeing various websites or portfolios with fascinating designs and interfaces made by professional designers and developers inspires me.
                </p>
                <p>
                    I admire creators who take time implementing even the smallest touches, whether it's in visual design, music, gaming, or anything else. Even the smallest detail can make things truly stand out.
                </p>
                <p>
                    I'm excited to create more meaningful and interesting designs in the future and share them with the world as I go, one step at a time.
                </p>
            </div>
        </section>
    )
}

