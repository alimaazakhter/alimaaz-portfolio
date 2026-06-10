'use client';

import React, { useEffect, useRef } from 'react';

export default function AnimatedBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animId: number;
        let w = window.innerWidth;
        let h = window.innerHeight;
        
        let mx = -1000;
        let my = -1000;
        let targetMx = -1000;
        let targetMy = -1000;

        const resize = () => { 
            w = window.innerWidth; 
            h = window.innerHeight; 
            canvas.width = w; 
            canvas.height = h; 
        };
        resize();

        const isDark = () => document.documentElement.classList.contains('dark');

        const onMouseMove = (e: MouseEvent) => {
            targetMx = e.clientX;
            targetMy = e.clientY;
        };
        
        const onMouseLeave = () => {
            targetMx = -1000;
            targetMy = -1000;
        };

        window.addEventListener('mousemove', onMouseMove);
        document.documentElement.addEventListener('mouseleave', onMouseLeave);

        // Subtle gradient orbs for depth
        interface Orb { x: number; y: number; r: number; sx: number; sy: number; color: string; }
        const orbs: Orb[] = [
            { x: w * 0.2, y: h * 0.3, r: w * 0.4, sx: 0.3, sy: 0.2, color: '129, 140, 248' }, // Indigo
            { x: w * 0.8, y: h * 0.7, r: w * 0.35, sx: -0.2, sy: 0.3, color: '167, 139, 250' }, // Purple
            { x: w * 0.5, y: h * 0.5, r: w * 0.5, sx: 0.1, sy: -0.2, color: '56, 189, 248' }  // Sky
        ];

        let t = 0;

        function animate() {
            t++;
            if (!ctx) return;
            
            // Smooth cursor interpolation
            mx += (targetMx - mx) * 0.1;
            my += (targetMy - my) * 0.1;
            
            ctx.clearRect(0, 0, w, h);
            const dark = isDark();

            // 1. Draw Orbs
            orbs.forEach(o => {
                o.x += o.sx; o.y += o.sy;
                if (o.x < -o.r) o.x = w + o.r; if (o.x > w + o.r) o.x = -o.r;
                if (o.y < -o.r) o.y = h + o.r; if (o.y > h + o.r) o.y = -o.r;
                
                const g = ctx.createRadialGradient(o.x, o.y, 0, o.x, o.y, o.r);
                const op = dark ? 0.05 : 0.03; // Very subtle
                g.addColorStop(0, `rgba(${o.color}, ${op})`);
                g.addColorStop(1, 'transparent');
                ctx.fillStyle = g; 
                ctx.beginPath(); 
                ctx.arc(o.x, o.y, o.r, 0, Math.PI * 2); 
                ctx.fill();
            });

            // 2. Draw Grid and Crosshairs (Aevolve style)
            // Determine cell size based on screen width
            const cols = w > 1024 ? 5 : w > 768 ? 4 : 3;
            const cellSize = w / cols;
            
            ctx.lineWidth = 1;

            // Vertical lines
            for (let x = 0; x <= w + cellSize; x += cellSize) {
                // Calculate distance from mouse to this line
                const dist = Math.abs(mx - x);
                const isHovered = dist < 150;
                // Base opacity + extra opacity if mouse is near
                const baseOp = dark ? 0.03 : 0.03;
                const glowOp = isHovered ? (1 - dist / 150) * 0.1 : 0;
                const alpha = baseOp + glowOp;
                
                ctx.strokeStyle = dark ? `rgba(255, 255, 255, ${alpha})` : `rgba(0, 0, 0, ${alpha})`;
                ctx.beginPath();
                ctx.moveTo(x, 0);
                ctx.lineTo(x, h);
                ctx.stroke();
            }
            
            // Horizontal lines
            for (let y = 0; y <= h + cellSize; y += cellSize) {
                const dist = Math.abs(my - y);
                const isHovered = dist < 150;
                const baseOp = dark ? 0.03 : 0.03;
                const glowOp = isHovered ? (1 - dist / 150) * 0.1 : 0;
                const alpha = baseOp + glowOp;
                
                ctx.strokeStyle = dark ? `rgba(255, 255, 255, ${alpha})` : `rgba(0, 0, 0, ${alpha})`;
                ctx.beginPath();
                ctx.moveTo(0, y);
                ctx.lineTo(w, y);
                ctx.stroke();
            }

            // Crosshairs at intersections
            for (let x = 0; x <= w + cellSize; x += cellSize) {
                for (let y = 0; y <= h + cellSize; y += cellSize) {
                    const dx = mx - x;
                    const dy = my - y;
                    const dist = Math.sqrt(dx*dx + dy*dy);
                    const isNear = dist < 200;
                    
                    const baseOp = dark ? 0.15 : 0.15;
                    const glowOp = isNear ? (1 - dist / 200) * 0.6 : 0;
                    const alpha = baseOp + glowOp;
                    
                    // Crosshairs get slightly larger when hovered
                    const baseSize = 3;
                    const glowSize = isNear ? (1 - dist / 200) * 4 : 0;
                    const size = baseSize + glowSize;
                    
                    ctx.strokeStyle = dark ? `rgba(255, 255, 255, ${alpha})` : `rgba(0, 0, 0, ${alpha})`;
                    ctx.lineWidth = isNear ? 1.5 : 1;
                    
                    ctx.beginPath();
                    ctx.moveTo(x - size, y);
                    ctx.lineTo(x + size, y);
                    ctx.moveTo(x, y - size);
                    ctx.lineTo(x, y + size);
                    ctx.stroke();
                }
            }
            
            // Flashlight gradient overlay following mouse
            if (mx > -500) {
                const glow = ctx.createRadialGradient(mx, my, 0, mx, my, 400);
                glow.addColorStop(0, dark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.02)');
                glow.addColorStop(1, 'transparent');
                ctx.fillStyle = glow;
                ctx.fillRect(0, 0, w, h);
            }

            animId = requestAnimationFrame(animate);
        }
        animate();

        window.addEventListener('resize', resize);
        const ro = new ResizeObserver(resize); 
        ro.observe(document.body);
        
        return () => { 
            cancelAnimationFrame(animId); 
            window.removeEventListener('resize', resize); 
            window.removeEventListener('mousemove', onMouseMove);
            document.documentElement.removeEventListener('mouseleave', onMouseLeave);
            ro.disconnect(); 
        };
    }, []);

    return <canvas ref={canvasRef} className="fixed inset-0 w-full h-full pointer-events-none z-0" aria-hidden="true" />;
}
