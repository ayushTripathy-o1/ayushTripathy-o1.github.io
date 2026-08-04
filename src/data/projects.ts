import { type Project } from "../types";
import { HlsApp, HttpServer, UserAuth } from "./images";

const projects: Project[] = [
    {
        name: "Multi-Threaded HTTP Server",
        description: "A lightweight HTTP/1.1 server built entirely from scratch in Java 21 without using Spring Boot, Tomcat, or any servlet container. Every request is processed over raw TCP sockets using a custom HTTP parser, routing engine, and concurrent request handling. This project was built to gain a deep understanding of how web servers work beneath modern frameworks.",
        techStack: ["Java 21", "Java net API", "SL4J"],
        features: ["Built directly on Java's ServerSocket and Socket APIs.", "Custom HTTP/1.1 request parser supporting headers and request bodies.", "Exact and wildcard route matching with a lightweight routing engine.", "Concurrent request handling using a fixed-size thread pool.", "Static file serving with automatic MIME type detection.", "Graceful shutdown to safely finish active client requests.", "Structured logging with SLF4J and Logback.", "Zero framework dependencies, everything runs on core Java."],
        links: { github: "https://github.com/ayushTripathy-o1/Multi-threaded-HTTP-Server" },
        image: HttpServer,
    },
    {
        name: "User Authentication App",
        description: "A production-inspired authentication system built with Spring Boot and React, featuring JWT authentication, secure HTTP-only cookies, automatic token refresh, and persistent session management. The project focuses on implementing modern authentication practices while delivering a seamless user experience.",
        techStack: ["Java 21", "Spring boot", "Spring security", "Spring boot oauth Resource server", "Spring data JPA", "Mysql", "Lombok", "Spring Boot Dev-Tools", "React", "React Router", "tailwindcss", "Axios", "React-Hook-Form", "Zustand"],
        features: ["JWT authentication with access and refresh tokens.", "Spring Security with OAuth2 Resource Server integration.", "Secure HTTP-only cookie-based authentication.", "Automatic access token refresh using Axios interceptors.", "User registration, login, logout, and protected routes.", "Session persistence and revocation backed by MySQL.", "React, TypeScript, Zustand, and Spring Data JPA integration.", "Clean REST APIs with standardized responses and validation."],
        links: { github: "https://github.com/ayushTripathy-o1/UserAuthentication.git" },
        image: UserAuth,
    },
    {
        name: "HLS Video Streaming",
        description: "A video streaming platform that automatically converts uploaded videos into multiple HLS quality variants using FFmpeg. Video processing runs asynchronously in the background, while HLS.js enables adaptive streaming for smooth playback across different network conditions.",
        techStack: ["Java", "Spring Boot", "Spring Data JPA", "Lombok", "Sqlite", "React", "React Router", "Axios", "hls.js", "Flowbite"],
        features: ["Upload videos through REST APIs.", "Asynchronous video processing using Spring Boot.", "Automatic FFmpeg transcoding into multiple resolutions.", "HLS playlist and segment generation for adaptive streaming.", "Browser playback powered by HLS.js.", "Automatic quality switching based on network speed.", "Modular video processing pipeline for scalability.", "Built with Spring Boot, React, and TypeScript for an end-to-end streaming experience."],
        links: { github: "https://github.com/ayushTripathy-o1/Hls-Streaming.git" },
        image: HlsApp,
    },
];

export default projects;
