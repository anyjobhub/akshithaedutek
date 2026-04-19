import { CheckCircle2, ArrowRight, Trophy, Zap, Heart, Star } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const proposedAreas = [
  '1–3 Month Internship Programs',
  'Pre-Placement Talks',
  'Skill Assessments',
  'Mini & Major Projects',
  'MoU & Certifications',
  'Campus Workshops',
  'Placement Support',
];

const benefits = [
  { icon: Trophy, title: 'Better Placements', desc: 'Boost your college placement statistics significantly.' },
  { icon: Zap, title: 'Industry-Ready Students', desc: 'Students trained on real tools and technologies.' },
  { icon: Heart, title: 'Zero Cost Partnership', desc: 'No financial burden for the institution.' },
  { icon: Star, title: 'Joint Events & Hackathons', desc: 'Co-host events and build student communities.' },
];

export default function Collaboration() {
  const { ref, isVisible } = useScrollAnimation(0.08);

  return (
    <section id="collaboration" className="relative py-24 bg-[#0F172A]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-indigo-600/8 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-cyan-500/8 rounded-full blur-3xl" />
      </div>
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 reveal-up ${isVisible ? 'visible' : ''}`}>
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-cyan-400 uppercase mb-4">
            <span className="w-8 h-px bg-cyan-400" /> For Institutions <span className="w-8 h-px bg-cyan-400" />
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            Academic <span className="gradient-text">Collaboration</span> Proposal
          </h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            We are pleased to collaborate with colleges and institutions to support students through Real-Time Tech Training, Internship Programs, Pre-Placement Assessments, and Industry-Oriented Projects.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div className={`reveal-left ${isVisible ? 'visible' : ''}`}>
            <div className="glass gradient-border rounded-3xl p-8">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center">
                  <CheckCircle2 size={18} className="text-indigo-400" />
                </span>
                Proposed Collaboration Areas
              </h3>
              <div className="space-y-3">
                {proposedAreas.map((area, i) => (
                  <div
                    key={area}
                    className={`flex items-center gap-3 p-3 rounded-xl glass reveal-up ${isVisible ? 'visible' : ''} delay-${Math.min((i + 1) * 100, 600)}`}
                  >
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center shrink-0">
                      <CheckCircle2 size={14} className="text-white" />
                    </div>
                    <span className="text-slate-300 text-sm font-medium">{area}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 glass-light gradient-border-accent rounded-2xl p-6">
              <p className="text-slate-300 text-sm leading-relaxed">
                Our partnership model is completely <strong className="text-white">cost-free</strong> for institutions. We handle training, mentorship, and placement guidance while colleges get improved student outcomes and better placement records.
              </p>
              <div className="flex items-center gap-2 mt-4">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-xs text-green-400 font-medium">Currently onboarding new college partners</span>
              </div>
            </div>
          </div>

          <div className={`reveal-right ${isVisible ? 'visible' : ''}`}>
            <h3 className="text-xl font-bold text-white mb-6 ml-1">Benefits for Colleges</h3>
            <div className="space-y-4 mb-8">
              {benefits.map(({ icon: Icon, title, desc }, i) => (
                <div
                  key={title}
                  className={`glass rounded-2xl p-5 card-hover border border-white/5 hover:border-indigo-500/30 transition-all delay-${(i + 1) * 100}`}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-indigo-500/25 to-cyan-500/25 flex items-center justify-center shrink-0">
                      <Icon size={20} className="text-indigo-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">{title}</h4>
                      <p className="text-sm text-slate-400">{desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="btn-primary w-full py-4 rounded-2xl text-base font-bold text-white flex items-center justify-center gap-2 relative z-10"
            >
              Request Partnership <ArrowRight size={18} />
            </a>

            <div className="mt-5 flex flex-wrap gap-3 justify-center">
              {['500+ Colleges', 'Zero Cost', 'Certified Programs', 'Industry Experts'].map((tag) => (
                <span key={tag} className="glass px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300">✓ {tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
