import React, { useState, useEffect } from 'react';

const Hero = () => {
  // 1. Array containing different slides for your IT website
  const slides = [
    {
      badge: "Transforming Your IT Landscape For The Future",
      title: "Transforming Your IT Landscape For The Future",
      subtitle: "Build the Backbone of Innovation with Our ICT Infrastructure Services. Ensure Seamless Connectivity and Optimized Performance."
    },
    {
      badge: "Smart. Connected. Infrastructure",
      title: "Next-Gen Cybersecurity & Threat Monitoring",
      subtitle: "Deploy proactive defense barriers with 24/7 SOC monitoring, smart IAM configurations, and intelligent network perimeter firewalls."
    },
    {
      badge: "Cloud-Native Infrastructure",
      title: "Engineered for Absolute Scalability & Speed",
      subtitle: "Accelerate development using high-performance Next.js architectures, secure AWS cloud orchestration, and optimized Nginx deployments."
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      // Start exit animation slightly before switching data
      setIsTransitioning(true);
      
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setIsTransitioning(false);
      }, 400); // Duration matches transition speed
    }, 5000); // Change slides every 5 seconds

    return () => clearInterval(slideInterval);
  }, [slides.length]);

  return (
    <section className="relative min-h-screen w-full overflow-hidden text-white bg-[#060b13]">
      
      {/* 1. BACKGROUND VIDEO & CORRECTED OVERLAY LAYER */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover opacity-60"
          src="/videos/hero-background2.mp4" 
        /> 
        {/* Solid/Gradient Overlay to dim the video background */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-transparent" />
      </div>

      {/* 2. MAIN CONTENT WRAPPER */}
      <div className="relative z-10 max-w-6xl mx-auto min-h-screen flex flex-col justify-between px-6 md:px-12 pt-40 pb-16">
        
        {/* 3. CENTERED CAROUSEL TEXT */}
        <div className="flex-1 flex flex-col items-center justify-center text-center max-w-3xl mx-auto space-y-8 my-auto">
          
          <div 
            className={`w-full flex flex-col items-center space-y-8 transition-all duration-500 transform ${
              isTransitioning 
                ? 'opacity-0 -translate-y-2 blur-sm' 
                : 'opacity-100 translate-y-0 blur-none'
            }`}
          >
            {/* Subtle Glowing Badge */}
            <span className="text-xs uppercase tracking-[0.25em] bg-blue-500/10 border border-blue-400/20 text-blue-400 px-5 py-2 rounded-full backdrop-blur-md font-semibold shadow-[0_0_15px_rgba(59,130,246,0.1)]">
               {slides[currentSlide].badge}
            </span>
            
            {/* Main Elegant Title */}
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.15] min-h-[120px] md:min-h-[170px]">
               {slides[currentSlide].title}
            </h1>
            
            {/* Subtitle */}
            <p className="text-slate-300 text-lg md:text-xl max-w-xl font-light leading-relaxed">
              {slides[currentSlide].subtitle}
            </p>
          </div>
          
          {/* Large Pill CTA Button */}
          <div className="w-full max-w-md pt-4">
            <button className="w-full bg-white text-[#060b13] py-4 rounded-full font-semibold text-base hover:bg-gray-100 transition-all duration-300 shadow-[0_10px_25px_rgba(0,0,0,0.4)] hover:scale-[1.01]">
               Get Started
            </button>
          </div>

          {/* Carousel Slide Indicators */}
          <div className="flex space-x-2 pt-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setIsTransitioning(true);
                  setTimeout(() => {
                    setCurrentSlide(i);
                    setIsTransitioning(false);
                  }, 350);
                }}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  currentSlide === i ? 'w-8 bg-blue-500' : 'w-2 bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

        </div>
        {/* Carousel ends here */}

        {/* 4. BOTTOM THREE-COLUMN FEATURE BAR */}
        <div className="border-t border-white/10 pt-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-left w-full mt-12 md:mt-0">
          
          {/* Feature Item 1 */}
          <div className="space-y-2 group cursor-pointer">
            <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors duration-200 flex items-center gap-2">
              SOC Monitoring
            </h3>
            <p className="text-gray-400 text-sm font-light leading-relaxed">
              24/7 continuous threat visibility and rapid incident containment solutions.
            </p>
          </div>

          {/* Feature Item 2 */}
          <div className="space-y-2 group cursor-pointer">
            <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors duration-200">
              Identity & Access
            </h3>
            <p className="text-gray-400 text-sm font-light leading-relaxed">
              Zero Trust implementation with fine-grained corporate access management.
            </p>
          </div>

          {/* Feature Item 3 */}
          <div className="space-y-2 group cursor-pointer">
            <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors duration-200">
              Firewall Security
            </h3>
            <p className="text-gray-400 text-sm font-light leading-relaxed">
              Next-generation network protection layers minimizing perimeter risks.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;