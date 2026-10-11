import React, { useEffect, useRef } from 'react';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  pulsePhase: number;
}

export const HeroCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    // Mouse coordinates with smooth damping
    const mouse = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
      radius: 140,
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.targetX = -1000;
      mouse.targetY = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
      initNodes();
    };

    window.addEventListener('resize', handleResize, { passive: true });

    // Initialize Nodes
    const nodes: Node[] = [];
    const colors = ['#8B5CF6', '#A78BFA', '#22D3EE', '#67E8F9', '#818CF8'];

    const initNodes = () => {
      nodes.length = 0;
      // Responsive node density
      const count = Math.min(Math.floor((width * height) / 16000), 55);

      for (let i = 0; i < count; i++) {
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.45,
          vy: (Math.random() - 0.5) * 0.45,
          radius: Math.random() * 2 + 1.2,
          color: colors[Math.floor(Math.random() * colors.length)],
          pulsePhase: Math.random() * Math.PI * 2,
        });
      }
    };

    initNodes();

    let time = 0;
    const maxConnectionDistance = 140;

    const render = () => {
      time += 0.015;

      // Smooth mouse follow
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      ctx.clearRect(0, 0, width, height);

      // Background ambient lighting gradients
      const radialViolet = ctx.createRadialGradient(
        width * 0.25,
        height * 0.35,
        10,
        width * 0.25,
        height * 0.35,
        width * 0.5
      );
      radialViolet.addColorStop(0, 'rgba(139, 92, 246, 0.07)');
      radialViolet.addColorStop(1, 'transparent');
      ctx.fillStyle = radialViolet;
      ctx.fillRect(0, 0, width, height);

      const radialCyan = ctx.createRadialGradient(
        width * 0.75,
        height * 0.65,
        10,
        width * 0.75,
        height * 0.65,
        width * 0.5
      );
      radialCyan.addColorStop(0, 'rgba(34, 211, 238, 0.05)');
      radialCyan.addColorStop(1, 'transparent');
      ctx.fillStyle = radialCyan;
      ctx.fillRect(0, 0, width, height);

      // Update and draw connections
      for (let i = 0; i < nodes.length; i++) {
        const nodeA = nodes[i];

        if (!prefersReducedMotion) {
          nodeA.x += nodeA.vx;
          nodeA.y += nodeA.vy;

          // Bounce off boundaries
          if (nodeA.x < 0 || nodeA.x > width) nodeA.vx *= -1;
          if (nodeA.y < 0 || nodeA.y > height) nodeA.vy *= -1;

          // Mouse gentle repulsion / interaction
          const dx = nodeA.x - mouse.x;
          const dy = nodeA.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouse.radius && dist > 0) {
            const force = (1 - dist / mouse.radius) * 0.6;
            nodeA.x += (dx / dist) * force * 2.5;
            nodeA.y += (dy / dist) * force * 2.5;
          }
        }

        // Draw node
        ctx.beginPath();
        const pulse = Math.sin(time + nodeA.pulsePhase) * 0.4 + 1;
        ctx.arc(nodeA.x, nodeA.y, nodeA.radius * pulse, 0, Math.PI * 2);
        ctx.fillStyle = nodeA.color;
        ctx.shadowColor = nodeA.color;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Connect with neighboring nodes
        for (let j = i + 1; j < nodes.length; j++) {
          const nodeB = nodes[j];
          const dx = nodeA.x - nodeB.x;
          const dy = nodeA.y - nodeB.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxConnectionDistance) {
            const alpha = (1 - dist / maxConnectionDistance) * 0.28;
            ctx.beginPath();
            ctx.moveTo(nodeA.x, nodeA.y);
            ctx.lineTo(nodeB.x, nodeB.y);

            // Subtle gradient line between nodes
            const strokeGrad = ctx.createLinearGradient(nodeA.x, nodeA.y, nodeB.x, nodeB.y);
            strokeGrad.addColorStop(0, `rgba(139, 92, 246, ${alpha})`);
            strokeGrad.addColorStop(1, `rgba(34, 211, 238, ${alpha})`);
            ctx.strokeStyle = strokeGrad;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none w-full h-full z-0 opacity-80"
      aria-hidden="true"
    />
  );
};
