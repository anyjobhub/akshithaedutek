import { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, Linkedin, Instagram } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const contactInfo = [
  { icon: Phone, label: 'Phone', value: '+91 9133949509', href: 'tel:+919133949509' },
  { icon: Mail, label: 'CEO Email', value: 'ceo@akshithaedutech.com', href: 'mailto:ceo@akshithaedutech.com' },
  { icon: Mail, label: 'General', value: 'akshithaedu@gmail.com', href: 'mailto:akshithaedu@gmail.com' },
  { icon: MapPin, label: 'Website', value: 'akshithaedutek.com', href: 'https://akshithaedutek.com' },
];

export default function Contact() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const [form, setForm] = useState({ name: '', email: '', phone: '', college: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-24" style={{ background: 'linear-gradient(180deg, #131C31 0%, #0F172A 100%)' }}>
      <div className="absolute top-0 left-0 right-0 section-divider" />
      <div className="absolute inset-0 grid-pattern opacity-25 pointer-events-none" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 reveal-up ${isVisible ? 'visible' : ''}`}>
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-cyan-400 uppercase mb-4">
            <span className="w-8 h-px bg-cyan-400" /> Get In Touch <span className="w-8 h-px bg-cyan-400" />
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            Contact <span className="gradient-text">Us</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Ready to start your journey? Reach out to us and we'll get back to you within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className={`reveal-left ${isVisible ? 'visible' : ''}`}>
            <div className="glass gradient-border rounded-3xl p-8 h-full">
              <h3 className="text-xl font-bold text-white mb-8">Contact Information</h3>

              <div className="space-y-5 mb-10">
                {contactInfo.map(({ icon: Icon, label, value, href }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/25 to-cyan-500/25 flex items-center justify-center shrink-0 group-hover:from-indigo-500/40 group-hover:to-cyan-500/40 transition-all">
                      <Icon size={20} className="text-indigo-400" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 mb-0.5">{label}</p>
                      <p className="text-slate-200 font-medium group-hover:text-white transition-colors">{value}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="pt-8 border-t border-white/8">
                <p className="text-sm text-slate-400 mb-4">Connect with us on social media</p>
                <div className="flex gap-3">
                  {[
                    { icon: Linkedin, href: '#', color: 'hover:bg-blue-600/20 hover:border-blue-500/30' },
                    { icon: Instagram, href: '#', color: 'hover:bg-pink-500/20 hover:border-pink-500/30' },
                    {
                      icon: () => (
                        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current text-green-400">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                        </svg>
                      ),
                      href: `https://wa.me/919133949509`,
                      color: 'hover:bg-green-500/20 hover:border-green-500/30',
                    },
                  ].map(({ icon: Icon, href, color }, i) => (
                    <a
                      key={i}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className={`glass w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center transition-all ${color}`}
                    >
                      <Icon size={20} className="text-slate-400" />
                    </a>
                  ))}
                </div>
              </div>

              <div className="mt-8 glass-light rounded-2xl p-5 border border-indigo-500/20">
                <p className="text-xs text-slate-400">CEO Direct Contact</p>
                <p className="font-semibold text-white mt-1">Chandrasekhar S</p>
                <a href="tel:+919133949509" className="text-cyan-400 text-sm hover:text-cyan-300 transition-colors">+91 9133949509</a>
              </div>
            </div>
          </div>

          <div className={`reveal-right ${isVisible ? 'visible' : ''}`}>
            {submitted ? (
              <div className="glass gradient-border rounded-3xl p-10 text-center h-full flex flex-col items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-500/25 to-emerald-500/25 flex items-center justify-center mb-6">
                  <CheckCircle2 size={40} className="text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Inquiry Sent!</h3>
                <p className="text-slate-400 leading-relaxed max-w-sm">
                  Thank you for reaching out. Our team will contact you within 24 hours with all the information you need.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', college: '', message: '' }); }}
                  className="mt-8 btn-outline px-6 py-3 rounded-xl text-sm font-medium text-white"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass gradient-border-accent rounded-3xl p-8">
                <h3 className="text-xl font-bold text-white mb-6">Send an Inquiry</h3>
                <div className="space-y-4">
                  {[
                    { name: 'name', label: 'Full Name', placeholder: 'Your full name', type: 'text' },
                    { name: 'email', label: 'Email Address', placeholder: 'your@email.com', type: 'email' },
                    { name: 'phone', label: 'Phone Number', placeholder: '+91 XXXXX XXXXX', type: 'tel' },
                    { name: 'college', label: 'College / Company Name', placeholder: 'Your institution or company', type: 'text' },
                  ].map(({ name, label, placeholder, type }) => (
                    <div key={name}>
                      <label className="block text-xs font-medium text-slate-400 mb-1.5">{label}</label>
                      <input
                        type={type}
                        name={name}
                        value={form[name as keyof typeof form]}
                        onChange={handleChange}
                        placeholder={placeholder}
                        required
                        className="w-full glass rounded-xl px-4 py-3 text-white text-sm placeholder-slate-600 border border-white/8 focus:border-indigo-500/50 focus:outline-none focus:ring-1 focus:ring-indigo-500/30 transition-all"
                      />
                    </div>
                  ))}
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1.5">Message</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your requirements..."
                      rows={4}
                      required
                      className="w-full glass rounded-xl px-4 py-3 text-white text-sm placeholder-slate-600 border border-white/8 focus:border-indigo-500/50 focus:outline-none focus:ring-1 focus:ring-indigo-500/30 transition-all resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full py-4 rounded-xl font-bold text-white flex items-center justify-center gap-2 relative z-10 disabled:opacity-60"
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <><Send size={18} /> Send Inquiry</>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
