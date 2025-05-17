import React from 'react';
import { howItWorks } from '../constants';
import SectionTitle from './common/SectionTitle';
import AnimatedElement from './common/AnimatedElement';
import * as Icons from 'lucide-react';

type IconName = keyof typeof Icons;

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto">
        <SectionTitle 
          title="How It Works" 
          subtitle="Get started in minutes with these simple steps"
        />
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connect line between items */}
            <div className="hidden lg:block absolute top-1/3 left-0 right-0 h-0.5 bg-gray-200 z-0"></div>
            
            {howItWorks.map((step, index) => {
              const IconComponent = Icons[step.icon as IconName] || Icons.CircleDot;
              
              return (
                <AnimatedElement 
                  key={step.id}
                  animation="fade-up"
                  delay={index * 150}
                  className="relative z-10"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="flex items-center justify-center w-12 xs:w-14 sm:w-16 h-12 xs:h-14 sm:h-16 rounded-full bg-teal-600 text-white mb-4 xs:mb-6 relative z-10">
                      <IconComponent size={24} className="xs:w-7 xs:h-7 sm:w-8 sm:h-8" />
                    </div>
                    <h3 className="text-lg xs:text-xl font-semibold mb-2 xs:mb-3 text-gray-900">{step.title}</h3>
                    <p className="text-sm xs:text-base text-gray-600">{step.description}</p>
                  </div>
                </AnimatedElement>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;