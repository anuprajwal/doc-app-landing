import React from 'react';
import { Star, User, Info, Quote } from 'lucide-react';

const Reviews = () => {
  const reviews = [
    {
      quote: "Add a real patient review here — what they searched for, and how it went.",
      name: "Patient name",
      role: "Patient"
    },
    {
      quote: "Add a real doctor review here — what changed for their practice.",
      name: "Doctor name",
      role: "Doctor"
    },
    {
      quote: "Add a real hospital partner review here — what onboarding was actually like.",
      name: "Hospital / contact name",
      role: "Hospital partner"
    }
  ];

  return (
    <section 
      id="reviews"
      className="py-12 sm:py-20 transition-colors duration-300"
      style={{ backgroundColor: 'var(--bg-main)', color: 'var(--text-main)' }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-10">
          <span className="text-[#3b82f6] font-semibold text-xs sm:text-sm uppercase tracking-wider">
            Reviews
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold mt-1 sm:mt-2 mb-2 sm:mb-4 tracking-tight" style={{ color: 'var(--text-main)' }}>
            What people are saying
          </h2>
        </div>

        {/* Placeholder banner */}
        <div 
          className="max-w-2xl mx-auto mb-8 sm:mb-12 p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-dashed text-center text-xs sm:text-sm flex items-start sm:items-center justify-center gap-2"
          style={{ 
            backgroundColor: 'var(--card-bg)', 
            borderColor: 'var(--card-border)', 
            color: 'var(--text-muted)' 
          }}
        >
          <Info className="w-4 h-4 text-[#3b82f6] shrink-0 mt-0.5 sm:mt-0" />
          <span>
            This section is a placeholder layout, not live content — swap these in for real reviews from your patients and doctors once you have them to share.
          </span>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {reviews.map((rev, idx) => (
            <div 
              key={idx} 
              className="rounded-xl sm:rounded-2xl p-4 sm:p-6 transition-all duration-300 backdrop-blur-sm flex flex-col justify-between"
              style={{
                backgroundColor: 'var(--card-bg)',
                borderColor: 'var(--card-border)',
                borderWidth: '1px',
                borderStyle: 'solid'
              }}
            >
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-3 sm:mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-amber-400 stroke-amber-400" />
                  ))}
                </div>
                <div className="relative">
                  <Quote className="w-4 h-4 sm:w-6 sm:h-6 text-[#3b82f6]/20 absolute -top-1 -left-1 sm:-top-2 sm:-left-2 rotate-180" />
                  <p className="text-xs sm:text-sm italic mb-4 sm:mb-6 pl-3 sm:pl-4 leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                    "{rev.quote}"
                  </p>
                </div>
              </div>

              <div 
                className="flex items-center gap-3 pt-3 sm:pt-4 border-t"
                style={{ borderColor: 'var(--card-border)' }}
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#2563eb]/10 text-[#3b82f6] border border-[#2563eb]/20 flex items-center justify-center font-bold shrink-0">
                  <User className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <div className="font-bold text-xs sm:text-sm" style={{ color: 'var(--text-main)' }}>
                    [{rev.name}]
                  </div>
                  <div className="text-[11px] sm:text-xs" style={{ color: 'var(--text-muted)' }}>
                    {rev.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Reviews;