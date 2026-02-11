import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [useTextLogo, setUseTextLogo] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navLinks.map((l) => l.href.slice(1));
      let current = '';
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el && el.getBoundingClientRect().top <= 120) {
          current = section;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/80 dark:bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-200/50 dark:border-zinc-800/50 py-3'
          : 'py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-zinc-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
            aria-label="Home"
          >
            {useTextLogo ? (
              <span className="text-5xl font-bold font-display tracking-tight">
                GA<span className="text-indigo-600 dark:text-indigo-400">.</span>
              </span>
            ) : (
              <div
                className="h-12 w-20 bg-current"
                style={{
                  WebkitMaskImage: 'url(/logo.svg)',
                  WebkitMaskSize: 'contain',
                  WebkitMaskRepeat: 'no-repeat',
                  WebkitMaskPosition: 'center',
                  maskImage: 'url(/logo.svg)',
                  maskSize: 'contain',
                  maskRepeat: 'no-repeat',
                  maskPosition: 'center',
                }}
              />
            )}
          </button>
          <button
            onClick={() => setUseTextLogo((v) => !v)}
            className="text-[10px] px-1.5 py-0.5 rounded border border-zinc-300 dark:border-zinc-700 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors"
            title="Switch logo variant"
          >
            {useTextLogo ? 'SVG' : 'Text'}
          </button>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <button
              key={link.name}
              onClick={() => scrollTo(link.href)}
              className={`text-sm transition-all duration-300 hover:text-zinc-900 dark:hover:text-white ${
                activeSection === link.href.slice(1)
                  ? 'text-indigo-600 dark:text-indigo-400'
                  : 'text-zinc-500 dark:text-zinc-400'
              }`}
            >
              <span className="text-indigo-500/70 dark:text-indigo-400/70 font-mono text-xs mr-1.5">
                0{i + 1}.
              </span>
              {link.name}
            </button>
          ))}

          <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all duration-300"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all duration-300"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'max-h-80' : 'max-h-0'
        }`}
      >
        <div className="bg-white/95 dark:bg-zinc-900/95 backdrop-blur-xl border-b border-zinc-200/50 dark:border-zinc-800/50 px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link, i) => (
            <button
              key={link.name}
              onClick={() => scrollTo(link.href)}
              className={`text-left text-sm transition-colors ${
                activeSection === link.href.slice(1)
                  ? 'text-indigo-600 dark:text-indigo-400'
                  : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
              }`}
            >
              <span className="text-indigo-500/70 dark:text-indigo-400/70 font-mono text-xs mr-2">
                0{i + 1}.
              </span>
              {link.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
