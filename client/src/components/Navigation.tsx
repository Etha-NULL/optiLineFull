import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const LOGO_URL = '/images/optiline_logo_dark.png';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Stats', href: '#stats' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container flex items-center justify-between py-2 sm:py-3">
        {/* Logo - Extra Large & Prominent */}
        <a href="#home" className="flex items-center gap-2 flex-shrink-0">
          <img src={LOGO_URL} alt="OptiLine Systems" className="h-28 sm:h-32 md:h-36 w-auto drop-shadow-2xl" />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/80 hover:text-accent transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA Button - Desktop */}
        <div className="hidden md:flex">
          <Button
            asChild
            className="bg-accent hover:bg-accent/90 text-accent-foreground"
          >
            <a href="#contact">Get Started</a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 hover:bg-card rounded-lg transition-colors"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-accent" />
          ) : (
            <Menu className="w-6 h-6 text-accent" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-card border-b border-border animate-fade-in-up">
          <div className="container py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className="block px-4 py-2 text-sm font-medium text-foreground/80 hover:text-accent hover:bg-background rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <Button
              asChild
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              <a href="#contact" onClick={handleNavClick}>
                Get Started
              </a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
