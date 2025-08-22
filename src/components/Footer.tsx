import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import logo from '@/assets/logo.png';

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
    { to: '/contact', label: 'Email' },
  ];

  return (
    <footer className="bg-brand-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Left - Logo and Description */}
          <div className="space-y-4">
            <img src={logo} alt="PNSPT Logo" className="h-12 w-auto brightness-0 invert" />
            <p className="text-sm text-gray-300 leading-relaxed">
              We offer a comprehensive suite of digital marketing services that cover all aspects
              of our online presence. From SEO and social media marketing to content creation and
              PPC advertising, they have the expertise and resources to handle our diverse
              marketing needs.
            </p>
          </div>

          {/* Center - Navigation Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Pages</h3>
            <div className="space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="block text-sm text-gray-300 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Right - Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-sm text-gray-300">(406) 555-0120</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-sm text-gray-300">hey@boostim.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                <span className="text-sm text-gray-300">
                  2972 Westheimer Rd. Santa Ana,<br />
                  Illinois 85486
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom - Social Icons */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex justify-center space-x-6">
            {socialLinks.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label={label}
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
          <div className="text-center mt-4">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Prakash Nanjappa Sports Promotion Trust. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;