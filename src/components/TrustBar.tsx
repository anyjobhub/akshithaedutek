const items = [
  '45,000+ Learners Trained',
  '500+ Colleges Connected',
  '1,000+ Placements Assisted',
  '200+ Hiring Partners',
  'Industry-Certified Programs',
  'Zero Cost for Colleges',
  'Real-Time Mentorship',
  '100% Placement Support',
];

export default function TrustBar() {
  const doubled = [...items, ...items];
  return (
    <div className="relative py-3 overflow-hidden border-y border-white/5" style={{ background: 'rgba(15,23,42,0.9)' }}>
      <div className="ticker-track flex gap-12 whitespace-nowrap w-max">
        {doubled.map((item, i) => (
          <div key={i} className="flex items-center gap-3 text-sm font-medium text-slate-400">
            <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-indigo-400 to-cyan-400 shrink-0" />
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
