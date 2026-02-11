import { useInView } from '@/hooks/useInView';
import { MapPin, Calendar } from 'lucide-react';

interface ExperienceItem {
  company: string;
  parent?: string;
  role: string;
  period: string;
  location: string;
  achievements: string[];
  tech: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: 'OpenTable',
    parent: 'Booking Holdings Inc.',
    role: 'Senior Software Engineer',
    period: 'Apr 2021 — Present',
    location: 'Remote (Mumbai, India)',
    achievements: [
      'Seamlessly integrated around 30+ third-party apps into the OpenTable restaurant platform, significantly enhancing system capabilities and refining the user interface',
      "Updated and maintained the India team's frontend repositories, ensuring code quality and overall application performance",
      'Spearheaded AI adoption and initiated the FE guild within the team by conducting several sessions internally and across teams, fostering innovation and continuous learning',
      'Managed and enhanced multiple restaurant apps, including Menu and Order Manager, Partner Management Console, and developer documentation',
      'Conceptualized and built an internal dashboard from scratch in Figma & React',
      'Authored comprehensive unit and integration tests to ensure application reliability and performance, reducing bugs',
    ],
    tech: ['React', 'Redux', 'TypeScript', 'CSS', 'Jest', 'Cypress', 'Figma', 'Microfrontend', 'Monorepo', 'Express.js'],
  },
  {
    company: 'RocketBox',
    role: 'Senior Software Engineer',
    period: 'Nov 2019 — Mar 2021',
    location: 'Mumbai, India',
    achievements: [
      'Built the "Garud" portal to streamline pickup and shipment requests for multiple delivery partners, improving operational efficiency by 88%',
      'Automated backend and frontend deployment by setting up a CI/CD pipeline using AWS ECS and GitHub Actions, reducing deployment time to a few seconds',
      "Revamped the company's official website from scratch, enhancing user interface and user experience, increasing web traffic by 40%",
    ],
    tech: ['React', 'Redux', 'CSS', 'AWS ECS', 'Docker', 'Kubernetes', 'Material UI', 'Jest'],
  },
  {
    company: 'Servify',
    role: 'Senior Product Engineer',
    period: 'Mar 2018 — Oct 2019',
    location: 'Mumbai, India',
    achievements: [
      'Engineered consumer-facing after-sales portals for leading brands like OnePlus and Nokia, resulting in a 45% improvement in consumer onboarding',
      'Implemented an in-app web-view for the Jio app, simplifying device and appliance repair registrations for consumers',
    ],
    tech: ['React', 'Redux', 'JavaScript', 'CI/CD', 'CSS'],
  },
  {
    company: 'AutoNxt Automation',
    role: 'Frontend Engineer',
    period: 'Oct 2017 — Feb 2018',
    location: 'Mumbai, India',
    achievements: [
      'Developed the official website of the company using Angular 4, improving brand presence and user engagement',
      'Created a portal for a GPS-based project using ReactJS and Firebase, enhancing real-time tracking capabilities',
    ],
    tech: ['React', 'CSS', 'JavaScript', 'Firebase', 'Angular 4'],
  },
  {
    company: 'Persistent Systems',
    role: 'Software Engineer',
    period: 'Jan 2016 — Sept 2017',
    location: 'Pune, India',
    achievements: [
      'Contributed to the UI development of IBM Text IoT Fleet Management System, enabling real-time tracking of fleet (trucks) and vehicle parameters (e.g., temperature, humidity, and speed) via IoT platform',
    ],
    tech: [],
  },
];

function ExperienceCard({ experience, index }: { experience: ExperienceItem; index: number }) {
  const { ref, isInView } = useInView({ threshold: 0.15 });

  return (
    <div
      ref={ref}
      className={`relative pl-8 md:pl-12 pb-12 last:pb-0 transition-all duration-700 ease-out ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="absolute left-0 top-0 bottom-0 w-px bg-zinc-200 dark:bg-zinc-800">
        <div
          className={`absolute top-1.5 -left-[5px] w-[11px] h-[11px] rounded-full border-2 transition-colors duration-500 ${
            isInView
              ? 'border-indigo-500 dark:border-indigo-400 bg-indigo-500/20 dark:bg-indigo-400/20'
              : 'border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900'
          }`}
        />
      </div>

      <div className="group">
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-3">
          <div>
            <h3 className="text-lg md:text-xl font-semibold text-zinc-900 dark:text-white font-display">
              {experience.company}
              {experience.parent && (
                <span className="text-zinc-500 font-normal text-sm ml-2">
                  ({experience.parent})
                </span>
              )}
            </h3>
            <p className="text-indigo-600 dark:text-indigo-400 text-sm font-medium mt-0.5">
              {experience.role}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4 mb-5 text-zinc-500 text-sm">
          <span className="flex items-center gap-1.5">
            <Calendar size={13} />
            {experience.period}
          </span>
          <span className="flex items-center gap-1.5">
            <MapPin size={13} />
            {experience.location}
          </span>
        </div>

        <ul className="space-y-3 mb-5">
          {experience.achievements.map((achievement, i) => (
            <li key={i} className="flex gap-3 text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
              <span className="text-indigo-500/60 dark:text-indigo-400/60 mt-1.5 shrink-0">
                <svg width="6" height="6" viewBox="0 0 6 6" fill="currentColor">
                  <rect width="6" height="6" rx="1" />
                </svg>
              </span>
              {achievement}
            </li>
          ))}
        </ul>

        {experience.tech.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {experience.tech.map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 text-xs rounded-md bg-zinc-100 dark:bg-zinc-800/60 text-zinc-600 dark:text-zinc-400 border border-zinc-200/80 dark:border-zinc-800/80"
              >
                {t}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export function Experience() {
  const { ref, isInView } = useInView();

  return (
    <section id="experience" className="py-28 md:py-36 px-6">
      <div className="max-w-5xl mx-auto">
        <div
          ref={ref}
          className={`flex items-center gap-4 mb-16 transition-all duration-700 ease-out ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="text-indigo-600 dark:text-indigo-400 font-mono text-sm">03.</span>
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white font-display">
            Experience
          </h2>
          <div className="flex-1 h-px bg-zinc-200 dark:bg-zinc-800 ml-4" />
        </div>

        <div className="max-w-3xl">
          {experiences.map((exp, i) => (
            <ExperienceCard key={exp.company} experience={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
