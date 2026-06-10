'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from './Logo';

export default function Footer() {
    const [showScroll, setShowScroll] = useState(false);
    const [isImageOpen, setIsImageOpen] = useState(false);
    useEffect(() => {
        const check = () => setShowScroll(window.scrollY > 400);
        window.addEventListener('scroll', check);
        return () => window.removeEventListener('scroll', check);
    }, []);

    return (
        <footer className="relative z-10 border-t border-slate-200/10 dark:border-white/5 bg-white/50 dark:bg-[#060609]/50 backdrop-blur-xl">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12">
                    {/* Brand */}
                    <div className="sm:col-span-2 md:col-span-1">
                        <div className="flex items-center gap-4 mb-4">
                            <div
                                onClick={() => setIsImageOpen(true)}
                                className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-slate-200/20 dark:border-white/10 hover:border-indigo-500/50 transition-all cursor-pointer group shadow-lg flex-shrink-0"
                            >
                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" /></svg>
                                </div>
                                <Image src="/profile.jpeg" alt="Alimaaz Akhter" fill className="object-cover relative z-10" sizes="56px" />
                            </div>
                            <Link href="/" className="text-xl font-bold tracking-wider gradient-text no-underline flex items-center gap-2 group" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                                <Logo className="w-6 h-6 group-hover:rotate-12 transition-transform duration-500" />
                                Alimaaz
                            </Link>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-500 leading-relaxed">Data Science, Machine Learning, and AI — turning raw data into intelligent systems.</p>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 mb-4">Navigation</h4>
                        <div className="space-y-2">
                            {[{ href: '/', label: 'Home' }, { href: '/profile', label: 'Profile' }, { href: '/projects', label: 'Projects' }, { href: '/certificates', label: 'Certificates' }, { href: '/contact', label: 'Contact' }].map(l => (
                                <Link key={l.href} href={l.href} className="block text-sm text-slate-600 dark:text-slate-400 hover:text-indigo-400 transition-colors no-underline">{l.label}</Link>
                            ))}
                        </div>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 mb-4">Contact</h4>
                        <div className="space-y-2 text-sm">
                            <a href="mailto:alimaaz1501@gmail.com" className="block text-slate-600 dark:text-slate-400 hover:text-indigo-400 transition-colors no-underline break-all">alimaaz1501@gmail.com</a>
                            <a href="tel:+918780837840" className="block text-slate-600 dark:text-slate-400 hover:text-indigo-400 transition-colors no-underline">+91 8780837840</a>
                            <p className="text-slate-500 dark:text-slate-500 m-0">Ahmedabad, India</p>
                        </div>
                    </div>

                    {/* Social */}
                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 mb-4">Social</h4>
                        <div className="flex gap-3">
                            <a href="https://www.linkedin.com/in/alimaaz-akhter-38014a240/" target="_blank" rel="noopener" className="w-10 h-10 rounded-lg bg-white/5 dark:bg-white/5 border border-slate-200/10 dark:border-white/10 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-indigo-400 hover:border-indigo-500/30 transition-all no-underline" aria-label="LinkedIn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                            </a>
                            <a href="https://github.com/alimaazakhter" target="_blank" rel="noopener" className="w-10 h-10 rounded-lg bg-white/5 dark:bg-white/5 border border-slate-200/10 dark:border-white/10 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-indigo-400 hover:border-indigo-500/30 transition-all no-underline" aria-label="GitHub">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                            </a>
                            <a href="https://www.instagram.com/alimaaz.707__?igsh=bXBvdzY1c3h2dHYz&utm_source=qr" target="_blank" rel="noopener" className="w-10 h-10 rounded-lg bg-white/5 dark:bg-white/5 border border-slate-200/10 dark:border-white/10 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-indigo-400 hover:border-indigo-500/30 transition-all no-underline" aria-label="Instagram">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="section-divider mt-10 sm:mt-12 mb-6 sm:mb-8" />
                <p className="text-xs text-slate-400 dark:text-slate-600 text-center">© {new Date().getFullYear()} Alimaaz Akhter. All rights reserved.</p>
            </div>

            {/* Scroll to top */}
            {showScroll && (
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-indigo-500/20 backdrop-blur-md border border-indigo-500/30 text-indigo-400 flex items-center justify-center cursor-pointer hover:bg-indigo-500/40 hover:scale-110 transition-all shadow-[0_0_20px_rgba(99,102,241,0.2)] group"
                    aria-label="Scroll to top"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-y-1 transition-transform">
                        <path d="m18 15-6-6-6 6" />
                    </svg>
                </button>
            )}

            {/* Profile Image Modal */}
            {isImageOpen && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 bg-black/80 backdrop-blur-md animate-fade-in"
                    onClick={() => setIsImageOpen(false)}
                >
                    <div className="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] bg-[#0a0a0f]" onClick={e => e.stopPropagation()}>
                        <Image src="/profile.jpeg" alt="Alimaaz Akhter" fill className="object-cover" sizes="(max-width: 768px) 100vw, 400px" priority />
                        <button
                            onClick={() => setIsImageOpen(false)}
                            className="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/80 rounded-full flex items-center justify-center text-white backdrop-blur-sm transition-all border border-white/10"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18M6 6l12 12" /></svg>
                        </button>
                    </div>
                </div>
            )}
        </footer>
    );
}
