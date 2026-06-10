"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

interface Certificate {
    id: string;
    title: string;
    issuer: string;
    date: string;
    description: string;
    credentialLink: string;
}

const certificates: Certificate[] = [
    { 
        id: "c3", 
        title: "Google Certification", 
        issuer: "Google", 
        date: "2025", 
        description: "Official certification from Google demonstrating proficiency in their ecosystem and tools.",
        credentialLink: "/ACHIVEMENTS/GOOGLE.jpg" 
    },
    { 
        id: "c2", 
        title: "IBM SkillBuild Certification", 
        issuer: "IBM", 
        date: "2025", 
        description: "Demonstrates core competencies in emerging technologies and professional skills via IBM's platform.",
        credentialLink: "/ACHIVEMENTS/IBM skillBuild Certification.jpg" 
    },
    { 
        id: "c1", 
        title: "Gemini for Google Workspace", 
        issuer: "Google", 
        date: "2025", 
        description: "Earned certification for mastering Gemini AI tools within Google Workspace to automate and enhance productivity.",
        credentialLink: "/ACHIVEMENTS/Gemeni for google workspace certifcate.jpeg" 
    },
    { 
        id: "c10", 
        title: "Tata Data Visualisation", 
        issuer: "Tata", 
        date: "2025", 
        description: "Completed an extensive program on Data Visualisation to uncover business insights using advanced tools.",
        credentialLink: "/ACHIVEMENTS/Tata Data Visualisation Certificate.png" 
    },
    { 
        id: "c5", 
        title: "Internship Completion", 
        issuer: "TechNest", 
        date: "2025", 
        description: "Awarded for the successful completion of a rigorous internship, delivering impactful projects and code.",
        credentialLink: "/ACHIVEMENTS/Internship Completetion Certificatie.jpg" 
    },
    { 
        id: "c4", 
        title: "AI-Powered Marketing Data Analytics", 
        issuer: "Workshop", 
        date: "2025", 
        description: "Completed an intensive program on leveraging AI to drive marketing analytics and data-driven decisions.",
        credentialLink: "/ACHIVEMENTS/AI-Powered Marketing Data Analytics Certificate.jpg" 
    },
    { 
        id: "c7", 
        title: "Letter of Recommendation 1", 
        issuer: "TechNest", 
        date: "2025", 
        description: "A strong endorsement highlighting my problem-solving abilities, dedication, and professional conduct.",
        credentialLink: "/ACHIVEMENTS/Letter of Recommendation.jpg" 
    },
    { 
        id: "c8", 
        title: "Letter of Recommendation 2", 
        issuer: "Professional Reference", 
        date: "2025", 
        description: "Secondary recommendation emphasizing strong technical proficiency and collaborative teamwork skills.",
        credentialLink: "/ACHIVEMENTS/LOR.jpg" 
    },
    { 
        id: "c9", 
        title: "Certification of Completion", 
        issuer: "Professional Program", 
        date: "2025", 
        description: "Awarded for successful completion of a comprehensive professional training and skill development program.",
        credentialLink: "/ACHIVEMENTS/Certification of Completion.jpg" 
    },
    { 
        id: "c11", 
        title: "Data Analytics with Tableau", 
        issuer: "Tableau", 
        date: "2024", 
        description: "Mastered data visualization and analytics techniques using Tableau to create interactive business dashboards.",
        credentialLink: "/ACHIVEMENTS/Data Analytics with Tableau.png" 
    },
    { 
        id: "c6", 
        title: "CodeAlpha Offer Letter", 
        issuer: "CodeAlpha", 
        date: "2025", 
        description: "Official offer letter for my role at CodeAlpha, highlighting my selection for their professional program.",
        credentialLink: "/ACHIVEMENTS/CodeAlpha Offer letter_page-0001.jpg" 
    }
];

