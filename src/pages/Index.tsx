import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Target, Award, RotateCcw, Medal, Users, Lightbulb, Rocket, Heart, Globe, Leaf } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FeatureCard from '@/components/FeatureCard';
import AthleteCard from '@/components/AthleteCard';
import heroBackground from '@/assets/hero-bg.jpg';
import athlete1 from '@/assets/athlete1.jpg';
import athlete2 from '@/assets/athlete2.jpg';
import athlete3 from '@/assets/athlete3.jpg';
import founder from '@/assets/founder.jpg';

const Index = () => {
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

  const sdgCards = [
    { icon: Heart, title: "Quality Education", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." },
    { icon: Users, title: "Reduced Inequalities", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." },
    { icon: Globe, title: "Peace and Justice", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." },
    { icon: Medal, title: "Partnerships for Goals", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." },
    { icon: Leaf, title: "Sustainable Cities", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." },
    { icon: Target, title: "Good Health", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center text-white"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 hero-overlay"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
            Prakash Nanjappa Sports Promotion Trust
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 text-gray-200 animate-slide-up max-w-3xl mx-auto">
            At PNSPT we create the best shooters for India. Our Trust goes beyond traditional coaching
            by providing holistic support that covers not just training but every aspect critical to an
            athlete's journey
          </p>
          <Button variant="hero" className="animate-scale-in">
            Empowering Lives Through Sports and Skills
          </Button>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 section-animate">
            <div className="flex items-center justify-center mb-4">
              <Target className="h-6 w-6 text-primary mr-2" />
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">About Us</h2>
            </div>
            <div className="mb-6">
              <span className="text-lg text-muted-foreground">The Prakash Nanjappa Sports Promotion Trust (PNSPT) was founded with a singular vision: </span>
              <span className="text-lg font-semibold text-white bg-primary px-3 py-1 rounded">
                to scout, nurture, and empower
              </span>
            </div>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              talented able-bodied and differently-abled athletes and enable them to chase the Indian dream of
              winning medals at the Paralympic Games and other international sporting events.
              Under the leadership of Olympian and Arjuna Awardee P.N. Prakash, one of India's most decorated
              pistol shooters, PNSPT is dedicated to building a strong pipeline of para-athletes who can bring
              laurels to the nation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            <FeatureCard
              icon={RotateCcw}
              title="360° coaching support"
              description="Our Trust goes beyond traditional coaching by providing holistic support that covers not just training but every aspect critical to an athlete's journey — from world-class facilities to emotional support and financial sponsorships."
              className="section-animate"
            />
            <FeatureCard
              icon={Award}
              title="80G certified"
              description="PNSPT is 80G certified, making all contributions tax-deductible and allowing individuals and organizations to meaningfully support India's Paralympic movement."
              className="section-animate"
            />
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 lg:py-24 ribbon-red text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg lg:text-xl leading-relaxed max-w-3xl">
                To scout and nurture talented para athletes, providing them with
                world-class training, mentorship, and support to realize their fullest
                potential — empowering them to pursue the Indian dream of winning
                medals at the Paralympics.
              </p>
            </div>
            <div className="hidden lg:block ml-12">
              <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center">
                <Rocket className="h-12 w-12 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 lg:py-24 bg-gray-50 relative">
        <div className="absolute top-0 left-0 w-full h-20 bg-primary transform -skew-y-1 origin-top-left"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center section-animate">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <Lightbulb className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">Our Vision</h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Our initiative focuses on identifying talented para shooters and
              nurturing them through advanced training and sponsorship
              opportunities. By establishing world-class infrastructure with
              international-standard shooting ranges and facilities, we aim to
              create an environment of excellence.
            </p>
          </div>
        </div>
      </section>

      {/* SDGs Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 section-animate">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our Commitment to Sustainable Development Goals (SDGs)
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              At PNSPT, our mission and activities are closely aligned with the United Nations' Sustainable
              Development Goals (SDGs), ensuring that our work contributes meaningfully to global efforts in
              building a more inclusive, equitable, and sustainable world. Here's how our initiatives support key SDGs:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sdgCards.map((card, index) => (
              <FeatureCard
                key={index}
                icon={card.icon}
                title={card.title}
                description={card.description}
                className="section-animate"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Founder & CEO Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="section-animate">
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <img src={founder} alt="Prakash Nanjappa" className="rounded-lg shadow-lg" />
                  <img src={founder} alt="Award Ceremony" className="rounded-lg shadow-lg" />
                  <img src={founder} alt="Training Session" className="rounded-lg shadow-lg" />
                  <img src={founder} alt="Olympic Games" className="rounded-lg shadow-lg" />
                </div>
                <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 bg-primary text-white px-2 py-8 rounded font-bold tracking-widest writing-mode-vertical">
                  OLYMPIAN
                </div>
              </div>
            </div>
            
            <div className="section-animate">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">Founder & CEO</h2>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Prakash Nanjappa is a distinguished Indian shooter renowned for his exceptional skills in the 10-meter air
                  pistol and 50-meter pistol events. Representing India on the international stage, he has showcased
                  remarkable precision and determination, earning him a revered spot among the country's top shooters. His
                  career is marked by a series of notable achievements, including representing India at the prestigious Olympic
                  Games.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Further cementing his legacy in Indian sports, Prakash was honored with the Arjuna Award, one of the
                  highest accolades for sports excellence in India, recognizing his significant contributions and
                  outstanding performance in shooting. Prakash Nanjappa's journey is a testament to his relentless
                  pursuit of excellence and his unwavering dedication to his sport. He has brought laurels to our country by
                  winning at various international competitions like: World Cup, Asian Games, Commonwealth Games,
                  Asian Championship and Commonwealth Championship
                </p>
              </div>
              <Button variant="cta" className="mt-6">
                Contact us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Shining Stars */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 section-animate">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Our Shining Stars</h2>
            <p className="text-lg text-muted-foreground">
              At PNSPT, our mission and activities are closely aligned with the United Nations' Sustainable Development Goals (SDGs).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AthleteCard
              image={athlete1}
              name="Anubhav Sharma"
              achievement="National Level ABC Medalist"
            />
            <AthleteCard
              image={athlete2}
              name="Anubhav Sharma"
              achievement="National Level ABC Medalist"
            />
            <AthleteCard
              image={athlete3}
              name="Anubhav Sharma"
              achievement="National Level ABC Medalist"
            />
          </div>
        </div>
      </section>

      {/* Call to Action Banner - Overlapping Footer */}
      <div className="relative">
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
            <div className="bg-[#111111] text-white rounded-t-2xl px-8 py-12 lg:px-12 lg:py-16">
              <div className="flex flex-col lg:flex-row items-center justify-between">
                <div className="text-center lg:text-left mb-8 lg:mb-0">
                  <h2 className="text-3xl lg:text-5xl font-bold mb-2">
                    Be a part of our <span className="text-primary">Mission</span>
                  </h2>
                </div>
                <Button variant="cta" size="xl" className="bg-primary hover:bg-primary-hover">
                  Contact Us →
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Add padding to create space for overlapping CTA */}
        <div className="pt-32">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Index;
