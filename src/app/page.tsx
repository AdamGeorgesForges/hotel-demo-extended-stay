import Image from "next/image";
import { MapPin, Phone, Mail, Clock, Users, ChevronRight, ArrowRight, Star, Coffee, Dumbbell, Wifi, Briefcase, UtensilsCrossed, Car, Dog } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[#1a1a1a]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#e0e0e0]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#2d7d7d] flex items-center justify-center">
                <span className="text-white font-bold text-sm">T</span>
              </div>
              <div>
                <span className="text-[#1a1a1a] font-bold text-lg tracking-tight">The Timberline Residences</span>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-8 text-sm text-[#1a1a1a]/60">
              {['Suites', 'Amenities', 'Location', 'Rates', 'Contact'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-[#2d7d7d] transition-colors duration-200">
                  {item}
                </a>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <a href="#book" className="bg-[#2d7d7d] text-white px-5 py-2.5 text-sm font-medium hover:bg-[#246666] transition-colors duration-300">
                Book a Suite
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&q=80"
            alt="The Timberline Residences — modern extended-stay hotel near IAH"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[#1a1a1a]/55" />
        </div>
        <div className="relative z-10 max-w-4xl px-6 lg:px-16 py-32">
          <div className="mb-6">
            <span className="inline-block bg-[#2d7d7d] text-white text-xs px-3 py-1.5 tracking-widest uppercase font-medium">Near IAH Airport · Houston TX</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tight text-white leading-none mb-2">
            The Timberline<br />Residences
          </h1>
          <div className="w-24 h-1 bg-[#2d7d7d] mb-6" />
          <p className="text-xl md:text-2xl text-white/80 font-light mb-10 leading-relaxed max-w-lg">
            Your address for 30 days or better. Fully equipped suites with weekly housekeeping, kitchen, and 24-hour airport shuttle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#rooms" className="flex items-center justify-center gap-2 bg-white text-[#1a1a1a] px-8 py-4 text-sm font-bold hover:bg-[#2d7d7d] hover:text-white transition-colors">
              View Suites <ArrowRight size={16} />
            </a>
            <a href="#book" className="flex items-center justify-center gap-2 bg-[#2d7d7d] text-white px-8 py-4 text-sm font-bold hover:bg-[#246666] transition-colors">
              Book Extended Stay
            </a>
          </div>
        </div>
        <div className="absolute bottom-8 left-6 right-6 flex items-center justify-between">
          <div className="text-white/60 text-sm">
            <span className="text-[#2d7d7d] font-bold">14–90</span> day stays welcome
          </div>
          <div className="flex gap-3 text-white/60 text-sm">
            <span>✓ Kitchen in every suite</span>
            <span>✓ Weekly housekeeping</span>
          </div>
        </div>
      </section>

      {/* Booking Bar */}
      <section id="book" className="bg-[#3a3a38] py-7">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-[#2d7d7d] text-xs font-bold tracking-widest uppercase">Check In</label>
              <div className="flex items-center gap-3 bg-[#1a1a1a] border border-[#4a4a48] px-4 py-3">
                <Clock size={15} className="text-[#2d7d7d]" />
                <input type="date" className="bg-transparent text-white text-sm w-full outline-none" />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[#2d7d7d] text-xs font-bold tracking-widest uppercase">Check Out</label>
              <div className="flex items-center gap-3 bg-[#1a1a1a] border border-[#4a4a48] px-4 py-3">
                <Clock size={15} className="text-[#2d7d7d]" />
                <input type="date" className="bg-transparent text-white text-sm w-full outline-none" />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[#2d7d7d] text-xs font-bold tracking-widest uppercase">Guests</label>
              <div className="flex items-center gap-3 bg-[#1a1a1a] border border-[#4a4a48] px-4 py-3">
                <Users size={15} className="text-[#2d7d7d]" />
                <select className="bg-transparent text-white text-sm w-full outline-none">
                  <option>1 Guest</option>
                  <option>2 Guests</option>
                  <option>3 Guests</option>
                  <option>4+ Guests</option>
                </select>
              </div>
            </div>
            <div className="flex items-end">
              <a href="#rooms" className="w-full flex items-center justify-center gap-2 bg-[#2d7d7d] text-white px-6 py-3.5 text-sm font-bold uppercase hover:bg-[#246666] transition-colors">
                Check Availability
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Timberline */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#2d7d7d] tracking-widest uppercase text-xs font-bold mb-3">The Extended Stay Standard</p>
            <h2 className="text-5xl font-black tracking-tight text-[#1a1a1a]">Why guests stay<br /><span className="text-[#2d7d7d]">30 days at a time.</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: UtensilsCrossed,
                title: "Fully Equipped Kitchen",
                desc: "Every suite includes a full-size refrigerator, microwave, dishwasher, stovetop, and cookware. Bring a grocery list — we've got the rest."
              },
              {
                icon: Briefcase,
                title: "Weekly Housekeeping",
                desc: "Fresh towels, vacuumed floors, and sanitized surfaces every week. Because a clean base makes a long stay feel like home."
              },
              {
                icon: Car,
                title: "24-Hour IAH Shuttle",
                desc: "No car? No problem. Our hotel shuttle loops to all IAH terminals every 30 minutes, 24 hours a day, 7 days a week."
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="text-center p-8 border border-[#e0e0e0] hover:border-[#2d7d7d] transition-all duration-300">
                <div className="w-14 h-14 bg-[#e8f7f7] flex items-center justify-center mx-auto mb-6">
                  <Icon size={24} className="text-[#2d7d7d]" />
                </div>
                <h3 className="font-bold text-xl mb-3">{title}</h3>
                <p className="text-[#1a1a1a]/60 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rooms */}
      <section id="rooms" className="py-24 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-16">
            <div>
              <p className="text-[#2d7d7d] tracking-widest uppercase text-xs font-bold mb-3">Suites</p>
              <h2 className="text-5xl font-black tracking-tight text-[#1a1a1a]">Six suite types.<br /><span className="text-[#2d7d7d]">Every length of stay.</span></h2>
            </div>
            <a href="#book" className="hidden md:flex items-center gap-2 text-sm font-bold text-[#2d7d7d] hover:text-[#1a1a1a] transition-colors">
              Book Extended Stay <ArrowRight size={14} />
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "King Suite",
                size: "52 m²",
                view: "City view",
                desc: "King bed, dedicated workspace, and a full kitchen. Ideal for single travelers on 2–4 week assignments. Separate sitting area with pull-out sofa.",
                price: "From $3,200 / month",
                img: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=700&q=80",
                tag: "Most Popular"
              },
              {
                name: "Studio Queen",
                size: "38 m²",
                view: "Parking lot",
                desc: "Queen bed, compact full kitchen, and a work desk. Efficient and affordable for the independent professional. Ground-floor option available.",
                price: "From $2,100 / month",
                img: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=700&q=80",
                tag: null
              },
              {
                name: "Double Queen Suite",
                size: "55 m²",
                view: "Pool courtyard",
                desc: "Two queen beds and a full kitchen — built for colleagues sharing a room or small families needing a home base for a few weeks.",
                price: "From $3,600 / month",
                img: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=700&q=80",
                tag: null
              },
              {
                name: "Accessible Suite",
                size: "48 m²",
                view: "ADA compliant",
                desc: "Fully ADA compliant with roll-in shower, grab bars, lowered countertops, and visual alert system. Available in both King and Queen configurations.",
                price: "From $2,800 / month",
                img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=700&q=80",
                tag: "ADA Accessible"
              },
              {
                name: "Executive Suite",
                size: "68 m²",
                view: "Houston skyline",
                desc: "Separate executive office with dual monitors, ergonomic chair, and wired ethernet. King bedroom. Full kitchen. For the professional who means business.",
                price: "From $4,200 / month",
                img: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=700&q=80",
                tag: "Best for Business"
              },
              {
                name: "Monthly Manor",
                size: "82 m²",
                view: "Full floor corner",
                desc: "Our largest suite. Two separate bedrooms, a full kitchen with island seating, and a dedicated dining area. Corner unit with skyline views from every window.",
                price: "From $5,500 / month",
                img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=700&q=80",
                tag: "Premium"
              },
            ].map((room) => (
              <div key={room.name} className="group bg-white border border-[#e0e0e0] hover:border-[#2d7d7d] transition-all duration-300">
                <div className="relative h-52 overflow-hidden">
                  <Image src={room.img} alt={room.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  {room.tag && (
                    <div className="absolute top-3 left-3 bg-[#2d7d7d] text-white text-xs font-bold px-2 py-1 uppercase tracking-wider">
                      {room.tag}
                    </div>
                  )}
                </div>
                <div className="p-7">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold tracking-tight">{room.name}</h3>
                    <span className="text-[#2d7d7d] text-sm font-medium">{room.size}</span>
                  </div>
                  <p className="text-[#2d7d7d] text-xs font-medium mb-3">📍 {room.view}</p>
                  <p className="text-[#1a1a1a]/50 text-sm leading-relaxed mb-5">{room.desc}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-[#e0e0e0]">
                    <span className="text-[#1a1a1a] font-bold text-lg">{room.price}</span>
                    <a href="#book" className="flex items-center gap-1 text-sm font-bold text-[#2d7d7d] hover:text-[#1a1a1a] transition-colors">
                      Book <ChevronRight size={12} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section id="amenities" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#2d7d7d] tracking-widest uppercase text-xs font-bold mb-3">Hotel Amenities</p>
            <h2 className="text-5xl font-black tracking-tight text-[#1a1a1a]">Everything you need.<br /><span className="text-[#2d7d7d]">Nothing you don't.</span></h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { icon: Coffee, name: "Hot Breakfast", desc: "Weekdays 6–10am" },
              { icon: Dumbbell, name: "24hr Fitness", desc: "Cardio + free weights" },
              { icon: Briefcase, name: "Business Center", desc: "Printing + fax" },
              { icon: Wifi, name: "High-Speed WiFi", desc: "500Mbps ethernet" },
              { icon: Dog, name: "Pet Friendly", desc: "$75/pet per stay" },
              { icon: Car, name: "Free Parking", desc: "Covered + surface" },
            ].map(({ icon: Icon, name, desc }) => (
              <div key={name} className="text-center p-4 border border-[#e0e0e0] hover:border-[#2d7d7d] transition-all duration-300">
                <div className="w-10 h-10 bg-[#e8f7f7] flex items-center justify-center mx-auto mb-3">
                  <Icon size={18} className="text-[#2d7d7d]" />
                </div>
                <h3 className="text-sm font-bold mb-1">{name}</h3>
                <p className="text-[#1a1a1a]/40 text-xs">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Area */}
      <section id="location" className="py-24 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#2d7d7d] tracking-widest uppercase text-xs font-bold mb-3">Around Here</p>
            <h2 className="text-5xl font-black tracking-tight text-[#1a1a1a]">Houston at your<br /><span className="text-[#2d7d7d]"> doorstep.</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "IAH Terminal D", cat: "Travel Hub", dist: "8 min shuttle", img: "https://images.unsplash.com/photo-1436491865332-7a61a109db05?w=600&q=80", desc: "United Airlines hub with global connections. Our shuttle runs 24/7 — no need to time your arrival." },
              { name: "CityCENTRE", cat: "Dining & Retail", dist: "5 min drive", img: "https://images.unsplash.com/photo-1555860742-c9b7f0b8cb34?w=600&q=80", desc: "900,000 sq ft mixed-use development with 50+ restaurants, boutique fitness studios, and a cinema." },
              { name: "HPN Business Park", cat: "Corporate", dist: "4 min drive", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80", desc: "Home to Shell, NOV, and Schlumberger campuses. Timberline has corporate rate agreements with 30+ HPN tenants." },
              { name: "Worth Park", cat: "Outdoor Rec", dist: "7 min drive", img: "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=600&q=80", desc: "860 acres of green space with a 3-mile jogging trail, sports fields, and a dog park." },
              { name: "Topgolf Houston", cat: "Entertainment", dist: "12 min drive", img: "https://images.unsplash.com/photo-1572116469696-31de96f4a91e?w=600&q=80", desc: "Climate-controlled hitting bays, full bar, and restaurant. Groups of 2–20 welcome. Corporate events available." },
              { name: "Memorial Hermann Hospital", cat: "Medical", dist: "10 min drive", img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd91?w=600&q=80", desc: "One of Texas's top-ranked acute care hospitals. Traveling nurse and medical professional rates available." },
            ].map((exp) => (
              <div key={exp.name} className="group relative h-72 overflow-hidden">
                <Image src={exp.img} alt={exp.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[#2d7d7d] text-xs font-bold uppercase tracking-wider">{exp.cat}</span>
                    <span className="text-white/40 text-xs">• {exp.dist}</span>
                  </div>
                  <h3 className="text-white font-bold text-lg mb-1">{exp.name}</h3>
                  <p className="text-white/60 text-sm">{exp.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-[#3a3a38]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-1 mb-8">
            {[...Array(5)].map((_, i) => <Star key={i} size={16} className="text-[#2d7d7d] fill-[#2d7d7d]" />)}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-[#1a1a1a]/50 border border-[#4a4a48]">
              <p className="text-white/80 leading-relaxed mb-4">&ldquo;Six weeks at Timberline during my IAH posting. The kitchen meant I never had to eat takeout, and the shuttle made the airport effortless. I genuinely looked forward to going back each night.&rdquo;</p>
              <p className="text-[#2d7d7d] text-sm font-medium">Sandra M. — Regional Sales, Dallas</p>
            </div>
            <div className="p-6 bg-[#1a1a1a]/50 border border-[#4a4a48]">
              <p className="text-white/80 leading-relaxed mb-4">&ldquo;We used Timberline for three consecutive project teams on a 45-day HPN assignment. No turnover stress, no onboarding time lost. It just works.&rdquo;</p>
              <p className="text-[#2d7d7d] text-sm font-medium">Operations Lead — Schlumberger</p>
            </div>
            <div className="p-6 bg-[#1a1a1a]/50 border border-[#4a4a48]">
              <p className="text-white/80 leading-relaxed mb-4">&ldquo;As a traveling nurse, I need a place that doesn't make me think. Timberline gets it done cleanly, quietly, and without any surprises on the billing side.&rdquo;</p>
              <p className="text-[#2d7d7d] text-sm font-medium">James T., RN — Memorial Hermann</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-[#1a1a1a] border-t border-[#3a3a38] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-[#2d7d7d] flex items-center justify-center mx-auto ml-0">
                  <span className="text-white font-bold text-sm">T</span>
                </div>
                <span className="font-bold text-lg">The Timberline Residences</span>
              </div>
              <p className="text-white/40 text-sm leading-relaxed max-w-sm mb-6">A polished extended-stay hotel near IAH airport. Fully equipped suites, weekly housekeeping, and 24-hour shuttle service for professionals who need a real home away from home.</p>
            </div>
            <div>
              <h4 className="text-[#2d7d7d] text-xs font-bold tracking-widest uppercase mb-4">Contact</h4>
              <div className="space-y-3 text-sm text-white/60">
                <div className="flex items-start gap-2">
                  <MapPin size={14} className="mt-0.5 flex-shrink-0" />
                  <span>9200 Northwest Fwy<br />Houston, TX 77092</span>
                </div>
                <div><a href="tel:+1281****9200" className="hover:text-[#2d7d7d] transition-colors">+1 (281) 555-9200</a></div>
                <div><a href="mailto:reservations@timberlineresidences.com" className="hover:text-[#2d7d7d] transition-colors">reservations@timberlineresidences.com</a></div>
              </div>
            </div>
            <div>
              <h4 className="text-[#2d7d7d] text-xs font-bold tracking-widest uppercase mb-4">Quick Links</h4>
              <div className="space-y-3 text-sm">
                {['Suite Types', 'Extended Stay Rates', 'Corporate Contracts', 'Shuttle Schedule', 'Pet Policy', 'Careers'].map((link) => (
                  <a key={link} href="#" className="block text-white/60 hover:text-[#2d7d7d] transition-colors">{link}</a>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-[#3a3a38] mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/30 text-xs">© 2026 The Timberline Residences. All rights reserved.</p>
            <div className="flex gap-6 text-xs text-white/30">
              <a href="#" className="hover:text-[#2d7d7d]/60">Privacy</a>
              <a href="#" className="hover:text-[#2d7d7d]/60">Terms</a>
              <a href="#" className="hover:text-[#2d7d7d]/60">Accessibility</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
