import { useEffect, useRef, useState } from 'react';

interface StatItem {
  label: string;
  value: number;
  suffix: string;
}

const stats: StatItem[] = [
  { label: 'Uptime Guarantee', value: 99.9, suffix: '%' },
  { label: 'Clients Served', value: 500, suffix: '+' },
  { label: 'Years Experience', value: 15, suffix: '+' },
  { label: 'Infrastructure Nodes', value: 1200, suffix: '+' },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [displayValue, setDisplayValue] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (hasAnimated.current) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepValue = value / steps;
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      const newValue = stepValue * currentStep;
      const displayVal = currentStep >= steps ? value : parseFloat(newValue.toFixed(1));
      setDisplayValue(displayVal);

      if (currentStep >= steps) {
        clearInterval(interval);
        hasAnimated.current = true;
      }
    }, duration / steps);

    return () => clearInterval(interval);
  }, [value]);

  return (
    <span className="font-bold text-accent">
      {displayValue}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section id="stats" className="py-20 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            By The Numbers
          </h2>
          <p className="text-lg text-foreground/70">
            Proven results that speak for themselves
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative group p-8 rounded-lg bg-card border border-border hover:border-accent transition-all duration-300 text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background accent */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Content */}
              <div className="relative z-10">
                <div className="text-4xl md:text-5xl font-bold mb-3">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-foreground/70 font-medium">{stat.label}</p>
              </div>

              {/* Accent line */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-accent group-hover:w-12 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
