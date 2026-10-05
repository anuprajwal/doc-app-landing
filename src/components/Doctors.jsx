import React from 'react';
import { 
  User, 
  DollarSign, 
  Users, 
  Globe, 
  PlusSquare, 
  CreditCard 
} from 'lucide-react';

const Doctors = () => {
  const doctorBenefits = [
    {
      badge: "₹0 setup cost",
      title: "Free Onboarding",
      desc: "No subscription fees — join the platform completely free.",
      icon: <User className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
    },
    {
      badge: "90% earnings",
      title: "Keep 90% Payout",
      desc: "Industry-best payout rates, with fully transparent pricing.",
      icon: <DollarSign className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
    },
    {
      badge: "3x more patients",
      title: "More Patients",
      desc: "AI-powered matching that increases your consultation volume.",
      icon: <Users className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
    },
    {
      badge: "15+ languages",
      title: "Multilingual Reach",
      desc: "Serve patients in their preferred language, for better care.",
      icon: <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
    },
    {
      badge: "Personalised",
      title: "Specialised AI Assistant",
      desc: "Helps analyse patient health data to support your diagnosis.",
      icon: <PlusSquare className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
    },
    {
      badge: "72-hour payout",
      title: "Fast Payouts",
      desc: "Receive your earnings quickly, with secure, reliable transfers.",
      icon: <CreditCard className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
    }
  ];

  return (
    <section 
      id="doctors" 
      className="py-12 sm:py-20 transition-colors duration-300"
      style={{ backgroundColor: 'var(--bg-main)', color: 'var(--text-main)' }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-16">
          <span className="text-[#3b82f6] font-semibold text-xs sm:text-sm tracking-wide">
            For doctors
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold mt-1 sm:mt-2 mb-2 sm:mb-4 tracking-tight" style={{ color: 'var(--text-main)' }}>
            How doctors benefit
          </h2>
          <a href="https://auth.docapp.co.in/doctor/login" target="_blank" rel="noopener noreferrer">
            <button
              className="mt-2 sm:mt-4 px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base bg-[#3b82f6] text-white hover:bg-[#2563eb] transition-colors duration-200"
            >
              Login
            </button>
          </a>
          <p className="text-xs sm:text-base md:text-lg" style={{ color: 'var(--text-muted)' }}>
            Join 400+ doctors already growing their practice on India's most connected healthcare platform.
          </p>
        </div>

        {/* Benefits Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {doctorBenefits.map((item, index) => (
            <div
              key={index}
              className="relative rounded-xl sm:rounded-2xl p-4 sm:p-6 transition-all duration-300 backdrop-blur-sm"
              style={{
                backgroundColor: 'var(--card-bg)',
                borderColor: 'var(--card-border)',
                borderWidth: '1px',
                borderStyle: 'solid'
              }}
            >
              {/* Header inside card */}
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-sm">
                  {item.icon}
                </div>
                <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-xs font-semibold bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                  {item.badge}
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="text-sm sm:text-base font-bold mb-1 sm:mb-2 leading-snug" style={{ color: 'var(--text-main)' }}>
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Doctors;