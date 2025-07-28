export interface Project {
    id: number;
    title: string;
    image: string;
    link: string;
    description: string;
    responsibilities: string;
    technologies: string[];
    github: string | null;
    layout: "left" | "right";
    animationDelay: string;
}