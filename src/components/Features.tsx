import React from 'react';
import { features } from '../constants';
import SectionTitle from './common/SectionTitle';
import AnimatedElement from './common/AnimatedElement';
import * as Icons from 'lucide-react';

type IconName = keyof typeof Icons;

const Features = () => {
  return (
    <section id="features" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto">
        <SectionTitle 
          title="Why Choose Our App?" 
          subtitle="Discover why millions of users trust our platform for buying and selling items locally and nationwide."
        />
        
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 xs:gap-6 md:gap-8">
          {features.map((feature, index) => {
            const IconComponent = Icons[feature.icon as IconName] || Icons.CircleDot;
            
            return (
              <AnimatedElement 
                key={feature.id}
                animation="fade-up" 
                delay={index * 100}
                className="bg-white rounded-lg p-4 xs:p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="mb-4 bg-teal-100 w-10 xs:w-12 h-10 xs:h-12 rounded-full flex items-center justify-center text-teal-600">
                  <IconComponent size={20} className="xs:w-6 xs:h-6" />
                </div>
                <h3 className="text-lg xs:text-xl font-semibold mb-2 text-gray-900">{feature.title}</h3>
                <p className="text-sm xs:text-base text-gray-600">{feature.description}</p>
              </AnimatedElement>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;