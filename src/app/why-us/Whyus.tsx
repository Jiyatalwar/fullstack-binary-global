
const WhyUs = () => {
  return (
    <section
      className="relative overflow-hidden bg-slate-50 px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-24 bg-cover bg-center bg-no-repeat"
      style={{
        // Replace this URL with your actual background image path
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.53), rgba(173, 173, 184, 0.47)), url('https://elements-resized.envatousercontent.com/envato-dam-assets-production/EVA/TRX/8b/72/95/7f/6a/v1_E10/E102CBB0.jpg?w=1600&cf_fit=scale-down&mark-alpha=18&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark4.png&q=85&format=auto&s=8b243a9498716c17c748e738e540c923474c7778998ebbaeb232af29216a0fe5')` 
      }}
    >  
        <div className="mx-auto w-full max-w-7xl">
        
        {/* Top Tag */}
       <div className="mb-4">
  <span className="inline-block text-xs font-semibold tracking-wide text-gray-500 uppercase px-4 py-1.5 bg-white border border-gray-200 rounded-full shadow-sm animate-[badgeZoomFade_0.5s_cubic-bezier(0.34,1.56,0.64,1)_forwards]">
    Why Choose Us
  </span>
</div>
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight animate-[badgeZoomFade_1s_cubic-bezier(0.34,1.56,0.64,1)_forwards]">
          Why Customers Choose  <span className="text-[#053999]">Binary Global</span> 
        </h2>
        <p className="text-xs md:text-lg font-medium text-gray-900 mb-10 animate-[badgeZoomFade_2s_cubic-bezier(0.34,1.56,0.64,1)_forwards]">We Provide Technology Services with Innovative Strategies, Broad Vision, and a Drive for Success.</p>

        {/* Bento Grid Layout */}
       {/* Outer Container: Clean 1-column layout scaling to 3 columns */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          
  {/* Row 1: The first 3 cards each taking up 1 column */}
  {/* Card 1: */}
  <div className="bg-[#f0f4f8] rounded-2xl p-8 flex flex-col justify-between border border-gray-100 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_15px_30px_rgba(0,0,0,0.05)] hover:bg-white group">
    <div>
  <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight group-hover:text-blue-800 transition-colors duration-300 animate-[badgeZoomFade_3s_cubic-bezier(0.34,1.56,0.64,1)_forwards]">
    Converged Solutions
  </h3>
  <p className="text-gray-600 text-sm leading-relaxed transition-opacity duration-500 delay-100 animate-[fadeIn_3s_ease-out_forwards]">
    We synergize diverse technologies into efficient, cost-saving operations to elevate performance. 
  </p>
</div>
  </div>

  {/* Card 2: */} 
  <div className="bg-[#f0f4f8] rounded-2xl p-8 flex flex-col justify-between border border-gray-100 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_15px_30px_rgba(0,0,0,0.05)] hover:bg-white group">
    <div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight group-hover:text-blue-800 transition-colors duration-300 animate-[badgeZoomFade_3s_cubic-bezier(0.34,1.56,0.64,1)_forwards]">
        Industry Vertical Focused
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed animate-[fadeIn_3s_ease-out_forwards]">
        We provide customized IT solutions, tailored to client needs, ensuring seamless integration with existing infrastructure if needed.
      </p>
    </div>
  </div>

  {/* Card 3: */}
  <div className="bg-[#f0f4f8] rounded-2xl p-8 flex flex-col justify-between border border-gray-100 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_15px_30px_rgba(0,0,0,0.05)] hover:bg-white group">
    <div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight group-hover:text-blue-800 transition-colors duration-300 animate-[badgeZoomFade_3s_cubic-bezier(0.34,1.56,0.64,1)_forwards]">
        Exceptional Customer Service
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed animate-[fadeIn_3s_ease-out_forwards]">
       Committed to meeting client needs, we work closely with customers and offer consistent, available support.
      </p>
    </div>
  </div>

  {/* Row 2: Card 4 spans 2 columns, Blue Card spans 1 column */}
  <div className="md:col-span-2 flex flex-col gap-6">
    {/* Card 4 */}
    <div className="bg-[#f0f4f8] rounded-2xl p-8 border border-gray-100 flex-1 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_15px_30px_rgba(0,0,0,0.05)] hover:bg-white group">
      <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight group-hover:text-blue-800 transition-colors duration-300 animate-[badgeZoomFade_3s_cubic-bezier(0.34,1.56,0.64,1)_forwards]">
        Strong Partnerships
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed max-w-4xl animate-[fadeIn_3s_ease-out_forwards]">
        Through alliances with top tech providers, we offer innovative solutions, giving clients a competitive edge and future readiness.
      </p>
    </div>

    {/* Card 5 */}
    <div className="bg-[#f0f4f8] rounded-2xl p-8 border border-gray-100 flex-1 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_15px_30px_rgba(0,0,0,0.05)] hover:bg-white group">
      <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight group-hover:text-blue-800 transition-colors duration-300 animate-[badgeZoomFade_3s_cubic-bezier(0.34,1.56,0.64,1)_forwards]">
        Cloud Confidence
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed max-w-4xl animate-[fadeIn_3s_ease-out_forwards]">
        Trust us to deliver secure, cost-effective, and tailored cloud solutions with expert guidance, ensuring success and peace of mind.
      </p>
    </div>
  </div>

  {/* Blue Highlighted Feature Card */}
  <div className="bg-[#03163d] rounded-3xl p-8 text-white flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_35px_rgba(3,22,61,0.25)] relative overflow-hidden group">
    {/* Inner decorative light glow expands subtly on card hover */}
    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none transition-transform duration-500 group-hover:scale-110" />
    
    <div>
      <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 mb-8 shadow-sm transition-transform duration-300 group-hover:scale-110">
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </div>
      
      <h3 className="text-3xl font-bold tracking-tight mb-6 leading-tight animate-[fadeIn_3s_ease-out_forwards]">
        Skilled Project<span className="block"> Management</span>
      </h3>
      
      <div className="space-y-4 text-blue-100 text-sm leading-relaxed opacity-90 animate-[fadeIn_3s_ease-out_forwards]">
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

export default WhyUs;