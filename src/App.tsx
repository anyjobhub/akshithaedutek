import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import About from './components/About';
import Services from './components/Services';
import Courses from './components/Courses';
import Internships from './components/Internships';
import Projects from './components/Projects';
import Collaboration from './components/Collaboration';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import WhatsAppButton from './components/WhatsAppButton';
import LoadingScreen from './components/LoadingScreen';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(t);
  }, []);

  if (loading) return <LoadingScreen />;

  return (
    <div className="min-h-screen bg-[#0F172A] text-white">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <TrustBar />
      <About />
      <Services />
      <Courses />
      <Internships />
      <Projects />
      <Collaboration />
      <WhyChooseUs />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
