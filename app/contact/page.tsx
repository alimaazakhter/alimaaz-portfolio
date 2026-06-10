'use client';

import { useEffect, useRef, useState } from "react";

function useReveal() {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);
    useEffect(() => { const el = ref.current; if (!el) return; const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.1 }); obs.observe(el); return () => obs.disconnect(); }, []);
    return { ref, visible };
}

export default function Contact() {
    const infoRef = useReveal();
    const formRef = useReveal();

    return (
        <div className="pt-24 sm:pt-32 pb-16 sm:pb-24">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-12 sm:mb-20 animate-fade-in">
                <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-indigo-400 font-medium mb-4">Contact</p>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-800 dark:text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    Let&apos;s <span className="gradient-text">Connect</span>
                </h1>
                <div className="accent-line w-20 mt-6" />
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-16 items-start">
                {/* Info */}
                <div ref={infoRef.ref} className={`space-y-4 sm:space-y-6 ${infoRef.visible ? 'animate-reveal-up' : 'opacity-0'}`}>
                    <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
                        I&apos;m always interested in hearing about new projects, opportunities, or just chatting about data science and AI.
                    </p>

                    {[
                        { icon: "📧", label: "Email", value: "alimaaz1501@gmail.com", href: "mailto:alimaaz1501@gmail.com" },
                        { icon: "📱", label: "Phone", value: "+91 8780837840", href: "tel:+918780837840" },
                        { icon: "📍", label: "Location", value: "Ahmedabad, Gujarat, India", href: null },
                    ].map((item, i) => (
                        <div key={i} className="glass-card rounded-xl p-4 sm:p-5 flex items-center gap-4 group">
                            <span className="text-xl sm:text-2xl shrink-0">{item.icon}</span>
                            <div className="min-w-0">
                                <span className="text-[10px] sm:text-xs uppercase tracking-wider text-slate-400 dark:text-slate-500 font-medium">{item.label}</span>
                                {item.href ? (
                                    <a href={item.href} className="block text-sm sm:text-base font-semibold text-slate-800 dark:text-white hover:text-indigo-400 transition-colors no-underline break-all">{item.value}</a>
                                ) : (
                                    <p className="text-sm sm:text-base font-semibold text-slate-800 dark:text-white m-0">{item.value}</p>
                                )}
                            </div>
                        </div>
                    ))}

                    {/* Social links */}
                    <div className="glass-card rounded-xl p-4 sm:p-5">
                        <span className="text-[10px] sm:text-xs uppercase tracking-wider text-slate-400 dark:text-slate-500 font-medium block mb-3">Connect</span>
                        <div className="flex gap-3">
                            <a href="https://www.linkedin.com/in/alimaaz-akhter-38014a240/" target="_blank" rel="noopener" className="px-5 py-2.5 rounded-lg bg-indigo-500/10 text-indigo-400 font-medium text-sm hover:bg-indigo-500/20 transition-all no-underline">LinkedIn</a>
                            <a href="https://github.com/alimaazakhter" target="_blank" rel="noopener" className="px-5 py-2.5 rounded-lg bg-indigo-500/10 text-indigo-400 font-medium text-sm hover:bg-indigo-500/20 transition-all no-underline">GitHub</a>
                        </div>
                    </div>
                </div>

                {/* Form */}
                <div ref={formRef.ref} className={`${formRef.visible ? 'animate-reveal-up' : 'opacity-0'}`} style={{ animationDelay: '0.15s' }}>
                    <div className="glass-card rounded-2xl p-6 sm:p-8">
                        <h3 className="text-lg sm:text-xl font-bold text-slate-800 dark:text-white mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Send a Message</h3>
                        <form action="https://formspree.io/f/xdalroen" method="POST" className="space-y-4 sm:space-y-5">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="name" className="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400 mb-1.5 block">Name</label>
                                    <input type="text" id="name" name="name" required className="w-full px-4 py-3 rounded-xl border border-slate-200/20 dark:border-white/10 bg-white bg-opacity-5 dark:bg-[#0f0f13] text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/20 outline-none transition-all text-sm" placeholder="Your name" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400 mb-1.5 block">Email</label>
                                    <input type="email" id="email" name="email" required className="w-full px-4 py-3 rounded-xl border border-slate-200/20 dark:border-white/10 bg-white bg-opacity-5 dark:bg-[#0f0f13] text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/20 outline-none transition-all text-sm" placeholder="your@email.com" />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="subject" className="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400 mb-1.5 block">Subject</label>
                                <input type="text" id="subject" name="subject" required className="w-full px-4 py-3 rounded-xl border border-slate-200/20 dark:border-white/10 bg-white bg-opacity-5 dark:bg-[#0f0f13] text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/20 outline-none transition-all text-sm" placeholder="What is this about?" />
                            </div>
                            <div>
                                <label htmlFor="message" className="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400 mb-1.5 block">Message</label>
                                <textarea id="message" name="message" rows={5} required className="w-full px-4 py-3 rounded-xl border border-slate-200/20 dark:border-white/10 bg-white bg-opacity-5 dark:bg-[#0f0f13] text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/20 outline-none transition-all resize-none text-sm" placeholder="Tell me about your project..."></textarea>
                            </div>
                            <button type="submit" className="w-full py-3.5 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-xl transition-all shadow-lg hover:shadow-indigo-500/25 cursor-pointer flex items-center justify-center gap-2 text-sm sm:text-base group">
                                Send Message <span className="transition-transform group-hover:translate-x-1">→</span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
