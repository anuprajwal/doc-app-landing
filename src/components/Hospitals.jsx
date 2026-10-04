import React from 'react';
import { 
  Search, 
  SlidersHorizontal, 
  LayoutGrid, 
  TrendingUp, 
  Users, 
  Heart 
} from 'lucide-react';

const Hospitals = () => {
  const hospitalBenefits = [
    {
      badge: "Wider reach",
      title: "Reach More Patients",
      desc: "Get discovered by patients actively searching for care, not just those who already know your name.",
      icon: <Search className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
    },
    {
      badge: "No disruption",
      title: "Fits How You Already Work",
      desc: "Built to sit alongside your existing systems and staff workflows, not force a full overhaul.",
      icon: <SlidersHorizontal className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
    },
    {
      badge: "All-in-one",
      title: "One Partner, Full Stack",
      desc: "Patient management, scheduling, communication and analytics — one platform instead of five vendors.",
      icon: <LayoutGrid className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
    },
    {
      badge: "Live dashboards",
      title: "Real-Time Visibility",
      desc: "See patient flow, doctor load and outcomes as they happen, not in next month's report.",
      icon: <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
    },
    {
      badge: "45+ hospitals",
      title: "A Network Already Growing",
      desc: "Join a partner network that's already live across India, built one real hospital relationship at a time.",
      icon: <Users className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
    },
    {
      badge: "Hands-on setup",
      title: "Dedicated Onboarding Support",
      desc: "A real team works with your staff to get you live — not just a login and a manual.",
      icon: <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
    }
  ];

  return (
    <section 
      id="hospitals" 
      className="py-12 sm:py-20 transition-colors duration-300"
      style={{ backgroundColor: 'var(--bg-main)', color: 'var(--text-main)' }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-16">
          <span className="text-[#3b82f6] font-semibold text-xs sm:text-sm tracking-wide">
            For hospitals
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold mt-1 sm:mt-2 mb-2 sm:mb-4 tracking-tight" style={{ color: 'var(--text-main)' }}>
            How hospitals benefit
          </h2>
          <p className="text-xs sm:text-base md:text-lg" style={{ color: 'var(--text-muted)' }}>
            Already live across 45+ hospitals — built to bring in patients without adding to your admin load.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {hospitalBenefits.map((item, index) => (
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

export default Hospitals;