import { Code2, Lightbulb, Rocket, Map } from 'lucide-react';

const highlights = [
  {
    icon: Code2,
    title: 'Full stack delivery',
    description:
      'End-to-end ownership from API design and databases to polished React/Next.js frontends.',
  },
  {
    icon: Map,
    title: 'Geospatial at scale',
    description:
      'Mapbox, DeckGL, and ElasticSearch pipelines for millions of records and fast map UX.',
  },
  {
    icon: Rocket,
    title: 'AI & LLM in production',
    description:
      'RAG over documents, conversational agents, and risk-scoring integrated into real SaaS workflows.',
  },
  {
    icon: Lightbulb,
    title: 'Platform thinking',
    description:
      'Stripe billing, cloud jobs, and GraphQL/REST APIs built to stay maintainable as products grow.',
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Building SaaS, maps, and
              <span className="font-serif italic font-normal text-white">
                {' '}
                intelligent features.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I&apos;m a full stack engineer with 3.5+ years shipping production SaaS
                platforms, AI/LLM-powered features, and large-scale geospatial
                applications across 5+ client products. My work spans API architecture,
                RAG pipelines, frontend performance, Stripe billing, and cloud automation.
              </p>
              <p>
                Day to day I work across JavaScript/TypeScript and Python stacks — React,
                Next.js (App Router), NestJS, GraphQL, FastAPI, MongoDB, PostgreSQL,
                ElasticSearch, Mapbox GL JS, DeckGL, and cloud functions on Azure and AWS.
              </p>
              <p>
                I care about measurable outcomes: faster APIs, healthier Core Web Vitals,
                automated billing and payouts, and map experiences that stay responsive on
                huge datasets.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                &ldquo;I aim to ship systems that are reliable under load, straightforward
                to extend, and honest about trade-offs — from database indexes to prompt
                design.&rdquo;
              </p>
            </div>
          </div>

          {/* Right Column - Hilights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
