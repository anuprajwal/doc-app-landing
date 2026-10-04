import React from 'react';

const Footer = () => {
  return (
    <footer 
      className="border-t py-12 transition-colors duration-300"
      style={{ 
        backgroundColor: 'var(--bg-main)', 
        color: 'var(--text-main)',
        borderColor: 'var(--card-border)' 
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Column */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="bg-blue-600 text-white p-2 rounded-lg font-bold flex items-center justify-center w-8 h-8">

                <img src="icon.jpeg"/>
              </div>
              <span className="font-extrabold text-xl" style={{ color: 'var(--text-main)' }}>DocApp</span>
            </div>
            <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
              One home for patients, doctors and hospitals across India.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4" style={{ color: 'var(--text-main)' }}>Product</h4>
            <ul className="space-y-2 text-sm" style={{ color: 'var(--text-muted)' }}>
              <li><a href="#patients" className="hover:text-[#3b82f6] transition-colors">For Patients</a></li>
              <li><a href="#doctors" className="hover:text-[#3b82f6] transition-colors">For Doctors</a></li>
              <li><a href="#hospitals" className="hover:text-[#3b82f6] transition-colors">For Hospitals</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4" style={{ color: 'var(--text-main)' }}>Company</h4>
            <ul className="space-y-2 text-sm" style={{ color: 'var(--text-muted)' }}>
              <li><a href="#about" className="hover:text-[#3b82f6] transition-colors">About</a></li>
              <li><a href="#team" className="hover:text-[#3b82f6] transition-colors">Team</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4" style={{ color: 'var(--text-main)' }}>Reach us</h4>
            <ul className="space-y-2 text-sm italic" style={{ color: 'var(--text-muted)' }}>
              <a href="mailto:support@docapp.co.in" className="hover:text-[#3b82f6] transition-colors">email</a>
              <li>[Phone / WhatsApp]</li>
              <li>[Office address]</li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div 
          className="pt-8 border-t text-xs flex flex-col sm:flex-row justify-between items-center gap-4"
          style={{ borderColor: 'var(--card-border)', color: 'var(--text-muted)' }}
        >
          <p>© 2026 DocApp.co.in — All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;