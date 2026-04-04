import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useState } from 'react';

const avatar = name =>
  `https://ui-avatars.com/api/?name=${encodeURIComponent(
    name,
  )}&background=1a5276&color=fff&size=128`;

const testimonials = [
  {
    quote:
      "Danial is highly skilled technically and a quick learner. It's always a pleasure working with him. He has strong experience in the MERN stack and has worked with various technologies, including Elasticsearch, Azure Functions, Mapbox, Google Maps, and Deck.gl. I highly recommend Danial for his impressive achievements in a short period.",
    author: 'Ahmad Faraz',
    role: 'COO & Founder, MergeStack',
    avatar: avatar('Ahmad Faraz'),
    relationship: 'Ahmad managed Danial directly',
  },
  {
    quote:
      "Danial was one of our earliest hires, and I can confidently say—one of the best. I’ve worked with him on multiple projects, and his dedication, sharp technical skills, and deep understanding of the stack always made a big impact. He's a standout team member, and I truly enjoyed collaborating with him. Keep up the great work, Danial!",
    author: 'Ali Tahir',
    role: 'CIO & Co-Founder, MergeStack',
    avatar: avatar('Ali Tahir'),
    relationship: 'Ali was senior to Danial but didn’t manage Danial directly',
  },
  {
    quote:
      'I highly recommend Danial Raza for his expertise in the MERN stack and his strong problem-solving skills. He writes clean, readable code and ensures scalability in React, Node.js, and Database applications.\nDanial works well in fast-paced teams, takes ownership of tasks, and provides clear communication to keep projects on track. His attention to detail and ability to debug efficiently make him a valuable asset to any full-stack development team.',
    author: 'Abdul Mannan',
    role: 'Senior Software Engineer',
    avatar: avatar('Abdul Mannan'),
    relationship: 'Ali was senior to Danial but didn’t manage Danial directly',
  },
  {
    quote:
      'Danial was my first mentor and played a crucial role in shaping my career. His mentorship not only helped me build a strong foundation but also influenced how I approach problems today.\nWhat stands out about Danial is his ability to solve complex problems. He approaches challenges with a calm, analytical mindset, and his problem-solving skills are truly inspiring. Whether it’s breaking down technical tasks or offering strategic advice, he communicates ideas clearly.\nWhat’s equally impressive is how Danial stays ahead of the curve. He’s genuinely committed to keeping up with the latest advancements in tech and industry trends, especially in the stacks he works with. If you’re looking for someone who combines sharp technical skills with a passion for lifting others up, Danial is your person. He doesn’t just build great software, he builds great professionals.',
    author: 'Zain Ahmad',
    role: 'Software Engineer',
    avatar: avatar('Zain Ahmad'),
    relationship: 'Zain reported to Danial directly',
  },
];

export const Testimonials = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const next = () => {
    setActiveIdx(prev => (prev + 1) % testimonials.length);
  };

  const previous = () => {
    setActiveIdx(prev => (prev - 1 + testimonials.length) % testimonials.length);
  };
  return (
    <section id="testimonials" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2
       w-[800px] h-[800px] bg-primary/5
        rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
      />
      <div
        className="container mx-auto 
      px-6 relative z-10"
      >
        {/* Section Header */}
        <div
          className="text-center max-w-3xl 
        mx-auto mb-16"
        >
          <span
            className="text-secondary-foreground 
          text-sm font-medium tracking-wider 
          uppercase animate-fade-in"
          >
            Recommendations
          </span>
          <h2
            className="text-4xl md:text-5xl 
          font-bold mt-4 mb-6 animate-fade-in 
          animation-delay-100 text-secondary-foreground"
          >
            Kind words from{' '}
            <span
              className="font-serif italic 
            font-normal text-white"
            >
              colleagues.
            </span>
          </h2>
          <p className="text-muted-foreground text-sm max-w-2xl mx-auto">
            Excerpts from LinkedIn recommendations (names and roles as listed there).
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Main Testimonial */}
            <div className="glass p-8 rounded-3xl md:p-12 glow-border animate-fade-in animation-delay-200">
              <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <Quote className="w-6 h-6 text-primary-foreground" />
              </div>

              <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-8 pt-4">
                &ldquo;{testimonials[activeIdx].quote}&rdquo;
              </blockquote>

              <div className="flex items-center gap-4">
                <img
                  src={testimonials[activeIdx].avatar}
                  alt=""
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/20"
                />
                <div>
                  <div className="font-semibold">{testimonials[activeIdx].author}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonials[activeIdx].role}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {testimonials[activeIdx].relationship && (
                      <span className="text-xs text-neutral-500">
                        {testimonials[activeIdx].relationship}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonials Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                type="button"
                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
                onClick={previous}
                aria-label="Previous testimonial"
              >
                <ChevronLeft />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    type="button"
                    key={idx}
                    onClick={() => setActiveIdx(idx)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      idx === activeIdx
                        ? 'w-8 bg-primary'
                        : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                    }`}
                    aria-label={`Go to testimonial ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                type="button"
                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
                onClick={next}
                aria-label="Next testimonial"
              >
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
