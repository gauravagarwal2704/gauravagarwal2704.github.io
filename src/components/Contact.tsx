import { useInView } from '@/hooks/useInView';
import { Mail, Phone, MapPin, Linkedin, Github, ArrowUpRight } from 'lucide-react';

const contactDetails = [
  {
    icon: Mail,
    label: 'Email',
    value: 'agarwal.gaurav2704@gmail.com',
    href: 'mailto:agarwal.gaurav2704@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '(+91) 8652 375 872',
    href: 'tel:+918652375872',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Mumbai, India',
    href: null,
  },
];

const socialLinks = [
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'gauravagarwal2704',
    href: 'https://linkedin.com/in/gauravagarwal2704',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'gauravagarwal2704',
    href: 'https://github.com/gauravagarwal2704',
  },
];

export function Contact() {
  const { ref, isInView } = useInView();

  return (
    <section id="contact" className="py-28 md:py-36 px-6">
      <div
        ref={ref}
        className={`max-w-5xl mx-auto transition-all duration-700 ease-out ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="flex items-center gap-4 mb-8">
          <span className="text-indigo-600 dark:text-indigo-400 font-mono text-sm">05.</span>
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white font-display">
            Get in Touch
          </h2>
          <div className="flex-1 h-px bg-zinc-200 dark:bg-zinc-800 ml-4" />
        </div>

        <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed max-w-xl mb-16">
          I'm always open to discussing new opportunities, interesting projects,
          or just having a good conversation about tech. Feel free to reach out.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-zinc-500 text-xs uppercase tracking-[0.2em] font-medium mb-6">
              Contact Details
            </h3>
            {contactDetails.map((detail) => {
              const Icon = detail.icon;
              const content = (
                <div className="flex items-start gap-4 group">
                  <div className="p-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-800 group-hover:border-indigo-500/30 transition-colors duration-300">
                    <Icon
                      size={16}
                      className="text-zinc-500 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300"
                    />
                  </div>
                  <div>
                    <p className="text-zinc-500 text-xs uppercase tracking-wider mb-1">
                      {detail.label}
                    </p>
                    <p className="text-zinc-700 dark:text-zinc-200 text-sm group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors duration-300">
                      {detail.value}
                    </p>
                  </div>
                </div>
              );

              return detail.href ? (
                <a key={detail.label} href={detail.href} className="block">
                  {content}
                </a>
              ) : (
                <div key={detail.label}>{content}</div>
              );
            })}
          </div>

          <div className="space-y-6">
            <h3 className="text-zinc-500 text-xs uppercase tracking-[0.2em] font-medium mb-6">
              Social Profiles
            </h3>
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-xl border border-zinc-200/60 dark:border-zinc-800/60 bg-zinc-50 dark:bg-zinc-900/30
                    hover:border-indigo-500/30 hover:bg-zinc-100 dark:hover:bg-zinc-900/60 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-4">
                    <Icon
                      size={18}
                      className="text-zinc-500 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300"
                    />
                    <div>
                      <p className="text-zinc-700 dark:text-zinc-200 text-sm font-medium">
                        {link.label}
                      </p>
                      <p className="text-zinc-500 text-xs mt-0.5">
                        @{link.value}
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight
                    size={16}
                    className="text-zinc-400 dark:text-zinc-600 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                  />
                </a>
              );
            })}

            <div className="pt-8">
              <a
                href="mailto:agarwal.gaurav2704@gmail.com"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-indigo-500 text-white text-sm font-medium rounded-full
                  hover:bg-indigo-600 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/25"
              >
                Say Hello
                <Mail size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
