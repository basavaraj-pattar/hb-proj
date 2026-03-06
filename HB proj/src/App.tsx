import { motion, useScroll, useTransform } from "motion/react";
import { 
  MapPin, 
  Phone, 
  Clock, 
  Instagram, 
  Facebook, 
  MessageCircle, 
  Gift, 
  Heart, 
  Star, 
  ChevronRight,
  Menu,
  X
} from "lucide-react";
import { useState, useEffect } from "react";

const COLLECTIONS = [
  {
    title: "Birthday Gifts",
    description: "Make their special day unforgettable with our curated birthday selection.",
    image: "/Birthday.jpg"
  },
  {
    title: "Soft Toys",
    description: "Cuddly companions for all ages, from classic bears to modern plushes.",
    image: "/softtoys.jpg"
  },
  {
    title: "Photo Frames",
    description: "Preserve your most precious memories in our elegant designer frames.",
    image: "/frames.jpg"
  },
  {
    title: "Decorative Items",
    description: "Unique pieces to add a touch of elegance and personality to any home.",
    image: "/cdecorative.jpg"
  },
  {
    title: "Greeting Cards",
    description: "Express your feelings with our extensive range of artistic cards.",
    image: "/Greeting cards.jpg"
  },
  {
    title: "Festival Gifts",
    description: "Celebrate traditions with our special seasonal and festive collections.",
    image: "/festival.jpg"
  },
  {
    title: "Customized gifts",
    description: "Personalized treasures that carry a deeper meaning for your loved ones.",
    image: "/customized gifts.jpeg"
  },
  {
    title: "& Many More",
    description: "Explore our vast collection of unique treasures and seasonal surprises.",
    image: "/and many more.jpeg"
  }
];

