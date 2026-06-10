"use client";

import React, { useState, useEffect, useRef } from 'react';

import { Project, Category as Cat, projects } from '@/lib/data';

const gradients: Record<string, string> = { ml: "from-purple-500/30 to-blue-500/30", ai: "from-cyan-500/30 to-blue-600/30", data: "from-orange-500/30 to-amber-500/30", web: "from-emerald-500/30 to-teal-500/30" };
const glows: Record<string, string> = { ml: "hover:border-purple-500/30", ai: "hover:border-cyan-500/30", data: "hover:border-amber-500/30", web: "hover:border-emerald-500/30" };

function useReveal() {
    const ref = useRef<HTMLDivElement>(null);
    const [v, setV] = useState(false);
    useEffect(() => { const el = ref.current; if (!el) return; const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setV(true); o.disconnect(); } }, { threshold: 0.05 }); o.observe(el); return () => o.disconnect(); }, []);
    return { ref, v };
}

function Card({ project, index }: { project: Project; index: number }) {
    const { ref, v } = useReveal();
    return (
        <a href={`/projects/${project.id}`} ref={ref as any} className={`group flex flex-col glass-card rounded-2xl overflow-hidden ${glows[project.category] || ''} cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${v ? 'animate-reveal-up' : 'opacity-0'}`} style={{ animationDelay: `${index * 0.06}s`, textDecoration: 'none' }}>
            <div className="h-28 sm:h-36 relative overflow-hidden bg-slate-900/10 dark:bg-slate-900/50 flex items-center justify-center">
                {project.thumbnail ? (
                    <img 
                        src={project.thumbnail} 
                        alt={project.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                    />
                ) : (
                    <div className={`w-full h-full gradient-shimmer gradient-animate bg-gradient-to-br ${gradients[project.category]} flex items-center justify-center`}>
                        <span className="emoji-float text-3xl sm:text-5xl drop-shadow-lg select-none">{project.emoji}</span>
                    </div>
                )}
                <span className="absolute top-3 right-3 text-[10px] font-bold uppercase tracking-wider bg-slate-950/60 backdrop-blur-md text-white/90 px-3 py-1 rounded-full border border-white/10 z-10">
                    {project.category === 'ml' ? 'ML' : project.category === 'ai' ? 'AI' : project.category === 'data' ? 'Data' : 'Web'}
                </span>
            </div>
            <div className="p-4 sm:p-6 flex-1 flex flex-col relative">
                <div className={`absolute top-0 left-4 right-4 h-[1px] bg-gradient-to-r ${gradients[project.category]} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <h3 className="text-base sm:text-lg font-bold text-slate-800 dark:text-white mb-2 group-hover:text-indigo-400 transition-colors">{project.title}</h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-4 flex-1 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-auto">
                    {project.tags.map(t => <span key={t} className="tag-hover text-[10px] sm:text-xs font-medium px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-transparent hover:border-indigo-500/30 cursor-default">{t}</span>)}
                </div>
            </div>
        </a>
    );
}

export default function Projects() {
    const [filter, setFilter] = useState<Cat>('all');
    const filtered = projects.filter(p => filter === 'all' || p.category === filter);
    const tabs = [{ id: 'all', label: 'All Projects', icon: '🗂️' }, { id: 'ml', label: 'Machine Learning', icon: '🧠' }, { id: 'ai', label: 'AI & Automation', icon: '🤖' }, { id: 'data', label: 'Data & Dashboards', icon: '📊' }, { id: 'web', label: 'Web Applications', icon: '🌐' }];

    return (
        <div className="pt-24 sm:pt-32 pb-16 sm:pb-24">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-10 sm:mb-16 animate-fade-in">
                <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-indigo-400 font-medium mb-4">Portfolio</p>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-800 dark:text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    All <span className="gradient-text">Projects</span>
                </h1>
                <div className="accent-line w-20 mt-6" />
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8 animate-fade-in" style={{ animationDelay: '0.15s' }}>
                    {tabs.map(t => (
                        <button key={t.id} onClick={() => setFilter(t.id as Cat)} className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer flex items-center gap-1.5 ${filter === t.id ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/25 tab-active' : 'bg-white/5 dark:bg-white/5 border border-slate-200/20 dark:border-white/10 text-slate-500 dark:text-slate-400 hover:border-indigo-500/30 hover:text-indigo-400'}`}>
                            <span className="text-sm">{t.icon}</span>{t.label}
                        </button>
                    ))}
                </div>

                <p className="text-sm text-slate-500 dark:text-slate-500 mb-8 animate-count-fade" key={filter}>
                    Showing <span className="font-bold text-indigo-400">{filtered.length}</span> of {projects.length}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {filtered.map((p, i) => <Card key={p.id} project={p} index={i} />)}
                </div>
            </div>
        </div>
    );
}
