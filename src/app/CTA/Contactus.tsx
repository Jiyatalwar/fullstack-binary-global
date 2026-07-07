import React from 'react';

const Contactus = () => {
  return (
    <section className="relative overflow-hidden bg-transparent px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-24 xl:px-12">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-10 lg:flex-row lg:gap-12">
        {/* Left Content Column */}
        <div className="w-full max-w-2xl space-y-6 text-center lg:mx-0 lg:max-w-[550px] lg:text-left">
          <div className="flex items-center justify-center gap-2 text-sm text-gray-400 lg:justify-start" />

          <h1 className="text-3xl font-medium leading-[1.15] tracking-tight text-slate-900 sm:text-4xl lg:text-5xl xl:text-6xl">
            Innovate with Binary Global for private markets & finance
          </h1>

          <p className="mx-auto max-w-[450px] text-base leading-relaxed text-slate-900 lg:mx-0">
            Process entire data rooms in minutes. Extract precise metrics from CIMs and financial statements.
          </p>

          <div className="flex justify-center lg:justify-start">
            <button className="rounded-full bg-blue-800 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#efa332] hover:shadow-lg hover:shadow-orange-500/10 sm:px-8">
              Book a demo
            </button>
          </div>
        </div>

        {/* Right Video Column */}
        <div className="w-full max-w-2xl rounded-2xl border border-white/10 shadow-2xl shadow-black/10 overflow-hidden">
          <div className="relative w-full pt-[56.25%]">
            <video
              className="absolute inset-0 h-full w-full object-cover"
              src="/videos/7552423-hd_1920_1080_25fps.mp4"
              autoPlay
              loop
              muted
              playsInline
              poster="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf6YwH21um_NDkgCZSp36FgdUlZsnDiAN4lBZWPr3VqQ&s=10"
              preload="metadata"
            />

            <div className="absolute inset-0 z-10 flex flex-col justify-between bg-black/30 p-4 sm:p-6">
              <div className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-white/20 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-white/30 sm:h-16 sm:w-16">
                <div className="ml-1 h-0 w-0 border-b-[10px] border-b-transparent border-l-[16px] border-l-white border-t-[10px] border-t-transparent sm:border-b-[12px] sm:border-l-[20px] sm:border-t-[12px]" />
              </div>

              <div className="self-start max-w-[320px] text-left">
                <h3 className="text-lg font-medium leading-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)] sm:text-xl lg:text-2xl">
                  How Leading Finance Firms Use AI
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactus;