import { Code2, Briefcase, UserCheck, FolderOpen, Building, Compass } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const services = [
  {
    icon: Code2,
    title: 'Skill Training',
    desc: 'Industry-aligned programs in Python, AWS, Java, Cyber Security, and Full Stack Development.',
    tags: ['Python', 'AWS', 'Java', 'Cyber Security', 'Full Stack'],
    color: 'from-indigo-500 to-blue-600',
    glow: 'rgba(79,70,229,0.3)',
  },
  {
    icon: Briefcase,
    title: 'Real-Time Internships',
    desc: '1 to 3 Month internship programs with real-time tasks, mentors, and verified certificates.',
    tags: ['1-3 Months', 'Certificate', 'Mentored'],
    color: 'from-cyan-500 to-teal-600',
    glow: 'rgba(6,182,212,0.3)',
  },
  {
    icon: UserCheck,
    title: 'Placement Support',
    desc: 'Mock interviews, resume preparation, referrals, and direct HR connections for job placements.',
    tags: ['Mock Interviews', 'Resume Prep', 'Referrals'],
    color: 'from-green-500 to-emerald-600',
    glow: 'rgba(16,185,129,0.3)',
  },
  {
    icon: FolderOpen,
    title: 'Live Projects',
    desc: 'Mini and major industry projects with real-world scope to build a strong portfolio.',
    tags: ['Mini Projects', 'Major Projects', 'Portfolio'],
    color: 'from-orange-500 to-amber-600',
    glow: 'rgba(245,158,11,0.3)',
  },
  {
    icon: Building,
    title: 'College Collaborations',
    desc: 'MoU signing, workshops, campus drives, and pre-placement talks with colleges and institutions.',
    tags: ['MoU', 'Workshops', 'Campus Drives'],
    color: 'from-violet-500 to-purple-600',
    glow: 'rgba(139,92,246,0.3)',
  },
  {
    icon: Compass,
    title: 'Career Guidance',
    desc: 'Personalized assessments, career roadmaps, and one-on-one counseling for students.',
    tags: ['Assessments', 'Roadmaps', 'Counseling'],
    color: 'from-rose-500 to-pink-600',
    glow: 'rgba(244,63,94,0.3)',
  },
];

export default function Services() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="services" className="relative py-24 bg-[#0F172A]">
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 reveal-up ${isVisible ? 'visible' : ''}`}>
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-cyan-400 uppercase mb-4">
            <span className="w-8 h-px bg-cyan-400" /> What We Offer <span className="w-8 h-px bg-cyan-400" />
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Comprehensive programs designed to make students industry-ready from day one.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc, tags, color, glow }, i) => (
            <div
              key={title}
              className={`reveal-up ${isVisible ? 'visible' : ''} delay-${Math.min((i + 1) * 100, 600)}`}
            >
              <div
                className="glass gradient-border rounded-2xl p-6 h-full card-hover group"
                style={{ '--glow': glow } as React.CSSProperties}
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={26} className="text-white" />
                </div>
                <h3 className="font-bold text-white text-xl mb-3">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-5">{desc}</p>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span key={tag} className="glass px-3 py-1 rounded-lg text-xs font-medium text-slate-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
