"use client";

import useInViewAnimation from "@/hooks/useInViewAnimation";
import { useEffect, useRef, useState } from "react";
import { Project } from "@/types/Project";
import Image from "next/image";
import Link from "next/link";

interface ProjectItemProps {
    project: Project;
}

export default function ProjectItem({ project }: ProjectItemProps) {
    const {ref, isVisible} = useInViewAnimation();

    const animationClass = project.layout === "right"
        ? "slide-in-right"
        : "slide-in-left";
    return (
        <div 
            ref={ref}
            className={`flex flex-col gap-8 lg:flex-row project-hidden 
                        ${project.layout === "right" ? "lg:flex-row-reverse" : ""} 
                        ${isVisible ? animationClass : "opacity-0"}
                        transition-all duration-700 ease-out`}
            style={{ animationDelay: project.animationDelay }}                
        >
                <Link href={project.link} target="_blank">
                    <Image
                        src={project.image}
                        alt={project.title}
                        width={600} 
                        height={300}
                    />            
                </Link>
                <div className="flex flex-col ">
                    <div className="flex flex-col items-center">
                        <h3 className="text-xl font-bold text-center pb-4">{project.title}</h3>
                        {project.github && (
                            <a href={project.github} target="_blank" aria-label="GitHub link">
                                <i className="fab fa-github text-2xl pb-4 hover:text-stone-400"></i>
                            </a>
                        )}
                    </div>
                    <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base">
                        <li>{project.description}</li>
                        <li>{project.responsibilities}</li>
                        <li><strong>Technologies:</strong> {project.technologies.join(", ")}</li>
                    </ul>
                </div>
        </div>
    );
}