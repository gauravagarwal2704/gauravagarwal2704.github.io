import { useInView } from '@/hooks/useInView';
import { ExternalLink, Code2 } from 'lucide-react';

export function Projects() {
  const { ref, isInView } = useInView();

  return (
    <section id="projects" className="py-28 md:py-36 px-6">
      <div
        ref={ref}
        className={`max-w-5xl mx-auto transition-all duration-700 ease-out ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="flex items-center gap-4 mb-16">
          <span className="text-indigo-600 dark:text-indigo-400 font-mono text-sm">04.</span>
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white font-display">
            Featured Project
          </h2>
          <div className="flex-1 h-px bg-zinc-200 dark:bg-zinc-800 ml-4" />
        </div>

        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500/20 via-violet-500/20 to-indigo-500/20 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="relative p-8 md:p-12 rounded-2xl border border-zinc-200/60 dark:border-zinc-800/60 bg-zinc-50 dark:bg-zinc-900/40 backdrop-blur-sm">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
              <div>
                <p className="text-indigo-600 dark:text-indigo-400 text-xs font-mono tracking-wider uppercase mb-3">
                  Freelance Project
                </p>
                <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white font-display mb-2">
                  Karma and Luck
                </h3>
                <p className="text-zinc-500 text-sm">
                  karmaandluck.com
                </p>
              </div>
              <a
                href="https://karmaandluck.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 border border-zinc-300 dark:border-zinc-700 rounded-full text-sm text-zinc-700 dark:text-zinc-300
                  hover:border-indigo-500/50 hover:text-zinc-900 dark:hover:text-white transition-all duration-300 shrink-0 w-fit"
              >
                Visit Site
                <ExternalLink size={14} />
              </a>
            </div>

            <p className="text-zinc-600 dark:text-zinc-400 text-base leading-relaxed mb-8 max-w-2xl">
              A modern spiritual lifestyle brand's e-commerce website developed
              using Shopify Storefront from the ground up using ReactJS-based
              Hydrogen Framework v1. Created custom features tailored to the
              client's needs with significantly optimized GraphQL queries and
              responsive UI built with Tailwind CSS.
            </p>

            <div className="flex items-center gap-3 mb-4">
              <Code2 size={14} className="text-zinc-500" />
              <span className="text-zinc-500 text-xs uppercase tracking-wider font-medium">
                Tech Stack
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                'React',
                'Hydrogen v1',
                'Shopify Storefront',
                'GraphQL',
                'Tailwind CSS',
                'JavaScript',
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 text-xs rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400
                    hover:border-indigo-500/40 hover:text-indigo-600 dark:hover:text-indigo-300 transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
