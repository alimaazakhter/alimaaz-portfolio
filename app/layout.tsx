import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ThemeProvider from "./components/ThemeProvider";
import AnimatedBackground from "./components/AnimatedBackground";
import CursorGlow from "./components/CursorGlow";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Alimaaz Akhter — Data Science & ML Portfolio',
    description: 'Data Science, Machine Learning, and AI Portfolio by Alimaaz Akhter',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />
                <script dangerouslySetInnerHTML={{ __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark')}}catch(e){}})();` }} />
            </head>
            <body className="bg-[#fafbfc] dark:bg-[#0a0a0f] text-slate-800 dark:text-slate-100 antialiased transition-colors duration-500" style={{ fontFamily: "'Inter', 'Space Grotesk', sans-serif" }}>
                <ThemeProvider>
                    <AnimatedBackground />
                    <CursorGlow />
                    <Navbar />
                    <main className="relative z-10">{children}</main>
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}
