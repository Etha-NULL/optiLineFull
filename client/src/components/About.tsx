export default function About() {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Visual accent */}
          <div className="relative h-96 hidden md:block">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent rounded-lg" />
            <div className="absolute top-10 left-10 w-32 h-32 border-2 border-accent/30 rounded-lg" />
            <div className="absolute bottom-10 right-10 w-24 h-24 border-2 border-accent/50 rounded-lg" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="text-6xl font-bold text-accent/20">⚡</div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                About OptiLine Systems
              </h2>
              <div className="w-12 h-1 bg-accent" />
            </div>

            <p className="text-lg text-foreground/80 leading-relaxed">
              At OptiLine Systems, we believe that technology should work as hard as you do. For over 15 years, we've been at the forefront of IT infrastructure innovation, helping businesses of all sizes achieve peak performance.
            </p>

            <p className="text-lg text-foreground/80 leading-relaxed">
              Our team of expert engineers combines deep technical knowledge with a passion for optimization. We don't just implement solutions—we engineer them for speed, reliability, and scalability.
            </p>

            <div className="pt-4 space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Mission-Driven</h4>
                  <p className="text-sm text-foreground/60">Delivering excellence in every project</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Innovation-Focused</h4>
                  <p className="text-sm text-foreground/60">Always pushing the boundaries of what's possible</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Client-Centric</h4>
                  <p className="text-sm text-foreground/60">Your success is our success</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
