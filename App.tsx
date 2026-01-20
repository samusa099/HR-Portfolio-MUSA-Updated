
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectGrid from './components/ProjectGrid';
import Experience from './components/Experience';
import SkillsSection from './components/SkillsSection';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIAssistant from './components/AIAssistant';
import LinkedInFeed from './components/LinkedInFeed';
import AboutMe from './components/AboutMe';
import HRMethodology from './components/HRMethodology';
import Volunteering from './components/Volunteering';
import MouseTracker from './components/MouseTracker';
import TestScores from './components/TestScores';
import CourseraPortfolio from './components/CourseraPortfolio';
import StrategyLab from './components/StrategyLab';
import { INITIAL_DATA } from './constants';
import { PortfolioData } from './types';

const App: React.FC = () => {
  const [data] = useState<PortfolioData>(INITIAL_DATA);
  const [scrolled, setScrolled] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('theme') as 'light' | 'dark') || 'dark';
    }
    return 'dark';
  });

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';

      const progressInterval = setInterval(() => {
        setLoadingProgress(prev => {
          if (prev >= 100) return 100;
          const increment = Math.random() * 15 + 5;
          return Math.min(prev + increment, 100);
        });
      }, 80);

      const timer = setTimeout(() => {
        setIsLoading(false);
        document.body.style.overflow = 'unset';
        clearInterval(progressInterval);
        setLoadingProgress(100);
      }, 1500);

      return () => {
        clearInterval(progressInterval);
        clearTimeout(timer);
        document.body.style.overflow = 'unset';
      };
    }
  }, [isLoading]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);

    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal');
        }
      });
    }, observerOptions);

    const observerTargets = document.querySelectorAll('.reveal-on-scroll');
    observerTargets.forEach(el => observer.observe(el));

    const root = window.document.documentElement;
    theme === 'dark' ? root.classList.add('dark') : root.classList.remove('dark');
    localStorage.setItem('theme', theme);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, [theme, isLoading]);

  return (
    <>
      {/* Preloader */}
      <div
        className={`fixed inset-0 z-[99998] bg-[#020617] flex flex-col items-center justify-center transition-all duration-700 ease-in-out ${isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
      >
        <div className="relative flex flex-col items-center w-full max-w-md px-6 text-center">
          <div className="flex items-center gap-1 text-4xl md:text-7xl font-black tracking-tightest text-white mb-12 overflow-hidden select-none">
            <span className={`transition-transform duration-700 ease-out text-blue-500 ${isLoading ? 'translate-y-0' : '-translate-y-full'}`}>
              SIAM
            </span>
            <span className={`transition-transform duration-700 ease-out delay-75 text-emerald-500 ${isLoading ? 'translate-y-0' : '-translate-y-full'}`}>.</span>
            <span className={`transition-transform duration-700 ease-out delay-100 text-emerald-500 ${isLoading ? 'translate-y-0' : '-translate-y-full'}`}>
              MUSA
            </span>
          </div>
          <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden mb-4 relative">
            <div
              className="h-full bg-gradient-to-r from-blue-600 via-emerald-500 to-blue-600 animate-gradient-x transition-all duration-100 ease-out shadow-[0_0_15px_rgba(59,130,246,0.5)]"
              style={{ width: `${loadingProgress}%` }}
            ></div>
          </div>
          <div className="flex justify-between w-full text-[9px] font-black uppercase tracking-[0.2em] text-slate-500">
            <span className="animate-pulse">Loading Assets...</span>
            <span className="font-mono text-blue-500">{Math.round(loadingProgress)}%</span>
          </div>
        </div>
      </div>

      <div className={`min-h-screen transition-colors duration-1000 selection:bg-blue-500 selection:text-white cursor-none-global cursor-none ${isLoading ? 'overflow-hidden h-screen' : ''}`}>
        <MouseTracker />

        <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
          <div className="absolute top-[-10%] -left-[10%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[140px] animate-blob"></div>
          <div className="absolute bottom-[-10%] -right-[10%] w-[50%] h-[50%] bg-emerald-600/5 rounded-full blur-[140px] animate-blob" style={{ animationDelay: '3s' }}></div>
        </div>

        <Navbar scrolled={scrolled} theme={theme} onToggleTheme={() => setTheme(t => t === 'dark' ? 'light' : 'dark')} />

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-0">

          <div className="pt-20">
            <Hero name={data.name} role={data.role} bio={data.bio} />
          </div>

          <section id="experience" className="py-24 md:py-32 reveal-on-scroll">
            <Experience />
          </section>

          <section id="strategy-lab" className="py-24 md:py-32 reveal-on-scroll">
            <StrategyLab />
          </section>

          <section id="skills" className="py-24 md:py-32 reveal-on-scroll">
            <SkillsSection skills={data.skills} />
          </section>

          <section id="methodology" className="py-24 md:py-32 reveal-on-scroll">
            <HRMethodology />
          </section>

          <section id="about" className="py-24 md:py-32 reveal-on-scroll">
            <AboutMe />
          </section>

          <section id="projects" className="py-24 md:py-32 reveal-on-scroll">
            <div className="mb-16 relative z-10">
              <h2 className="text-5xl md:text-7xl font-black dark:text-white text-slate-900 tracking-tightest leading-none relative">
                Strategic Projects
              </h2>
              <div className="h-2 w-24 bg-blue-600 rounded-full mt-8"></div>
            </div>
            <ProjectGrid projects={data.projects} />
          </section>

          <section id="coursera" className="py-24 md:py-32 reveal-on-scroll">
            <CourseraPortfolio />
          </section>

          <section id="scores" className="py-24 md:py-32 reveal-on-scroll">
            <TestScores />
          </section>

          <section id="activity" className="py-24 md:py-32 reveal-on-scroll">
            <LinkedInFeed />
          </section>

          <section id="recommendations" className="py-24 md:py-32 reveal-on-scroll">
            <Testimonials testimonials={data.testimonials} />
          </section>

          <section id="volunteering" className="py-24 md:py-32 reveal-on-scroll">
            <Volunteering />
          </section>

          <section id="contact" className="py-24 md:py-32 reveal-on-scroll">
            <Contact />
          </section>
        </main>

        <Footer name={data.name} />
        <AIAssistant portfolioContext={data} />
      </div>
    </>
  );
};

export default App;
