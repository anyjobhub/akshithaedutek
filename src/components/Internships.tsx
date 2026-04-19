import { CheckCircle2, ArrowRight, Calendar, Users, Award, Target } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const internships = [
  { title: 'Python Internship', duration: '1-3 Months', domain: 'Backend Development', color: 'border-indigo-500/40 hover:border-indigo-500' },
  { title: 'Web Development Internship', duration: '1-2 Months', domain: 'Frontend & Full Stack', color: 'border-cyan-500/40 hover:border-cyan-500' },
  { title: 'AWS Internship', duration: '1-2 Months', domain: 'Cloud Computing', color: 'border-orange-500/40 hover:border-orange-500' },
  { title: 'Cyber Security Internship', duration: '2-3 Months', domain: 'Security & Networking', color: 'border-rose-500/40 hover:border-rose-500' },
  { title: 'Flutter Internship', duration: '1-2 Months', domain: 'Mobile Development', color: 'border-teal-500/40 hover:border-teal-500' },
  { title: 'Data Science Internship', duration: '2-3 Months', domain: 'Analytics & ML', color: 'border-violet-500/40 hover:border-violet-500' },
];

const features = [
  { icon: Award, label: 'Internship Certificate', desc: 'Industry-recognized certificate upon completion' },
  { icon: Target, label: 'Real-Time Tasks', desc: 'Work on live assignments from industry projects' },
  { icon: Users, label: 'Mentor Support', desc: 'Dedicated mentors for guidance and feedback' },
  { icon: CheckCircle2, label: 'Placement Guidance', desc: 'Career support after internship completion' },
];

export default function Internships() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="internships" className="relative py-24 bg-[#0F172A]">
      <div className="absolute inset-0 grid-pattern opacity-25 pointer-events-none" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 reveal-up ${isVisible ? 'visible' : ''}`}>
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-cyan-400 uppercase mb-4">
            <span className="w-8 h-px bg-cyan-400" /> Real Experience <span className="w-8 h-px bg-cyan-400" />
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            Internship <span className="gradient-text">Programs</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Gain real-world experience through structured internship programs with certified outcomes.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className={`space-y-4 reveal-left ${isVisible ? 'visible' : ''}`}>
            {internships.map(({ title, duration, domain, color }, i) => (
              <div
                key={title}
                className={`glass rounded-2xl p-5 border transition-all duration-300 card-hover ${color} delay-${Math.min((i + 1) * 100, 600)}`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-white mb-1">{title}</h3>
                    <p className="text-sm text-slate-400">{domain}</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1.5 text-xs text-slate-400 justify-end mb-1">
                      <Calendar size={12} className="text-cyan-400" /> {duration}
                    </div>
                    <span className="text-xs font-medium text-green-400">Open Enrollment</span>
                  </div>
                </div>
              </div>
            ))}

            <a
              href="#contact"
              className="btn-cyan w-full py-4 rounded-2xl text-base font-bold text-white text-center flex items-center justify-center gap-2 mt-2"
            >
              Apply Internship Now <ArrowRight size={18} />
            </a>
          </div>

          <div className={`reveal-right ${isVisible ? 'visible' : ''}`}>
            <div className="glass-light gradient-border-accent rounded-3xl p-8">
              <h3 className="text-xl font-bold text-white mb-2">Why Our Internships?</h3>
              <p className="text-slate-400 text-sm mb-8">Every internship is structured to give you the best learning and career outcome.</p>

              <div className="space-y-6">
                {features.map(({ icon: Icon, label, desc }, i) => (
                  <div key={label} className={`flex items-start gap-4 reveal-up ${isVisible ? 'visible' : ''} delay-${(i + 2) * 100}`}>
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/25 to-cyan-500/25 flex items-center justify-center shrink-0">
                      <Icon size={22} className="text-indigo-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">{label}</h4>
                      <p className="text-sm text-slate-400 leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 glass rounded-2xl p-5 border border-green-500/20">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                  <p className="text-sm font-semibold text-white">Batch Starting Soon</p>
                </div>
                <p className="text-xs text-slate-400 mt-2 ml-6">Register now to secure your spot in the next internship batch.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
