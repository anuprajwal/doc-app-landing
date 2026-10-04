import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const navItems = [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'patients', label: 'Patients', href: '#patients' },
    { id: 'doctors', label: 'Doctors', href: '#doctors' },
    { id: 'hospitals', label: 'Hospitals', href: '#hospitals' },
    { id: 'about', label: 'About', href: '#about' },
    { id: 'team', label: 'Team', href: '#team' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[var(--nav-bg)] border-b border-[var(--card-border)] px-4 sm:px-8 py-3.5 flex items-center justify-between transition-colors duration-300">
      
      {/* Brand / Logo */}
      <div className="flex items-center space-x-2">
        <div className="bg-blue-600 text-white rounded-lg font-bold flex items-center justify-center w-8 h-8 overflow-hidden shrink-0">
          <img src="icon.jpeg" alt="DocApp Logo" className="w-full h-full object-cover" />
        </div>
        <span 
          className="text-lg sm:text-xl font-bold tracking-tight transition-colors duration-300"
          style={{ color: 'var(--text-main)' }}
        >
          DocApp
        </span>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-6 lg:space-x-8 text-sm font-medium">
        {navItems.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <a
              key={item.id}
              href={item.href}
              onClick={() => setActiveTab(item.id)}
              className={`transition-colors duration-200 ${
                isActive 
                  ? 'font-bold text-[#3b82f6]' 
                  : 'text-[var(--text-muted)] hover:text-[var(--text-main)]'
              }`}
            >
              {item.label}
            </a>
          );
        })}
      </div>

      {/* Desktop & Mobile Actions */}
      <div className="flex items-center space-x-2 sm:space-x-4">
        {/* Dark/Light Switcher */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-1.5 sm:p-2 rounded-full border border-[var(--card-border)] hover:bg-[var(--card-bg)] transition text-base sm:text-lg"
          title="Toggle Dark/Light Mode"
        >
          {darkMode ? '🌙' : '☀️'}
        </button>

        <a 
          href="https://auth.docapp.co.in/patient/login"
          className="hidden sm:inline-block text-sm font-medium px-3 py-1.5 hover:opacity-80 transition"
          style={{ color: 'var(--text-main)' }}
        >
          Login
        </a>
        <a 
          href="https://auth.docapp.co.in/patient/register"
          className="hidden sm:inline-block bg-blue-600 text-white text-xs sm:text-sm font-medium px-4 py-2 rounded-full hover:bg-blue-700 transition shadow-md shadow-blue-500/20"
        >
          Get Started
        </a>

        {/* Mobile 3-Line Hamburger Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 md:hidden rounded-lg border border-[var(--card-border)] text-[var(--text-main)] focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div 
          className="absolute top-full left-0 right-0 border-b shadow-xl p-4 md:hidden flex flex-col space-y-3 transition-all duration-200"
          style={{ 
            backgroundColor: 'var(--bg-main)', 
            borderColor: 'var(--card-border)' 
          }}
        >
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={() => {
                setActiveTab(item.id);
                setMobileMenuOpen(false);
              }}
              className={`text-sm py-2 px-3 rounded-lg font-medium transition-colors ${
                activeTab === item.id 
                  ? 'bg-blue-500/10 text-[#3b82f6] font-bold' 
                  : 'text-[var(--text-muted)] hover:text-[var(--text-main)]'
              }`}
            >
              {item.label}
            </a>
          ))}
          <div className="pt-2 border-t flex flex-col space-y-2" style={{ borderColor: 'var(--card-border)' }}>
            <button 
              className="w-full text-center py-2 text-sm font-medium rounded-lg border"
              style={{ borderColor: 'var(--card-border)', color: 'var(--text-main)' }}
            >
              Login
            </button>
            <button className="w-full text-center py-2 text-sm font-medium text-white bg-blue-600 rounded-lg shadow-md">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}