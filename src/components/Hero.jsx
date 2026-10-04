import React, { useState } from 'react';
import EcgDivider from "./EcgDivider";

export default function Hero() {
  const [activeTab, setActiveTab] = useState('patient');

  return (
    <section className="pt-28 sm:pt-36 pb-12 sm:pb-20 px-4 sm:px-6 text-center mx-auto bg-[#1d4ed8] text-white">
      {/* Live Badge */}
      <div className="inline-flex items-center space-x-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full border border-white/20 bg-white/10 text-[11px] sm:text-xs font-medium text-white/90 mb-6 sm:mb-8 backdrop-blur-sm">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
        <span>Live across 45+ hospitals right now</span>
      </div>

      <EcgDivider />

      {/* Main Heading */}
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight mb-4 sm:mb-6 text-white">
        Healthcare that actually <br className="hidden sm:inline" />
        <span>connects to you.</span>
      </h1>

      <p className="text-sm sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed">
        DocApp brings patients, doctors and hospitals onto one platform — consultations, medicine delivery, lab tests and records, all in one place.
      </p>

      {/* Action Buttons */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 sm:mb-16">
        <a
          href="#patients"
          onClick={() => setActiveTab('patient')}
          className={`px-4 py-2 sm:px-6 sm:py-3 rounded-full text-xs sm:text-sm font-medium transition ${
            activeTab === 'patient'
              ? 'bg-white text-blue-900 shadow-lg font-semibold'
              : 'border border-white/30 text-white hover:bg-white/10'
          }`}
        >
          I'm a patient
        </a>
        <a
          href="#doctors"
          onClick={() => setActiveTab('doctor')}
          className={`px-4 py-2 sm:px-6 sm:py-3 rounded-full text-xs sm:text-sm font-medium transition ${
            activeTab === 'doctor'
              ? 'bg-white text-blue-900 shadow-lg font-semibold'
              : 'border border-white/30 text-white hover:bg-white/10'
          }`}
        >
          I'm a doctor
        </a>
        <a
          href="#hospitals"
          onClick={() => setActiveTab('hospital')}
          className={`px-4 py-2 sm:px-6 sm:py-3 rounded-full text-xs sm:text-sm font-medium transition ${
            activeTab === 'hospital'
              ? 'bg-white text-blue-900 shadow-lg font-semibold'
              : 'border border-white/30 text-white hover:bg-white/10'
          }`}
        >
          I run a hospital
        </a>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6">
        <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-white/15 bg-white/10 backdrop-blur-md">
          <h3 className="text-2xl sm:text-3xl font-bold mb-0.5 text-white">7,000+</h3>
          <p className="text-xs sm:text-sm text-white/80">Patients served</p>
        </div>
        <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-white/15 bg-white/10 backdrop-blur-md">
          <h3 className="text-2xl sm:text-3xl font-bold mb-0.5 text-white">400+</h3>
          <p className="text-xs sm:text-sm text-white/80">Doctors on DocApp</p>
        </div>
        <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-white/15 bg-white/10 backdrop-blur-md">
          <h3 className="text-2xl sm:text-3xl font-bold mb-0.5 text-white">45+</h3>
          <p className="text-xs sm:text-sm text-white/80">Partner hospitals</p>
        </div>
      </div>
    </section>
  );
}