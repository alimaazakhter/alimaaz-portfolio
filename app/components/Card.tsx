import React from 'react';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    showAccent?: boolean;
}

export default function Card({ children, className = '', delay = 0, showAccent = false }: CardProps) {
    return (
        <section
            className={`bg-white dark:bg-slate-800 rounded-xl sm:rounded-2xl p-5 sm:p-8 border border-slate-200/60 dark:border-slate-700/60 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden ${className}`}
            style={{ animationDelay: `${delay}s` }}
        >
            {showAccent && (
                <div
                    className="absolute left-0 top-0 bottom-0 bg-blue-600"
                    style={{ width: 'calc(var(--spacing) * 1.5)' }}
                ></div>
            )}
            {children}
        </section>
    );
}
