import React from 'react';
import { categories } from '../constants';
import SectionTitle from './common/SectionTitle';
import AnimatedElement from './common/AnimatedElement';
import * as Icons from 'lucide-react';

type IconName = keyof typeof Icons;

const Categories = () => {
  return (
    <section id="categories" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto">
        <SectionTitle 
          title="Explore Categories" 
          subtitle="Thousands of items added daily across these popular categories and many more"
        />
        
        <div className="grid grid-cols-2 xs:grid-cols-3 lg:grid-cols-6 gap-3 xs:gap-4 md:gap-6">
          {categories.map((category, index) => {
            const IconComponent = Icons[category.icon as IconName] || Icons.CircleDot;
            
            return (
              <AnimatedElement 
                key={category.id}
                animation="fade-up"
                delay={index * 75}
                className="cursor-pointer"
              >
                <div className={`rounded-xl p-3 xs:p-4 sm:p-6 text-center hover:shadow-md transition-all ${category.color} h-full flex flex-col items-center justify-center`}>
                  <div className={`mb-3 xs:mb-4 w-10 xs:w-12 sm:w-14 h-10 xs:h-12 sm:h-14 rounded-full flex items-center justify-center bg-white ${category.iconColor}`}>
                    <IconComponent size={20} className="xs:hidden" />
                    <IconComponent size={24} className="hidden xs:block sm:hidden" />
                    <IconComponent size={28} className="hidden sm:block" />
                  </div>
                  <h3 className="text-sm xs:text-base sm:text-lg font-semibold mb-1 text-gray-900">{category.name}</h3>
                  <p className="text-xs xs:text-sm text-gray-600">{category.items}</p>
                </div>
              </AnimatedElement>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;