import React from 'react';
import { Mail } from 'lucide-react';

const Team = () => {
  const members = [
    {
      initials: "MP",
      name: "M Pavaneesh Kumar Reddy",
      role: "Founder & CEO",
      bio: "Computer science engineering student and healthcare-platform builder, focused on making medical care in India more accessible — and reachable in the languages people actually speak.",
      mail: "founder@docapp.co.in",
      LinkedIn: "https://linkedin.com/in/pavaneesh-reddy-03b057318"
    },
    {
      initials: "AV",
      name: "Avinash",
      role: "Co-founder",
      bio: "Co-founder helping drive platform strategy, ecosystem growth, and building technology-first solutions for scalable healthcare access.",
      mail: "",
      LinkedIn: "https://www.linkedin.com/in/avinash-pathuri-a4019b381?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
    }
  ];

  return (
    <section 
      id="team" 
      className="py-12 sm:py-20 transition-colors duration-300"
      style={{ backgroundColor: 'var(--bg-main)', color: 'var(--text-main)' }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-16">
          <span className="text-[#3b82f6] font-semibold text-xs sm:text-sm uppercase tracking-wider">
            The people behind DocApp
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold mt-1 sm:mt-2 tracking-tight" style={{ color: 'var(--text-main)' }}>
            Meet the team
          </h2>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 max-w-4xl mx-auto">
          {members.map((m, idx) => (
            <div 
              key={idx} 
              className="rounded-2xl sm:rounded-3xl p-5 sm:p-8 text-center flex flex-col items-center transition-all duration-300 backdrop-blur-sm"
              style={{
                backgroundColor: 'var(--card-bg)',
                borderColor: 'var(--card-border)',
                borderWidth: '1px',
                borderStyle: 'solid'
              }}
            >
              
              {/* Profile Avatar */}
              <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-gradient-to-tr from-blue-600 to-sky-400 text-white font-extrabold text-lg sm:text-2xl flex items-center justify-center shadow-md sm:shadow-lg shadow-blue-500/20 mb-4 sm:mb-6 shrink-0">
                {m.initials}
              </div>

              <h3 className="text-base sm:text-xl font-bold mb-0.5 sm:mb-1" style={{ color: 'var(--text-main)' }}>
                {m.name}
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-[#3b82f6] mb-3 sm:mb-4">
                {m.role}
              </p>
              <p className="text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6" style={{ color: 'var(--text-muted)' }}>
                {m.bio}
              </p>

              <div className="flex items-center gap-3 sm:gap-4 text-xs font-semibold text-[#3b82f6] mt-auto">
                <a href={m.LinkedIn} className="hover:underline flex items-center gap-1">
                  <span>LinkedIn</span>
                </a>
                <span style={{ color: 'var(--text-muted)' }}>•</span>
                <a href={`mailto:${m.mail}`} className="hover:underline flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span>Email</span>
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Team;