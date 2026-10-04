import React from 'react';
import { Check } from 'lucide-react';

const PlatformFeatures = () => {
  const patientManagement = [
    "Electronic Health Records (EHR)",
    "Patient registration & check-in",
    "Medical history tracking",
    "Prescription management",
    "Lab results integration",
    "Imaging system integration"
  ];

  const schedulingOperations = [
    "Online appointment booking",
    "Staff schedule management",
    "Resource allocation",
    "Queue management",
    "Automated reminders",
    "Waitlist management"
  ];

  const communication = [
    "Secure patient messaging",
    "Doctor-patient portal",
    "Internal staff communication",
    "Notification system",
    "Telemedicine integration",
    "Mobile app access"
  ];

  const analyticsReporting = [
    "Performance dashboards",
    "Financial reporting",
    "Patient satisfaction metrics",
    "Clinical analytics",
    "Compliance reporting"
  ];

  const featureGroups = [
    { title: "Patient Management", features: patientManagement },
    { title: "Scheduling & Operations", features: schedulingOperations },
    { title: "Communication", features: communication },
    { title: "Analytics & Reporting", features: analyticsReporting },
  ];

  return (
    <section 
      id="platform-features" 
      className="py-12 sm:py-20 transition-colors duration-300"
      style={{ backgroundColor: 'var(--bg-main)', color: 'var(--text-main)' }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold mb-2 sm:mb-4 tracking-tight" style={{ color: 'var(--text-main)' }}>
            Everything you need, in one platform
          </h2>
          <p className="text-xs sm:text-base md:text-lg" style={{ color: 'var(--text-muted)' }}>
            From patient registration to discharge planning, built to cover every part of hospital operations.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
          {featureGroups.map((group, index) => (
            <div 
              key={index}
              className="rounded-2xl sm:rounded-3xl p-5 sm:p-8 transition-all duration-300 backdrop-blur-sm"
              style={{
                backgroundColor: 'var(--card-bg)',
                borderColor: 'var(--card-border)',
                borderWidth: '1px',
                borderStyle: 'solid'
              }}
            >
              <h3 className="text-lg sm:text-2xl font-bold text-[#3b82f6] mb-3 sm:mb-6">
                {group.title}
              </h3>
              <ul className="space-y-2.5 sm:space-y-4">
                {group.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2.5 sm:gap-3 font-medium" style={{ color: 'var(--text-main)' }}>
                    <span className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 rounded-full flex items-center justify-center">
                      <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 stroke-[3]" />
                    </span>
                    <span className="text-xs sm:text-base">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PlatformFeatures;