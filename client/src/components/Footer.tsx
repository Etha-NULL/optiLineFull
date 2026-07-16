import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

const LOGO_URL = '/images/optiline_logo_white.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = {
    company: [
      { label: 'About', href: '#about' },
      { label: 'Services', href: '#services' },
      { label: 'Testimonials', href: '#testimonials' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Cookie Policy', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <img src={LOGO_URL} alt="OptiLine Systems" className="h-12 w-auto" />
            <p className="text-foreground/60 text-sm leading-relaxed">
              High-performance IT systems engineered for speed and reliability.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2">
              {links.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-foreground/60 hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-2">
              {links.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-foreground/60 hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-foreground/60 text-sm">
                <Mail className="w-4 h-4 text-accent" />
                <a href="mailto:info@optiline.com" className="hover:text-accent transition-colors">
                  info@optiline.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-foreground/60 text-sm">
                <Phone className="w-4 h-4 text-accent" />
                <a href="tel:+1-555-0123" className="hover:text-accent transition-colors">
                  +1 (555) 0123
                </a>
              </li>
              <li className="flex items-start gap-2 text-foreground/60 text-sm">
                <MapPin className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <span>San Francisco, CA 94105</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <p className="text-foreground/50 text-sm">
            © {currentYear} OptiLine Systems. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-background border border-border flex items-center justify-center text-foreground/60 hover:text-accent hover:border-accent transition-all"
                  aria-label={social.label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
