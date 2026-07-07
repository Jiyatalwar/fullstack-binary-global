import React from 'react';

const Customer = () => {
  const insights = [
    {
      id: 1,
      tag: "Endpoint Security",
      date: "18 FEB 2026",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqGQmOCuuE0CSORP2uv7SaT2AyxbDH5IAIkMsr4ovTYA&s=10",
      title: "Strengthening Endpoint Security for a Small Finance Bank using Sophos Endpoint Security",
      description: "We collaborated with a Small Finance Bank, a rapidly growing financial institution catering to underserved segments."
    },
    {
      id: 2,
      tag: "Endpoint Security",
      date: "17 FEB 2026",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8NJG2m01UK-VfqcU9867vBMCYAIRnEbhsIbQ52V98Ow&s=10",
      title: "Strengthening Data Protection for a Leading Indian Digital Connectivity Infrastructure Company Using Forcepoint DLP",
      description: "We partnered with a leading Indian Digital Connectivity Infrastructure company to deliver robust data compliance frameworks."
    },
    {
      id: 3,
      tag: "Data Management",
      date: "16 FEB 2026",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBfIlw6kB41nPfsP8le8Fxdgd2HiaFpBMAa2r55DP_Kg&s=10",
      title: "Effective Data Management for a Telecom CDN Network Using NetApp Storage Solution",
      description: "Optimizing high-volume structural traffic pipelines to provide robust, low-latency enterprise storage setups."
    }
  ];

  return (
    <div className="bg-white min-h-screen py-24 text-[#1a1a1a] font-sans">
      
      {/* MAIN CONTAINER: Handles max layout bounds and professional 70px side padding */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 md:px-[70px]">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          {/* Left Side: Grouped Title & Subtitle */}
          <div className="space-y-3 max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#1a1a1a]">
              Customer Success Stories
            </h2>
            <p className="text-base md:text-lg text-gray-600 font-normal leading-relaxed">
              Our client success is our greatest achievement — read their stories here!
            </p>
          </div>
        </div>

        {/* Insights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 xl:gap-10 w-full">
          {insights.map((item) => (
            <div key={item.id} className="flex flex-col group">
              {item.tag && (
                <span className="inline-flex self-start px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-[#1a1a1a] bg-[#ffefcf] rounded-full">
                  {item.tag}
                </span>
              )}

              {/* Feature Image Wrapper */}
              <div className="overflow-hidden rounded-2xl mb-5 aspect-[4/3] bg-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.01)]">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content Block */}
              <h3 className="text-xl font-semibold leading-snug mb-3 hover:text-indigo-600 cursor-pointer transition-colors duration-200 tracking-tight line-clamp-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500 font-normal leading-relaxed line-clamp-3">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Customer;