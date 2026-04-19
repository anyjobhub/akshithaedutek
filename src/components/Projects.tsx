import { Brain, Globe, Cpu, BarChart2, Smartphone, Cloud, ExternalLink } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const projects = [
  {
    icon: Brain,
    title: 'AI Projects',
    desc: 'Chatbots, image recognition, NLP systems, and recommendation engines built with TensorFlow and Python.',
    count: '25+ Projects',
    color: 'from-violet-500/20 to-purple-600/20',
    iconColor: 'text-violet-400',
    border: 'border-violet-500/20 hover:border-violet-500/50',
  },
  {
    icon: Globe,
    title: 'Web Development Projects',
    desc: 'Full-stack web applications using modern React, Node.js, Django frameworks with real deployments.',
    count: '40+ Projects',
    color: 'from-indigo-500/20 to-blue-600/20',
    iconColor: 'text-indigo-400',
    border: 'border-indigo-500/20 hover:border-indigo-500/50',
  },
  {
    icon: Cpu,
    title: 'IoT Projects',
    desc: 'Smart home automation, sensor-based systems, and Raspberry Pi / Arduino projects.',
    count: '15+ Projects',
    color: 'from-green-500/20 to-emerald-600/20',
    iconColor: 'text-green-400',
    border: 'border-green-500/20 hover:border-green-500/50',
  },
  {
    icon: BarChart2,
    title: 'Data Science Projects',
    desc: 'End-to-end ML pipelines, data visualization dashboards, and predictive analytics solutions.',
    count: '30+ Projects',
    color: 'from-amber-500/20 to-orange-600/20',
    iconColor: 'text-amber-400',
    border: 'border-amber-500/20 hover:border-amber-500/50',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Projects',
    desc: 'Cross-platform Flutter and React Native apps for Android and iOS with backend integration.',
    count: '20+ Projects',
    color: 'from-cyan-500/20 to-teal-600/20',
    iconColor: 'text-cyan-400',
    border: 'border-cyan-500/20 hover:border-cyan-500/50',
  },
  {
    icon: Cloud,
    title: 'Cloud Projects',
    desc: 'AWS deployments, serverless architectures, cloud migrations, and DevOps pipeline projects.',
    count: '18+ Projects',
    color: 'from-rose-500/20 to-pink-600/20',
    iconColor: 'text-rose-400',
    border: 'border-rose-500/20 hover:border-rose-500/50',
  },
];

export default function Projects() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="projects" className="relative py-24" style={{ background: 'linear-gradient(180deg, #131C31 0%, #0F172A 100%)' }}>
      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 reveal-up ${isVisible ? 'visible' : ''}`}>
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-cyan-400 uppercase mb-4">
            <span className="w-8 h-px bg-cyan-400" /> Build Real Things <span className="w-8 h-px bg-cyan-400" />
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            Industry <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Work on real-world projects that strengthen your portfolio and make you stand out to employers.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map(({ icon: Icon, title, desc, count, color, iconColor, border }, i) => (
            <div key={title} className={`reveal-scale ${isVisible ? 'visible' : ''} delay-${Math.min((i % 3 + 1) * 100, 300)}`}>
              <div className={`glass rounded-2xl p-6 border h-full card-hover group transition-all duration-300 ${border}`}>
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={26} className={iconColor} />
                </div>
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-bold text-white text-lg">{title}</h3>
                  <ExternalLink size={16} className="text-slate-600 group-hover:text-slate-400 transition-colors mt-1" />
                </div>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">{desc}</p>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full" />
                  <span className="text-xs font-medium text-green-400">{count}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`mt-12 text-center reveal-up ${isVisible ? 'visible' : ''} delay-400`}>
          <a href="#contact" className="btn-primary px-8 py-4 rounded-2xl font-bold text-white inline-flex items-center gap-2 relative z-10">
            Start Your Project Journey <ExternalLink size={18} />
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
}
