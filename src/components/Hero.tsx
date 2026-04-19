import { useEffect, useState, useRef } from 'react';
import { ArrowRight, Play, Users, Building2, Briefcase, Handshake } from 'lucide-react';
import { useCounter } from '../hooks/useCounter';

const stats = [
  { icon: Users, value: 45000, suffix: '+', label: 'Learners Trained' },
  { icon: Building2, value: 500, suffix: '+', label: 'Colleges Connected' },
  { icon: Briefcase, value: 1000, suffix: '+', label: 'Placements Assisted' },
  { icon: Handshake, value: 200, suffix: '+', label: 'Hiring Partners' },
];

function StatCard({ icon: Icon, value, suffix, label, isActive }: {
  icon: React.ElementType; value: number; suffix: string; label: string; isActive: boolean;
}) {
  const count = useCounter(value, 2200, isActive);
  return (
    <div className="glass-light rounded-2xl p-5 text-center card-hover gradient-border flex-1 min-w-[140px]">
      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 flex items-center justify-center mx-auto mb-3">
        <Icon size={20} className="text-cyan-400" />
      </div>
      <div className="text-2xl lg:text-3xl font-bold gradient-text">
        {isActive ? count.toLocaleString() : '0'}{suffix}
      </div>
      <div className="text-xs text-slate-400 mt-1 font-medium">{label}</div>
    </div>
  );
}

const floatingCards = [
  { title: 'Python Internship', sub: 'Certificate + Mentorship', color: 'from-indigo-500/20 to-blue-500/20', delay: '' },
  { title: 'AWS Cloud', sub: 'Industry Certified', color: 'from-cyan-500/20 to-teal-500/20', delay: 'float-delay-1' },
  { title: 'Placement Ready', sub: '1000+ Students Placed', color: 'from-violet-500/20 to-purple-500/20', delay: 'float-delay-2' },
  { title: 'Live Projects', sub: 'Real-time Experience', color: 'from-orange-500/20 to-rose-500/20', delay: 'float-delay-3' },
];

export default function Hero() {
  const [visible, setVisible] = useState(false);
  const [statsActive, setStatsActive] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsActive(true); },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden animated-gradient grid-pattern pt-16">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/12 rounded-full blur-3xl pulse-glow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm font-medium text-cyan-400 mb-6">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                India's Career Acceleration Platform
              </div>
            </div>

            <div className={`transition-all duration-700 delay-100 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Bridge Your Career{' '}
                <span className="gradient-text">from Campus</span>
                <br />
                <span className="text-white">to Corporate</span>
              </h1>
            </div>

            <div className={`transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <p className="text-slate-400 text-lg mb-4 leading-relaxed">
                Skill Training &bull; Internships &bull; Placement Support &bull; Academic Collaborations
              </p>
              <p className="text-slate-500 text-base mb-8 leading-relaxed max-w-lg">
                AKSHITHA EDUTECH connects students with real-world opportunities through industry-grade training, verified internships, and direct placement support.
              </p>
            </div>

            <div className={`flex flex-wrap gap-4 transition-all duration-700 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <a href="#courses" className="btn-primary px-7 py-3.5 rounded-xl font-semibold text-white flex items-center gap-2 relative z-10">
                Get Started <ArrowRight size={18} />
              </a>
              <a href="#services" className="btn-outline px-7 py-3.5 rounded-xl font-semibold text-white flex items-center gap-2">
                <Play size={16} className="text-cyan-400" /> Explore Programs
              </a>
            </div>

            <div className={`mt-10 flex flex-wrap gap-3 transition-all duration-700 delay-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              {['100% Placement Support', 'Industry Mentors', 'Certificate Programs'].map((badge) => (
                <span key={badge} className="glass px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 border border-white/5">
                  ✓ {badge}
                </span>
              ))}
            </div>
          </div>

          <div className={`hidden lg:grid grid-cols-2 gap-4 transition-all duration-700 delay-400 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {floatingCards.map((card, i) => (
              <div key={i} className={`float ${card.delay} glass gradient-border-accent rounded-2xl p-5 card-hover`}>
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center mb-3`}>
                  <span className="text-lg font-bold gradient-text">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <h4 className="font-semibold text-white text-sm mb-1">{card.title}</h4>
                <p className="text-xs text-slate-400">{card.sub}</p>
              </div>
            ))}
          </div>
        </div>

        <div ref={statsRef} className="mt-16">
          <div className="section-divider mb-12" />
          <div className="flex flex-wrap gap-4 justify-between">
            {stats.map((stat, i) => (
              <StatCard key={i} {...stat} isActive={statsActive} />
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-900/60 to-transparent pointer-events-none" />
    </section>
  );
}
