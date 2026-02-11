import { useInView } from '@/hooks/useInView';

interface Skill {
  name: string;
  icon?: string;
}

const skillGroups: { title: string; skills: Skill[] }[] = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', icon: '/icons/react.svg' },
      { name: 'TypeScript', icon: '/icons/typescript.svg' },
      { name: 'Next.js', icon: '/icons/nextjs.svg' },
      { name: 'Angular' },
      { name: 'Redux', icon: '/icons/redux.svg' },
      { name: 'CSS 3', icon: '/icons/css3.svg' },
      { name: 'Tailwind', icon: '/icons/tailwind.svg' },
    ],
  },
  {
    title: 'Tools & Frameworks',
    skills: [
      { name: 'GraphQL', icon: '/icons/graphql.svg' },
      { name: 'Jest', icon: '/icons/jest.svg' },
      { name: 'Cypress', icon: '/icons/cypress.svg' },
      { name: 'Figma', icon: '/icons/figma.svg' },
      { name: "Shopify's Hydrogen", icon: '/icons/hydrogen.svg' },
    ],
  },
  {
    title: 'Architecture',
    skills: [
      { name: 'Microfrontend' },
      { name: 'Monorepo' },
    ],
  },
  {
    title: 'Backend & DevOps',
    skills: [
      { name: 'Express.js', icon: '/icons/nodejs.svg' },
      { name: 'AWS ECS', icon: '/icons/aws.svg' },
      { name: 'Docker', icon: '/icons/docker.svg' },
      { name: 'Kubernetes' },
      { name: 'Firebase', icon: '/icons/firebase.svg' },
      { name: 'CI/CD' },
    ],
  },
];

export function Skills() {
  const { ref, isInView } = useInView();

  return (
    <section id="skills" className="py-28 md:py-36 px-6">
      <div
        ref={ref}
        className={`max-w-5xl mx-auto transition-all duration-700 ease-out ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="flex items-center gap-4 mb-16">
          <span className="text-indigo-600 dark:text-indigo-400 font-mono text-sm">02.</span>
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white font-display">
            Skills & Technologies
          </h2>
          <div className="flex-1 h-px bg-zinc-200 dark:bg-zinc-800 ml-4" />
        </div>

        <div className="space-y-12">
          {skillGroups.map((group, groupIndex) => (
            <div
              key={group.title}
              className={`transition-all duration-700 ease-out ${
                isInView
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${groupIndex * 100 + 200}ms` }}
            >
              <h3 className="text-zinc-500 text-xs uppercase tracking-[0.2em] mb-5 font-medium">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="group flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 text-sm
                      hover:border-indigo-500/40 hover:text-indigo-600 dark:hover:text-indigo-300 hover:bg-indigo-50 dark:hover:bg-indigo-500/5
                      transition-all duration-300 cursor-default"
                  >
                    {skill.icon && (
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-4 h-4 object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                      />
                    )}
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
