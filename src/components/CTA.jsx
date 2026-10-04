import React from 'react';

const CTA = () => {
  return (
    <section className="bg-gradient-to-br from-blue-600 to-indigo-800 text-white py-12 sm:py-20 text-center px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold mb-3 sm:mb-4">
          Ready to get started?
        </h2>
        <p className="text-blue-100 text-xs sm:text-base md:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto">
          Whether you're looking for care, or you're a doctor or hospital who wants in — we'd like to hear from you.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
          <button className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-3.5 bg-white text-blue-700 font-bold rounded-full shadow-lg hover:bg-blue-50 active:scale-95 transition-all text-xs sm:text-base">
            Get the app
          </button>
          <button className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold rounded-full border border-white/30 backdrop-blur-md active:scale-95 transition-all text-xs sm:text-base">
            Talk to our team
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;