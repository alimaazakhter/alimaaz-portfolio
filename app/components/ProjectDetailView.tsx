'use client';

import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { Project } from '@/lib/data';
import { 
    User, Brain, Settings, FileEdit, FileText, Sprout, Palette, Zap, 
    FolderOpen, Filter, BarChart3, Trophy, Camera, Target, ImageIcon, 
    Calculator, Search, Download, TrendingDown, TrendingUp, Hotel, Landmark,
    Play, Shield, Heart, Film, Wrench, Sparkles, Code2, Database, Server,
    Lightbulb, Award, MapPin, Laptop, Bot, ClipboardList, GraduationCap,
    Layers, Satellite, Thermometer
} from 'lucide-react';

const ALL_SECTIONS = [
    { id: 'overview', label: 'Overview' },
    { id: 'workflow', label: 'Workflow' },
    { id: 'architecture', label: 'Architecture' },
    { id: 'ml-model', label: 'ML Model' },
    { id: 'dual-mode', label: 'Dual Mode' },
    { id: 'features', label: 'Features' },
    { id: 'tech-stack', label: 'Tech Stack' },
    { id: 'demo', label: 'Demo' }
];

const PipelineNode = ({ title, desc, icon: IconComponent, delay }: { title: string, desc: string, icon: React.ComponentType<{ className?: string; strokeWidth?: number }>, delay: number }) => (
    <div className="glass-card rounded-xl p-4 flex flex-col items-center text-center relative z-10 w-full sm:w-40 group hover:border-purple-500/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.15)] animate-fade-in" style={{ animationDelay: `${delay}s` }}>
        <IconComponent className="w-6 h-6 text-purple-500 mb-2 group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
        <h4 className="text-sm font-bold text-slate-800 dark:text-white mb-1">{title}</h4>
        <p className="text-[10px] text-slate-500 dark:text-slate-400">{desc}</p>
    </div>
);

const Arrow = () => (
    <div className="text-purple-500/50 sm:-rotate-90 sm:hidden animate-pulse">
        ↓
    </div>
);

