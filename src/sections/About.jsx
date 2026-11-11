import { Code2, Rocket, Map, ShieldCheck } from 'lucide-react';

const highlights = [
  {
    icon: Map,
    title: 'Maps and geospatial data',
    description:
      'Mapbox GL JS, deck.gl, PostGIS and ElasticSearch for wells, parcels, stores and territories. Drawing tools, and map layers that ops teams set up themselves.',
  },
  {
    icon: Rocket,
    title: 'AI features',
    description:
      'Document extraction with a human review step, RAG assistants, access control for agents, and usage-based billing for AI.',
  },
  {
    icon: ShieldCheck,
    title: 'Payments and permissions',
    description:
      'Field- and row-level access control, payouts that are safe to retry, signed webhooks, and statements reconciled to the cent.',
  },
  {
    icon: Code2,
    title: 'Leading builds',
    description:
      'Starting codebases, choosing the stack, CI/CD and AWS infrastructure, and working with AI coding agents behind review agents and CI checks.',
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
              Maps, data and
              <span className="font-serif italic font-normal text-white">
                {' '}
                AI features.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I&apos;m a senior full-stack engineer at MergeStack in Lahore. Since 2022
                I&apos;ve built products for clients in oil &amp; gas, insurance, freight
                logistics, retail and e-commerce, and I&apos;ve been the top individual
                contributor on 19 of the 21 client repositories I&apos;ve worked in.
              </p>
              <p>
                I joined as an associate engineer. Today I lead builds and mentor the engineers
                on them. I was also the founding engineer on two platforms: an AI platform
                for oil &amp; gas data and an operations platform for a US freight brokerage.
              </p>
              <p>
                Day to day I work in TypeScript and Python: React, Next.js, NestJS, Django,
                FastAPI, MongoDB, PostgreSQL/PostGIS, ElasticSearch, Mapbox GL JS, deck.gl,
                OpenAI and LangChain, on AWS and Azure.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                &ldquo;A lot of my time goes into the unglamorous parts: imports, permissions,
                payments, and making sure a retried request doesn&apos;t charge anyone
                twice.&rdquo;
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