const GALLERY_IMAGES = [
  "/gallery-1.jpg",
  "/gallery-2.jpg",
  "/gallery-3.jpg",
  "/gallery-4.jpg"
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen selection:bg-gold/30">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-cream/90 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div 
            className="flex items-center cursor-pointer group"
            onClick={() => scrollToSection('hero')}
          >
            <img 
              src="/logo.png" 
              alt="Heartbeats Gallery" 
              className="h-16 w-auto object-contain transition-transform group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {['About', 'Collections', 'Gallery', 'Location'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-sm font-medium uppercase tracking-widest hover:text-gold transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all group-hover:w-full"></span>
              </button>
            ))}
            <button 
              onClick={() => scrollToSection('location')}
              className="px-6 py-2 border border-gold text-gold hover:bg-gold hover:text-white transition-all duration-300 rounded-full text-sm font-medium uppercase tracking-widest"
            >
              Visit Us
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-ink"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full left-0 right-0 bg-cream border-t border-gold/10 shadow-xl p-6 md:hidden flex flex-col gap-6"
          >
            {['About', 'Collections', 'Gallery', 'Location'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-lg font-serif font-medium text-left border-b border-gold/5 pb-2"
              >
                {item}
              </button>
            ))}
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/background.jpg" 
            alt="Heartbeats Gallery Interior" 
            className="w-full h-full object-cover brightness-50"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-cream"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1 border border-gold/50 text-gold-light rounded-full text-xs uppercase tracking-[0.3em] mb-6 backdrop-blur-sm">
              Established 1993
            </span>
            <h1 className="text-5xl md:text-8xl text-white font-serif mb-6 leading-tight">
              Serving Customers <br />
              <span className="italic text-gold-light">Since 1993</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
              A trusted neighborhood gift shop with over 30 years of experience in helping customers find the perfect gifts for every occasion.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={() => scrollToSection('collections')}
                className="w-full sm:w-auto px-10 py-4 bg-gold text-white rounded-full font-medium uppercase tracking-widest hover:bg-gold/90 transition-all shadow-xl hover:shadow-gold/20"
              >
                Explore Collections
              </button>
              <button 
                onClick={() => scrollToSection('location')}
                className="w-full sm:w-auto px-10 py-4 bg-white/10 backdrop-blur-md text-white border border-white/30 rounded-full font-medium uppercase tracking-widest hover:bg-white/20 transition-all"
              >
                Find Our Store
              </button>
            </div>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 cursor-pointer"
          onClick={() => scrollToSection('about')}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-gold rounded-full"></div>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/shop.png" 
                  alt="Heartbeats Gallery Story" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-gold p-8 rounded-2xl shadow-xl hidden lg:flex flex-col justify-center text-white">
                <span className="text-4xl font-serif font-bold">30+</span>
                <span className="text-sm uppercase tracking-widest leading-tight">Years of Excellence</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-gold font-medium uppercase tracking-[0.2em] text-sm mb-4 block">Our Legacy</span>
              <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
                A Passion for Gifting, <br />
                <span className="italic">A Lifetime of Memories</span>
              </h2>
              <div className="space-y-6 text-ink/70 leading-relaxed text-lg">
                <p>
                  Founded in 1993, Heartbeats Gallery has been a cornerstone of the Hubballi community for over three decades. What started as a small dream has blossomed into a beloved destination for those seeking thoughtfulness and quality.
                </p>
                <p>
                  Our long-standing local reputation is built on a simple philosophy: every gift tells a story. We take pride in curating a collection that speaks to the heart, ensuring that every customer finds exactly what they need to express their feelings.
                </p>
                <p>
                  With a focus on quality products and strong customer relationships, we've had the privilege of being part of thousands of celebrations, milestones, and "just because" moments.
                </p>
              </div>
              <div className="mt-10 grid grid-cols-2 gap-8">
                <div>
                  <h4 className="text-gold font-serif text-2xl mb-1 font-bold">1993</h4>
                  <p className="text-xs uppercase tracking-widest text-ink/50 font-bold">Year Founded</p>
                </div>
                <div>
                  <h4 className="text-gold font-serif text-2xl mb-1 font-bold">10k+</h4>
                  <p className="text-xs uppercase tracking-widest text-ink/50 font-bold">Happy Customers</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Collections Section */}
      <section id="collections" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-gold font-medium uppercase tracking-[0.2em] text-sm mb-4 block">Curated Selection</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-6">Our Gift Collections</h2>
            <p className="text-ink/60 max-w-2xl mx-auto font-light">
              Explore our diverse range of premium gifts, each selected for its quality, beauty, and ability to bring joy.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {COLLECTIONS.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl mb-6 shadow-lg">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-2xl text-white font-serif mb-2 transition-all duration-300 group-hover:text-4xl group-hover:scale-105 origin-left">
                      {item.title}
                    </h3>
                    <p className="text-white/80 text-sm font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500 line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 px-6 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <span className="text-gold font-medium uppercase tracking-[0.2em] text-sm mb-4 block">Inside the Shop</span>
              <h2 className="text-4xl md:text-5xl font-serif">A Vibrant World of Gifts</h2>
            </div>
            <p className="text-ink/60 font-light md:text-right max-w-xs">
              Step into our store and experience a colorful retail environment filled with seasonal decorations and beautiful displays.
            </p>
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {GALLERY_IMAGES.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative group overflow-hidden rounded-2xl shadow-md"
              >
                <img 
                  src={img} 
                  alt={`Gallery ${index}`} 
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Contact Section */}
      <section id="location" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-gold font-medium uppercase tracking-[0.2em] text-sm mb-4 block">Visit Us</span>
              <h2 className="text-4xl md:text-5xl font-serif mb-8">Where to Find Us</h2>
              
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-gold-light flex items-center justify-center text-gold shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-serif font-bold mb-2">Our Address</h4>
                    <p className="text-ink/60 leading-relaxed">
                      Vidyanagar, Dr Jakaraddi Complex,<br />
                      Vidya Nagar, Hubballi,<br />
                      Karnataka 580021
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-gold-light flex items-center justify-center text-gold shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-serif font-bold mb-2">Call or WhatsApp</h4>
                    <p className="text-ink/60 mb-1">98801 88639</p>
                    <a 
                      href="https://wa.me/919880188639" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gold hover:underline text-sm font-medium flex items-center gap-1"
                    >
                      <MessageCircle size={14} /> Chat on WhatsApp
                    </a>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-gold-light flex items-center justify-center text-gold shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-serif font-bold mb-2">Opening Hours</h4>
                    <p className="text-ink/60">Monday – Sunday</p>
                    <p className="text-ink font-medium">9:00 AM – 9:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-8 bg-cream rounded-2xl border border-gold/10">
                <h4 className="text-xl font-serif mb-4 italic">A Warm Welcome Awaits</h4>
                <p className="text-ink/60 font-light leading-relaxed mb-6">
                  Come visit our store to experience the magic of Heartbeats Gallery in person. Our friendly staff is always here to help you find that perfect gift.
                </p>
                <div className="flex gap-4">
                  <a href="https://maps.app.goo.gl/DNRms8LKCYZJ4SP9A" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gold font-medium hover:gap-3 transition-all">
                    Get Directions <ChevronRight size={18} />
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="h-[500px] lg:h-auto rounded-3xl overflow-hidden shadow-2xl border-8 border-cream"
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d925.4866811969827!2d75.12510676707366!3d15.364603449951664!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb8d73455555555%3A0x75b2bd7b9b106a47!2sHeartbeats%20Gallery!5e1!3m2!1sen!2sin!4v1772737316038!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Heartbeats Gallery Location"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-ink text-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            <div>
              <div className="flex items-center mb-6 cursor-pointer" onClick={() => scrollToSection('hero')}>
                <img 
                  src="/logo.png" 
                  alt="Heartbeats Gallery" 
                  className="h-10 w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="text-white/50 font-light leading-relaxed mb-6">
                Serving Hubballi with love and thoughtfulness since 1993. Your destination for premium gifts and lasting memories.
              </p>
              <div className="flex gap-4">
                <a 
                  href="https://wa.me/919880188639" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition-all text-sm font-medium"
                >
                  <MessageCircle size={18} /> Chat on WhatsApp
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-gold font-serif text-lg mb-6 uppercase tracking-widest">Quick Links</h4>
              <ul className="space-y-4 text-white/60 font-light">
                {['About', 'Collections', 'Gallery', 'Location'].map((item) => (
                  <li key={item}>
                    <button 
                      onClick={() => scrollToSection(item.toLowerCase())}
                      className="hover:text-gold transition-colors"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-gold font-serif text-lg mb-6 uppercase tracking-widest">Contact Info</h4>
              <ul className="space-y-4 text-white/60 font-light">
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="text-gold shrink-0 mt-1" />
                  <span>Vidyanagar, Dr Jakaraddi Complex, Hubballi, Karnataka 580021</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={18} className="text-gold shrink-0" />
                  <span>98801 88639</span>
                </li>
                <li className="flex items-center gap-3">
                  <Clock size={18} className="text-gold shrink-0" />
                  <span>9:00 AM – 9:00 PM (Daily)</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-white/40 text-sm font-light">
            <p>© {new Date().getFullYear()} Heartbeats Gallery. All rights reserved.</p>
            <p>Serving Customers Since 1993</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
