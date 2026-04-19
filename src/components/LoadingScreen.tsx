import { GraduationCap } from 'lucide-react';

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-[200] flex flex-col items-center justify-center animated-gradient">
      <div className="flex flex-col items-center gap-6">
        <div className="w-20 h-20 rounded-2xl btn-primary flex items-center justify-center glow-blue pulse-glow">
          <GraduationCap size={40} className="text-white" />
        </div>
        <div className="text-center">
          <h1 className="text-2xl font-bold">
            <span className="gradient-text">AKSHITHA</span>
            <span className="text-white"> EDUTECH</span>
          </h1>
          <p className="text-xs text-slate-500 mt-1">Pvt Ltd</p>
        </div>
        <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full"
            style={{
              background: 'linear-gradient(90deg, #4F46E5, #06B6D4)',
              animation: 'loadingBar 1.5s ease-in-out forwards',
            }}
          />
        </div>
      </div>
      <style>{`
        @keyframes loadingBar {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </div>
  );
}
