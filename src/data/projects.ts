import { type Project } from "../types";
import { HttpServer } from "./images";

const projects: Project[] = [
    {
        name: "Multi-Threaded HTTP Server",
        description: "A multi-threaded HTTP server written in pure Java.",
        techStack: ["Java 21", "Java net API", "SL4J"],
        features: ["Multi-Thread support with java thread pool", "uses Server socket", "Zero dependency on external libs", "Custom Router", "static file serving"],
        links: { github: "https://github.com/ayushTripathy-o1/Multi-threaded-HTTP-Server" },
        image: HttpServer
    },
    {
        name: "User Authentication App",
        description: "A Java Full-Stack User Authentication app with jwt and cookies based authentication.",
        techStack: ["Java 21", "Spring boot", "Spring security", "Spring boot oauth resource server", "Spring data jpa", "Mysql", "Lombok", "React", "React Router", "tailwindcss", "Axios", "React-Hook-Form"],
        features: ["Uses https only cookies", "RSA Based token authentication", "RBAC Support", "Refresh logic"],
        links: { github: "github link" },
        image: "User"
    },
];

export default projects;
