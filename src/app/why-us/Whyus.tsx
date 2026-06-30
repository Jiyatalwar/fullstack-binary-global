import React from 'react';

const WhyChooseUs = () => {
  return (
    <section className="bg-slate-50 min-h-screen py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Tag */}
        <div className="mb-4">
          <span className="text-xs font-semibold tracking-wide text-gray-500 uppercase px-4 py-1.5 bg-white border border-gray-200 rounded-full shadow-sm">
            Why Choose Us
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">
          Why Customers Choose  <span className="text-[#053999]">Binary Global</span> 
        </h2>
        <p className="text-xl md:text-[20px] font-medium text-gray-900 mb-10">We Provide Technology Services with Innovative Strategies, Broad Vision, and a Drive for Success.</p>

        {/* Bento Grid Layout */}
       {/* Outer Container: Clean 1-column layout scaling to 3 columns */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          
  {/* Row 1: The first 3 cards each taking up 1 column */}
  {/* Card 1:*/}
  <div className="bg-[#f0f4f8] rounded-2xl p-8 flex flex-col justify-between border border-gray-100">
    <div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">Converged Solutions</h3>
      <p className="text-gray-600 text-sm leading-relaxed">
       We synergize diverse technologies into efficient, cost-saving operations to elevate performance. 
      </p>
    </div>
  </div>

  {/* Card 2:*/} 
  <div className="bg-[#f0f4f8] rounded-2xl p-8 flex flex-col justify-between border border-gray-100">
    <div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">Industry Vertical Focused</h3>
      <p className="text-gray-600 text-sm leading-relaxed">
        We provide customized IT solutions, tailored to client needs, ensuring seamless integration with existing infrastructure if needed.
      </p>
    </div>
  </div>

  {/* Card 3:*/}
  <div className="bg-[#f0f4f8] rounded-2xl p-8 flex flex-col justify-between border border-gray-100">
    <div>

      <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">Exceptional Customer Service</h3>
      <p className="text-gray-600 text-sm leading-relaxed">
       Committed to meeting client needs, we work closely with customers and offer consistent, available support.
      </p>
    </div>
  </div>

  {/* Row 2: Card 4 spans 2 columns, Blue Card spans 1 column */}
  {/* Container taking up 2 grid columns on medium+ screens */}
  <div className="md:col-span-2 flex flex-col gap-6">

    {/* Added 'flex-1' so this card stretches evenly */}
    <div className="bg-[#f0f4f8] rounded-2xl p-8 border border-gray-100 flex-1">
      <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">Strong Partnerships</h3>
      <p className="text-gray-600 text-sm leading-relaxed max-w-4xl">
        Through alliances with top tech providers, we offer innovative solutions, giving clients a competitive edge and future readiness.
      </p>
    </div>

    {/* Added 'flex-1' so this card stretches evenly */}
    <div className="bg-[#f0f4f8] rounded-2xl p-8 border border-gray-100 flex-1">
      <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">Cloud Confidence</h3>
      <p className="text-gray-600 text-sm leading-relaxed max-w-4xl">
        Trust us to deliver secure, cost-effective, and tailored cloud solutions with expert guidance, ensuring success and peace of mind.
      </p>
    </div>
  </div>

  {/* Blue Highlighted Feature Card (Now occupying the 3rd spot on the 2nd row) */}
  <div className="bg-[#03163d] rounded-3xl p-8 text-white flex flex-col justify-between shadow-xl relative overflow-hidden">
    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
    
    <div>
      <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 mb-8 shadow-sm">
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </div>
      
      <h3 className="text-3xl font-bold tracking-tight mb-6 leading-tight">
        Skilled Project<span className="block"> Management</span>
      </h3>
      
      <div className="space-y-4 text-blue-100 text-sm leading-relaxed opacity-90">
        <p>
         Our team expertly oversees complex integration projects, ensuring smooth and efficient execution from start to finish.
        </p>
      </div>
    </div>
  </div>
    
</div>

      </div>
    </section>
  );
};

export default WhyChooseUs;