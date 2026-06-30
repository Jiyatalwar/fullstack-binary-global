"use client";

import React, { useState } from 'react';

const Solutions = () => {
  const solutionsData = [
    {
      id: "smart-infrastructure",
      category: "Smart Infrastructure",
      tagline: "Elevate Your Business with Innovative IT System Integration by Binary Global.",
       items: [
        { 
          title: "Enterprise Wireless & Wi-Fi 6E / Wi-Fi 7 Solutions", 
          desc: "High-performance enterprise wireless powered by Wi-Fi 6E and Wi-Fi 7, enabling secure, scalable, and AI-ready connectivity for modern digital enterprises.",
          bgImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop"
        },
        { 
          title: "Enterprise Collaboration & Unified Communications", 
          desc: "Boost Team Collaboration with Our Advanced Tools.",
          bgImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop"
        },
        { 
          title: "Campus, Branch & WAN Networking", 
          desc: "Design, deploy, and manage secure campus, branch, and WAN networks with high availability, performance, and zero-trust principles.",
          bgImage: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=600&auto=format&fit=crop"
        },
        { 
          title: "Industrial & Enterprise IoT Solutions", 
          desc: "Unlock IoT Potential with Our Advanced Solutions. Enhance Business Efficiency and Innovation with Connectivity.",
          bgImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop"
        },
        { 
          title: "Network as a Service (NaaS)", 
          desc: "Simplify your network management with Network as a Service. Take advantage of this solution to reduce costs and enhance efficiency in your operations.",
          bgImage: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=600&auto=format&fit=crop"
        },
        { 
          title: "Data Center & Hybrid Infrastructure Build", 
          desc: "Build a robust foundation for your digital operations with our Datacenter Build services. Rely on our expertise to create an infrastructure that's aligned with your business needs and future growth.",
          bgImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=600&auto=format&fit=crop"
        }
      ]
    },
    {
      id: "cyber-defense",
      category: "Cyber Defense",
      tagline: "Resilient Security Perimeter Guarding Structural Brand Assets.",
      introText: "Deploying enterprise firewalls, data compliance strategies, and comprehensive threat hunting protocols.",
      items: [
        { 
          title: "Network Security & Firewall Management", 
          desc: "Keep Your Network Strong with Our Robust Security Solutions.",
          bgImage: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=600&auto=format&fit=crop"
        },
         { 
          title: "Endpoint Security & EDR/XDR", 
          desc: "Protect endpoints against ransomware, malware, and advanced threats using EDR/XDR, behavioral analytics, and centralized policy enforcement.",
          bgImage: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=600&auto=format&fit=crop"
        },
         { 
          title: "Application & API Security", 
          desc: "Build and Secure Your Apps with Our Application Security Services.",
          bgImage: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=600&auto=format&fit=crop"
        },
        
      ]
    },
    {
      id: "data-management",
      category: "Data Management",
      tagline: "Transform Complex High-Volume Data Streams Into Decisive Business Intelligence.",
      introText: "Scalable databases and distributed analytics pipelines architectural setups built for real-time visibility.",
      items: []
    },
    {
      id: "cloud-solutions",
      category: "Cloud Solutions",
      tagline: "AWS, Azure, and Hybrid Cloud Ecosystems Engineered for Infinite Scale.",
      introText: "Flawless application container migration workflows with minimal runtime operational friction.",
      items: []
    },
    // {
    //   id: "managed-it",
    //   category: "Managed IT Services",
    //   introText: "Offload tactical platform maintenance tracking onto expert global technical network specialists.",
    //   items: []
    // },
  ];

  const [activeTab, setActiveTab] = useState(solutionsData[0]);

  return (
    <div className="w-full min-h-screen  text-[#111111] relative overflow-x-hidden pb-24">
      
      {/* TECH DECORATIVE BACKGROUND NETWORK GRAPHICS */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-24 flex flex-col items-center">
        
        {/* ==========================================
            1. HERO TITLE BLOCK WITH GIANT WATERMARK
           ========================================== */}
        <div className="w-full text-center max-w-4xl mx-auto relative mb-12 select-none mt-[50px]" >
          {/* Giant Background Watermark */}
          <div className="absolute left-1/2 -translate-x-1/2 -translate-y-[45%] text-[10vw] md:text-[6.5rem] font-black text-slate-400/30 tracking-tight leading-none  z-0 pointer-events-none  whitespace-nowrap">
            Our Solutions
          </div>
          
          {/* Foreground Title Material */}
          <div className="relative z-10 space-y-4">
            <span className="text-xs font-bold tracking-widest text-emerald-600 block">
            </span>
           <h2 className="text-2xl md:text-4xl font-large tracking-tight max-w-2xl mx-auto leading-snug bg-gradient-to-r from-pink-400 to-indigo-600 bg-clip-text text-transparent">
            {activeTab.tagline}
         </h2>
          </div>       
        </div>

        {/* ==========================================
            2. SERIF STYLE NAVIGATION BAR (Dynamic Tabs)
           ========================================== */}
        <div className="w-full max-w-5xl mx-auto mb-3 border-b border-slate-200/60 pb-2">
          <div className="flex flex-wrap justify-center items-center mt-[-20px] gap-x-6 gap-y-3">
            {solutionsData.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab)}
                className={`text-base md:text-lg  transition-all duration-300 relative pb-2 px-1${
                  activeTab.id === tab.id
                    ? 'font-medium after:absolute after:bottom-0 after:left-0 after:w-full  hover:text-blue-500'
                    : 'text-slate-400 hover:text-blue-500'
                }`}
              >
                {tab.category}
              </button>
            ))}
          </div>
        </div>

        {/* ==========================================
            3. INTERACTIVE CONTAINER LAYOUT MOCKUPS
           ========================================== */}
        <div className="w-full">
          {activeTab.items.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full transition-all duration-500 mb-[-20px]">
              {activeTab.items.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_35px_rgba(0,0,0,0.06)] group"
                >
                  {/* Visual Window Mockup Container */}
                  <div className="relative h-60 w-full overflow-hidden bg-slate-900">
                    <img 
                      src={item.bgImage} 
                      alt={item.title} 
                      className="w-full h-full object-cover opacity-40 mix-blend-luminosity group-hover:scale-105 group-hover:mix-blend-normal group-hover:opacity-60 transition-all duration-700"
                    />
                    
                    {/* Subtle Top Window Control Dots Bar */}
                    {/* Dark Shadow Overlay Boundary */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                    
                    {/* Floating Content Matrices */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-center space-y-2">
                      <h3 className="text-base md:text-lg font-bold text-white tracking-wide font-sans line-clamp-1">
                        {item.title}
                      </h3>
                      <p className="text-slate-300 text-[11px] font-normal tracking-wide leading-relaxed max-w-xs mx-auto line-clamp-2 opacity-90">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  {/* Card Base Window Controls Panel */}
                </div>
              ))}
            </div>
          ) : (
            /* Elegant Empty State Placeholder for non-populated lists */
            <div className="w-full max-w-xl mx-auto py-16 px-6 border border-dashed border-slate-200 bg-white rounded-2xl text-center">
              <p className="text-slate-400 text-sm italic font-serif">
                Solutions components and systems blueprints for this framework are being assembled.
              </p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Solutions;