import { Clock, BarChart2, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const courses = [
  {
    title: 'Python Full Stack',
    duration: '3 Months',
    level: 'Beginner to Advanced',
    img: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=400',
    tag: 'Most Popular',
    tagColor: 'bg-indigo-500',
    skills: ['Python', 'Django', 'React', 'PostgreSQL'],
  },
  {
    title: 'AWS Cloud',
    duration: '2 Months',
    level: 'Beginner to Advanced',
    img: 'https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=400',
    tag: 'In Demand',
    tagColor: 'bg-cyan-500',
    skills: ['EC2', 'S3', 'Lambda', 'DevOps'],
  },
  {
    title: 'Cyber Security',
    duration: '3 Months',
    level: 'Beginner to Advanced',
    img: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=400',
    tag: 'High Demand',
    tagColor: 'bg-rose-500',
    skills: ['Ethical Hacking', 'Network Security', 'Pen Testing'],
  },
  {
    title: 'Flutter App Dev',
    duration: '2 Months',
    level: 'Beginner to Advanced',
    img: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=400',
    tag: 'New',
    tagColor: 'bg-teal-500',
    skills: ['Flutter', 'Dart', 'Firebase', 'UI Design'],
  },
  {
    title: 'Data Science',
    duration: '3 Months',
    level: 'Beginner to Advanced',
    img: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=400',
    tag: 'Top Pick',
    tagColor: 'bg-amber-500',
    skills: ['Python', 'Pandas', 'ML', 'Tableau'],
  },
  {
    title: 'Java Full Stack',
    duration: '3 Months',
    level: 'Beginner to Advanced',
    img: 'https://images.pexels.com/photos/574077/pexels-photo-574077.jpeg?auto=compress&cs=tinysrgb&w=400',
    tag: 'Corporate Favorite',
    tagColor: 'bg-orange-500',
    skills: ['Java', 'Spring Boot', 'Angular', 'MySQL'],
  },
  {
    title: 'AI & Machine Learning',
    duration: '4 Months',
    level: 'Intermediate to Advanced',
    img: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
    tag: 'Future-Ready',
    tagColor: 'bg-violet-500',
    skills: ['TensorFlow', 'Keras', 'NLP', 'Computer Vision'],
  },
  {
    title: 'DevOps',
    duration: '2 Months',
    level: 'Intermediate to Advanced',
    img: 'https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=400',
    tag: 'Industry Essential',
    tagColor: 'bg-green-500',
    skills: ['Docker', 'Kubernetes', 'CI/CD', 'Terraform'],
  },
];

export default function Courses() {
  const { ref, isVisible } = useScrollAnimation(0.05);

  return (
    <section id="courses" className="relative py-24" style={{ background: 'linear-gradient(180deg, #0F172A 0%, #131C31 100%)' }}>
      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 reveal-up ${isVisible ? 'visible' : ''}`}>
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-cyan-400 uppercase mb-4">
            <span className="w-8 h-px bg-cyan-400" /> Learn & Grow <span className="w-8 h-px bg-cyan-400" />
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            Popular <span className="gradient-text">Courses</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Industry-aligned courses designed with real-world curriculum and mentored by experts.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {courses.map(({ title, duration, level, img, tag, tagColor, skills }, i) => (
            <div
              key={title}
              className={`reveal-scale ${isVisible ? 'visible' : ''} delay-${Math.min((i % 4 + 1) * 100, 400)}`}
            >
              <div className="glass gradient-border rounded-2xl overflow-hidden h-full flex flex-col card-hover group">
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={img}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent" />
                  <span className={`absolute top-3 left-3 ${tagColor} px-2.5 py-1 rounded-lg text-xs font-bold text-white`}>
                    {tag}
                  </span>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-bold text-white text-base mb-3">{title}</h3>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-1.5 text-xs text-slate-400">
                      <Clock size={13} className="text-cyan-400" /> {duration}
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-slate-400">
                      <BarChart2 size={13} className="text-indigo-400" /> {level}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mb-5 flex-1">
                    {skills.map((s) => (
                      <span key={s} className="glass px-2 py-0.5 rounded text-xs text-slate-300">{s}</span>
                    ))}
                  </div>
                  <a
                    href="#contact"
                    className="btn-primary w-full py-2.5 rounded-xl text-sm font-semibold text-white text-center flex items-center justify-center gap-2 relative z-10"
                  >
                    Apply Now <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
}
