import { Target, Eye, Award, Users as Users2, TrendingUp, Shield } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const highlights = [
  { icon: Target, title: 'Mission', desc: 'Bridging education and industry through skills and opportunities.' },
  { icon: Eye, title: 'Vision', desc: 'To become India\'s most trusted student career acceleration platform.' },
  { icon: Award, title: 'Excellence', desc: 'Delivering world-class training aligned with industry standards.' },
];

const pillars = [
  { icon: Users2, label: 'Student-Centric' },
  { icon: TrendingUp, label: 'Career-Focused' },
  { icon: Shield, label: 'Industry-Trusted' },
];

export default function About() {
  const { ref, isVisible } = useScrollAnimation(0.15);

  return (
    <section id="about" className="relative py-24 overflow-hidden" style={{ background: 'linear-gradient(180deg, #0F172A 0%, #131C31 50%, #0F172A 100%)' }}>
      <div className="absolute inset-0 grid-pattern opacity-50 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className={`reveal-left ${isVisible ? 'visible' : ''}`}>
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-cyan-400 uppercase mb-4">
                <span className="w-8 h-px bg-cyan-400" /> About Us
              </span>
              <h2 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">
                About{' '}
                <span className="gradient-text">AKSHITHA</span>
                <br />
                EDUTECH
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-6">
                AKSHITHA EDUTECH Pvt Ltd is a career-focused EdTech company helping students become industry-ready through real-time skill development, internships, projects, placement support, and academic partnerships.
              </p>
              <p className="text-slate-500 leading-relaxed mb-8">
                Founded by industry professionals, we understand the gap between academic knowledge and industry requirements. Our programs are designed to bridge that gap, giving students hands-on experience that employers value.
              </p>

              <div className="flex flex-wrap gap-3">
                {pillars.map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-2 glass px-4 py-2 rounded-xl">
                    <Icon size={16} className="text-indigo-400" />
                    <span className="text-sm font-medium text-slate-300">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={`space-y-5 reveal-right ${isVisible ? 'visible' : ''}`}>
            {highlights.map(({ icon: Icon, title, desc }, i) => (
              <div
                key={title}
                className={`glass gradient-border rounded-2xl p-6 card-hover delay-${(i + 1) * 100}`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/25 to-cyan-500/25 flex items-center justify-center shrink-0">
                    <Icon size={22} className="text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg mb-2">{title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              </div>
            ))}

            <div className="glass-light rounded-2xl p-6 border border-cyan-500/20">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center text-white font-bold text-sm">CS</div>
                <div>
                  <p className="font-semibold text-white text-sm">Chandrasekhar S</p>
                  <p className="text-xs text-cyan-400">CEO, AKSHITHA EDUTECH Pvt Ltd</p>
                </div>
              </div>
              <p className="text-slate-400 text-sm italic leading-relaxed">
                "Our mission is to ensure every student gets the opportunity to work on real projects, get mentored by industry experts, and secure the career they deserve."
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
}
