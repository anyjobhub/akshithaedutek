import { useState, useEffect } from 'react';
import { Menu, X, GraduationCap } from 'lucide-react';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Courses', href: '#courses' },
  { label: 'Internships', href: '#internships' },
  { label: 'Projects', href: '#projects' },
  { label: 'Colleges', href: '#collaboration' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    links.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass shadow-lg shadow-black/20' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          <a href="#home" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl btn-primary flex items-center justify-center glow-blue">
              <GraduationCap size={20} className="text-white" />
            </div>
            <div>
              <span className="font-bold text-lg tracking-tight">
                <span className="gradient-text">AKSHITHA</span>
                <span className="text-white"> EDUTECH</span>
              </span>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-1">
            {links.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeSection === href.slice(1)
                    ? 'text-white bg-white/10'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {label}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#collaboration"
              className="btn-primary px-5 py-2.5 rounded-xl text-sm font-semibold text-white relative z-10"
            >
              Partner With Us
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg glass text-white"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden glass border-t border-white/10 slide-down">
          <div className="px-4 py-3 space-y-1">
            {links.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2.5 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-white/8 transition-all"
              >
                {label}
              </a>
            ))}
            <a
              href="#collaboration"
              onClick={() => setIsOpen(false)}
              className="block mt-3 btn-primary px-4 py-3 rounded-xl text-sm font-semibold text-white text-center"
            >
              Partner With Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
