import { ArrowDown, Linkedin, Github, Mail, Phone } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-white/75 dark:bg-zinc-950/70 transition-colors duration-300" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/30 dark:from-zinc-950/40 via-transparent to-white dark:to-zinc-950 transition-colors duration-300" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="text-indigo-600 dark:text-indigo-400 text-sm md:text-base tracking-[0.3em] uppercase mb-8 font-medium opacity-0 animate-fade-in">
          Hello, I'm
        </p>

        <h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] text-zinc-900 dark:text-white tracking-tight leading-none mb-6 opacity-0 animate-fade-in-delayed"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          // style={{ fontFamily: "'Outfit', sans-serif" }}
        >
          Gaurav Agarwal
        </h1>

        <h2 className="text-xl sm:text-2xl md:text-3xl text-zinc-600 dark:text-zinc-400 font-light mb-8 opacity-0 animate-fade-in-delayed-2">
          Sr. Software Engineer
        </h2>

        <p className="text-zinc-500 text-base md:text-lg italic max-w-xl mx-auto mb-12 opacity-0 animate-fade-in-delayed-3 leading-relaxed">
          &ldquo;Crafting seamless user experiences through the art of code&rdquo;
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 opacity-0 animate-fade-in-delayed-3">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-3 bg-indigo-500 text-white text-sm font-medium rounded-full hover:bg-indigo-600 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/25"
          >
            Get in Touch
          </a>
          <a
            href="#experience"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#experience')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-3 border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 text-sm font-medium rounded-full hover:border-indigo-500/50 hover:text-zinc-900 dark:hover:text-white transition-all duration-300"
          >
            View My Work
          </a>
        </div>

        <div className="flex items-center justify-center gap-5 opacity-0 animate-fade-in-delayed-4">
          <a
            href="https://linkedin.com/in/gauravagarwal2704"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 text-zinc-400 dark:text-zinc-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 hover:-translate-y-0.5"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://github.com/gauravagarwal2704"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 text-zinc-400 dark:text-zinc-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 hover:-translate-y-0.5"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="mailto:agarwal.gaurav2704@gmail.com"
            className="p-2.5 text-zinc-400 dark:text-zinc-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 hover:-translate-y-0.5"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
          <a
            href="tel:+918652375872"
            className="p-2.5 text-zinc-400 dark:text-zinc-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 hover:-translate-y-0.5"
            aria-label="Phone"
          >
            <Phone size={20} />
          </a>
        </div>
      </div>

      <button
        onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-400 dark:text-zinc-600 hover:text-zinc-600 dark:hover:text-zinc-400 transition-colors duration-300 cursor-pointer"
        aria-label="Scroll down"
      >
        <span className="text-[10px] tracking-[0.25em] uppercase font-medium">Scroll</span>
        <ArrowDown size={14} className="animate-pulse-subtle" />
      </button>
    </section>
  );
}
