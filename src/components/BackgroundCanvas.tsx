import { useEffect, useRef } from "react";

type Particle = {
    x: number;
    y: number;
    vx: number;
    vy: number;
};

const MAX_DISTANCE = 140;
const DOT_RADIUS = 2;

const getParticleCount = (width: number) => {
    if (width < 640) return 35;      // Mobile
    if (width < 768) return 50;      // Large phones
    if (width < 1024) return 80;     // Tablets
    return 120;                      // Desktop
};

const BackgroundCanvas = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let width = 0;
        let height = 0;
        let animationFrame = 0;

        const particles: Particle[] = [];

        const createParticles = () => {
            particles.length = 0;

            const particleCount = getParticleCount(width);

            for (let i = 0; i < particleCount; i++) {
                const angle = Math.random() * Math.PI * 2;
                const speed = 0.3 + Math.random() * 0.6;

                particles.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    vx: Math.cos(angle) * speed,
                    vy: Math.sin(angle) * speed,
                });
            }
        };

        const resize = () => {
            width = window.innerWidth;
            height = window.innerHeight;

            const dpr = window.devicePixelRatio || 1;

            canvas.width = width * dpr;
            canvas.height = height * dpr;

            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;

            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

            createParticles();
        };

        const animate = () => {
            ctx.clearRect(0, 0, width, height);

            // Move particles
            for (const p of particles) {
                p.x += p.vx;
                p.y += p.vy;

                if (p.x <= 0 || p.x >= width) p.vx *= -1;
                if (p.y <= 0 || p.y >= height) p.vy *= -1;
            }

            // Draw connections
            for (let i = 0; i < particles.length; i++) {
                const a = particles[i];

                for (let j = i + 1; j < particles.length; j++) {
                    const b = particles[j];

                    const dx = a.x - b.x;
                    const dy = a.y - b.y;

                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < MAX_DISTANCE) {
                        const opacity =
                            (1 - distance / MAX_DISTANCE) * 0.35;

                        ctx.beginPath();
                        ctx.moveTo(a.x, a.y);
                        ctx.lineTo(b.x, b.y);
                        ctx.strokeStyle = `rgba(255,255,255,${opacity})`;
                        ctx.lineWidth = 1;
                        ctx.stroke();
                    }
                }
            }

            // Draw dots
            ctx.fillStyle = "rgba(255,255,255,0.9)";

            for (const p of particles) {
                ctx.beginPath();
                ctx.arc(p.x, p.y, DOT_RADIUS, 0, Math.PI * 2);
                ctx.fill();
            }

            animationFrame = requestAnimationFrame(animate);
        };

        resize();
        animate();

        window.addEventListener("resize", resize);

        return () => {
            cancelAnimationFrame(animationFrame);
            window.removeEventListener("resize", resize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-0 pointer-events-none"
        />
    );
};

export default BackgroundCanvas;
