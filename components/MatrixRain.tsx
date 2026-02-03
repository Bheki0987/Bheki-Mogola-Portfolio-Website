
import React, { useEffect, useRef } from 'react';

const MatrixRain: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const columns = Math.floor(width / 15);
    const drops: number[] = [];

    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100;
    }

    // Binary Data Stream for Analyst vibe
    const chars = '01';

    const draw = () => {
      // Fade effect with black
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'; 
      ctx.fillRect(0, 0, width, height);

      ctx.font = '12px monospace';

      for (let i = 0; i < drops.length; i++) {
        const text = chars.charAt(Math.floor(Math.random() * chars.length));
        
        // Shades of gray/white for depth - no green/purple
        const brightness = Math.random();
        if (brightness > 0.98) {
            ctx.fillStyle = '#ffffff'; // Bright data packet
        } else if (brightness > 0.9) {
            ctx.fillStyle = '#888888'; // Mid gray
        } else {
            ctx.fillStyle = '#333333'; // Dark gray background noise
        }

        ctx.fillText(text, i * 15, drops[i] * 15);

        if (drops[i] * 15 > height && Math.random() > 0.98) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 50);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 opacity-30 pointer-events-none"
    />
  );
};

export default MatrixRain;
