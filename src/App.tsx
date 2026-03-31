/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from "motion/react";
import { 
  Shield, 
  ShieldCheck, 
  Eye, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  CheckCircle2, 
  Star, 
  Menu, 
  X, 
  ArrowRight,
  ChevronRight,
  Calendar,
  Users,
  Building2,
  Construction,
  ShoppingBag,
  Music
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import logoSrc from "./logo.PNG";

const services = [
  {
    title: "Unarmed Guards",
    description: "Professional, uniformed presence for deterrence and safety monitoring.",
    icon: <Shield className="w-8 h-8" />,
  },
  {
    title: "Armed Guards",
    description: "Highly trained personnel for high-risk environments and asset protection.",
    icon: <ShieldCheck className="w-8 h-8" />,
  },
  {
    title: "Patrol Services",
    description: "Mobile security units providing rapid response and regular site checks.",
    icon: <Clock className="w-8 h-8" />,
  },
  {
    title: "Event Security",
    description: "Comprehensive crowd control and safety management for events of all sizes.",
    icon: <Users className="w-8 h-8" />,
  },
  {
    title: "Private Investigating",
    description: "Discreet, thorough investigations for corporate and private matters.",
    icon: <Eye className="w-8 h-8" />,
  },
];

const trustSignals = [
  { title: "Fully Licensed", description: "State-certified security and investigative firm." },
  { title: "Background Checked", description: "Rigorous vetting for all personnel." },
  { title: "24/7 Availability", description: "Rapid deployment whenever you need us." },
  { title: "Local Salem Expertise", description: "Deeply rooted in the Oregon community." },
];

const events = [
  { title: "Corporate Events", icon: <Building2 className="w-6 h-6" /> },
  { title: "Concerts & Festivals", icon: <Music className="w-6 h-6" /> },
  { title: "Private Parties", icon: <Users className="w-6 h-6" /> },
  { title: "Construction Sites", icon: <Construction className="w-6 h-6" /> },
  { title: "Retail & Malls", icon: <ShoppingBag className="w-6 h-6" /> },
];

const testimonials = [
  {
    name: "Robert Chen",
    role: "Property Manager",
    quote: "Shadow Protection has been our primary security partner for 3 years. Their discipline and professionalism are unmatched in Salem.",
    rating: 5,
  },
  {
    name: "Sarah Jenkins",
    role: "Event Coordinator",
    quote: "The event security team was seamless. They handled a crowd of 5,000 with absolute precision and calm.",
    rating: 5,
  },
  {
    name: "David Miller",
    role: "Business Owner",
    quote: "Rapid deployment when we had a break-in. They were on-site within 45 minutes and secured the perimeter immediately.",
    rating: 5,
  },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const logoY = useTransform(scrollYProgress, [0, 0.2], [0, -50]);
  const logoOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress: heroScroll } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const bgY = useTransform(heroScroll, [0, 1], ["0%", "30%"]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black overflow-x-hidden">
      {/* Sticky Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-black/90 backdrop-blur-md py-3 border-b border-white/10" : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-black text-xl tracking-widest hidden sm:block" style={{ fontFamily: '"Barlow Condensed", sans-serif' }}>SHADOW PROTECTION</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 font-bold text-sm tracking-widest uppercase text-gray-400">
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#how-it-works" className="hover:text-white transition-colors">Process</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </nav>

          <div className="flex items-center gap-4">
            <a href="tel:5039918778" className="hidden lg:flex items-center gap-2 font-bold text-sm text-gray-400 hover:text-white transition-colors">
              <Phone className="w-4 h-4" />
              (503) 991-8778
            </a>
            <button className="bg-white hover:bg-gray-200 text-black px-4 py-1.5 text-xs font-bold uppercase tracking-wider rounded-full transition-all">
              Get a Quote
            </button>
            <button 
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed inset-0 z-40 bg-black pt-24 px-4 md:hidden"
        >
          <nav className="flex flex-col gap-8 text-2xl font-black uppercase tracking-widest">
            <a href="#services" onClick={() => setIsMenuOpen(false)}>Services</a>
            <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#how-it-works" onClick={() => setIsMenuOpen(false)}>Process</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
          </nav>
        </motion.div>
      )}

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-black via-black/85 to-black/60 z-10" />
          <motion.img
            style={{ y: bgY }}
            src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=1920"
            alt="Security Background"
            className="absolute inset-0 w-full h-full object-cover grayscale opacity-40 scale-110 origin-center"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="relative z-20 w-full max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:grid lg:grid-cols-2 items-center gap-10 lg:gap-12">

            {/* Logo — appears first on mobile (top), right side on desktop */}
            <motion.div
              style={{ y: logoY, opacity: logoOpacity }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center items-center order-first lg:order-last"
            >
              <div className="relative w-52 h-52 sm:w-64 sm:h-64 lg:w-80 lg:h-80">
                <div className="absolute inset-0 border border-white/20 rounded-full animate-ping-slow" />
                <div className="absolute inset-4 border border-white/10 rounded-full" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-40 h-40 sm:w-52 sm:h-52 lg:w-64 lg:h-64 bg-white/5 backdrop-blur-xl rounded-full border border-white/20 overflow-hidden">
                    <img
                      src={logoSrc}
                      alt="Shadow Protection Logo"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Text — below logo on mobile, left side on desktop */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left order-last lg:order-first"
            >
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight mb-5">
                ELITE PROTECTION<br className="hidden sm:block" /> FOR ELITE ASSETS
              </h1>
              <p className="text-sm sm:text-base font-semibold text-gray-400 mb-8 tracking-[0.25em] uppercase">
                Integrity • Discipline • Commitment
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="cta-button flex items-center justify-center gap-2">
                  Get a Free Quote <ArrowRight className="w-4 h-4" />
                </button>
                <button className="outline-button flex items-center justify-center gap-2">
                  Call Now <Phone className="w-4 h-4" />
                </button>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Ticker Bar */}
      <div className="bg-zinc-950 border-y border-white/10 py-4 overflow-hidden">
        <div className="flex animate-ticker whitespace-nowrap">
          {[0, 1].map(i => (
            <span key={i} className="flex items-center gap-10 px-10 text-xs font-bold uppercase tracking-widest text-gray-500 shrink-0">
              {["Licensed & Bonded", "24/7 Rapid Response", "Salem, Oregon", "Armed & Unarmed Guards", "Background Checked Personnel", "Event Security Specialists", "Private Investigations", "15+ Years Experience"].map((item, j) => (
                <span key={j} className="flex items-center gap-10">
                  <span>{item}</span>
                  <span className="text-white/30">·</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* Services Section */}
      <section id="services" className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">What We Offer</p>
            <h2 className="text-4xl md:text-5xl font-black mb-4">Our Services</h2>
            <div className="w-16 h-px bg-white/40 mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="glass-card p-8 group"
              >
                <div className="text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-black mb-3">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed mb-6 text-sm">
                  {service.description}
                </p>
                <a href="#contact" className="flex items-center gap-2 text-xs font-black text-gray-400 hover:text-white uppercase tracking-widest hover:gap-4 transition-all duration-300">
                  Learn More <ChevronRight className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Shadow Protection */}
      <section id="about" className="py-24 bg-white text-black border-y border-black/10">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-8 text-black">WHY SHADOW PROTECTION?</h2>
            <p className="text-lg text-gray-600 mb-12 leading-relaxed">
              Based in Salem, OR, we provide premium security solutions backed by military-grade discipline and corporate precision. Our mission is your absolute safety.
            </p>
            <div className="grid sm:grid-cols-2 gap-8">
              {trustSignals.map((signal, index) => (
                <div key={index} className="flex gap-4">
                  <div className="mt-1">
                    <CheckCircle2 className="w-5 h-5 text-black flex-shrink-0" />
                  </div>
                  <div>
                    <h4 className="font-black text-lg mb-1 text-black">{signal.title}</h4>
                    <p className="text-sm text-gray-500">{signal.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            className="relative mt-4 lg:mt-0"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="aspect-square bg-gray-100 rounded-none overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&q=80&w=800"
                alt="Security Team"
                className="w-full h-full object-cover grayscale"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-black p-8 hidden md:block">
              <p className="text-4xl font-black text-white">15+</p>
              <p className="text-xs font-bold uppercase tracking-widest text-white/70">Years Experience</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Our Process</p>
            <h2 className="text-4xl md:text-5xl font-black mb-4">HOW IT WORKS</h2>
            <p className="text-gray-500 uppercase tracking-widest font-semibold text-sm">Simple. Efficient. Secure.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-white/10 -translate-y-1/2 z-0" />
            
            {[
              { step: "01", title: "Contact Us", desc: "Reach out via phone or our online form for a free consultation." },
              { step: "02", title: "Consultation", desc: "We assess your specific security needs and develop a custom plan." },
              { step: "03", title: "Deployed", desc: "Our elite team is deployed to your site, ensuring total protection." },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative z-10 text-center"
              >
                <div className="w-20 h-20 bg-black border border-white/40 rounded-full flex items-center justify-center mx-auto mb-8 text-2xl font-black text-white">
                  {item.step}
                </div>
                <h3 className="text-2xl font-black mb-4">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Events We Cover */}
      <section className="py-24 bg-white text-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Deployments</p>
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-black">EVENTS WE COVER</h2>
            <div className="w-16 h-px bg-black/20 mx-auto" />
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {events.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="bg-gray-50 border border-gray-200 p-8 text-center flex flex-col items-center gap-4 hover:bg-gray-100 transition-colors cursor-default"
              >
                <div className="text-black">{event.icon}</div>
                <h4 className="font-black text-sm uppercase tracking-widest text-black">{event.title}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">What Clients Say</p>
            <h2 className="text-4xl md:text-5xl font-black mb-4">CLIENT TESTIMONIALS</h2>
            <div className="w-16 h-px bg-white/40 mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="flex gap-1 mb-6">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-white text-white" />
                    ))}
                  </div>
                  <p className="text-gray-300 italic mb-8 leading-relaxed text-sm">"{t.quote}"</p>
                </div>
                <div>
                  <h4 className="font-black uppercase tracking-widest text-sm">{t.name}</h4>
                  <p className="text-xs text-gray-500 font-semibold mt-1">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 relative overflow-hidden bg-white">
        <motion.div
          className="relative z-20 max-w-7xl mx-auto px-6 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-bold text-black/40 uppercase tracking-widest mb-6">Take Action</p>
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-black">YOUR SAFETY IS OUR MISSION</h2>
          <p className="text-sm md:text-base font-semibold mb-12 uppercase tracking-widest text-black/60">
            Rapid Deployment • Professional Excellence • Local Expertise
          </p>
          <button className="bg-black text-white hover:bg-zinc-800 px-12 py-5 text-sm font-black uppercase tracking-widest transition-all">
            Request a Quote Now
          </button>
        </motion.div>
      </section>

      {/* Contact & Footer */}
      <footer id="contact" className="pt-24 pb-12 bg-black">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 mb-24">
          <div>
            <h2 className="text-4xl font-black mb-8">GET IN TOUCH</h2>
            <p className="text-gray-400 mb-12">
              Have questions or need immediate security assistance? Our team is ready to respond 24/7.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-zinc-900 border border-white/10 flex items-center justify-center text-white">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Call Us</p>
                  <p className="text-xl font-black">(503) 991-8778</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-zinc-900 border border-white/10 flex items-center justify-center text-white">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Email Us</p>
                  <p className="text-xl font-black">contact@shadowprotection.com</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-zinc-900 border border-white/10 flex items-center justify-center text-white">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Location</p>
                  <p className="text-xl font-black">Salem, OR 97301</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-card p-8">
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-500">Full Name</label>
                  <input type="text" className="w-full bg-zinc-900 border border-white/10 p-4 focus:border-white outline-none transition-colors text-white" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-500">Email Address</label>
                  <input type="email" className="w-full bg-zinc-900 border border-white/10 p-4 focus:border-white outline-none transition-colors text-white" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-gray-500">Service Needed</label>
                <select className="w-full bg-zinc-900 border border-white/10 p-4 focus:border-white outline-none transition-colors appearance-none text-white">
                  <option>Unarmed Guard</option>
                  <option>Armed Guard</option>
                  <option>Patrol Services</option>
                  <option>Event Security</option>
                  <option>Private Investigation</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-gray-500">Message</label>
                <textarea rows={4} className="w-full bg-zinc-900 border border-white/10 p-4 focus:border-white outline-none transition-colors text-white resize-none"></textarea>
              </div>
              <button className="cta-button w-full">Send Message</button>
            </form>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="max-w-7xl mx-auto px-6 pt-10 border-t border-white/10">
          {/* Brand + tagline */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-10">
            <div className="flex items-center gap-3">
              <img
                src={logoSrc}
                alt="Shadow Protection Logo"
                className="w-10 h-10 rounded-full object-cover border border-white/20"
              />
              <div>
                <span
                  className="font-black text-base tracking-widest block leading-none"
                  style={{ fontFamily: '"Barlow Condensed", sans-serif' }}
                >
                  SHADOW PROTECTION
                </span>
                <span className="text-xs text-gray-500 tracking-widest uppercase">Salem, Oregon</span>
              </div>
            </div>

            <nav className="flex flex-wrap justify-center gap-8 text-xs font-semibold text-gray-500 uppercase tracking-widest">
              <a href="#services" className="hover:text-white transition-colors">Services</a>
              <a href="#about" className="hover:text-white transition-colors">About</a>
              <a href="#how-it-works" className="hover:text-white transition-colors">Process</a>
              <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            </nav>

            <div className="flex flex-wrap justify-center gap-6 text-xs font-semibold text-gray-500 uppercase tracking-widest">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Licensing</a>
            </div>
          </div>

          {/* Bottom rule + copyright */}
          <div className="border-t border-white/5 pt-6 pb-2 flex flex-col sm:flex-row justify-between items-center gap-3">
            <p className="text-xs text-gray-600 uppercase tracking-widest">
              © 2026 Shadow Protection LLC. All Rights Reserved.
            </p>
            <p className="text-xs text-gray-700 uppercase tracking-widest">
              Licensed &amp; Bonded · State of Oregon
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
