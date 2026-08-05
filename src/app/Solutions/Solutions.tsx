"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';

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
    {
      id: "Managed IT Services",
      category: "Managed IT Services",
      tagline: "AWS, Azure, and Hybrid Cloud Ecosystems Engineered for Infinite Scale.",
      introText: "Flawless application container migration workflows with minimal runtime operational friction.",
      items: []
    },
    {
      id: "Application Service",
      category: "Application Service",  
      tagline: "AWS, Azure, and Hybrid Cloud Ecosystems Engineered for Infinite Scale.",
      introText: "Flawless application container migration workflows with minimal runtime operational friction.",
      items: []
    }
  ];

  const [activeTab, setActiveTab] = useState(solutionsData[0]);

  return (
    <div className="w-full min-h-screen text-[#111111] relative overflow-x-hidden pb-24">
      
      {/* TECH DECORATIVE BACKGROUND NETWORK GRAPHICS */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px]" />
      
      {/* MAIN CONTAINER: Handles max layout structure and custom professional 70px side padding */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-12 md:px-[70px] pt-24">
        
        {/* ==========================================
            1. HERO TITLE BLOCK WITH GIANT WATERMARK
           ========================================== */}
        <div className="w-full text-center max-w-4xl mx-auto relative mb-16 select-none mt-[50px]" >
          {/* Giant Background Watermark responsive sizing */}
          <div className="mt-[-50px]  absolute left-1/2 -translate-x-1/2 text-[8vw] lg:text-[5.5rem] font-black text-slate-300/90 tracking-tight leading-none z-0 pointer-events-none whitespace-nowrap transition-all duration-700 ease-in-out hover:text-[#03163d]/40 hover:-translate-y-[50%] animate-[slideUpZoom_1s_ease-out_forwards]">
            Our Solutions
          </div>
          
          {/* Foreground Title Material */}
          <div className="relative z-10 space-y-4 mt-3">
            <h2 className="text-xl mt-[-20px] md:mt-4 sm:text-2xl md:text-4xl font-medium tracking-tight max-w-3xl mx-auto leading-snug bg-gradient-to-r from-pink-400 to-indigo-600 bg-clip-text text-transparent transition-all duration-300 animate-[slideUpZoom_1.5s_ease-out_300ms_forwards]">
              {activeTab.tagline}
            </h2>
          </div>       
        </div>

       
        <div className="w-full mb-12 border-b border-slate-200/60 pb-4">
          {/* Using flex-wrap and justify-center to let items naturally drop to the next line on small screens */}
          <div className="flex flex-wrap justify-center items-center gap-x-5 sm:gap-x-8 gap-y-3 md:gap-y-4">
            {solutionsData.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab)}
                className={`text-sm sm:text-base lg:text-lg transition-all duration-300 transform hover:scale-105 relative pb-2 px-2 whitespace-normal text-center max-w-[200px] sm:max-w-none ${
                  activeTab.id === tab.id ? 'font-semibold text-indigo-600' : 'text-slate-400 hover:text-blue-500'
                }`}
              >
                {tab.category}
                
                {/* Dynamic Sliding Line */}
                {activeTab.id === tab.id && (
                  <motion.div 
                    layoutId="activeTabLine"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-indigo-600"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
        {/* ==========================================
            3. INTERACTIVE CONTAINER LAYOUT MOCKUPS
           ========================================== */}
        <div className="w-full">
          {activeTab.items.length > 0 ? (
            /* Layout adjustments to ensure standard grid alignments match layout bounds */
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8 w-full transition-all duration-500">
              {activeTab.items.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_35px_rgba(0,0,0,0.06)] group"
                >
                  {/* Visual Window Mockup Container */}
                  <div className="relative h-56 sm:h-60 w-full overflow-hidden bg-slate-900">
                    <img 
                      src={item.bgImage} 
                      alt={item.title} 
                      className="w-full h-full object-cover opacity-40 mix-blend-luminosity group-hover:scale-105 group-hover:mix-blend-normal group-hover:opacity-60 transition-all duration-700"
                    />
                    
                    {/* Dark Shadow Overlay Boundary */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                    
                    {/* Floating Content Matrices */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-center space-y-2">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-white tracking-wide font-sans line-clamp-1">
                        {item.title}
                      </h3>
                      <p className="text-slate-300 text-[11px] sm:text-xs font-normal tracking-wide leading-relaxed max-w-xs mx-auto line-clamp-2 opacity-90">
                        {item.desc}
                      </p>
                    </div>
                  </div>
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
