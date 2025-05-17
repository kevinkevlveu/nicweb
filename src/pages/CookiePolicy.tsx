import React from 'react';
import { APP_NAME } from '../constants';

const CookiePolicy = () => {
  return (
    <div className="container mx-auto py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Cookie Policy</h1>
        <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
        
        <div className="prose prose-lg max-w-none">
          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">1. Introduction</h2>
          <p>
            This Cookie Policy explains how {APP_NAME} ("we", "us", or "our") uses cookies and similar technologies 
            to recognize you when you visit our website and mobile application (collectively, "Platform"). It explains 
            what these technologies are and why we use them, as well as your rights to control our use of them.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">2. What are Cookies?</h2>
          <p>
            Cookies are small data files that are placed on your computer or mobile device when you visit a website. 
            Cookies are widely used by website owners to make their websites work efficiently and to provide reporting 
            information.
          </p>
          <p>
            Cookies set by the website owner (in this case, {APP_NAME}) are called "first-party cookies". Cookies set 
            by parties other than the website owner are called "third-party cookies". Third-party cookies enable third-party 
            features or functionality to be provided on or through the website (e.g., advertising, interactive content, and analytics).
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">3. Types of Cookies We Use</h2>
          
          <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">3.1 Essential Cookies</h3>
          <p>
            These cookies are necessary for the Platform to function and cannot be switched off in our systems. They are usually 
            only set in response to actions made by you which amount to a request for services, such as setting your privacy 
            preferences, logging in, or filling in forms. These cookies do not store any personally identifiable information.
          </p>

          <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">3.2 Performance Cookies</h3>
          <p>
            These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our Platform. 
            They help us to know which pages are the most and least popular and see how visitors move around the Platform. All 
            information these cookies collect is aggregated and therefore anonymous.
          </p>

          <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">3.3 Functionality Cookies</h3>
          <p>
            These cookies enable the Platform to provide enhanced functionality and personalization. They may be set by us or by 
            third-party providers whose services we have added to our pages. If you do not allow these cookies, then some or all 
            of these services may not function properly.
          </p>

          <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">3.4 Targeting Cookies</h3>
          <p>
            These cookies may be set through our Platform by our advertising partners. They may be used by those companies to build 
            a profile of your interests and show you relevant advertisements on other sites. They do not store directly personal 
            information but are based on uniquely identifying your browser and internet device.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">4. How to Control Cookies</h2>
          <p>
            You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may 
            still use our Platform though your access to some functionality and areas may be restricted. As the means by which you 
            can refuse cookies through your web browser controls vary from browser to browser, you should visit your browser's help 
            menu for more information.
          </p>
          <p>
            In addition, most advertising networks offer you a way to opt out of targeted advertising. If you would like to find out 
            more information, please visit <a href="http://www.aboutads.info/choices/" className="text-teal-600 hover:text-teal-800">http://www.aboutads.info/choices/</a> or 
            <a href="http://www.youronlinechoices.com" className="text-teal-600 hover:text-teal-800"> http://www.youronlinechoices.com</a>.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">5. Mobile Applications</h2>
          <p>
            For our mobile applications, we may use mobile device identifiers (such as Apple's IDFA or Google's Advertising ID) 
            instead of or in addition to cookies. These function very similarly to cookies but are managed through your device settings 
            rather than your browser.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">6. Updates to this Cookie Policy</h2>
          <p>
            We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for 
            other operational, legal, or regulatory reasons. Please therefore revisit this Cookie Policy regularly to stay informed about 
            our use of cookies and related technologies.
          </p>
          <p>
            The date at the top of this Cookie Policy indicates when it was last updated.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">7. Contact Us</h2>
          <p>
            If you have any questions about our use of cookies or other technologies, please contact us at:
          </p>
          <p>
            Email: privacy@{APP_NAME.toLowerCase()}.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy; 