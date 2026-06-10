'use client';

import React, { useEffect, useRef } from 'react';

export default function CursorGlow() {
    const glowRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const glow = glowRef.current;
        if (!glow) return;
        const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        if (isTouch) { glow.style.display = 'none'; return; }

        let mx = -200, my = -200, cx = -200, cy = -200;
        const onMove = (e: MouseEvent) => { mx = e.clientX; my = e.clientY; };
        const onLeave = () => { mx = -200; my = -200; };

        function tick() {
            cx += (mx - cx) * 0.12; cy += (my - cy) * 0.12;
            if (glow) glow.style.transform = `translate(${cx - 150}px, ${cy - 150}px)`;
            requestAnimationFrame(tick);
        }
        window.addEventListener('mousemove', onMove);
        document.addEventListener('mouseleave', onLeave);
        tick();
        return () => { window.removeEventListener('mousemove', onMove); document.removeEventListener('mouseleave', onLeave); };
    }, []);

    return (
        <div ref={glowRef} className="fixed top-0 left-0 w-[300px] h-[300px] rounded-full pointer-events-none z-[1] opacity-20 dark:opacity-15 mix-blend-multiply dark:mix-blend-screen blur-[80px]" style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.4) 0%, rgba(139,92,246,0.2) 40%, transparent 70%)', willChange: 'transform' }} aria-hidden="true" />
    );
}
