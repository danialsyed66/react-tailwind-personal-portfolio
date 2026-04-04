import { ArrowUpRight } from 'lucide-react';
import { AnimatedBorderButton } from '@/components/AnimatedBorderButton';

const projects = [
  {
    title: 'M1neral',
    description:
      'Geoscience data visualization: Mapbox GL JS + DeckGL for oil & gas datasets at massive scale, Kepler.gl-style layer management, virtualised tables, and a RAG chatbot (Pinecone + OpenAI) over agreement PDFs with Azure Functions for OCR indexing.',
    image: '/projects/m1neral.png',
    tags: ['Next.js', 'NestJS', 'GraphQL', 'Mapbox', 'DeckGL', 'ElasticSearch', 'RAG'],
    link: 'https://app.m1neral.com/',
  },
  {
    title: 'Centinel',
    description:
      'B2B grid outage insurance: automated claims in three steps — outage detection, email surveys to affected businesses, SnapRefund payouts. AI risk-scoring, Stripe subscriptions, and fully automated client confirmation flows.',
    image: '/projects/centinel.png',
    tags: ['React', 'Next.js', 'NestJS', 'PostgreSQL', 'Django', 'Stripe', 'OpenAI'],
    link: 'https://app.yourcentinel.com/',
  },
  {
    title: 'Perigon AI',
    description:
      'Geospatial store intelligence: NestJS + GraphQL, PostgreSQL spatial queries for low-latency maps, bulk ingestion, Google Maps clustering and boundaries, and an admin layer module for ops teams.',
    image: '/projects/project4.png',
    tags: ['React', 'NestJS', 'GraphQL', 'PostgreSQL', 'Google Maps'],
    link: '#contact',
  },
  {
    title: 'Zenleaf Dispensary',
    description:
      'Large-scale e-commerce: Next.js 13 App Router migration across multiple storefronts, SEO overhaul with structured data and sitemaps, and a shared Tailwind component system that cut duplication and sped up new store variants.',
    image: '/projects/zenleaf.png',
    tags: ['Next.js 13', 'React', 'TailwindCSS', 'Node.js', 'MongoDB'],
    link: 'https://zenleafdispensaries.com/',
  },
  {
    title: 'Sales Rep AI',
    description:
      'RAG-powered sales training over proprietary PDFs (Pinecone + OpenAI), FastAPI auth, Chainlit conversations, and a Stripe freemium path that moves trials into paid subscriptions.',
    image: '/projects/project3.png',
    tags: ['Python', 'FastAPI', 'Chainlit', 'Pinecone', 'OpenAI', 'Stripe'],
    link: '#contact',
  },
];

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
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Key projects at
            <span className="font-serif italic font-normal text-white"> MergeStack.</span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Representative client products — geospatial, insurance, AI training, retail
            intelligence, and e-commerce — aligned with my CV.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt=""
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-card via-card/50 to-transparent opacity-60" />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                    aria-label={`Discuss ${project.title}`}
                    target={project.link.includes('http') ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 shrink-0
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <p className="text-muted-foreground text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
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
