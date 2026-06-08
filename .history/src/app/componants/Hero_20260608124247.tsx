import React from 'react';

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden text-white bg-[#060b13]">
      
      {/* 1. BACKGROUND VIDEO / IMAGE LAYER */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-slate-950 via-slate-900/70 to-transparent">
        {/* If you are using a video, uncomment this block: */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover animate-fade-in"
          src="/videos/hero-background2.mp4" 
        /> 
        {/* Premium Dark Vignette Overlay to blend seamlessly with your floating Navbar */}
        <div className="absolute inset-0 " />
      </div>

      {/* 2. MAIN CONTENT WRAPPER */}
      <div className="relative z-10 max-w-6xl mx-auto min-h-screen flex flex-col justify-between px-6 md:px-12 pt-40 pb-16">
        
        {/* 3. CENTERED hero text start here */}
        <div className="flex-1 flex flex-col items-center justify-center text-center max-w-3xl mx-auto space-y-8 my-auto">
          
          {/* Subtle Glowing Badge */}
          {/* <span className="text-xs uppercase tracking-[0.25em] bg-blue-500/10 border border-blue-400/20 text-blue-400 px-5 py-2 rounded-full backdrop-blur-md font-semibold shadow-[0_0_15px_rgba(59,130,246,0.1)]">
             Transforming Your IT Landscape For The Future
          </span> */}
          
          {/* Main Elegant Title with Serif/Italic Style Contrast */}
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.15]">
             Transforming Your IT Landscape For The Future
          </h1>
          
          {/* Subtitle */}
          <p className="text-white text-lg md:text-xl max-w-xl font-light leading-relaxed">
            Build the Backbone of Innovation with Our ICT Infrastructure Services. Ensure Seamless Connectivity and Optimized Performance.
          </p>
          
          {/* Large Pill CTA Button matching your target reference */}
          {/* <div className="w-full max-w-md pt-4">
            <button className="w-full bg-white text-[#060b13] py-4 rounded-full font-semibold text-base hover:bg-gray-100 transition-all duration-300 shadow-[0_10px_25px_rgba(0,0,0,0.4)] hover:scale-[1.01]">
              Get Started
            </button>
          </div> */}
        </div>

        {/* 4. BOTTOM THREE-COLUMN FEATURE BAR */}
        <div className="border-t border-white/10 pt-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-left w-full mt-12 md:mt-0">
          
          {/* Feature Item 1 */}
          {/* <div className="space-y-2 group cursor-pointer">
            <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors duration-200 flex items-center gap-2">
              SOC Monitoring
            </h3>
            <p className="text-gray-400 text-sm font-light leading-relaxed">
              24/7 continuous threat visibility and rapid incident containment solutions.
            </p>
          </div> */}

          {/* Feature Item 2 */}
          {/* <div className="space-y-2 group cursor-pointer">
            <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors duration-200">
              Identity & Access
            </h3>
            <p className="text-gray-400 text-sm font-light leading-relaxed">
              Zero Trust implementation with fine-grained corporate access management.
            </p>
          </div> */}

          {/* Feature Item 3 */}
          {/* <div className="space-y-2 group cursor-pointer">
            <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors duration-200">
              Firewall Security
            </h3>
            <p className="text-gray-400 text-sm font-light leading-relaxed">
              Next-generation network protection layers minimizing perimeter risks.
            </p>
          </div> */}

        </div>

      </div>
    </section>
  );
};

export default Hero;