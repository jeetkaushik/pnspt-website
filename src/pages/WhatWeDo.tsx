import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Target, Award, Users, Medal, BookOpen, Heart } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FeatureCard from '@/components/FeatureCard';

const WhatWeDo = () => {
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

  const services = [
    {
      icon: Target,
      title: "Talent Scouting",
      description: "We identify and recruit promising para-athletes with exceptional potential in shooting sports across India."
    },
    {
      icon: Award,
      title: "World-Class Training",
      description: "Our athletes receive comprehensive training from experienced coaches using international-standard methodologies."
    },
    {
      icon: Users,
      title: "Holistic Support",
      description: "Beyond training, we provide emotional, financial, and medical support to ensure athlete wellbeing."
    },
    {
      icon: Medal,
      title: "Competition Preparation",
      description: "We prepare our athletes for Paralympic Games and other international competitions with specialized programs."
    },
    {
      icon: BookOpen,
      title: "Educational Support",
      description: "We ensure our athletes continue their education alongside their sporting careers for balanced development."
    },
    {
      icon: Heart,
      title: "Community Building",
      description: "We create a supportive community of athletes, coaches, and supporters working towards common goals."
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
              What We Do
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up">
              At PNSPT, we are dedicated to nurturing India's next generation of Paralympic champions through comprehensive support, world-class training, and unwavering commitment to excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 section-animate">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We provide comprehensive support to para-athletes through our specialized programs and services designed to maximize their potential and achieve sporting excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <FeatureCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                className="section-animate"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Training Programs Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="section-animate">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">Training Programs</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Beginner Program</h3>
                    <p className="text-muted-foreground">Foundation training for new athletes focusing on basic techniques and safety protocols.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Intermediate Program</h3>
                    <p className="text-muted-foreground">Advanced skill development with competitive preparation and performance analysis.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Elite Program</h3>
                    <p className="text-muted-foreground">Paralympic-level training with international coaches and cutting-edge technology.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="section-animate">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-foreground mb-4">Join Our Training Program</h3>
                <p className="text-muted-foreground mb-6">
                  Ready to start your journey with PNSPT? Our expert coaches are here to help you achieve your sporting dreams.
                </p>
                <Button variant="cta" size="lg" className="w-full">
                  Apply Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 section-animate">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Our Impact</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Since our inception, PNSPT has made significant contributions to Indian para-sports development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center section-animate">
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Athletes Trained</div>
            </div>
            <div className="text-center section-animate">
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-sm text-muted-foreground">International Medals</div>
            </div>
            <div className="text-center section-animate">
              <div className="text-4xl font-bold text-primary mb-2">5+</div>
              <div className="text-sm text-muted-foreground">Paralympic Qualifiers</div>
            </div>
            <div className="text-center section-animate">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Dedication to Excellence</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WhatWeDo;