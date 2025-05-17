import React from 'react';
import { APP_NAME, APP_TAGLINE, APP_STORE_URL, PLAY_STORE_URL } from '../constants';
import AppStoreButton from './common/AppStoreButton';
import AnimatedElement from './common/AnimatedElement';

const Hero = () => {
  return (
    <section className="min-h-[calc(100vh-80px)] pt-20 xs:pt-24 sm:pt-32 lg:pt-40 pb-16 md:pb-24 bg-gradient-to-br from-teal-50 to-blue-50 flex items-center">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <AnimatedElement 
            animation="fade-up" 
            className="w-full lg:w-1/2 text-center lg:text-left"
          >
            <h1 className="text-4xl xs:text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-4 leading-tight">
              {APP_NAME}
            </h1>
            <p className="text-xl xs:text-2xl sm:text-3xl text-gray-700 mb-6">
              {APP_TAGLINE}
            </p>
            <p className="text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0 text-base xs:text-lg">
              Join millions of users buying and selling anything from electronics and cars to furniture and services - all from your smartphone.
            </p>
            <div className="flex flex-col xs:flex-row items-center justify-center lg:justify-start space-y-4 xs:space-y-0 xs:space-x-4">
              <AppStoreButton type="google" url={PLAY_STORE_URL} className="w-full xs:w-auto" />
              <AppStoreButton type="apple" url={APP_STORE_URL} className="w-full xs:w-auto" />
            </div>
            <div className="mt-8 flex items-center justify-center lg:justify-start">
              <div className="flex -space-x-3">
                <img 
                  src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=60" 
                  className="w-10 h-10 rounded-full border-2 border-white" 
                  alt="User avatar" 
                />
                <img 
                  src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=60" 
                  className="w-10 h-10 rounded-full border-2 border-white" 
                  alt="User avatar" 
                />
                <img 
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=60" 
                  className="w-10 h-10 rounded-full border-2 border-white" 
                  alt="User avatar" 
                />
              </div>
              <span className="ml-4 text-sm xs:text-base text-gray-600">Join 10M+ active users worldwide</span>
            </div>
          </AnimatedElement>
          
          <AnimatedElement 
            animation="fade-in" 
            delay={300}
            className="w-full lg:w-1/2 relative px-4 sm:px-8 lg:px-0"
          >
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              <div className="absolute -top-4 -left-4 w-20 h-20 rounded-full bg-orange-500 opacity-20 blur-lg"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full bg-teal-500 opacity-20 blur-lg"></div>
              <div className="mt-8 flex items-center justify-center lg:justify-start">
              <img 
                src="/src/assets/screenshot.png"
                className="w-80 h-auto rounded-lg border-2 border-white"
                alt="App screenshot" 
              />
            </div>
              <div className="absolute z-0 -right-5 top-1/4 w-20 h-20 bg-purple-500 opacity-10 rounded-full blur-xl"></div>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
};

export default Hero;