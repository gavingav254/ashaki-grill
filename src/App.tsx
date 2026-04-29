/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { 
  Flame, 
  Utensils, 
  Clock, 
  Heart, 
  Star, 
  MapPin, 
  Phone, 
  MessageCircle,
  Menu as MenuIcon,
  X,
  ChevronRight,
  Instagram,
  Facebook
} from 'lucide-react';
import { useState, useEffect } from 'react';

const Logo = ({ className = "" }: { className?: string }) => (
  <div className={`flex flex-col ${className} group cursor-pointer`}>
    <div className="flex items-baseline gap-0 leading-none relative">
      <span className="text-3xl md:text-4xl font-display font-black tracking-tighter text-zinc-100 drop-shadow-lg">A</span>
      <span className="text-2xl md:text-3xl font-script text-zinc-100 -ml-1 drop-shadow-md">shaki</span>
      <Flame size={14} fill="#ff6b00" className="text-primary absolute top-0 -right-4 animate-pulse" />
    </div>
    <div className="flex items-center gap-1 mt-0.5">
      <div className="h-[1px] w-3 bg-primary/50" />
      <span className="text-[8px] md:text-[10px] font-black tracking-[0.2em] uppercase text-primary">GRILL BBQ</span>
      <div className="h-[1px] w-3 bg-primary/50" />
    </div>
    <p className="text-[6px] md:text-[8px] font-bold tracking-widest text-zinc-500 mt-0.5 uppercase opacity-0 group-hover:opacity-100 transition-opacity">The True African Taste</p>
  </div>
);

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Features', href: '#features' },
    { name: 'Menu', href: '#menu' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-zinc-950/80 backdrop-blur-lg border-b border-zinc-800' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        <a href="#">
          <Logo />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-zinc-400 hover:text-primary transition-colors uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="px-6 py-2 bg-primary hover:bg-primary-dark text-zinc-950 font-bold rounded-full transition-all text-sm uppercase tracking-tighter"
          >
            Order Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-zinc-100" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={28} /> : <MenuIcon size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-zinc-900 border-b border-zinc-800 p-6 flex flex-col gap-4 md:hidden shadow-2xl"
        >
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-lg font-display text-zinc-100 border-b border-zinc-800/50 pb-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="w-full text-center py-3 bg-primary text-zinc-950 font-black rounded-xl"
            onClick={() => setMobileMenuOpen(false)}
          >
            WHATSAPP ORDER
          </a>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <header className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1920&q=80" 
          alt="Grilled BBQ background" 
          className="w-full h-full object-cover opacity-40 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
           initial={{ opacity: 0, x: -30 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-bold tracking-widest text-primary uppercase">Open Daily • 10 AM - 10 PM</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black leading-[0.85] mb-8">
            BOLD <span className="text-primary italic">FLAVORS.</span><br />
            MEMORABLE <span className="text-zinc-600">MOMENTS.</span>
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl max-w-lg mb-10 leading-relaxed font-light">
            Experience the finest grill in town. Our signature rubs and slow-grilled perfection bring a taste of home to your table.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#menu" className="group px-8 py-4 bg-primary hover:bg-primary-dark text-zinc-950 font-black rounded-2xl flex items-center gap-2 transition-all hover:translate-y-[-2px] hover:shadow-2xl hover:shadow-primary/30">
              EXPLORE MENU <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="https://wa.me/254700000000" className="px-8 py-4 bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-zinc-100 font-bold rounded-2xl flex items-center gap-2 transition-all">
              <MessageCircle size={20} className="text-green-500" /> WhatsApp
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="hidden lg:block relative"
        >
          <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-transparent blur-3xl rounded-full" />
          <img 
            src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80" 
            alt="Chef Signature platter" 
            className="relative rounded-3xl object-cover w-full aspect-square shadow-2xl border border-zinc-800"
          />
          <div className="absolute -bottom-8 -left-8 glass-card p-6 flex items-center gap-4 animate-bounce-slow">
            <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center text-white">
              <Star fill="currentColor" size={20} />
            </div>
            <div>
              <p className="text-xs text-zinc-400 uppercase tracking-widest font-bold">Top Rated</p>
              <p className="text-xl font-black text-zinc-100">4.9/5 STARS</p>
            </div>
          </div>
        </motion.div>
      </div>
    </header>
  );
};

const Features = () => {
  const features = [
    { icon: <Utensils className="text-primary" />, title: 'Fresh Meals', desc: 'Sourced daily from local farmers, prepared right when you order.' },
    { icon: <Flame className="text-orange-500" />, title: 'Signature Grill', desc: 'A secret blend of 12 spices, slow-grilled over authentic charcoal.' },
    { icon: <Heart className="text-pink-500" />, title: 'Cozy Vibe', desc: 'Modern rustic interiors designed for comfort and connection.' },
    { icon: <Clock className="text-blue-500" />, title: 'Fast Service', desc: 'No more waiting. We value your time as much as your tastebuds.' },
  ];

  return (
    <section id="features" className="py-24 max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <h2 className="text-4xl md:text-5xl font-black mb-4"><span className="text-primary">THE ASHAKI</span> STANDARD</h2>
          <p className="text-zinc-500 max-w-lg">Everything we do is built around quality, authenticity, and the pursuit of the perfect char.</p>
        </div>
        <div className="h-[1px] flex-grow bg-zinc-800 mx-8 hidden md:block" />
        <p className="text-sm font-bold tracking-[0.3em] uppercase text-zinc-700">SINCE 2012</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f, i) => (
          <motion.div 
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-10 hover:border-primary/30 transition-all group cursor-default"
          >
            <div className="w-16 h-16 rounded-2xl bg-zinc-950 border border-zinc-800 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-primary/5 transition-all">
              {f.icon}
            </div>
            <h3 className="text-2xl font-black mb-4 group-hover:text-primary transition-colors">{f.title}</h3>
            <p className="text-zinc-500 leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const MenuSection = () => {
  const items = [
    { title: 'Grilled Chicken Platter', price: '$14.99', desc: 'Half grilled chicken served with house salad and choice of fries or ugali.' },
    { title: 'Signature Beef BBQ', price: '$18.50', desc: 'Slow-smoked brisket grilled with our special honey-glaze sauce.' },
    { title: 'The Family Feast', price: '$45.00', desc: 'Whole chicken, 4 ribs, large fries, and 4 refreshing local juices.' },
    { title: 'Spicy Lamb Chops', price: '$22.00', desc: 'Triple-cooked lamb chops served with mint yogurt and grilled veggies.' },
  ];

  return (
    <section id="menu" className="py-24 bg-zinc-900/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-black mb-6 italic">CRAFTED FOR YOUR <span className="text-primary">CRAVING</span></h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {items.map((item, i) => (
            <motion.div 
              key={item.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex justify-between items-start gap-6 p-8 rounded-3xl bg-zinc-950 border border-zinc-900 group hover:border-zinc-700 transition-all"
            >
              <div className="flex-grow">
                <div className="flex items-center gap-4 mb-2">
                  <h3 className="text-2xl font-black group-hover:text-primary transition-colors">{item.title}</h3>
                  <div className="h-[1px] flex-grow border-t border-dashed border-zinc-800" />
                  <span className="text-xl font-display font-black text-primary">{item.price}</span>
                </div>
                <p className="text-zinc-500 max-w-md">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
            <button className="px-12 py-5 bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-zinc-950 font-black rounded-2xl transition-all shadow-xl shadow-primary/5 active:scale-95 uppercase tracking-widest">
              View Full Digital Menu
            </button>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    { title: 'Meetings', desc: 'Secure, quiet spaces for your business lunches and strategy sessions.', icon: <Utensils size={20} /> },
    { title: 'Kids Corner', desc: 'A safe, fun playground area so you can dine while the little ones play.', icon: <Heart size={20} /> },
    { title: 'Car Wash', desc: 'Premium car detailing services while you enjoy your favorite grill.', icon: <Star size={20} /> },
    { title: 'Events', desc: 'Host your birthdays, bridal showers, and special celebrations with us.', icon: <Flame size={20} /> },
  ];

  return (
    <section id="services" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-center mb-16">
          <div className="inline-block px-12 py-3 border border-zinc-800 rounded-full bg-zinc-900/50">
             <p className="text-sm font-bold tracking-[0.5em] uppercase text-primary">Beyond the Grill</p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((s, i) => (
            <motion.div 
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl border border-zinc-900 bg-zinc-900/20 hover:bg-zinc-900/40 transition-all flex flex-col items-center text-center group"
            >
              <div className="w-12 h-12 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                {s.icon}
              </div>
              <h3 className="text-xl font-black mb-3 text-zinc-100">{s.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const GallerySection = () => {
    const images = [
      "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=80"
    ];

    return (
      <section id="gallery" className="py-24 max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-black mb-12 text-center">KITCHEN <span className="text-zinc-600 italic">VIBES</span></h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((img, i) => (
            <motion.div 
               key={i}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.15 }}
               className="h-80 rounded-3xl overflow-hidden group border border-zinc-800 shadow-2xl"
            >
              <img 
                src={img} 
                alt="Food artwork" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </motion.div>
          ))}
        </div>
      </section>
    );
};

const Testimonials = () => {
    const reviews = [
      { name: "Sarah J.", role: "Food Critic", text: "The char on the chicken is peerless. Best grill spot in the city, hands down." },
      { name: "David K.", role: "Local Guide", text: "Family Feast is huge! Worth every cent. The service is incredibly fast." },
      { name: "Anita W.", role: "Grill Enthusiast", text: "Finally, a place that knows how to handle a proper BBQ. Authentic vibes." }
    ];

    return (
      <section className="py-24 bg-zinc-950 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 blur-[120px] -translate-x-1/2 -translate-y-1/2" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((r, i) => (
               <motion.div 
                 key={i}
                 initial={{ opacity: 0, x: -20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.2 }}
                 className="p-10 rounded-3xl bg-zinc-900 flex flex-col justify-between h-full border border-zinc-800"
               >
                 <div>
                   <div className="flex items-center gap-1 text-primary mb-6">
                     {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                   </div>
                   <p className="text-xl text-zinc-300 italic mb-10 leading-relaxed">"{r.text}"</p>
                 </div>
                 <div className="flex items-center gap-4">
                   <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center font-bold text-primary">
                     {r.name[0]}
                   </div>
                   <div>
                     <p className="font-black text-zinc-100">{r.name}</p>
                     <p className="text-xs text-zinc-500 uppercase font-bold tracking-widest">{r.role}</p>
                   </div>
                 </div>
               </motion.div>
            ))}
          </div>
        </div>
      </section>
    )
}

const Contact = () => {
    return (
      <section id="contact" className="py-24 max-w-7xl mx-auto px-6">
        <div className="glass-card overflow-hidden grid lg:grid-cols-2">
          <div className="p-12 md:p-20 flex flex-col justify-center">
            <h2 className="text-5xl font-black mb-8">EAT <span className="text-primary italic">FRESH.</span><br />START TODAY.</h2>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-zinc-950 rounded-xl text-primary"><MapPin size={24} /></div>
                <div>
                  <p className="text-xs font-black uppercase text-zinc-500 tracking-widest mb-1">Our Spot</p>
                  <p className="text-xl text-zinc-100 italic">45 Grill Ave, Nairobi City</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-zinc-950 rounded-xl text-green-500"><MessageCircle size={24} /></div>
                <div>
                  <p className="text-xs font-black uppercase text-zinc-500 tracking-widest mb-1">Direct Chat</p>
                  <p className="text-xl text-zinc-100">WhatsApp: +254 758 000 000</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-zinc-950 rounded-xl text-primary"><Clock size={24} /></div>
                <div>
                  <p className="text-xs font-black uppercase text-zinc-500 tracking-widest mb-1">Hours</p>
                  <p className="text-xl text-zinc-100">Daily: 10:00 AM - 10:00 PM</p>
                </div>
              </div>
            </div>

            <a href="https://wa.me/254758000000" className="w-full text-center py-6 bg-primary hover:bg-primary-dark text-zinc-950 font-black rounded-2xl flex items-center justify-center gap-3 transition-all hover:scale-[1.02] active:scale-[0.98]">
              <MessageCircle size={24} />
              PLACE ORDER ON WHATSAPP
            </a>
          </div>

          <div className="relative h-[400px] lg:h-auto">
             <img 
               src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80" 
               className="w-full h-full object-cover" 
               alt="Chef at work"
             />
             <div className="absolute inset-0 bg-primary/20 backdrop-grayscale-[0.5]" />
          </div>
        </div>
      </section>
    )
}

const Footer = () => {
    return (
      <footer className="py-20 border-t border-zinc-900 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 text-center lg:text-left">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
            <div>
              <Logo className="scale-125 origin-center lg:origin-left mb-8" />
              <p className="text-zinc-500 max-w-sm mb-8 italic">"The True African Taste" — Serving bold flavors and memorable dining experiences since 2012.</p>
              <div className="flex items-center justify-center lg:justify-start gap-6">
                <a href="#" className="text-zinc-500 hover:text-primary transition-colors"><Instagram /></a>
                <a href="#" className="text-zinc-500 hover:text-primary transition-colors"><Facebook /></a>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 text-sm uppercase tracking-widest font-bold">
              <div className="flex flex-col gap-4 text-center lg:text-left">
                <p className="text-zinc-100">Company</p>
                <a href="#" className="text-zinc-500 hover:text-primary transition-colors">Our Story</a>
                <a href="#" className="text-zinc-500 hover:text-primary transition-colors">Careers</a>
              </div>
              <div className="flex flex-col gap-4 text-center lg:text-left">
                <p className="text-zinc-100">Support</p>
                <a href="#" className="text-zinc-500 hover:text-primary transition-colors">Safety</a>
                <a href="#" className="text-zinc-500 hover:text-primary transition-colors">Contact</a>
              </div>
              <div className="flex flex-col gap-4 text-center lg:text-left col-span-2 sm:col-span-1">
                <p className="text-zinc-100">Legal</p>
                <a href="#" className="text-zinc-500 hover:text-primary transition-colors">Privacy</a>
                <a href="#" className="text-zinc-500 hover:text-primary transition-colors">Terms</a>
              </div>
            </div>
          </div>
          <p className="mt-20 pt-8 border-t border-zinc-900 text-zinc-700 text-xs font-bold uppercase tracking-[0.4em]">
            © 2026 ASHAKI GRILL • CRAFTED FOR GROWTH • ALL RIGHTS RESERVED
          </p>
        </div>
      </footer>
    )
}

export default function App() {
  return (
    <div className="selection:bg-primary selection:text-zinc-950">
      <Nav />
      <Hero />
      <Features />
      <MenuSection />
      <Services />
      <GallerySection />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
