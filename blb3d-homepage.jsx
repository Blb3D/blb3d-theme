import React, { useState } from 'react';

const BLB3DHomepage = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const Logo = () => (
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 relative">
        <svg viewBox="0 0 100 120" className="w-full h-full">
          <path d="M20 15 Q20 10 30 10 L65 10 Q80 10 80 25 Q80 40 65 45 L45 45" 
                fill="none" stroke="#026DF8" strokeWidth="10" strokeLinecap="round"/>
          <path d="M20 10 L20 75" fill="none" stroke="#026DF8" strokeWidth="10" strokeLinecap="round"/>
          <path d="M20 45 L55 45 Q75 45 75 60 Q75 75 55 75 L20 75" 
                fill="none" stroke="#026DF8" strokeWidth="10" strokeLinecap="round"/>
          <path d="M15 85 L75 85 Q85 85 85 95 L85 100" 
                fill="none" stroke="#EE7A08" strokeWidth="8" strokeLinecap="round"/>
        </svg>
      </div>
      <span className="text-2xl font-bold tracking-tight">
        <span style={{ color: '#026DF8' }}>BLB</span>
        <span className="text-white">3D</span>
      </span>
    </div>
  );

  return (
    <div className="font-sans bg-gray-900 min-h-screen">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-8 py-5 absolute top-0 left-0 right-0 z-50">
        <Logo />
        <div className="flex items-center gap-8">
          {['Shop', 'Custom Printing', 'Wholesale', 'About'].map(item => (
            <a key={item} href="#" className="text-white/80 hover:text-white text-sm font-medium transition-colors">
              {item}
            </a>
          ))}
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition-colors">
            Get a Quote
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center px-8 pt-24 pb-16 relative" style={{ background: 'linear-gradient(135deg, #0F0F1E 0%, #1a1a2e 100%)' }}>
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)',
            backgroundSize: '32px 32px'
          }}
        />
        
        <div className="max-w-2xl relative z-10">
          <h1 className="text-5xl font-bold leading-tight mb-6 text-white">
            From fidgets to fixtures.
            <br />
            <span style={{ color: '#026DF8' }}>We make what you need.</span>
          </h1>
          <p className="text-xl text-white/60 mb-10 leading-relaxed">
            Indiana's maker studio for custom 3D printing. Dragons for your desk. 
            Signage for your business. Everything in between.
          </p>
          <div className="flex gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-base transition-all hover:scale-105">
              Shop Now
            </button>
            <button 
              className="text-white px-8 py-4 rounded-lg font-semibold text-base transition-all hover:bg-orange-500/10"
              style={{ border: '2px solid #EE7A08' }}
            >
              Get a Quote
            </button>
          </div>
        </div>

        <div className="absolute right-16 top-1/2 -translate-y-1/2 w-96 h-96 rounded-2xl flex items-center justify-center"
             style={{ 
               background: 'linear-gradient(135deg, rgba(2,109,248,0.15) 0%, rgba(238,122,8,0.15) 100%)',
               border: '1px solid rgba(255,255,255,0.1)'
             }}>
          <span className="text-white/20 text-sm">[Hero Image: Dragon + Industrial Part]</span>
        </div>
      </section>

      {/* Shop Preview */}
      <section className="bg-white py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: '#EE7A08' }}>
            Shop the Collection
          </p>
          <h2 className="text-3xl font-bold text-gray-900 mb-12">What are you looking for?</h2>

          <div className="grid grid-cols-4 gap-6">
            {[
              { name: 'Dragons', emoji: '🐉' },
              { name: 'Fidgets', emoji: '🔄' },
              { name: 'Desk Toys', emoji: '🎯' },
              { name: 'New Arrivals', emoji: '✨' }
            ].map((col, i) => (
              <div
                key={col.name}
                onMouseEnter={() => setHoveredCard(i)}
                onMouseLeave={() => setHoveredCard(null)}
                className="bg-gray-50 rounded-2xl p-10 text-center cursor-pointer transition-all duration-300"
                style={{
                  transform: hoveredCard === i ? 'translateY(-8px)' : 'translateY(0)',
                  boxShadow: hoveredCard === i ? '0 20px 40px rgba(0,0,0,0.1)' : 'none',
                  border: hoveredCard === i ? '2px solid #026DF8' : '2px solid transparent'
                }}
              >
                <div className="text-5xl mb-4">{col.emoji}</div>
                <h3 className="text-lg font-semibold text-gray-900">{col.name}</h3>
                <p className="text-sm text-gray-500 mt-2">Browse collection</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a href="#" className="font-semibold transition-colors" style={{ color: '#026DF8' }}>
              View All Products →
            </a>
          </div>
        </div>
      </section>

      {/* Custom Quote CTA */}
      <section className="py-20 px-8" style={{ background: '#0F0F1E' }}>
        <div className="max-w-6xl mx-auto grid grid-cols-2 gap-16 items-center">
          <div 
            className="rounded-2xl h-96 flex items-center justify-center"
            style={{ 
              background: 'linear-gradient(135deg, rgba(2,109,248,0.2) 0%, rgba(238,122,8,0.2) 100%)',
              border: '1px solid rgba(255,255,255,0.1)'
            }}
          >
            <span className="text-white/20 text-sm">[Custom Project Photo]</span>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: '#EE7A08' }}>
              Custom Printing
            </p>
            <h2 className="text-4xl font-bold text-white mb-6 leading-tight">
              Got a file?<br />Let's print it.
            </h2>
            <p className="text-lg text-white/60 mb-8 leading-relaxed">
              Upload your STL or 3MF and get an instant estimate. 
              From one-off prototypes to production runs.
            </p>
            <ul className="space-y-3 mb-8">
              {['Multiple materials & colors', 'Fast turnaround', 'No minimum order'].map(item => (
                <li key={item} className="flex items-center gap-3 text-white/90">
                  <span style={{ color: '#EE7A08' }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <button 
              className="text-white px-8 py-4 rounded-lg font-semibold text-base transition-all hover:opacity-90"
              style={{ background: '#EE7A08' }}
            >
              Get Instant Quote
            </button>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="bg-white py-20 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-semibold uppercase tracking-wider mb-8" style={{ color: '#EE7A08' }}>
            Trusted by Makers & Businesses
          </p>

          <blockquote className="text-2xl font-medium text-gray-900 mb-6 leading-relaxed">
            "BLB3D made custom signage for our camp store. Quality was incredible and turnaround was fast."
          </blockquote>
          <p className="text-gray-500 mb-12">— Bluffton KOA</p>

          <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto">
            {[
              { number: '500+', label: 'Orders' },
              { number: '4.9★', label: 'Rating' },
              { number: '100%', label: 'Indiana Made' }
            ].map(stat => (
              <div key={stat.label}>
                <div className="text-4xl font-bold" style={{ color: '#026DF8' }}>{stat.number}</div>
                <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* B2B Teaser */}
      <section className="py-20 px-8" style={{ background: 'linear-gradient(135deg, #026DF8 0%, #0155c7 100%)' }}>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-white/70 mb-4">
            For Businesses
          </p>
          <h2 className="text-4xl font-bold text-white mb-6">
            Wholesale & Custom Manufacturing
          </h2>
          <p className="text-lg text-white/90 mb-4 leading-relaxed">
            Volume pricing. Custom catalogs. Dedicated support for your ongoing production needs.
          </p>
          <p className="text-white/60 mb-8">
            Signage • Fixtures • Merchandise • Prototypes
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-base transition-all hover:bg-gray-100">
            Learn About Wholesale →
          </button>
        </div>
      </section>

      {/* About Teaser */}
      <section className="bg-gray-50 py-20 px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: '#EE7A08' }}>
              The Shop
            </p>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Made in Fort Wayne, Indiana</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              BLB3D is a small print farm with big capabilities. 4 printers. 
              Zero outsourcing. Every order made in-house with care.
            </p>
            <a href="#" className="font-semibold" style={{ color: '#026DF8' }}>
              About Us →
            </a>
          </div>

          <div className="bg-gray-200 rounded-2xl h-80 flex items-center justify-center">
            <span className="text-gray-400 text-sm">[Print Farm Photo]</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-8" style={{ background: '#0F0F1E' }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-4 gap-12 mb-12">
            <div className="col-span-1">
              <Logo />
              <p className="text-white/50 mt-4 text-sm leading-relaxed">
                From fidgets to fixtures.<br />
                We make what you need.
              </p>
            </div>

            {[
              { title: 'Shop', links: ['Dragons', 'Fidgets', 'Desk Toys', 'All Products'] },
              { title: 'Services', links: ['Custom Printing', 'Wholesale', 'Get a Quote'] },
              { title: 'Company', links: ['About', 'Contact', 'FAQ'] }
            ].map(section => (
              <div key={section.title}>
                <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">
                  {section.title}
                </h4>
                {section.links.map(link => (
                  <a key={link} href="#" className="block text-white/50 hover:text-white/80 text-sm mb-3 transition-colors">
                    {link}
                  </a>
                ))}
              </div>
            ))}
          </div>

          <div className="border-t border-white/10 pt-8 flex justify-between items-center">
            <p className="text-white/30 text-sm">© 2026 BLB3D Printing. Fort Wayne, Indiana.</p>
            <div className="flex gap-6">
              {['Privacy', 'Terms'].map(link => (
                <a key={link} href="#" className="text-white/30 hover:text-white/50 text-sm transition-colors">
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BLB3DHomepage;
