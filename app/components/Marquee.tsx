'use client';

import React from 'react';

const items = [
  'Python', '•', 'Machine Learning', '•', 'Data Science', '•', 'Web Development', '•', 'Scikit-Learn', '•', 'OpenCV', '•', 'Pandas', '•', 'Power BI', '•', 'Streamlit', '•', 'Flask', '•', 'Generative AI', '•', 'NLP', '•', 'SQL', '•', 'n8n Automation', '•', 'LLMs', '•', 'Deep Learning', '•', 'React', '•', 'Next.js', '•', 'MongoDB', '•', 'Supabase', '•', 'MySQL', '•', 'Git', '•', 'GitHub', '•', 'Hadoop', '•', 'Firebase', '•', 'Slack', '•', 'Airtable', '•'
];

export default function Marquee() {
  return (
    <div className="w-full overflow-hidden py-5 sm:py-6 border-y border-white/5 dark:border-white/5 bg-white bg-opacity-5 dark:bg-[#0f0f13]">
      <div className="animate-marquee flex whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className={`mx-3 sm:mx-4 text-sm sm:text-base font-medium ${item === '•'
              ? 'text-indigo-400/50'
              : 'text-slate-500 dark:text-slate-400 hover:text-indigo-400 dark:hover:text-indigo-300 transition-colors cursor-default'
              }`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
