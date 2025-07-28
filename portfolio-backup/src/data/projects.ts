import { Project } from "@/types/Project";

const projects: Project[] = [
    {
        id: 1,
        title: "PPIJ Website",
        image: "/assets/PPIJ_website.png",
        link: "https://ppijerman.org/",
        description: "A collaborative redesign of the official website for PPI Jerman. Newest design can not be shown yet.",
        responsibilities: "Worked on the frontend design, created the layout of the website using Figma. Now working on contents of the Webpage.",
        technologies: ["Figma", "Typescript", "React"],
        github: null,
        layout: "left",
        animationDelay: "0.2s"
    },
    {
        id: 2,
        title: "Spotify React Web-app",
        image: "/assets/Spotify-webapp.png",
        link: "https://spotify-webapp-eight.vercel.app/",
        description: "A solo project using Spotify API. Users can make their own playlist and upload to their Spotify account.",
        responsibilities: "Focused on connecting frontend components with Spotify's API endpoints for dynamic playlist creation. Added other features such as renaming, deleting and showing the users playlist.",
        technologies: ["Tailwind CSS", "Typescript", "React"],
        github: "https://github.com/soggy2012/spotify-webapp",
        layout: "right",
        animationDelay: "0.4s"
    },
    {
        id: 3,
        title: "Weather React Web-app",
        image: "/assets/Weather-webapp.png",
        link: "https://adam-weather-app-selfproject.vercel.app/",
        description: "A solo project using OpenWeather API. Users can search for real time weather based on the searched region.",
        responsibilities: "Built reusable components and handled API responses with loading and error states to improve user experience.",
        technologies: ["Tailwind CSS", "Javascript", "React"],
        github: "https://github.com/soggy2012/weather-app-selfproject",
        layout: "left",
        animationDelay: "0.6s"
    }
];

export default projects;