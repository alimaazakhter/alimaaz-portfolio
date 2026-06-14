'use client';

import { useEffect, useRef, useState } from "react";
import { GraduationCap, Code2, Rocket, Award } from "lucide-react";

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

export default function Profile() {
    const eduRef = useReveal();
    const projRef = useReveal();
    const certRef = useReveal();
    const skillRef = useReveal();

    const skills = ['Python', 'Machine Learning', 'Data Analysis', 'Web Development', 'Scikit-Learn', 'Pandas', 'NumPy', 'SQL', 'Power BI', 'Streamlit', 'Flask', 'Generative AI', 'OpenCV', 'NLP', 'LLMs', 'n8n', 'React', 'Next.js', 'Git'];

    return (
        <div className="pt-24 sm:pt-32 pb-16 sm:pb-24">
            {/* Header */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-12 sm:mb-20 animate-fade-in">
                <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-indigo-400 font-medium mb-4">Profile</p>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-800 dark:text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    My <span className="gradient-text">Background</span>
                </h1>
                <div className="accent-line w-20 mt-6" />
            </div>

            {/* Education */}
            <section className="py-12 sm:py-16">
                <div ref={eduRef.ref} className={`max-w-6xl mx-auto px-4 sm:px-6 ${eduRef.visible ? 'animate-reveal-up' : 'opacity-0'}`}>
                    <h2 className="text-2xl sm:text-3xl font-black text-slate-800 dark:text-white mb-8 sm:mb-10 flex items-center gap-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        <GraduationCap className="w-7 h-7 text-indigo-400 shrink-0" strokeWidth={1.5} /> Academic Journey
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                        {[
                            { degree: "Master of Computer Applications", short: "MCA", institution: "Sardar Vallabhbhai Global University (SVGU), Ahmedabad", years: "2025 — 2027", detail: "Focus on advanced ML/AI and Generative AI applications", current: true },
                            { degree: "Bachelor of Computer Applications", short: "BCA", institution: "Rai School of Engineering (RU), Ahmedabad", years: "2022 — 2025", detail: "CGPA: 8.58/10 — Strong foundation in programming and data concepts", current: false },
                        ].map((edu, i) => (
                            <div key={i} className="glass-card rounded-2xl p-6 sm:p-8 relative overflow-hidden group">
                                {edu.current && <div className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-wider bg-indigo-500/20 text-indigo-400 px-3 py-1 rounded-full">Current</div>}
                                <span className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-400 mb-2 block">{edu.short}</span>
                                <h3 className="text-lg sm:text-xl font-bold text-slate-800 dark:text-white mb-1">{edu.degree}</h3>
                                <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">{edu.institution}</p>
                                <div className="flex items-center gap-2 text-xs text-slate-400 dark:text-slate-500 mb-3">
                                    <span>{edu.years}</span>
                                </div>
                                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">{edu.detail}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <div className="section-divider max-w-4xl mx-auto" />

            {/* Skills */}
            <section className="py-12 sm:py-16">
                <div ref={skillRef.ref} className={`max-w-6xl mx-auto px-4 sm:px-6 ${skillRef.visible ? 'animate-reveal-up' : 'opacity-0'}`}>
                    <h2 className="text-2xl sm:text-3xl font-black text-slate-800 dark:text-white mb-8 sm:mb-10 flex items-center gap-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        <Code2 className="w-7 h-7 text-indigo-400 shrink-0" strokeWidth={1.5} /> Tech Stack
                    </h2>
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                        {skills.map((skill, i) => (
                            <span key={skill} className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium bg-white/5 dark:bg-white/5 border border-slate-200/20 dark:border-white/10 text-slate-600 dark:text-slate-300 hover:border-indigo-500/40 hover:text-indigo-400 hover:bg-indigo-500/5 transition-all duration-300 cursor-default" style={{ animationDelay: `${i * 0.03}s` }}>
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            <div className="section-divider max-w-4xl mx-auto" />

            {/* Key Projects */}
            <section className="py-12 sm:py-16">
                <div ref={projRef.ref} className={`max-w-6xl mx-auto px-4 sm:px-6 ${projRef.visible ? 'animate-reveal-up' : 'opacity-0'}`}>
                    <h2 className="text-2xl sm:text-3xl font-black text-slate-800 dark:text-white mb-8 sm:mb-10 flex items-center gap-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        <Rocket className="w-7 h-7 text-indigo-400 shrink-0" strokeWidth={1.5} /> Key Projects
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                        {[
                            { title: "Heart Disease Prediction", desc: "ML model to predict cardiovascular risk. Flask web app for real-time predictions.", tag: "ML + Streamlit" },
                            { title: "GLR Pipeline Automation", desc: "Automates insurance template filling using OCR, OpenCV, and LLMs via Streamlit.", tag: "OCR + Python" },
                            { title: "Banking Risk Analysis", desc: "Analyzed large-scale banking data. Visualized insights using Power BI dashboards.", tag: "Pandas + Power BI" },
                        ].map((proj, i) => (
                            <div key={i} className="glass-card rounded-2xl p-5 sm:p-7 group">
                                <h4 className="font-bold text-slate-800 dark:text-white mb-2 group-hover:text-indigo-400 transition-colors text-sm sm:text-base">{proj.title}</h4>
                                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-4 leading-relaxed">{proj.desc}</p>
                                <span className="text-[10px] sm:text-xs px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 font-medium">{proj.tag}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <div className="section-divider max-w-4xl mx-auto" />

            {/* Certifications */}
            <section className="py-12 sm:py-16">
                <div ref={certRef.ref} className={`max-w-6xl mx-auto px-4 sm:px-6 ${certRef.visible ? 'animate-reveal-up' : 'opacity-0'}`}>
                    <h2 className="text-2xl sm:text-3xl font-black text-slate-800 dark:text-white mb-8 sm:mb-10 flex items-center gap-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        <Award className="w-7 h-7 text-indigo-400 shrink-0" strokeWidth={1.5} /> Certifications
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                        {[
                            { title: "Introduction to RAG (AI/LLM)", org: "IBM, SkillsBuild", date: "Sept 2025", link: "/ACHIVEMENTS/IBM skillBuild Certification.jpg" },
                            { title: "Gemini for Google Workspace", org: "Google Cloud, Skillup", date: "Aug 2025", link: "/ACHIVEMENTS/Gemeni for google workspace certifcate.jpeg" },
                            { title: "Intro to Generative AI Studio", org: "Google Cloud", date: "June 2025", link: "/ACHIVEMENTS/GOOGLE.jpg" },
                            { title: "Tata Data Visualization", org: "Forage", date: "Feb 2025", link: "/ACHIVEMENTS/Tata Data Visualisation Certificate.png" },
                        ].map((cert, i) => (
                            <a key={i} href={cert.link} target="_blank" rel="noopener noreferrer" className="glass-card rounded-xl p-4 sm:p-5 flex items-start gap-4 group hover:border-indigo-500/50 hover:bg-white/5 dark:hover:bg-white/5 transition-all duration-300 cursor-pointer no-underline block">
                                <div className="w-2 h-2 mt-2 rounded-full bg-indigo-400 shrink-0 group-hover:scale-150 group-hover:shadow-[0_0_10px_rgba(99,102,241,0.8)] transition-all duration-300" />
                                <div>
                                    <h4 className="font-semibold text-slate-800 dark:text-white text-sm sm:text-base group-hover:text-indigo-400 transition-colors">{cert.title}</h4>
                                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">{cert.org} — {cert.date}</p>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
