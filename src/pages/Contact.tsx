import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Contact = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.1 }
    );

    const animatedElements = document.querySelectorAll('.section-animate');
    animatedElements.forEach((el) => observerRef.current?.observe(el));

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "(406) 555-0120",
      subtext: "Mon-Fri 9am-6pm"
    },
    {
      icon: Mail,
      title: "Email",
      details: "info@pnspt.org",
      subtext: "We'll respond within 24 hours"
    },
    {
      icon: MapPin,
      title: "Address", 
      details: "2972 Westheimer Rd. Santa Ana, Illinois 85486",
      subtext: "Visit our training facility"
    },
    {
      icon: Clock,
      title: "Training Hours",
      details: "Mon-Sat 6am-8pm",
      subtext: "Sunday closed"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
              Contact Us
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up">
              Get in touch with us to learn more about our programs, make a donation, or join our mission to develop India's Paralympic champions.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} className="text-center section-animate">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <info.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{info.title}</h3>
                <p className="text-foreground font-medium mb-1">{info.details}</p>
                <p className="text-sm text-muted-foreground">{info.subtext}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="section-animate">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="+91 12345 67890"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Subject
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent">
                      <option>General Inquiry</option>
                      <option>Training Programs</option>
                      <option>Donations</option>
                      <option>Partnership</option>
                      <option>Media Inquiry</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Tell us about your inquiry..."
                    ></textarea>
                  </div>
                  <Button variant="cta" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>

            {/* Map and Additional Info */}
            <div className="section-animate">
              <div className="bg-white p-8 rounded-lg shadow-lg h-full">
                <h2 className="text-2xl font-bold text-foreground mb-6">Visit Our Facility</h2>
                
                {/* Placeholder for map */}
                <div className="bg-gray-200 h-64 rounded-lg mb-6 flex items-center justify-center">
                  <p className="text-gray-500">Interactive Map Coming Soon</p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">Training Facility</h3>
                  <p className="text-muted-foreground">
                    Our state-of-the-art training facility features international-standard shooting ranges, 
                    modern equipment, and accessible amenities designed specifically for para-athletes.
                  </p>
                  
                  <h3 className="text-lg font-semibold text-foreground mt-6">Getting Here</h3>
                  <p className="text-muted-foreground">
                    Located in Santa Ana, Illinois, our facility is easily accessible by public transport 
                    and has dedicated parking for visitors and athletes.
                  </p>

                  <div className="bg-primary/10 p-4 rounded-lg mt-6">
                    <h4 className="font-semibold text-foreground mb-2">Schedule a Visit</h4>
                    <p className="text-sm text-muted-foreground">
                      Interested in touring our facility? Contact us to schedule a visit and meet our coaching staff.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;