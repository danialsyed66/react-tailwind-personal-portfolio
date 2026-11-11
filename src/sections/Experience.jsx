const experiences = [
  {
    period: 'Sep 2025 – Present',
    role: 'Senior Software Engineer',
    company: 'MergeStack · Lahore',
    description:
      'I lead builds on client products and mentor the engineers on them. I wrote the first commit of Sense and Pedant, wrote Sense’s authorization engine and Centinel’s Partner API, led Centinel’s money and security review before launch, and built AI document extraction, a RAG sales coach and billing for AI usage.',
    technologies: ['NestJS', 'React', 'Python', 'OpenAI', 'AWS', 'Stripe'],
    current: true,
  },
  {
    period: 'Sep 2023 – Sep 2025',
    role: 'Software Engineer',
    company: 'MergeStack · Lahore',
    description:
      'Most of my time went into M1neral, where I was the main author of the map (Mapbox GL and deck.gl), the data grid and the Azure Durable Functions import engine, and into Perigon AI, where I was the top contributor on all four services. I also started the Zen Leaf & MÜV move to the Next.js App Router and led it through to completion.',
    technologies: ['Mapbox GL', 'deck.gl', 'PostGIS', 'Azure Functions', 'ElasticSearch'],
    current: false,
  },
  {
    period: 'Sep 2022 – Sep 2023',
    role: 'Associate Software Engineer',
    company: 'MergeStack · Lahore',
    description:
      'I worked on Zen Leaf & MÜV, dispensary websites for 13 states built from one Next.js and WordPress codebase. I built the setup that ships both brands from that one codebase, the store locator and store hours, the menus and the SEO. I also worked on map, table and import features for M1neral.',
    technologies: ['Next.js', 'React', 'WordPress', 'GraphQL', 'Tailwind CSS'],
    current: false,
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/4 w-96
       h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span
            className="text-secondary-foreground text-sm
           font-medium tracking-wider uppercase animate-fade-in"
          >
            Career
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold
           mt-4 mb-6 animate-fade-in animation-delay-100
            text-secondary-foreground"
          >
            Experience at{' '}
            <span className="font-serif italic font-normal text-white"> MergeStack.</span>
          </h2>

          <p
            className="text-muted-foreground
           animate-fade-in animation-delay-200"
          >
            Four years at one company, from associate engineer to senior, building
            geospatial, data-heavy and AI products for clients in oil &amp; gas, insurance,
            freight logistics, retail and e-commerce.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-linear-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>

                {/* Content */}
                <div
                  className={`pl-8 md:pl-0 ${
                    idx % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:col-start-2 md:pl-16'
                  }`}
                >
                  <div
                    className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}
                  >
                    <span className="text-sm text-primary font-medium">{exp.period}</span>
                    <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mt-4">
                      {exp.description}
                    </p>
                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${
                        idx % 2 === 0 ? 'md:justify-end' : ''
                      }`}
                    >
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
