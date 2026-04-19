import { GraduationCap, Linkedin, Instagram, Mail, Phone } from 'lucide-react';

const links = {
  Company: [
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Courses', href: '#courses' },
    { label: 'Internships', href: '#internships' },
    { label: 'Projects', href: '#projects' },
  ],
  Collaborate: [
    { label: 'College Partnership', href: '#collaboration' },
    { label: 'Campus Drives', href: '#collaboration' },
    { label: 'MoU Programs', href: '#collaboration' },
    { label: 'Workshops', href: '#collaboration' },
    { label: 'Placement Support', href: '#services' },
  ],
  Contact: [
    { label: '+91 9133949509', href: 'tel:+919133949509' },
    { label: 'ceo@akshithaedutech.com', href: 'mailto:ceo@akshithaedutech.com' },
    { label: 'akshithaedu@gmail.com', href: 'mailto:akshithaedu@gmail.com' },
    { label: 'akshithaedutek.com', href: 'https://akshithaedutek.com' },
    { label: 'akshithaedutek.in', href: 'https://akshithaedutek.in' },
  ],
};

export default function Footer() {
  return (
    <footer className="relative bg-[#080E1A] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          <div className="lg:col-span-1">
            <a href="#home" className="flex items-center gap-2.5 mb-5">
              <div className="w-10 h-10 rounded-xl btn-primary flex items-center justify-center">
                <GraduationCap size={22} className="text-white" />
              </div>
              <div>
                <div className="font-bold text-base">
                  <span className="gradient-text">AKSHITHA</span>
                  <span className="text-white"> EDUTECH</span>
                </div>
                <div className="text-xs text-slate-500">Pvt Ltd</div>
              </div>
            </a>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              India's career acceleration platform bridging education and industry through skills, internships, and opportunities.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Linkedin, href: '#', label: 'LinkedIn' },
                { icon: Instagram, href: '#', label: 'Instagram' },
                { icon: Mail, href: 'mailto:ceo@akshithaedutech.com', label: 'Email' },
                {
                  icon: () => (
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                  ),
                  href: 'https://wa.me/919133949509',
                  label: 'WhatsApp',
                },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="glass w-9 h-9 rounded-lg border border-white/8 flex items-center justify-center text-slate-400 hover:text-white hover:border-indigo-500/40 transition-all"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="font-semibold text-white text-sm mb-5">{category}</h4>
              <ul className="space-y-3">
                {items.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="text-slate-500 hover:text-slate-300 text-sm transition-colors"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-sm">
            © 2026 <span className="text-slate-400">AKSHITHA EDUTECH Pvt Ltd</span>. All Rights Reserved.
          </p>
          <div className="flex items-center gap-5">
            <span className="text-xs text-slate-600">Privacy Policy</span>
            <span className="text-xs text-slate-600">Terms of Service</span>
            <span className="text-xs text-slate-600">Sitemap</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
