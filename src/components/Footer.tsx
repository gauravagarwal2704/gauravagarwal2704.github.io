import { ArrowUp } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-zinc-200/40 dark:border-zinc-800/40">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-left">
          <p className="text-zinc-500 text-sm">
            Designed & Built by{' '}
            <span className="text-zinc-700 dark:text-zinc-300">Gaurav Agarwal</span>
          </p>
        </div>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2 text-zinc-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300 text-sm group"
          aria-label="Back to top"
        >
          Back to top
          <ArrowUp
            size={14}
            className="group-hover:-translate-y-0.5 transition-transform duration-300"
          />
        </button>
      </div>
    </footer>
  );
}
