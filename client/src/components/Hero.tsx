import Carousel, { type CarouselSlide } from '@/components/Carousel';

const carouselSlides: CarouselSlide[] = [
  {
    id: 'infrastructure',
    image: '/images/banner_infrastructure_v2.png',
    cta: {
      text: 'Explore Infrastructure',
      href: '#services',
    },
    secondaryCta: {
      text: 'Learn More',
      href: '#about',
    },
  },
  {
    id: 'performance',
    image: '/images/banner_performance_v2.png',
    cta: {
      text: 'Get Optimization',
      href: '#contact',
    },
    secondaryCta: {
      text: 'View Services',
      href: '#services',
    },
  },
  {
    id: 'security',
    image: '/images/banner_security_v2.png',
    cta: {
      text: 'Secure Your Systems',
      href: '#contact',
    },
    secondaryCta: {
      text: 'Security Details',
      href: '#services',
    },
  },
  {
    id: 'reliability',
    image: '/images/banner_reliability_v2.png',
    cta: {
      text: 'Start Today',
      href: '#contact',
    },
    secondaryCta: {
      text: 'View Stats',
      href: '#stats',
    },
  },
];

export default function Hero() {
  return (
    <section id="home">
      <Carousel slides={carouselSlides} autoAdvanceInterval={10000} />
    </section>
  );
}
