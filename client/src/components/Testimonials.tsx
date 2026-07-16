import { Card } from '@/components/ui/card';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: 'OptiLine Systems transformed our infrastructure. We saw a 40% performance improvement within the first month.',
    author: 'Sarah Chen',
    company: 'TechCorp Industries',
    rating: 5,
  },
  {
    quote: 'Their team is incredibly responsive and knowledgeable. They solved our bottleneck issues that we\'d been struggling with for months.',
    author: 'Michael Rodriguez',
    company: 'FinanceFlow Solutions',
    rating: 5,
  },
  {
    quote: 'Best investment we\'ve made in our IT infrastructure. The reliability and support are unmatched.',
    author: 'Jennifer Park',
    company: 'CloudScale Ventures',
    rating: 5,
  },
  {
    quote: 'OptiLine Systems provided exactly what we needed—fast, reliable, and cost-effective solutions.',
    author: 'David Thompson',
    company: 'DataStream Analytics',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-card">
      <div className="container">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-foreground/70">
            Trusted by leading companies worldwide
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="relative overflow-hidden bg-background border-border hover:border-accent transition-all duration-300 p-8 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Accent corner */}
              <div className="absolute top-0 right-0 w-12 h-12 bg-accent/10 rounded-bl-lg" />

              {/* Content */}
              <div className="relative z-10 space-y-4">
                {/* Rating */}
                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-accent text-accent"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-foreground/80 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="pt-4 border-t border-border">
                  <p className="font-semibold text-foreground">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-foreground/60">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
