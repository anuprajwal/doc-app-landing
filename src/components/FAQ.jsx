import React, { useState } from 'react';
import { Plus } from 'lucide-react';

const FAQ = () => {
  const [openIdx, setOpenIdx] = useState(null);

  const faqs = [
    {
      q: "Is DocApp free for patients?",
      a: "Yes. DocApp is free to search, book and consult on — the platform is funded on the provider side, not by charging patients to use it."
    },
    {
      q: "Which cities is DocApp available in?",
      a: "DocApp is currently active across 45+ major hospitals and clinics in tier-1 and tier-2 cities across India, with rapid expansion ongoing."
    },
    {
      q: "How are doctors verified before joining?",
      a: "Every doctor on DocApp goes through a verification step before their profile goes live, so patients aren't choosing from an open, unchecked directory."
    },
    {
      q: "Is my health data kept private?",
      a: "Your records are encrypted and only shared with the doctors and hospitals directly involved in your care — never sold or shared for any other purpose."
    },
    {
      q:"How do I bring my hospital or practice onto DocApp?",
      a:`Reach out through the "Talk to our team" button below — onboarding is free, and our team works directly with your staff to get set up.`
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIdx(openIdx === index ? null : index);
  };

  return (
    <section 
      id="faq" 
      className="py-12 sm:py-20 transition-colors duration-300"
      style={{ backgroundColor: 'var(--bg-main)', color: 'var(--text-main)' }}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <span className="text-[#3b82f6] font-semibold text-xs sm:text-sm uppercase tracking-wider">
            Questions
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold mt-1 sm:mt-2 tracking-tight" style={{ color: 'var(--text-main)' }}>
            Before you ask
          </h2>
        </div>

        {/* FAQ Accordions */}
        <div 
          className="divide-y"
          style={{ borderColor: 'var(--card-border)' }}
        >
          {faqs.map((faq, index) => {
            const isOpen = openIdx === index;
            return (
              <div 
                key={index} 
                className="py-3.5 sm:py-5 border-b"
                style={{ borderColor: 'var(--card-border)' }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between text-left font-bold text-sm sm:text-lg focus:outline-none transition-colors"
                  style={{ color: 'var(--text-main)' }}
                >
                  <span className="pr-2">{faq.q}</span>
                  <Plus 
                    className={`w-4 h-4 sm:w-5 sm:h-5 text-[#3b82f6] shrink-0 ml-2 sm:ml-4 transition-transform duration-200 ${isOpen ? 'rotate-45' : ''}`} 
                  />
                </button>
                {isOpen && (
                  <p className="mt-2 sm:mt-3 text-xs sm:text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                    {faq.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FAQ;