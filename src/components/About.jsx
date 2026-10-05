import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

const About = () => {
  const whyChooseUs = [
    {
      title: "Verified network:",
      desc: "every doctor and hospital on the platform is vetted before they're listed."
    },
    {
      title: "Built for India:",
      desc: "multilingual support across 15+ languages, not a one-size-fits-all import."
    },
    {
      title: "Easy integration:",
      desc: "designed to fit into how hospitals already work, not replace it overnight."
    },
    {
      title: "Grows with you:",
      desc: "the same platform for a single clinic or a multi-hospital network."
    }
  ];

  return (
    <section 
      id="about" 
      className="py-12 sm:py-20 transition-colors duration-300"
      style={{ backgroundColor: 'var(--bg-main)', color: 'var(--text-main)' }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-16">
          <span className="text-[#3b82f6] font-semibold text-xs sm:text-sm uppercase tracking-wider">
            About DocApp
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold mt-1 sm:mt-2 mb-2 sm:mb-4 tracking-tight" style={{ color: 'var(--text-main)' }}>
            Why we built this
          </h2>
        </div>

        {/* 2 Column Card Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
          
          {/* Mission Card */}
          <div 
            className="rounded-2xl sm:rounded-3xl p-5 sm:p-10 transition-all duration-300 backdrop-blur-sm flex flex-col justify-between"
            style={{
              backgroundColor: 'var(--card-bg)',
              borderColor: 'var(--card-border)',
              borderWidth: '1px',
              borderStyle: 'solid'
            }}
          >
            <div>
              <h3 className="text-lg sm:text-2xl font-bold text-[#3b82f6] mb-3 sm:mb-6">
                Our Mission
              </h3>
              <p className="leading-relaxed mb-4 sm:mb-6 text-xs sm:text-base" style={{ color: 'var(--text-muted)' }}>
                We believe technology should enhance human connection in healthcare, not replace it. Our mission is to build digital tools that help healthcare providers deliver exceptional care, while giving patients a simpler way to find and reach the right doctor.
              </p>
              <p className="leading-relaxed text-xs sm:text-base" style={{ color: 'var(--text-muted)' }}>
                Founded in 2025, DocApp connects patients, doctors and hospitals across India into a single, dependable system — built to close the gap between care that exists and care that's actually reachable.
              </p>
            </div>
          </div>

          {/* Why Choose Us Card */}
          <div 
            className="rounded-2xl sm:rounded-3xl p-5 sm:p-10 transition-all duration-300 backdrop-blur-sm flex flex-col justify-between"
            style={{
              backgroundColor: 'var(--card-bg)',
              borderColor: 'var(--card-border)',
              borderWidth: '1px',
              borderStyle: 'solid'
            }}
          >
            <div>
              <h3 className="text-lg sm:text-2xl font-bold text-[#3b82f6] mb-3 sm:mb-6">
                Why Choose Us
              </h3>
              <ul className="space-y-3 sm:space-y-5">
                {whyChooseUs.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 sm:gap-3">
                    <span className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 rounded-full flex items-center justify-center mt-0.5">
                      <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 stroke-[3]" />
                    </span>
                    <p className="text-xs sm:text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                      <strong className="font-semibold" style={{ color: 'var(--text-main)' }}>{item.title} </strong>
                      {item.desc}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom Workstation CTA */}
            {/* <div 
              className="pt-4 sm:pt-6 mt-6 sm:mt-8 border-t flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
              style={{ borderColor: 'var(--card-border)' }}
            >
              <span className="text-xs sm:text-sm font-medium" style={{ color: 'var(--text-muted)' }}>
                Access your hospital workstation
              </span>
              <a 
                href="https://auth.docapp.co.in/hospital/login"
                className="w-full sm:w-auto px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full shadow-md transition-all flex items-center justify-center gap-2 shrink-0"
              >
                <span>Sign In</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </a>
            </div> */}
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;