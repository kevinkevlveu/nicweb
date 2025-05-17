import React from 'react';
import { testimonials } from '../constants';
import SectionTitle from './common/SectionTitle';
import AnimatedElement from './common/AnimatedElement';
import { Star } from 'lucide-react';

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gradient-to-br from-teal-50 to-blue-50">
      <div className="container mx-auto">
        <SectionTitle 
          title="What Our Users Say" 
          subtitle="Join thousands of satisfied users who buy and sell on our platform every day"
        />
        
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-6 md:gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <AnimatedElement 
              key={testimonial.id}
              animation="fade-up"
              delay={index * 200}
            >
              <div className="bg-white p-4 xs:p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-10 xs:w-12 h-10 xs:h-12 rounded-full mr-3 xs:mr-4 object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm xs:text-base">{testimonial.name}</h4>
                    <p className="text-xs xs:text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-3 xs:mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i}
                      size={14}
                      className={`xs:w-4 xs:h-4 ${i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} 
                    />
                  ))}
                </div>
                <p className="text-gray-700 italic flex-grow text-sm xs:text-base">"{testimonial.quote}"</p>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;