import { useInView } from '@/hooks/useInView';
import { GraduationCap, Languages } from 'lucide-react';

const stats = [
  { number: '10+', label: 'Years Experience' },
  { number: '5+', label: 'Companies' },
  { number: '30+', label: 'App Integrations' },
  { number: '88%', label: 'Efficiency Gain' },
];

export function About() {
  const { ref, isInView } = useInView();

  return (
    <section id="about" className="py-28 md:py-36 px-6">
      <div
        ref={ref}
        className={`max-w-5xl mx-auto transition-all duration-700 ease-out ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="flex items-center gap-4 mb-16">
          <span className="text-indigo-600 dark:text-indigo-400 font-mono text-sm">01.</span>
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white font-display">
            About Me
          </h2>
          <div className="flex-1 h-px bg-zinc-200 dark:bg-zinc-800 ml-4" />
        </div>

        <div className="grid lg:grid-cols-5 gap-16">
          <div className="lg:col-span-3 space-y-6">
            <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed">
              A passionate Senior Software Engineer with over{' '}
              <span className="text-zinc-900 dark:text-white font-medium">10 years of experience</span>{' '}
              building modern web applications. I specialize in creating seamless
              user experiences using{' '}
              <span className="text-zinc-900 dark:text-white font-medium">
                React, TypeScript
              </span>
              , and cutting-edge frontend technologies.
            </p>
            <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed">
              Currently at{' '}
              <span className="text-indigo-600 dark:text-indigo-400 font-medium">
                OpenTable (Booking Holdings Inc.)
              </span>
              , I lead frontend initiatives, drive AI adoption, and build
              scalable applications that serve millions of users worldwide.
            </p>
            <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed">
              Beyond code, I'm passionate about mentoring teams, establishing
              engineering guilds, and fostering a culture of continuous learning
              and innovation.
            </p>
          </div>

          <div className="lg:col-span-2 space-y-8">
            <div className="p-6 rounded-2xl border border-zinc-200/60 dark:border-zinc-800/60 bg-zinc-50 dark:bg-zinc-900/30">
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap size={18} className="text-indigo-600 dark:text-indigo-400" />
                <h3 className="text-zinc-900 dark:text-white font-semibold text-sm uppercase tracking-wider">
                  Education
                </h3>
              </div>
              <p className="text-zinc-700 dark:text-zinc-300 font-medium">B.E. Computer Science</p>
              <p className="text-zinc-500 text-sm mt-1">
                Mumbai University &middot; 2011 &ndash; 2015
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-zinc-200/60 dark:border-zinc-800/60 bg-zinc-50 dark:bg-zinc-900/30">
              <div className="flex items-center gap-3 mb-4">
                <Languages size={18} className="text-indigo-600 dark:text-indigo-400" />
                <h3 className="text-zinc-900 dark:text-white font-semibold text-sm uppercase tracking-wider">
                  Languages
                </h3>
              </div>
              <div className="space-y-2.5">
                {[
                  { lang: 'Hindi', level: 'Native' },
                  { lang: 'Marwadi', level: 'Native' },
                  { lang: 'English', level: 'Fluent' },
                  { lang: 'Marathi', level: 'Intermediate' },
                ].map(({ lang, level }) => (
                  <div key={lang} className="flex justify-between items-center">
                    <span className="text-zinc-700 dark:text-zinc-300 text-sm">{lang}</span>
                    <span className="text-zinc-400 dark:text-zinc-600 text-xs">{level}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-16 border-t border-zinc-200/40 dark:border-zinc-800/40">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center transition-all duration-700 ease-out ${
                isInView
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${i * 100 + 300}ms` }}
            >
              <p className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white font-display mb-2">
                {stat.number}
              </p>
              <p className="text-zinc-500 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
