import { Card } from '@/components/ui/card';
import { Zap, Shield, Gauge, Network } from 'lucide-react';

const services = [
  {
    icon: Gauge,
    title: 'Performance Optimization',
    description: 'Maximize throughput and minimize latency with our advanced tuning and optimization services.',
  },
  {
    icon: Network,
    title: 'Network Systems',
    description: 'Enterprise-grade network infrastructure designed for speed, reliability, and scalability.',
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Protect your systems with comprehensive security solutions and threat mitigation strategies.',
  },
  {
    icon: Zap,
    title: 'Infrastructure',
    description: 'Robust, scalable infrastructure built to handle demanding workloads and peak performance.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-lg text-foreground/70">
            Taking the Optimal Line for engineered solutions at every turn of your IT infrastructure
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="group relative overflow-hidden bg-card border-border hover:border-accent transition-all duration-300 p-8 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Accent line */}
                <div className="absolute top-0 left-0 w-1 h-16 bg-gradient-to-b from-accent to-transparent" />

                {/* Icon */}
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  {service.description}
                </p>

                {/* Hover effect - speed line */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-accent to-transparent group-hover:w-full transition-all duration-500" />
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
