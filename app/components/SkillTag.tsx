import React from 'react';

interface SkillTagProps {
    name: string;
}

export default function SkillTag({ name }: SkillTagProps) {
    return (
        <span className="inline-block px-4 py-2 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 font-medium text-sm rounded-full border border-slate-200 dark:border-slate-600 shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:border-blue-300 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all cursor-default">
            {name}
        </span>
    );
}
