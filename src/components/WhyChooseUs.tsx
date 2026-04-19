import { Users, Wrench, BadgeCheck, FileText, FolderKanban, Building2, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const reasons = [
  {
    icon: Users,
    title: 'Industry Mentors',
    desc: 'Learn from professionals with 5-15 years of industry experience in top companies.',
    stat: '50+ Mentors',
  },
  {
    icon: Wrench,
    title: 'Hands-on Practical Training',
    desc: 'Every session includes practical exercises, labs, and real-world problem solving.',
    stat: '70% Practical',
  },
  {
    icon: BadgeCheck,
    title: 'Verified Internships',
    desc: 'All internship programs are verified with proper offer letters and certificates.',
    stat: '100% Certified',
  },
  {
    icon: FileText,
    title: 'Resume + Interview Support',
    desc: 'Professional resume building, LinkedIn optimization, and mock interview sessions.',
    stat: '5+ Mock Rounds',
  },
  {
    icon: FolderKanban,
    title: 'Real Projects Experience',
    desc: 'Build and deploy actual projects that go into your portfolio to impress employers.',
    stat: '200+ Projects',
  },
  {
    icon: Building2,
    title: 'Trusted by Colleges',
    desc: 'Over 500 colleges have partnered with us to upskill their students.',
    stat: '500+ Colleges',
  },
];

export default function WhyChooseUs() {
  const { ref, isVisible } = useScrollAnimation(0.08);

  return (
    <section className="relative py-24" style={{ background: 'linear-gradient(180deg, #0F172A 0%, #131C31 100%)' }}>
      <div className="absolute top-0 left-0 right-0 section-divider" />
      <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div className={`reveal-left ${isVisible ? 'visible' : ''}`}>
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-cyan-400 uppercase mb-4">
              <span className="w-8 h-px bg-cyan-400" /> Our Edge
            </span>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">
              Why Choose <span className="gradient-text">AKSHITHA</span><br />EDUTECH?
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              We don't just teach — we ensure you're prepared for the real world with hands-on experience, industry connections, and career-focused outcomes.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <div className="glass gradient-border rounded-2xl p-5 text-center flex-1 min-w-[120px]">
                <div className="text-3xl font-bold gradient-text mb-1">98%</div>
                <div className="text-xs text-slate-400">Student Satisfaction</div>
              </div>
              <div className="glass gradient-border-accent rounded-2xl p-5 text-center flex-1 min-w-[120px]">
                <div className="text-3xl font-bold gradient-text-accent mb-1">4.8★</div>
                <div className="text-xs text-slate-400">Average Rating</div>
              </div>
              <div className="glass rounded-2xl p-5 text-center flex-1 min-w-[120px] border border-green-500/20">
                <div className="text-3xl font-bold text-green-400 mb-1">₹0</div>
                <div className="text-xs text-slate-400">College Partnership Cost</div>
              </div>
            </div>

            <a href="#contact" className="btn-primary px-7 py-3.5 rounded-xl font-semibold text-white inline-flex items-center gap-2 relative z-10">
              Get Started Today <ArrowRight size={18} />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {reasons.map(({ icon: Icon, title, desc, stat }, i) => (
              <div
                key={title}
                className={`reveal-scale ${isVisible ? 'visible' : ''} delay-${Math.min((i + 1) * 100, 600)}`}
              >
                <div className="glass gradient-border rounded-2xl p-5 h-full card-hover group">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500/25 to-cyan-500/25 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <Icon size={19} className="text-indigo-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white text-sm leading-tight">{title}</h3>
                      <span className="text-xs text-cyan-400 font-medium">{stat}</span>
                    </div>
                  </div>
                  <p className="text-slate-400 text-xs leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
}
