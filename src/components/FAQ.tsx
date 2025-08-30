import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import faqImage from '@/assets/faq-image.jpg';

const FAQ = () => {
  const faqs = [
    {
      question: "What is PNSPT and what does it stand for?",
      answer: "PNSPT stands for Paralympic National Shooting Para Training. We are a specialized organization dedicated to identifying, training, and developing India's next generation of Paralympic shooting champions through comprehensive support and world-class training programs."
    },
    {
      question: "How can I apply for the training programs?",
      answer: "You can apply for our training programs by contacting us through our website or visiting our facility. We conduct regular assessments to identify talented para-athletes and provide them with appropriate training levels based on their current skills and potential."
    },
    {
      question: "What types of disabilities do you work with?",
      answer: "We work with athletes across various disability categories as recognized by the International Paralympic Committee, including physical impairments, visual impairments, and intellectual impairments. Our coaches are trained to adapt training methods to each athlete's specific needs and capabilities."
    },
    {
      question: "Do you provide financial support to athletes?",
      answer: "Yes, we provide comprehensive financial support including training costs, equipment, travel expenses for competitions, and living allowances for dedicated athletes. We believe that financial constraints should not limit an athlete's potential to excel in para-sports."
    },
    {
      question: "What equipment and facilities do you provide?",
      answer: "Our state-of-the-art facility features international-standard shooting ranges, modern Paralympic-approved equipment, accessible amenities, and specialized training tools. We also provide personalized equipment fitting and regular maintenance to ensure optimal performance."
    },
    {
      question: "How do you prepare athletes for international competitions?",
      answer: "We provide specialized competition preparation including mental conditioning, technical refinement, simulated competition environments, and exposure to international standards. Our athletes regularly participate in national and international championships to gain competitive experience."
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Get answers to common questions about our programs, facilities, and how we support para-athletes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Image - Left Side */}
          <div className="lg:sticky lg:top-8">
            <div className="relative">
              <img
                src={faqImage}
                alt="PNSPT Training Facility"
                className="w-full h-auto rounded-lg shadow-lg object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </div>
          </div>

          {/* FAQ Accordion - Right Side */}
          <div className="space-y-4">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg mb-4 px-6">
                  <AccordionTrigger className="text-left text-foreground font-semibold hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;