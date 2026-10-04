import React from 'react';
import { 
  Phone, 
  Globe, 
  Lock, 
  TestTube, 
  Activity, 
  Star, 
  PlusSquare, 
  FileText 
} from 'lucide-react';

const Patients = () => {
  const patientServices = [
    {
      icon: <Phone className="w-4 h-4 sm:w-5 sm:h-5" />,
      title: "24/7 Doctor Consultations",
      desc: "Video, audio, and chat consultations with qualified doctors anytime, anywhere.",
      colSpan: "col-span-1 md:col-span-2",
      layout: "horizontal"
    },
    {
      icon: <Globe className="w-4 h-4 sm:w-5 sm:h-5" />,
      title: "AI Language Translation",
      desc: "Real-time translation between doctor and patient in 15+ Indian languages.",
      colSpan: "col-span-1",
      layout: "vertical"
    },
    {
      icon: <Lock className="w-4 h-4 sm:w-5 sm:h-5" />,
      title: "1-Hour Medicine Delivery",
      desc: "Fast delivery to your doorstep, with genuine medications.",
      colSpan: "col-span-1",
      layout: "vertical"
    },
    {
      icon: <TestTube className="w-4 h-4 sm:w-5 sm:h-5" />,
      title: "Lab Test Booking",
      desc: "Home sample collection and lab booking with verified labs.",
      colSpan: "col-span-1",
      layout: "vertical"
    },
    {
      icon: <Activity className="w-4 h-4 sm:w-5 sm:h-5" />,
      title: "Emergency Support",
      desc: "Ambulance booking when every minute matters.",
      colSpan: "col-span-1",
      layout: "vertical"
    },
    {
      icon: <Star className="w-4 h-4 sm:w-5 sm:h-5" />,
      title: "Surgery + Travel Packages",
      desc: "Planned procedures bundled with travel and stay support.",
      colSpan: "col-span-1",
      layout: "vertical"
    },
    {
      icon: <PlusSquare className="w-4 h-4 sm:w-5 sm:h-5" />,
      title: "AI Health Assistant",
      desc: "A smart chatbot for everyday health questions, any time.",
      colSpan: "col-span-1",
      layout: "vertical"
    },
    {
      icon: <FileText className="w-4 h-4 sm:w-5 sm:h-5" />,
      title: "Medical Records",
      desc: "Secure storage and instant access to your full history.",
      colSpan: "col-span-1",
      layout: "vertical"
    }
  ];

  return (
    <section 
      id="patients" 
      className="py-12 sm:py-20 transition-colors duration-300"
      style={{ backgroundColor: 'var(--bg-main)', color: 'var(--text-main)' }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-16">
          <span className="text-[#3b82f6] font-semibold text-xs sm:text-sm tracking-wide">
            For patients
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold mt-1 sm:mt-2 mb-2 sm:mb-4 tracking-tight" style={{ color: 'var(--text-main)' }}>
            What you can do on DocApp
          </h2>
          <p className="text-xs sm:text-base md:text-lg" style={{ color: 'var(--text-muted)' }}>
            A comprehensive healthcare ecosystem designed to solve real problems patients face daily.
          </p>
        </div>

        {/* Asymmetric Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 sm:gap-5">
          {patientServices.map((card, index) => (
            <div
              key={index}
              className={`${card.colSpan} rounded-xl sm:rounded-2xl p-4 sm:p-6 transition-all duration-300 backdrop-blur-sm`}
              style={{
                backgroundColor: 'var(--card-bg)',
                borderColor: 'var(--card-border)',
                borderWidth: '1px',
                borderStyle: 'solid'
              }}
            >
              {card.layout === 'horizontal' ? (
                <div className="flex items-start sm:items-center gap-3 sm:gap-5 h-full">
                  <div 
                    className="w-8 h-8 sm:w-12 sm:h-12 shrink-0 rounded-lg sm:rounded-xl flex items-center justify-center text-[#2563eb] transition-colors"
                    style={{ backgroundColor: 'var(--card-border)' }}
                  >
                    {card.icon}
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold mb-0.5 sm:mb-1" style={{ color: 'var(--text-main)' }}>
                      {card.title}
                    </h3>
                    <p className="text-xs sm:text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                      {card.desc}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col justify-start h-full">
                  <div 
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl flex items-center justify-center text-[#2563eb] mb-2 sm:mb-4 transition-colors"
                    style={{ backgroundColor: 'var(--card-border)' }}
                  >
                    {card.icon}
                  </div>
                  <h3 className="text-sm sm:text-base font-bold mb-1 sm:mb-2 leading-snug" style={{ color: 'var(--text-main)' }}>
                    {card.title}
                  </h3>
                  <p className="text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                    {card.desc}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Patients;