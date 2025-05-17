import React from 'react';
import { APP_NAME, APP_STORE_URL, PLAY_STORE_URL } from '../constants';
import AppStoreButton from './common/AppStoreButton';
import AnimatedElement from './common/AnimatedElement';

const DownloadCTA = () => {
  return (
    <section className="py-16 md:py-24 bg-teal-600 text-white">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between max-w-6xl mx-auto">
          <AnimatedElement animation="slide-left" className="lg:w-1/2 mb-8 lg:mb-0 text-center lg:text-left">
            <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold mb-4">
              Get {APP_NAME} Now
            </h2>
            <p className="text-teal-100 mb-6 max-w-md mx-auto lg:mx-0 text-sm xs:text-base">
              Join millions of users buying and selling on {APP_NAME}. Download our app today and discover amazing deals near you.
            </p>
            <div className="flex flex-col xs:flex-row justify-center lg:justify-start space-y-3 xs:space-y-0 xs:space-x-4">
              <AppStoreButton 
                type="google" 
                url={PLAY_STORE_URL} 
                className="w-full xs:w-auto bg-white text-gray-900 hover:bg-gray-100"
              />
              <AppStoreButton 
                type="apple" 
                url={APP_STORE_URL} 
                className="w-full xs:w-auto border border-white hover:bg-teal-700"
              />
            </div>
          </AnimatedElement>
          
          <AnimatedElement animation="slide-right" className="lg:w-5/12">
            <div className="relative px-4 xs:px-8 lg:px-0">
              <div className="absolute -top-8 -left-8 w-16 xs:w-24 h-16 xs:h-24 rounded-full bg-teal-500 opacity-30 blur-lg"></div>
              <div className="absolute -bottom-8 -right-8 w-24 xs:w-32 h-24 xs:h-32 rounded-full bg-teal-400 opacity-30 blur-lg"></div>
              <img 
                src="https://images.pexels.com/photos/3962294/pexels-photo-3962294.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Mobile App" 
                className="rounded-3xl relative z-10 w-full max-w-xs xs:max-w-sm mx-auto shadow-xl"
              />
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
};

export default DownloadCTA;