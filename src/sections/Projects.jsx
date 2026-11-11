import { ArrowUpRight, Images } from 'lucide-react';
import { Link } from 'react-router';
import { AnimatedBorderButton } from '@/components/AnimatedBorderButton';
import { projects } from '@/data/projects';

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Selected Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Products I&apos;ve
            <span className="font-serif italic font-normal text-white"> built.</span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Client products in oil &amp; gas, insurance, freight logistics, retail and
            e-commerce, plus one of my own. Each card opens a case study: what the product
            does, what I built, and screenshots.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <Link
              key={project.slug}
              to={`/projects/${project.slug}`}
              className="group glass rounded-2xl overflow-hidden animate-fade-in flex flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              aria-label={`${project.name}: ${project.tagline}. Read the case study.`}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video bg-surface">
                <img
                  src={project.cover.src}
                  alt={project.cover.alt}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-card via-card/30 to-transparent opacity-70" />
                {/* Darker chips so they stay readable on light screenshots */}
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-background/55 backdrop-blur-md border border-border/60 text-xs text-foreground/90">
                  {project.industry}
                </span>
                {project.images.length > 1 && (
                  <span
                    className="absolute top-4 right-4 px-3 py-1 rounded-full bg-background/55 backdrop-blur-md border border-border/60 text-xs text-foreground/90 inline-flex items-center gap-1.5"
                    aria-label={`${project.images.length} screenshots`}
                  >
                    <Images className="w-3.5 h-3.5" />
                    {project.images.length}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col gap-4 flex-1">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-xs text-primary/90 mt-1">
                      {project.role} · {project.period}
                    </p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 shrink-0 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
                <p className="text-muted-foreground text-sm">{project.tagline}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.stack.slice(0, 6).map(tag => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="text-sm font-medium text-primary inline-flex items-center gap-1">
                  Read the case study
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton href="#contact">
            Discuss a project
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};
