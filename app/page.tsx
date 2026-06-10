'use client';

import Link from "next/link";
import Marquee from "./components/Marquee";
import { useEffect, useRef, useState } from "react";

function useReveal() {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.1 });
        obs.observe(el);
        return () => obs.disconnect();
    }, []);
    return { ref, visible };
}

function AnimatedCounter({ value, label }: { value: string; label: string }) {
    const { ref, visible } = useReveal();
    return (
        <div ref={ref} className={`text-center p-4 sm:p-6 ${visible ? 'animate-reveal-up' : 'opacity-0'}`}>
            <div className="text-3xl sm:text-5xl md:text-6xl font-black gradient-text-animated" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{value}</div>
            <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-500 uppercase tracking-[0.2em] mt-2 font-medium">{label}</div>
        </div>
    );
}

export default function Home() {
    const aboutRef = useReveal();
    const servicesRef = useReveal();
    const projectsRef = useReveal();

    return (
        <>
            {/* ── HERO ── Full viewport, cinematic */}
            <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 relative">
                {/* Decorative elements */}
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-[120px]" />

                <div className="relative z-10 max-w-5xl animate-fade-in">
                    <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-indigo-400 font-medium mb-6 sm:mb-8 animate-text-reveal">
                        AI Solutions • Data Insights • Web Dev
                    </p>

                    <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black leading-[0.9] tracking-tight mb-6 sm:mb-8" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        <span className="text-slate-800 dark:text-white block">I BUILD</span>
                        <span className="gradient-text-animated block mt-1 sm:mt-2">INTELLIGENT</span>
                        <span className="text-slate-800 dark:text-white block mt-1 sm:mt-2">SYSTEMS</span>
                    </h1>

                    <p className="text-base sm:text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto mb-8 sm:mb-12 leading-relaxed animate-fade-in" style={{ animationDelay: '0.3s' }}>
                        Bridging the gap between raw data and actionable intelligence through
                        machine learning, AI automation, and data-driven web applications.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in pb-8 sm:pb-16" style={{ animationDelay: '0.5s' }}>
                        <Link href="/projects" className="group px-8 py-4 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-indigo-500/25 hover:shadow-xl flex items-center justify-center gap-2 no-underline">
                            View My Work
                            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                        </Link>
                        <Link href="/contact" className="px-8 py-4 border border-slate-300 dark:border-white/10 text-slate-700 dark:text-slate-300 font-semibold rounded-xl hover:bg-slate-50 dark:hover:bg-[#15151a] bg-white dark:bg-[#0f0f13] hover:border-indigo-500/30 transition-all duration-300 flex items-center justify-center no-underline shadow-sm dark:shadow-none">
                            Let&apos;s Connect
                        </Link>
                    </div>
                </div>


            </section>

            {/* ── MARQUEE ── */}
            <Marquee />

            {/* ── STATS ── */}
            <section className="py-12 sm:py-20">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
                    <AnimatedCounter value="15+" label="Data Projects" />
                    <AnimatedCounter value="10+" label="ML Models" />
                    <AnimatedCounter value="13+" label="Certifications" />
                    <AnimatedCounter value="3+" label="Internships" />
                </div>
                <div className="section-divider max-w-4xl mx-auto mt-12 sm:mt-20" />
            </section>

            {/* ── ABOUT ── */}
            <section className="py-16 sm:py-24">
                <div ref={aboutRef.ref} className={`max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-16 items-start ${aboutRef.visible ? 'animate-reveal-up' : 'opacity-0'}`}>
                    <div>
                        <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-indigo-400 font-medium mb-4">About Me</p>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-800 dark:text-white leading-tight mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                            Turning Data Into <span className="gradient-text">Intelligence</span>
                        </h2>
                        <div className="accent-line w-16 mb-6" />
                        <div className="space-y-4 text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                            <p>I am a driven MCA student specializing in Data Science, Machine Learning, and Generative AI. My journey began with a BCA where I developed a strong foundation in programming, before moving into predictive modeling and data visualization.</p>
                            <p>Whether it&apos;s building a Random Forest model to predict heart disease or creating interactive analytical dashboards in Python and Power BI, I love turning complex datasets into accessible insights.</p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        {[
                            { icon: "🎓", title: "Education", desc: "MCA — Sardar Vallabhbhai Global University" },
                            { icon: "📍", title: "Location", desc: "Ahmedabad, Gujarat, India" },
                            { icon: "💼", title: "Status", desc: "Open for Internships & Freelance" },
                            { icon: "🔬", title: "Focus", desc: "ML, Generative AI, Data Engineering" },
                        ].map((item, i) => (
                            <div key={i} className="glass-card rounded-xl p-4 sm:p-5 flex items-start gap-4 group" style={{ animationDelay: `${i * 0.1}s` }}>
                                <span className="text-2xl shrink-0">{item.icon}</span>
                                <div>
                                    <h4 className="font-semibold text-slate-800 dark:text-white text-sm sm:text-base">{item.title}</h4>
                                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">{item.desc}</p>
                                </div>
                            </div>
                        ))}

                        <a href="/resume.pdf" download className="glass-card rounded-xl p-4 sm:p-5 flex items-center justify-center gap-2 text-indigo-400 font-semibold hover:text-indigo-300 no-underline group text-sm sm:text-base">
                            Download Resume
                            <span className="transition-transform group-hover:translate-x-1">→</span>
                        </a>
                    </div>
                </div>
            </section>

            <div className="section-divider max-w-4xl mx-auto" />

            {/* ── WHAT I DO ── */}
            <section className="py-16 sm:py-24">
                <div ref={servicesRef.ref} className={`max-w-6xl mx-auto px-4 sm:px-6 ${servicesRef.visible ? 'animate-reveal-up' : 'opacity-0'}`}>
                    <div className="text-center mb-10 sm:mb-16">
                        <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-indigo-400 font-medium mb-4">What I Do</p>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-800 dark:text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                            Core <span className="gradient-text">Capabilities</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                        {[
                            { icon: "📊", title: "Data Analysis", desc: "Exploring, cleaning, and visualizing complex datasets with Python, Pandas, and modern BI tools." },
                            { icon: "🤖", title: "Machine Learning", desc: "Designing and training ML models for classification, prediction, and intelligent automation." },
                            { icon: "🌐", title: "AI Web Apps", desc: "Building interactive interfaces with Flask and Streamlit that let users interact with ML models." },
                            { icon: "⚡", title: "AI Automation", desc: "Creating smart automation pipelines connecting APIs, LLMs, and tools to eliminate manual work." },
                        ].map((item, i) => (
                            <div key={i} className="glass-card rounded-2xl p-5 sm:p-7 group" style={{ animationDelay: `${i * 0.1}s` }}>
                                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-indigo-500/10 flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                                <h3 className="text-base sm:text-lg font-bold text-slate-800 dark:text-white mb-2 group-hover:text-indigo-400 transition-colors">{item.title}</h3>
                                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <div className="section-divider max-w-4xl mx-auto" />

            {/* ── SELECTED PROJECTS ── */}
            <section className="py-16 sm:py-24">
                <div ref={projectsRef.ref} className={`max-w-6xl mx-auto px-4 sm:px-6 ${projectsRef.visible ? 'animate-reveal-up' : 'opacity-0'}`}>
                    <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-10 sm:mb-16 gap-4">
                        <div>
                            <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-indigo-400 font-medium mb-4">Portfolio</p>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-800 dark:text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                                Selected <span className="gradient-text">Projects</span>
                            </h2>
                        </div>
                        <Link href="/projects" className="text-sm font-medium text-indigo-400 hover:text-indigo-300 no-underline flex items-center gap-1 group transition-colors">
                            View All 18 Projects <span className="transition-transform group-hover:translate-x-1">→</span>
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                        {[
                            { title: "ProjectMind AI", desc: "Agentic AI tool generating academic blueprints with Dual Mode (Local Ollama & Cloud Gemini API).", tags: ["LangChain", "Ollama", "Gemini"], gradient: "from-cyan-500/20 to-blue-500/20", link: "/projects/p1" },
                            { title: "Heart Disease Prediction", desc: "ML model with 95% accuracy for cardiovascular risk assessment via Flask/Streamlit.", tags: ["ML", "Flask"], gradient: "from-rose-500/20 to-pink-500/20", link: "/projects/p16" },
                            { title: "GoneSpotter — Change Detection", desc: "Intelligent tool that highlights missing objects from before-and-after photos.", tags: ["OpenCV", "Vision"], gradient: "from-violet-500/20 to-purple-500/20", link: "/projects/p6" },
                            { title: "Student Performance Analysis", desc: "Compared 7 regression models to predict student outcomes with full EDA pipeline.", tags: ["EDA", "Scikit"], gradient: "from-amber-500/20 to-orange-500/20", link: "/projects/p4" },
                            { title: "StreamAura2.O", desc: "Modern movie streaming platform with an immersive UI and seamless user experience.", tags: ["Web", "UI/UX", "Next.js"], gradient: "from-emerald-500/20 to-teal-500/20", link: "/projects/p18" },
                            { title: "n8n Feedback Automation", desc: "Automated workflow: feedback capture → Slack notify → Airtable → email confirmation.", tags: ["n8n", "AI"], gradient: "from-blue-500/20 to-indigo-500/20", link: "/projects/p10" },
                        ].map((project, i) => (
                            <a href={project.link || undefined} target={project.link?.startsWith('http') ? "_blank" : undefined} rel={project.link?.startsWith('http') ? "noopener noreferrer" : undefined} key={i} className={`glass-card rounded-2xl overflow-hidden group ${project.link ? 'cursor-pointer hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/20' : 'cursor-default'} transition-all duration-300 block no-underline`} style={{ animationDelay: `${i * 0.08}s` }}>
                                <div className={`h-28 sm:h-36 bg-gradient-to-br ${project.gradient} dark:${project.gradient} flex items-center justify-center relative`}>
                                    <div className="absolute inset-0 bg-gradient-to-t from-white/80 dark:from-[#0a0a0f]/80 to-transparent" />
                                </div>
                                <div className="p-4 sm:p-6 -mt-6 relative">
                                    <h3 className="text-base sm:text-lg font-bold text-slate-800 dark:text-white mb-2 group-hover:text-indigo-400 transition-colors">{project.title}</h3>
                                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-4 leading-relaxed">{project.desc}</p>
                                    <div className="flex gap-2">
                                        {project.tags.map(t => (
                                            <span key={t} className="text-[10px] sm:text-xs px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 font-medium">{t}</span>
                                        ))}
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="py-16 sm:py-24">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-800 dark:text-white mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        Let&apos;s Build Something <span className="gradient-text">Together</span>
                    </h2>
                    <p className="text-base sm:text-lg text-slate-500 dark:text-slate-400 mb-8 sm:mb-10 max-w-xl mx-auto">
                        I&apos;m open for internships, freelance projects, and collaborations in Data Science and AI.
                    </p>
                    <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-xl transition-all shadow-lg hover:shadow-indigo-500/25 no-underline group">
                        Get In Touch <span className="transition-transform group-hover:translate-x-1">→</span>
                    </Link>
                </div>
            </section>
        </>
    );
}