function useReveal() {
    const ref = useRef<HTMLDivElement>(null);
    const [v, setV] = useState(false);
    useEffect(() => { 
        const el = ref.current; 
        if (!el) return; 
        const o = new IntersectionObserver(([e]) => { 
            if (e.isIntersecting) { setV(true); o.disconnect(); } 
        }, { threshold: 0.05 }); 
        o.observe(el); 
        return () => o.disconnect(); 
    }, []);
    return { ref, v };
}

function CertCard({ cert, index }: { cert: Certificate; index: number }) {
    const { ref, v } = useReveal();
    return (
        <div ref={ref} className={`group flex flex-col bg-white dark:bg-[#0f0f13] rounded-2xl overflow-hidden border border-slate-200 dark:border-white/5 hover:border-indigo-500/50 transition-all duration-300 shadow-xl shadow-slate-200/50 dark:shadow-lg dark:hover:shadow-indigo-500/20 ${v ? 'animate-reveal-up' : 'opacity-0'}`} style={{ animationDelay: `${index * 0.1}s` }}>
            {/* Image Container */}
            <div className="relative aspect-[4/3] bg-slate-50 dark:bg-white/5 flex flex-col items-center justify-center overflow-hidden border-b border-slate-200 dark:border-white/5 p-4 group-hover:bg-slate-100 dark:group-hover:bg-white/10 transition-all duration-500">
                <div className="absolute inset-0 z-0 flex items-center justify-center p-4">
                    {cert.credentialLink.endsWith('.pdf') ? (
                        <div className="text-center group-hover:scale-105 transition-transform duration-500 flex flex-col items-center justify-center h-full">
                            <span className="text-6xl mb-2 drop-shadow-[0_0_15px_rgba(99,102,241,0.5)]">📄</span>
                            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">PDF Document</span>
                        </div>
                    ) : (
                        <Image 
                            src={cert.credentialLink} 
                            alt={cert.title} 
                            fill 
                            className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                            sizes="(max-width: 768px) 100vw, 400px"
                        />
                    )}
                </div>

                <div className="absolute inset-0 bg-white/80 dark:bg-black/60 opacity-0 group-hover:opacity-100 backdrop-blur-sm transition-all duration-300 flex items-center justify-center z-20">
                    <a href={cert.credentialLink} target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 bg-indigo-600 dark:bg-white text-white dark:text-black text-sm font-bold rounded-lg hover:bg-indigo-700 dark:hover:bg-indigo-50 transition-colors shadow-lg flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 duration-300">
                        View Certificate <span>→</span>
                    </a>
                </div>
            </div>
            
            {/* Content */}
            <div className="p-5 sm:p-6 flex flex-col flex-1 relative">
                <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/30 dark:via-indigo-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <h3 className="text-base sm:text-lg font-bold text-slate-800 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-2">{cert.title}</h3>
                
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 flex-1 leading-relaxed">{cert.description}</p>

                <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-200 dark:border-white/5">
                    <span className="text-sm font-medium text-slate-600 dark:text-slate-400 flex items-center gap-2">
                        <svg className="w-4 h-4 text-indigo-500 dark:text-indigo-400/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                        {cert.issuer}
                    </span>
                    <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400/80 bg-indigo-50 dark:bg-indigo-500/10 px-2.5 py-1 rounded-md border border-indigo-200 dark:border-indigo-500/20">{cert.date}</span>
                </div>
            </div>
        </div>
    );
}

export default function Certificates() {
    return (
        <div className="pt-24 sm:pt-32 pb-16 sm:pb-24 min-h-screen relative z-10">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-10 sm:mb-16 animate-fade-in">
                <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-indigo-400 font-medium mb-4">Achievements</p>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-800 dark:text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    My <span className="gradient-text">Certificates</span>
                </h1>
                <div className="accent-line w-20 mt-6" />
                <p className="mt-6 text-slate-500 dark:text-slate-400 max-w-2xl text-sm sm:text-base leading-relaxed">
                    A collection of my professional certifications, continuous learning milestones, and technical achievements.
                </p>
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {certificates.map((cert, i) => <CertCard key={cert.id} cert={cert} index={i} />)}
                </div>
            </div>
        </div>
    );
}
