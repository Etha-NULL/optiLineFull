import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D | null;
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create particles
    const createParticles = (x: number, y: number, count: number) => {
      for (let i = 0; i < count; i++) {
        const angle = (Math.random() * Math.PI * 2);
        const velocity = 1 + Math.random() * 3;
        particlesRef.current.push({
          x,
          y,
          vx: Math.cos(angle) * velocity,
          vy: Math.sin(angle) * velocity,
          life: 1,
          maxLife: 2 + Math.random() * 1,
          size: 1 + Math.random() * 2,
        });
      }
    };

    // Animation loop
    const animate = () => {
      // Clear canvas with semi-transparent background for trail effect
      ctx.fillStyle = 'rgba(13, 13, 13, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particlesRef.current = particlesRef.current.filter((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life -= 1 / 60; // Assuming 60fps

        if (particle.life > 0) {
          // Draw particle with orange color
          const opacity = Math.max(0, particle.life / particle.maxLife);
          ctx.fillStyle = `rgba(255, 107, 53, ${opacity * 0.8})`;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fill();

          // Draw glow
          ctx.strokeStyle = `rgba(255, 107, 53, ${opacity * 0.3})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size + 2, 0, Math.PI * 2);
          ctx.stroke();

          return true;
        }
        return false;
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    // Create particles periodically
    const particleInterval = setInterval(() => {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height * 0.3; // Spawn in top third
      createParticles(x, y, 3 + Math.floor(Math.random() * 3));
    }, 200);

    animate();

    return () => {
      clearInterval(particleInterval);
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}
