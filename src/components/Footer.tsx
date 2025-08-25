import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import pnsptLogo from '@/assets/pnspt-logo.png';

const Footer = () => {
  const socialLinks = [
    { Icon: Facebook, href: '#', label: 'Facebook' },
    { Icon: Twitter, href: '#', label: 'Twitter' },
    { Icon: Linkedin, href: '#', label: 'LinkedIn' },
    { Icon: Instagram, href: '#', label: 'Instagram' },
  ];

  const navLinks = [
    { to: '/privacy-policy', label: 'Privacy Policy' },
    { to: '/copyright', label: 'Copyright' },
    { to: '/contact', label: 'Email Address' },
  ];

  return (
    <footer className="bg-white text-[#333333]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Left - Logo and Description */}
          <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <img src={pnsptLogo} alt="PNSPT Logo" className="h-8 w-auto" />
            <span className="text-xl font-bold text-[#333333]">PNSPT</span>
          </div>
            <p className="text-sm text-[#333333] leading-relaxed">
              We offers a comprehensive suite of digital marketing services that cover all aspects
              of our online presence. From SEO and social media marketing to content creation and
              PPC advertising, they have the expertise and resources to handle our diverse
              marketing needs.
            </p>
          </div>

          {/* Center - Navigation Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#222222]">Pages</h3>
            <div className="space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="block text-sm text-[#666666] hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Right - Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#222222]">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-sm text-[#666666]">(406) 555-0120</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-sm text-[#666666]">Hey@boostim.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-[#666666]">
                  2972 Westheimer Rd. Santa Ana,<br />
                  Illinois 85486
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom - Copyright and Social Icons */}
        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-center md:justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-sm text-[#444444]">
                © {new Date().getFullYear()} Prakash Nanjappa Sports Promotion Trust. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-4">
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="text-[#444444] hover:text-primary transition-colors p-2"
                  aria-label={label}
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;