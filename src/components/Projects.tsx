"use client";

import ProjectItem from "@/components/ProjectItem";
import projects from "@/data/projects";
import { Project } from "@/types/Project";

export default function Projects() {
    return (
        <section id="projects" className="min-h-screen flex flex-col justify-center">
            <h2 className="text-3xl geist-mono font-bold text-center my-10">Projects</h2>
            <div className="space-y-32">
                {projects.map((project: Project) => (
                    <ProjectItem key={project.id} project={project} />
                ))}
            </div>
        </section>
    )
}