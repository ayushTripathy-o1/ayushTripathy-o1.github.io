import { useEffect, useRef } from "react";

interface Particle {
    x: number;
    y: number;
    radius: number;
    color: string;
}

const COLORS = ["#2185C5", "#7ECEFD", "#FFF6E5", "#FF7F66"];

const PARTICLE_COUNT = 500;
const ROTATION_SPEED = 0.001;

const BackgroundCanvas = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const c = canvas.getContext("2d");
        if (!c) return;

        let width = 0;
        let height = 0;
        let radians = 0;
        let alpha = 1;
        let mouseDown = false;
        let animationFrame = 0;

        const particles: Particle[] = [];

        const resize = () => {
            width = window.innerWidth;
            height = window.innerHeight;

            const dpr = window.devicePixelRatio || 1;

            canvas.width = width * dpr;
            canvas.height = height * dpr;

            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;

            c.setTransform(dpr, 0, 0, dpr, 0, 0);

            init();
        };

        const init = () => {
            particles.length = 0;

            const canvasWidth = width + 1000;
            const canvasHeight = height + 2000;

            for (let i = 0; i < PARTICLE_COUNT; i++) {
                const x =
                    Math.random() * canvasWidth -
                    canvasWidth / 2;

                const y =
                    Math.random() * canvasHeight -
                    canvasHeight / 2;

                const radius = 2 * Math.random();

                const color =
                    COLORS[
                    Math.floor(
                        Math.random() * COLORS.length
                    )
                    ];

                particles.push({
                    x,
                    y,
                    radius,
                    color,
                });
            }
        };

        const drawParticle = (particle: Particle) => {
            c.beginPath();

            c.arc(
                particle.x,
                particle.y,
                particle.radius,
                0,
                Math.PI * 2
            );

            c.shadowColor = particle.color;
            c.shadowBlur = 15;

            c.fillStyle = particle.color;
            c.fill();

            c.closePath();
        };

        const animate = () => {
            animationFrame = requestAnimationFrame(animate);

            c.fillStyle = `rgba(26, 25, 25, ${alpha})`;
            c.fillRect(0, 0, width, height);

            c.save();

            c.translate(width / 2, height / 2);
            c.rotate(radians);

            for (const particle of particles) {
                drawParticle(particle);
            }

            c.restore();

            // Reset shadow state
            c.shadowBlur = 0;

            radians += ROTATION_SPEED;

            if (mouseDown && alpha >= 0.03) {
                alpha -= 0.01;
            } else if (!mouseDown && alpha < 1) {
                alpha += 0.01;
            }
        };

        const handleMouseDown = () => {
            mouseDown = true;
        };

        const handleMouseUp = () => {
            mouseDown = false;
        };

        window.addEventListener("resize", resize);
        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);

        resize();
        animate();

        return () => {
            cancelAnimationFrame(animationFrame);

            window.removeEventListener("resize", resize);
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseup", handleMouseUp);
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