export default function ProjectDetailView({ project }: { project: Project }) {
    const [activeSection, setActiveSection] = useState('overview');
    
    const activeNavIds = new Set(project.content?.sections?.map(s => s.id) || []);
    if (project.content?.videoUrl) activeNavIds.add('demo');
    const sectionsNav = ALL_SECTIONS.filter(s => activeNavIds.has(s.id));
    
    // Intersection Observer for Scroll Spy
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            // Find the most visible section
            const visibleEntries = entries.filter(e => e.isIntersecting);
            if (visibleEntries.length > 0) {
                // Sort by intersection ratio to get the most visible one
                visibleEntries.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
                setActiveSection(visibleEntries[0].target.id);
            }
        }, { rootMargin: '-20% 0px -60% 0px', threshold: [0, 0.5, 1] });

        sectionsNav.forEach(({ id }) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const scrollToSection = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <div className="pt-24 sm:pt-32 pb-16 sm:pb-24 min-h-screen relative flex">
            
            {/* Sidebar Navigation */}
            <nav className="hidden lg:flex flex-col fixed top-1/3 right-8 xl:right-16 z-50 glass-card p-4 rounded-2xl border border-white/5 shadow-2xl backdrop-blur-xl">
                <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500 mb-4 px-2 font-bold">Contents</p>
                <div className="flex flex-col gap-1">
                    {sectionsNav.map(({ id, label }) => (
                        <button 
                            key={id}
                            onClick={() => scrollToSection(id)}
                            className={`text-left px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 cursor-pointer flex items-center gap-3 ${
                                activeSection === id 
                                ? 'bg-purple-500/10 text-purple-600 dark:text-purple-400 shadow-[inset_0_0_12px_rgba(168,85,247,0.1)] border border-purple-500/20' 
                                : 'text-slate-500 dark:text-slate-500 hover:text-slate-800 dark:hover:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5 border border-transparent'
                            }`}
                        >
                            <span className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${activeSection === id ? 'bg-purple-400 shadow-[0_0_8px_rgba(168,85,247,0.8)]' : 'bg-transparent'}`}></span>
                            {label}
                        </button>
                    ))}
                </div>
            </nav>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 w-full lg:pr-32 xl:pr-0">
                
                {/* Back Navigation */}
                <Link href="/projects" className="inline-flex items-center gap-2 text-sm sm:text-base text-slate-500 hover:text-purple-400 transition-colors mb-8 sm:mb-12 no-underline group">
                    <span className="transition-transform group-hover:-translate-x-1">←</span>
                    Back to Projects
                </Link>

                {/* Hero Header */}
                <div className="mb-10 sm:mb-16 animate-fade-in" id="overview">
                    <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-slate-800 dark:text-white mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        {project.title}
                    </h1>
                    
                    <div className="flex flex-wrap gap-2 mb-8">
                        {project.tags.map(tag => (
                            <span key={tag} className="px-4 py-1.5 rounded-full bg-purple-500/10 text-purple-400 font-medium text-xs sm:text-sm border border-purple-500/20 cursor-default shadow-[0_0_10px_rgba(168,85,247,0.05)]">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <p className="text-base sm:text-lg text-slate-500 dark:text-slate-400 max-w-2xl leading-relaxed mb-8">
                        {project.description}
                    </p>

                    <div className="flex flex-wrap gap-4">
                        {project.link && (
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white font-semibold rounded-xl transition-all shadow-[0_0_20px_rgba(147,51,234,0.3)] hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] flex items-center gap-2 no-underline group">
                                View Live Project
                                <span className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
                            </a>
                        )}
                        {project.github && (
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="px-6 py-3 border border-slate-300 dark:border-slate-700 hover:border-purple-500/50 hover:bg-purple-500/5 text-slate-700 dark:text-slate-300 font-semibold rounded-xl transition-all shadow-lg flex items-center gap-2 no-underline group">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                                GitHub Repo
                            </a>
                        )}
                        {project.content?.videoUrl && (
                            <button onClick={() => scrollToSection('demo')} className="px-6 py-3 border border-slate-300 dark:border-slate-700 hover:border-purple-500/50 hover:bg-purple-500/5 text-slate-700 dark:text-slate-300 font-semibold rounded-xl transition-all shadow-lg flex items-center gap-2 no-underline group cursor-pointer">
                                <span className="text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform">▶</span>
                                Demo Video
                            </button>
                        )}
                    </div>
                </div>

                {/* Detailed Content Sections */}
                {project.content?.sections ? (
                    <div className="space-y-16 sm:space-y-24 mb-20">
                        {project.content.sections.map((section, idx) => {
                            // Custom Rendering for Workflow / Architecture
                            if (section.id === 'workflow' && project.id === 'p1') {
                                return (
                                    <div key={idx} id={section.id} className="relative pt-10 scroll-mt-24">
                                        <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-white mb-8 flex items-center gap-3">
                                            <Zap className="w-6 h-6 text-purple-500 shrink-0" strokeWidth={1.5} /> {section.title}
                                        </h2>
                                        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-12">
                                            {section.content}
                                        </p>
                                        
                                        {/* AI Pipeline Flow */}
                                        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 w-full relative mt-4">
                                            {/* Glowing connecting line (Desktop) */}
                                            <div className="hidden sm:block absolute top-1/2 left-10 right-10 h-[2px] bg-gradient-to-r from-purple-500/10 via-purple-500/60 to-purple-500/10 -translate-y-1/2 z-0 animate-pulse shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>
                                            
                                            <PipelineNode icon={User} title="User Input" desc="Idea & Params" delay={0.1} />
                                            <Arrow />
                                            <PipelineNode icon={Brain} title="Planner Agent" desc="Breaks down tasks" delay={0.2} />
                                            <Arrow />
                                            <PipelineNode icon={Settings} title="Generator Agent" desc="Creates structured content" delay={0.3} />
                                            <Arrow />
                                            <PipelineNode icon={FileEdit} title="Formatter Agent" desc="Cleans & organizes" delay={0.4} />
                                            <Arrow />
                                            <PipelineNode icon={FileText} title="Final Blueprint" desc="PDF/DOCX Output" delay={0.5} />
                                        </div>
                                    </div>
                                );
                            }

                            // Custom Rendering for Workflow (Iris Species Classification)
                            if (section.id === 'workflow' && project.id === 'p3') {
                                return (
                                    <div key={idx} id={section.id} className="relative pt-10 scroll-mt-24">
                                        <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-white mb-8 flex items-center gap-3">
                                            <Sprout className="w-6 h-6 text-purple-500 shrink-0" strokeWidth={1.5} /> {section.title}
                                        </h2>
                                        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-12">
                                            {section.content}
                                        </p>
                                        
                                        {/* Dual Architecture Flow */}
                                        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 w-full relative mt-4">
                                            {/* Glowing connecting line (Desktop) */}
                                            <div className="hidden sm:block absolute top-1/2 left-10 right-10 h-[2px] bg-gradient-to-r from-purple-500/10 via-purple-500/60 to-purple-500/10 -translate-y-1/2 z-0 animate-pulse shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>
                                            
                                            <PipelineNode icon={Sprout} title="Iris Data" desc="150 Samples" delay={0.1} />
                                            <Arrow />
                                            <PipelineNode icon={Brain} title="JS ML Engine" desc="LR / KNN / DT" delay={0.2} />
                                            <Arrow />
                                            <PipelineNode icon={Palette} title="SVG Visualizer" desc="Live Morphing" delay={0.3} />
                                            <Arrow />
                                            <PipelineNode icon={Zap} title="FastAPI" desc="Server Inference" delay={0.4} />
                                        </div>
                                    </div>
                                );
                            }

                            // Custom Rendering for Workflow (Student Performance)
                            if (section.id === 'workflow' && project.id === 'p4') {
                                return (
                                    <div key={idx} id={section.id} className="relative pt-10 scroll-mt-24">
                                        <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-white mb-8 flex items-center gap-3">
                                            <GraduationCap className="w-6 h-6 text-purple-500 shrink-0" strokeWidth={1.5} /> {section.title}
                                        </h2>
                                        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-12">
                                            {section.content}
                                        </p>
                                        
                                        {/* ML Pipeline Flow */}
                                        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 w-full relative mt-4">
                                            {/* Glowing connecting line (Desktop) */}
                                            <div className="hidden sm:block absolute top-1/2 left-10 right-10 h-[2px] bg-gradient-to-r from-purple-500/10 via-purple-500/60 to-purple-500/10 -translate-y-1/2 z-0 animate-pulse shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>
                                            
                                            <PipelineNode icon={FolderOpen} title="Dataset" desc="1,000 Records" delay={0.1} />
                                            <Arrow />
                                            <PipelineNode icon={Filter} title="Prep" desc="One-hot Encoding" delay={0.2} />
                                            <Arrow />
                                            <PipelineNode icon={Brain} title="Training" desc="7 Regressors" delay={0.3} />
                                            <Arrow />
                                            <PipelineNode icon={BarChart3} title="Validation" desc="5-Fold CV" delay={0.4} />
                                            <Arrow />
                                            <PipelineNode icon={Trophy} title="Leaderboard" desc="Rank & Compare" delay={0.5} />
                                        </div>
                                    </div>
                                );
                            }


                            // Custom Rendering for Workflow (ImageFusion AI)
                            if (section.id === 'workflow' && project.id === 'p5') {
                                return (
                                    <div key={idx} id={section.id} className="relative pt-10 scroll-mt-24">
                                        <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-white mb-8 flex items-center gap-3">
                                            <Thermometer className="w-6 h-6 text-purple-500 shrink-0" strokeWidth={1.5} /> {section.title}
                                        </h2>
                                        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-12">
                                            {section.content}
                                        </p>
                                        
                                        {/* Image Fusion Pipeline Flow */}
                                        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 w-full relative mt-4">
                                            {/* Glowing connecting line (Desktop) */}
                                            <div className="hidden sm:block absolute top-1/2 left-10 right-10 h-[2px] bg-gradient-to-r from-purple-500/10 via-purple-500/60 to-purple-500/10 -translate-y-1/2 z-0 animate-pulse shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>
                                            
                                            <PipelineNode icon={Camera} title="Raw Inputs" desc="RGB & Thermal Pairs" delay={0.1} />
                                            <Arrow />
                                            <PipelineNode icon={Filter} title="Sobel Edge" desc="Gradient Filter" delay={0.2} />
                                            <Arrow />
                                            <PipelineNode icon={Target} title="ROI Masking" desc="Noise Filtering" delay={0.3} />
                                            <Arrow />
                                            <PipelineNode icon={Settings} title="Grid Search" desc="Coarse-to-Fine Opt" delay={0.4} />
                                            <Arrow />
                                            <PipelineNode icon={ImageIcon} title="Fused Output" desc="Affine Warped Blend" delay={0.5} />
                                        </div>
                                    </div>
                                );
                            }


                            // Custom Rendering for Workflow (VisualDiffX)
                            if (section.id === 'workflow' && project.id === 'p6') {
                                return (
                                    <div key={idx} id={section.id} className="relative pt-10 scroll-mt-24">
                                        <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-white mb-8 flex items-center gap-3">
                                            <Satellite className="w-6 h-6 text-purple-500 shrink-0" strokeWidth={1.5} /> {section.title}
                                        </h2>
                                        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-12">
                                            {section.content}
                                        </p>
                                        
                                        {/* VisualDiffX Pipeline Flow */}
                                        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 w-full relative mt-4">
                                            {/* Glowing connecting line (Desktop) */}
                                            <div className="hidden sm:block absolute top-1/2 left-10 right-10 h-[2px] bg-gradient-to-r from-purple-500/10 via-purple-500/60 to-purple-500/10 -translate-y-1/2 z-0 animate-pulse shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>
                                            
                                            <PipelineNode icon={Camera} title="Select Images" desc="Before & After Pairs" delay={0.1} />
                                            <Arrow />
                                            <PipelineNode icon={Calculator} title="Diff Mask" desc="Grayscale Pixel Sub" delay={0.2} />
                                            <Arrow />
                                            <PipelineNode icon={Filter} title="Filter Noise" desc="Morphological Closing/Opening" delay={0.3} />
                                            <Arrow />
                                            <PipelineNode icon={Target} title="CCL Labeling" desc="BFS Bounding Boxes" delay={0.4} />
                                            <Arrow />
                                            <PipelineNode icon={Download} title="Export" desc="Single Sheet / Batch ZIP" delay={0.5} />
                                        </div>
                                    </div>
                                );
                            }


                            // Custom Rendering for Workflow (GLR Pipeline Automation)
                            if (section.id === 'workflow' && project.id === 'p7') {
                                return (
                                    <div key={idx} id={section.id} className="relative pt-10 scroll-mt-24">
                                        <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-white mb-8 flex items-center gap-3">
                                            <ClipboardList className="w-6 h-6 text-purple-500 shrink-0" strokeWidth={1.5} /> {section.title}
                                        </h2>
                                        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-12">
                                            {section.content}
                                        </p>
                                        
                                        {/* GLR Pipeline Flow */}
                                        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 w-full relative mt-4">
                                            {/* Glowing connecting line (Desktop) */}
                                            <div className="hidden sm:block absolute top-1/2 left-10 right-10 h-[2px] bg-gradient-to-r from-purple-500/10 via-purple-500/60 to-purple-500/10 -translate-y-1/2 z-0 animate-pulse shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>
                                            
                                            <PipelineNode icon={FolderOpen} title="Upload" desc="Word Template & PDFs" delay={0.1} />
                                            <Arrow />
                                            <PipelineNode icon={Search} title="Scan" desc="Extract Placeholders" delay={0.2} />
                                            <Arrow />
                                            <PipelineNode icon={Brain} title="AI Extract" desc="LLM Document Mapping" delay={0.3} />
                                            <Arrow />
                                            <PipelineNode icon={ClipboardList} title="Verify" desc="Interactive Review" delay={0.4} />
                                            <Arrow />
                                            <PipelineNode icon={Download} title="Download" desc="Formatted Word Doc" delay={0.5} />
                                        </div>
                                    </div>
                                );
                            }


                            // Custom Rendering for Workflow (Unemployment Analysis Dashboard)
                            if (section.id === 'workflow' && project.id === 'p11') {
                                return (
                                    <div key={idx} id={section.id} className="relative pt-10 scroll-mt-24">
                                        <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-white mb-8 flex items-center gap-3">
                                            <TrendingDown className="w-6 h-6 text-purple-500 shrink-0" strokeWidth={1.5} /> {section.title}
                                        </h2>
                                        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-12">
                                            {section.content}
                                        </p>
                                        
                                        {/* Analytics Pipeline Flow */}
                                        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 w-full relative mt-4">
                                            {/* Glowing connecting line (Desktop) */}
                                            <div className="hidden sm:block absolute top-1/2 left-10 right-10 h-[2px] bg-gradient-to-r from-purple-500/10 via-purple-500/60 to-purple-500/10 -translate-y-1/2 z-0 animate-pulse shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>
                                            
                                            <PipelineNode icon={Code2} title="Python ETL" desc="Clean & Aggregate" delay={0.1} />
                                            <Arrow />
                                            <PipelineNode icon={Layers} title="Data Layer" desc="JS Module" delay={0.2} />
                                            <Arrow />
                                            <PipelineNode icon={BarChart3} title="Chart.js" desc="5 Dashboards" delay={0.3} />
                                            <Arrow />
                                            <PipelineNode icon={Search} title="Explorer" desc="Search & Export" delay={0.4} />
                                        </div>
                                    </div>
                                );
                            }

                            // Custom Rendering for Workflow (Banking Risk Dashboard)
                            if (section.id === 'workflow' && project.id === 'p13') {
                                return (
                                    <div key={idx} id={section.id} className="relative pt-10 scroll-mt-24">
                                        <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-white mb-8 flex items-center gap-3">
                                            <BarChart3 className="w-6 h-6 text-purple-500 shrink-0" strokeWidth={1.5} /> {section.title}
                                        </h2>
                                        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-12">
                                            {section.content}
                                        </p>
                                        
                                        {/* Data Pipeline Flow */}
                                        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 w-full relative mt-4">
                                            {/* Glowing connecting line (Desktop) */}
                                            <div className="hidden sm:block absolute top-1/2 left-10 right-10 h-[2px] bg-gradient-to-r from-purple-500/10 via-purple-500/60 to-purple-500/10 -translate-y-1/2 z-0 animate-pulse shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>
                                            
                                            <PipelineNode icon={FolderOpen} title="Raw Data" desc="CSV Extraction" delay={0.1} />
                                            <Arrow />
                                            <PipelineNode icon={Code2} title="Python EDA" desc="Pandas & Cleaning" delay={0.2} />
                                            <Arrow />
                                            <PipelineNode icon={Settings} title="Data Modeling" desc="Power BI DAX" delay={0.3} />
                                            <Arrow />
                                            <PipelineNode icon={TrendingUp} title="Dashboard" desc="Interactive Insights" delay={0.4} />
                                        </div>
                                    </div>
                                );
                            }

                            // Custom Rendering for Workflow (Tata Data Visualization)
                            if (section.id === 'workflow' && project.id === 'p14') {
                                return (
                                    <div key={idx} id={section.id} className="relative pt-10 scroll-mt-24">
                                        <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-white mb-8 flex items-center gap-3">
                                            <BarChart3 className="w-6 h-6 text-purple-500 shrink-0" strokeWidth={1.5} /> {section.title}
                                        </h2>
                                        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-12">
                                            {section.content}
                                        </p>
                                        
                                        {/* Data Pipeline Flow */}
                                        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 w-full relative mt-4">
                                            {/* Glowing connecting line (Desktop) */}
                                            <div className="hidden sm:block absolute top-1/2 left-10 right-10 h-[2px] bg-gradient-to-r from-purple-500/10 via-purple-500/60 to-purple-500/10 -translate-y-1/2 z-0 animate-pulse shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>
                                            
                                            <PipelineNode icon={MapPin} title="Scenario" desc="Business Needs" delay={0.1} />
                                            <Arrow />
                                            <PipelineNode icon={BarChart3} title="Visuals" desc="Chart Selection" delay={0.2} />
                                            <Arrow />
                                            <PipelineNode icon={Palette} title="Dashboard" desc="Design UI" delay={0.3} />
                                            <Arrow />
                                            <PipelineNode icon={Lightbulb} title="Insights" desc="Executive Comm." delay={0.4} />
                                        </div>
                                    </div>
                                );
                            }

                            // Custom Rendering for Workflow (Hotel Booking Dashboard)
                            if (section.id === 'workflow' && project.id === 'p15') {
                                return (
                                    <div key={idx} id={section.id} className="relative pt-10 scroll-mt-24">
                                        <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-white mb-8 flex items-center gap-3">
                                            <BarChart3 className="w-6 h-6 text-purple-500 shrink-0" strokeWidth={1.5} /> {section.title}
                                        </h2>
                                        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-12">
                                            {section.content}
                                        </p>
                                        
                                        {/* Data Pipeline Flow */}
                                        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 w-full relative mt-4">
                                            {/* Glowing connecting line (Desktop) */}
                                            <div className="hidden sm:block absolute top-1/2 left-10 right-10 h-[2px] bg-gradient-to-r from-purple-500/10 via-purple-500/60 to-purple-500/10 -translate-y-1/2 z-0 animate-pulse shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>
                                            
                                            <PipelineNode icon={FolderOpen} title="Raw Data" desc="Booking Data" delay={0.1} />
                                            <Arrow />
                                            <PipelineNode icon={Code2} title="Python EDA" desc="Data Cleaning" delay={0.2} />
                                            <Arrow />
                                            <PipelineNode icon={BarChart3} title="Excel" desc="Pivot Tables" delay={0.3} />
                                            <Arrow />
                                            <PipelineNode icon={Hotel} title="Dashboard" desc="Insights" delay={0.4} />
                                        </div>
                                    </div>
                                );
                            }

                            // Custom Rendering for Workflow (Vortex Bank)
                            if (section.id === 'workflow' && project.id === 'p8') {
                                return (
                                    <div key={idx} id={section.id} className="relative pt-10 scroll-mt-24">
                                        <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-white mb-8 flex items-center gap-3">
                                            <Landmark className="w-6 h-6 text-purple-500 shrink-0" strokeWidth={1.5} /> {section.title}
                                        </h2>
                                        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-12">
                                            {section.content}
                                        </p>
                                        
                                        {/* Architecture Pipeline Flow */}
                                        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 w-full relative mt-4">
                                            {/* Glowing connecting line (Desktop) */}
                                            <div className="hidden sm:block absolute top-1/2 left-10 right-10 h-[2px] bg-gradient-to-r from-purple-500/10 via-purple-500/60 to-purple-500/10 -translate-y-1/2 z-0 animate-pulse shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>
                                            
                                            <PipelineNode icon={Laptop} title="Next.js UI" desc="Client React Dash" delay={0.1} />
                                            <Arrow />
                                            <PipelineNode icon={Zap} title="API Routes" desc="Serverless Endpoints" delay={0.2} />
                                            <Arrow />
                                            <PipelineNode icon={Database} title="Prisma ORM" desc="Schema Validation" delay={0.3} />
                                            <Arrow />
                                            <PipelineNode icon={Server} title="PostgreSQL" desc="Neon Cloud DB" delay={0.4} />
                                        </div>
                                    </div>
                                );
                            }

                            // Custom Rendering for Workflow (StreamAura 2.0)
                            if (section.id === 'workflow' && project.id === 'p18') {
                                return (
                                    <div key={idx} id={section.id} className="relative pt-10 scroll-mt-24">
                                        <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-white mb-8 flex items-center gap-3">
                                            <Zap className="w-6 h-6 text-purple-500 shrink-0" strokeWidth={1.5} /> {section.title}
                                        </h2>
                                        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-12">
                                            {section.content}
                                        </p>
                                        
                                        {/* StreamAura Pipeline Flow */}
                                        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 w-full relative mt-4">
                                            {/* Glowing connecting line (Desktop) */}
                                            <div className="hidden sm:block absolute top-1/2 left-10 right-10 h-[2px] bg-gradient-to-r from-purple-500/10 via-purple-500/60 to-purple-500/10 -translate-y-1/2 z-0 animate-pulse shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>
                                            
                                            <PipelineNode icon={User} title="User Action" desc="Search & Chat" delay={0.1} />
                                            <Arrow />
                                            <PipelineNode icon={Laptop} title="Next.js App" desc="Immersive UI" delay={0.2} />
                                            <Arrow />
                                            <PipelineNode icon={Brain} title="AI & APIs" desc="Gemini + TMDb" delay={0.3} />
                                            <Arrow />
                                            <PipelineNode icon={Database} title="Database" desc="Supabase + Prisma" delay={0.4} />
                                        </div>
                                    </div>
                                );
                            }

                            // Custom Rendering for Workflow (TruthShield AI - Fake News Detector)
                            if (section.id === 'workflow' && project.id === 'p2') {
                                return (
                                    <div key={idx} id={section.id} className="relative pt-10 scroll-mt-24">
                                        <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-white mb-8 flex items-center gap-3">
                                            <Zap className="w-6 h-6 text-purple-500 shrink-0" strokeWidth={1.5} /> {section.title}
                                        </h2>
                                        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-12">
                                            {section.content}
                                        </p>
                                        
                                        {/* ML Inference Pipeline Flow */}
                                        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 w-full relative mt-4">
                                            {/* Glowing connecting line (Desktop) */}
                                            <div className="hidden sm:block absolute top-1/2 left-10 right-10 h-[2px] bg-gradient-to-r from-purple-500/10 via-purple-500/60 to-purple-500/10 -translate-y-1/2 z-0 animate-pulse shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>
                                            
                                            <PipelineNode icon={User} title="User Input" desc="News Article Text" delay={0.1} />
                                            <Arrow />
                                            <PipelineNode icon={Filter} title="Pre-processing" desc="Clean & Lowercase" delay={0.2} />
                                            <Arrow />
                                            <PipelineNode icon={Calculator} title="TF-IDF Math" desc="L2-Normalized Vector" delay={0.3} />
                                            <Arrow />
                                            <PipelineNode icon={Brain} title="Inference" desc="Logistic Regression" delay={0.4} />
                                            <Arrow />
                                            <PipelineNode icon={BarChart3} title="Dashboard" desc="LIME Words Highlight" delay={0.5} />
                                        </div>
                                    </div>
                                );
                            }

                            // Custom Rendering for Architecture (n8n Automation)
                            if (section.id === 'architecture' && project.id === 'p10') {
                                return (
                                    <div key={idx} id={section.id} className="relative pt-10 scroll-mt-24">
                                        <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-white mb-8 flex items-center gap-3">
                                            <Settings className="w-6 h-6 text-purple-500 shrink-0" strokeWidth={1.5} /> {section.title}
                                        </h2>
                                        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-12">
                                            {section.content}
                                        </p>
                                        
                                        {/* n8n Workflow Flow */}
                                        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 w-full relative mt-4">
                                            {/* Glowing connecting line (Desktop) */}
                                            <div className="hidden sm:block absolute top-1/2 left-10 right-10 h-[2px] bg-gradient-to-r from-purple-500/10 via-purple-500/60 to-purple-500/10 -translate-y-1/2 z-0 animate-pulse shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>
                                            
                                            <PipelineNode icon={FileEdit} title="User Form" desc="Data Capture" delay={0.1} />
                                            <Arrow />
                                            <PipelineNode icon={Bot} title="Gemini AI" desc="Categorization" delay={0.2} />
                                            <Arrow />
                                            <PipelineNode icon={Layers} title="Routing Switch" desc="Logic Branching" delay={0.3} />
                                            <Arrow />
                                            <PipelineNode icon={Zap} title="Integrations" desc="Airtable, Slack, Gmail" delay={0.4} />
                                        </div>
                                    </div>
                                );
                            }

                            // Custom Rendering for Architecture (Heart Disease System)
                            if (section.id === 'architecture' && project.id === 'p16') {
                                return (
                                    <div key={idx} id={section.id} className="relative pt-10 scroll-mt-24">
                                        <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-white mb-8 flex items-center gap-3">
                                            <Wrench className="w-6 h-6 text-purple-500 shrink-0" strokeWidth={1.5} /> {section.title}
                                        </h2>
                                        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-12">
                                            {section.content}
                                        </p>
                                        
                                        {/* AI Architecture Flow */}
                                        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 w-full relative mt-4">
                                            {/* Glowing connecting line (Desktop) */}
                                            <div className="hidden sm:block absolute top-1/2 left-10 right-10 h-[2px] bg-gradient-to-r from-purple-500/10 via-purple-500/60 to-purple-500/10 -translate-y-1/2 z-0 animate-pulse shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>
                                            
                                            <PipelineNode icon={Laptop} title="React UI" desc="TypeScript + Vite" delay={0.1} />
                                            <Arrow />
                                            <PipelineNode icon={Settings} title="Flask API" desc="Python Backend" delay={0.2} />
                                            <Arrow />
                                            <PipelineNode icon={Heart} title="ML Model" desc="Random Forest Classifier" delay={0.3} />
                                        </div>
                                    </div>
                                );
                            }

                            // Custom Rendering for Features & Tech Stack (Glassmorphism Grids)
                            if (section.id === 'features' || section.id === 'tech-stack') {
                                return (
                                    <div key={idx} id={section.id} className="relative pt-10 scroll-mt-24">
                                        <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-white mb-8 flex items-center gap-3">
                                            {section.id === 'features' ? <Sparkles className="w-6 h-6 text-purple-500 shrink-0" strokeWidth={1.5} /> : <Wrench className="w-6 h-6 text-purple-500 shrink-0" strokeWidth={1.5} />} {section.title}
                                        </h2>
                                        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                                            {section.content}
                                        </p>
                                        {section.list && (
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                {section.list.map((item, i) => (
                                                    <div key={i} className="glass-card p-5 rounded-xl border border-slate-200 dark:border-white/5 hover:border-purple-500/30 transition-all duration-300 group flex items-start gap-4 hover:-translate-y-1 hover:shadow-[0_5px_20px_rgba(168,85,247,0.1)]">
                                                        <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center shrink-0 group-hover:bg-purple-500/20 transition-colors">
                                                            <span className="text-purple-600 dark:text-purple-400">❖</span>
                                                        </div>
                                                        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed pt-2">
                                                            {item}
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                );
                            }

                            // Default Rendering
                            return (
                                <div key={idx} id={section.id} className="relative glass-card p-8 sm:p-10 rounded-2xl group hover:border-purple-500/30 transition-all duration-500 scroll-mt-24 border border-slate-200 dark:border-white/5">
                                    <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                                        <span className="w-8 h-[2px] bg-purple-500 group-hover:w-12 transition-all duration-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]"></span>
                                        {section.title}
                                    </h2>
                                    <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                                        {section.content}
                                    </p>
                                    {section.list && section.list.length > 0 && (
                                        <ul className="space-y-4 pl-4 sm:pl-8 mt-6">
                                            {section.list.map((item, i) => (
                                                <li key={i} className="flex items-start gap-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                                                    <span className="text-purple-600 dark:text-purple-400 mt-1 shrink-0">✦</span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <div className="text-center py-12">
                        <p className="text-slate-500 dark:text-slate-400">Detailed information coming soon.</p>
                    </div>
                )}

                {/* Video / Demo Display */}
                {project.content?.videoUrl && (
                    <div id="demo" className="pt-10 scroll-mt-24">
                        <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-white mb-8 flex items-center gap-3">
                            <Play className="w-6 h-6 text-purple-500 fill-purple-500/20 shrink-0" strokeWidth={1.5} /> Project Demo
                        </h2>
                        <div className="w-full aspect-video rounded-2xl overflow-hidden glass-card shadow-[0_0_40px_rgba(168,85,247,0.15)] border border-purple-500/20">
                            <video 
                                src={project.content.videoUrl} 
                                autoPlay 
                                loop 
                                muted 
                                playsInline
                                controls
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                )}

                {/* Image Gallery Display */}
                {project.content?.images && project.content.images.length > 0 && (
                    <div id="demo" className="pt-10 scroll-mt-24">
                        <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-white mb-8 flex items-center gap-3">
                            <ImageIcon className="w-6 h-6 text-purple-500 shrink-0" strokeWidth={1.5} /> Project Gallery
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {project.content.images.map((img, idx) => (
                                <div key={idx} className="relative aspect-[4/3] rounded-2xl overflow-hidden glass-card shadow-[0_0_20px_rgba(168,85,247,0.1)] border border-purple-500/20 group hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-1 cursor-pointer" onClick={() => window.open(img, '_blank')}>
                                    <img 
                                        src={img} 
                                        alt={`${project.title} screenshot ${idx + 1}`}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Certificate Display */}
                {project.content?.certificate && (
                    <div className="pt-10 scroll-mt-24">
                        <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-white mb-8 flex items-center gap-3">
                            <Award className="w-6 h-6 text-purple-500 shrink-0" strokeWidth={1.5} /> Certificate of Completion
                        </h2>
                        <div className="relative max-w-2xl mx-auto rounded-2xl overflow-hidden glass-card border-2 border-amber-400/40 shadow-[0_0_30px_rgba(251,191,36,0.15)] group hover:border-amber-400/70 transition-all duration-300 cursor-pointer" onClick={() => window.open(project.content!.certificate!, '_blank')}>
                            <img 
                                src={project.content.certificate} 
                                alt={`${project.title} Certificate`}
                                className="w-full h-auto object-contain group-hover:scale-[1.02] transition-transform duration-500"
                            />
                        </div>
                    </div>
                )}

                {/* Project Note (if any) */}
                {project.content?.note && (
                    <div className="mt-8 p-6 sm:p-8 rounded-2xl glass-card border border-purple-500/20 bg-purple-500/5">
                        <div className="flex items-start gap-4">
                            <Lightbulb className="w-6 h-6 text-purple-500 shrink-0 mt-1" strokeWidth={1.5} />
                            <div>
                                <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-2">Project Note</h3>
                                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                                    {project.content.note}
                                </p>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
}
