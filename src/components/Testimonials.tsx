import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Software Developer at TCS',
    college: 'JNTU Hyderabad',
    text: 'Got internship and placement support. The mentors were extremely professional and helped me crack my first job. The real-time projects gave me confidence to face interviews.',
    rating: 5,
    avatar: 'PS',
    gradient: 'from-indigo-500 to-blue-600',
  },
  {
    name: 'Rahul Verma',
    role: 'Cloud Engineer at Infosys',
    college: 'Osmania University',
    text: 'Best training platform for students. The AWS internship program was exactly what I needed to transition into cloud computing. Highly recommend to any student serious about career growth.',
    rating: 5,
    avatar: 'RV',
    gradient: 'from-cyan-500 to-teal-600',
  },
  {
    name: 'Anusha Reddy',
    role: 'Full Stack Developer at Wipro',
    college: 'VNR VJIET',
    text: 'Very professional team and real-time projects. The Python Full Stack course helped me build a complete portfolio project that impressed my interviewers at every company.',
    rating: 5,
    avatar: 'AR',
    gradient: 'from-violet-500 to-purple-600',
  },
  {
    name: 'Karthik Naidu',
    role: 'Data Analyst at Deloitte',
    college: 'CBIT Hyderabad',
    text: 'The Data Science internship transformed my understanding of analytics. Mock interviews and resume prep were top-notch. Got placed within 3 months of completing the program.',
    rating: 5,
    avatar: 'KN',
    gradient: 'from-green-500 to-emerald-600',
  },
  {
    name: 'Divya Krishnan',
    role: 'Cyber Security Analyst',
    college: 'MGIT Hyderabad',
    text: 'The Cyber Security program was comprehensive and practical. I got certified and placed in a top security firm. The college collaboration made it accessible without any additional cost.',
    rating: 5,
    avatar: 'DK',
    gradient: 'from-rose-500 to-pink-600',
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: rating }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  useEffect(() => {
    if (!autoplay) return;
    intervalRef.current = setInterval(next, 4500);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [autoplay, current]);

  const visibleCount = 3;
  const visibleItems = Array.from({ length: visibleCount }, (_, i) =>
    testimonials[(current + i) % testimonials.length]
  );

  return (
    <section id="testimonials" className="relative py-24 bg-[#0F172A]">
      <div className="absolute inset-0 grid-pattern opacity-25 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 reveal-up ${isVisible ? 'visible' : ''}`}>
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-cyan-400 uppercase mb-4">
            <span className="w-8 h-px bg-cyan-400" /> Student Reviews <span className="w-8 h-px bg-cyan-400" />
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            What <span className="gradient-text">Students Say</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Real stories from students who transformed their careers with AKSHITHA EDUTECH.
          </p>
        </div>

        <div
          className={`reveal-up ${isVisible ? 'visible' : ''} delay-200`}
          onMouseEnter={() => setAutoplay(false)}
          onMouseLeave={() => setAutoplay(true)}
        >
          <div className="hidden lg:grid grid-cols-3 gap-6 mb-10">
            {visibleItems.map((t, i) => (
              <div
                key={`${t.name}-${i}`}
                className={`glass gradient-border rounded-2xl p-6 card-hover transition-all duration-500 ${i === 0 ? 'scale-105' : 'scale-100 opacity-75'}`}
              >
                <Quote size={28} className="text-indigo-400/40 mb-4" />
                <p className="text-slate-300 text-sm leading-relaxed mb-5 italic">"{t.text}"</p>
                <div className="flex items-center gap-3 mt-auto pt-4 border-t border-white/5">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center text-white text-sm font-bold shrink-0`}>
                    {t.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-white text-sm">{t.name}</p>
                    <p className="text-xs text-slate-400 truncate">{t.role}</p>
                  </div>
                  <StarRating rating={t.rating} />
                </div>
              </div>
            ))}
          </div>

          <div className="lg:hidden mb-8">
            <div className="glass gradient-border rounded-2xl p-6">
              <Quote size={28} className="text-indigo-400/40 mb-4" />
              <p className="text-slate-300 text-sm leading-relaxed mb-5 italic">"{testimonials[current].text}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${testimonials[current].gradient} flex items-center justify-center text-white text-sm font-bold`}>
                  {testimonials[current].avatar}
                </div>
                <div>
                  <p className="font-semibold text-white text-sm">{testimonials[current].name}</p>
                  <p className="text-xs text-slate-400">{testimonials[current].role}</p>
                </div>
                <div className="ml-auto"><StarRating rating={testimonials[current].rating} /></div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4">
            <button onClick={prev} className="glass w-11 h-11 rounded-full flex items-center justify-center hover:bg-white/10 transition-all">
              <ChevronLeft size={20} className="text-white" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`rounded-full transition-all duration-300 ${i === current ? 'w-8 h-2.5 bg-gradient-to-r from-indigo-500 to-cyan-500' : 'w-2.5 h-2.5 bg-white/20 hover:bg-white/40'}`}
                />
              ))}
            </div>
            <button onClick={next} className="glass w-11 h-11 rounded-full flex items-center justify-center hover:bg-white/10 transition-all">
              <ChevronRight size={20} className="text-white" />
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
}
