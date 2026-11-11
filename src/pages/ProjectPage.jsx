import { ArrowLeft, ArrowRight, ArrowUpRight, Check, Lock, Maximize2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router';
import { Button } from '@/components/Button';
import { Lightbox } from '@/components/Lightbox';
import { getProject, projects } from '@/data/projects';
import { SITE_TITLE } from '@/data/site';

const Meta = ({ label, value }) => (
  <div>
    <dt className="text-xs uppercase tracking-wider text-muted-foreground">{label}</dt>
    <dd className="mt-1 text-sm text-foreground">{value}</dd>
  </div>
);

export const ProjectPage = () => {
  const { slug } = useParams();
  const project = getProject(slug);
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    if (project) document.title = `${project.name} | Danial Syed`;
    return () => {
      document.title = SITE_TITLE;
    };
  }, [project]);

  if (!project) return <Navigate to="/#projects" replace />;

  const position = projects.findIndex(p => p.slug === project.slug);
  const prev = projects[(position - 1 + projects.length) % projects.length];
  const next = projects[(position + 1) % projects.length];
  const gallery = project.images.length ? project.images : [project.cover];
  const [hero, ...rest] = gallery;

  return (
    <article className="relative overflow-hidden pt-32 pb-24">
      <div className="absolute top-0 right-0 w-[32rem] h-[32rem] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-highlight/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <Link
          to="/#projects"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          All projects
        </Link>

        {/* Header */}
        <header className="mt-8 max-w-4xl animate-fade-in">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
            {project.industry}
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mt-3 leading-tight">{project.name}</h1>
          <p className="text-xl md:text-2xl text-muted-foreground mt-4 font-serif italic">
            {project.tagline}
          </p>
        </header>

        <dl className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 glass rounded-2xl p-6 animate-fade-in animation-delay-100">
          <Meta label="My role" value={project.role} />
          <Meta label="When" value={project.period} />
          <Meta label="Team" value={project.team} />
          <div>
            <dt className="text-xs uppercase tracking-wider text-muted-foreground">Links</dt>
            <dd className="mt-1 text-sm">
              {project.link ? (
                <a
                  href={project.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-primary hover:underline"
                >
                  {project.link.label}
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              ) : (
                <span className="text-muted-foreground">Private product</span>
              )}
            </dd>
          </div>
        </dl>

        {/* Hero image */}
        <button
          type="button"
          onClick={() => setOpenIndex(0)}
          className="group relative mt-10 block w-full overflow-hidden rounded-2xl glow-border cursor-zoom-in animate-fade-in animation-delay-200"
          aria-label={`Open image: ${hero.alt}`}
        >
          <img
            src={hero.src}
            alt={hero.alt}
            className="w-full aspect-video object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
          />
          <span className="absolute bottom-4 right-4 p-2 rounded-full glass opacity-0 group-hover:opacity-100 transition-opacity">
            <Maximize2 className="w-4 h-4" />
          </span>
        </button>
        {hero.caption && (
          <p className="mt-3 text-sm text-muted-foreground text-center">{hero.caption}</p>
        )}

        {/* Metrics */}
        {project.metrics && (
          <div className="mt-12 grid sm:grid-cols-3 gap-4">
            {project.metrics.map(m => (
              <div key={m.label} className="glass rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-primary">{m.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{m.label}</div>
              </div>
            ))}
          </div>
        )}

        {/* Body */}
        <div className="mt-16 grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-14">
            <section>
              <h2 className="text-2xl font-semibold text-secondary-foreground">The product</h2>
              <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
                {project.summary.map(paragraph => (
                  <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-secondary-foreground">What I built</h2>
              <ul className="mt-6 space-y-4">
                {project.contributions.map(item => (
                  <li key={item.slice(0, 40)} className="flex gap-3 text-muted-foreground leading-relaxed">
                    <span className="mt-1 shrink-0 w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center">
                      <Check className="w-3 h-3 text-primary" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-28 self-start">
            <div className="glass rounded-2xl p-6">
              <h2 className="text-sm uppercase tracking-wider text-muted-foreground">Stack</h2>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.stack.map(tech => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="glass rounded-2xl p-6 text-sm text-muted-foreground flex gap-3">
              <Lock className="w-4 h-4 shrink-0 mt-0.5 text-primary" />
              <p>
                {project.codeNote} Happy to walk through the architecture on a call.
              </p>
            </div>
            <Button to="/#contact" className="w-full justify-center">
              Discuss a similar project
              <ArrowRight className="w-4 h-4" />
            </Button>
          </aside>
        </div>

        {/* Gallery */}
        {rest.length > 0 && (
          <section className="mt-20">
            <h2 className="text-2xl font-semibold text-secondary-foreground">Screens</h2>
            <div className="mt-6 grid sm:grid-cols-2 gap-6">
              {rest.map((image, i) => (
                <figure key={image.src}>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(i + 1)}
                    className="group block w-full overflow-hidden rounded-xl border border-border cursor-zoom-in"
                    aria-label={`Open image: ${image.alt}`}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      loading="lazy"
                      decoding="async"
                      className="w-full aspect-video object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </button>
                  {image.caption && (
                    <figcaption className="mt-3 text-sm text-muted-foreground">
                      {image.caption}
                    </figcaption>
                  )}
                </figure>
              ))}
            </div>
          </section>
        )}

        {/* Prev / next */}
        <nav className="mt-24 pt-10 border-t border-border grid sm:grid-cols-2 gap-6">
          <Link
            to={`/projects/${prev.slug}`}
            className="group glass rounded-2xl p-6 hover:border-primary/40 transition-colors"
          >
            <span className="text-xs uppercase tracking-wider text-muted-foreground inline-flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" /> Previous
            </span>
            <div className="mt-2 text-lg font-semibold group-hover:text-primary transition-colors">
              {prev.name}
            </div>
            <div className="text-sm text-muted-foreground">{prev.tagline}</div>
          </Link>
          <Link
            to={`/projects/${next.slug}`}
            className="group glass rounded-2xl p-6 sm:text-right hover:border-primary/40 transition-colors"
          >
            <span className="text-xs uppercase tracking-wider text-muted-foreground inline-flex items-center gap-2">
              Next <ArrowRight className="w-4 h-4" />
            </span>
            <div className="mt-2 text-lg font-semibold group-hover:text-primary transition-colors">
              {next.name}
            </div>
            <div className="text-sm text-muted-foreground">{next.tagline}</div>
          </Link>
        </nav>
      </div>

      {openIndex !== null && (
        <Lightbox
          images={gallery}
          index={openIndex}
          onChange={setOpenIndex}
          onClose={() => setOpenIndex(null)}
        />
      )}
    </article>
  );
};
