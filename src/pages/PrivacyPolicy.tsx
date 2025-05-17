import React from 'react';
import { APP_NAME } from '../constants';

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
        <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
        
        <div className="prose prose-lg max-w-none">
          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">1. Introduction</h2>
          <p>
            {APP_NAME} ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how your personal 
            information is collected, used, and disclosed by {APP_NAME}.
          </p>
          <p>
            This Privacy Policy applies to our website, mobile application, and related services (collectively, our "Service"),
            and describes the information we collect from you and how we use that information.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">2. Information We Collect</h2>
          <p>
            We collect information that you provide directly to us, such as when you create an account, update your profile, 
            use the interactive features of our Service, participate in a promotion, make a purchase, communicate with us, or 
            request customer support.
          </p>
          <p>The types of information we may collect include:</p>
          <ul className="list-disc pl-5 mt-2 mb-4">
            <li>Contact information (such as name, email address, phone number)</li>
            <li>Authentication information (such as password, security questions)</li>
            <li>Profile information (such as profile picture, preferences)</li>
            <li>Transaction information (such as items purchased, sold, or listed)</li>
            <li>Location information (such as city, state, and GPS coordinates when enabled)</li>
            <li>Communications (such as messages between users)</li>
            <li>Device and usage information (such as IP address, browser type, device type)</li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">3. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul className="list-disc pl-5 mt-2 mb-4">
            <li>Provide, maintain, and improve our Service</li>
            <li>Process transactions and send related information</li>
            <li>Send you technical notices, updates, security alerts, and support messages</li>
            <li>Respond to your comments, questions, and customer service requests</li>
            <li>Communicate with you about products, services, offers, and events</li>
            <li>Monitor and analyze trends, usage, and activities in connection with our Service</li>
            <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
            <li>Personalize and improve the Service and provide content or features that match user profiles or interests</li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">4. Sharing of Information</h2>
          <p>We may share information about you as follows:</p>
          <ul className="list-disc pl-5 mt-2 mb-4">
            <li>With other users of the Service as part of the normal operation of the Service (e.g., when you list an item for sale)</li>
            <li>With vendors, consultants, and other service providers who need access to such information to carry out work on our behalf</li>
            <li>In response to a request for information if we believe disclosure is in accordance with any applicable law, regulation, or legal process</li>
            <li>If we believe your actions are inconsistent with our user agreements or policies, or to protect the rights, property, and safety of {APP_NAME} or others</li>
            <li>In connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business by another company</li>
            <li>With your consent or at your direction</li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">5. Your Choices</h2>
          <p>Account Information: You may update, correct, or delete information about you at any time by logging into your account or emailing us. Note that we may retain certain information as required by law or for legitimate business purposes.</p>
          <p>Location Information: You can prevent us from collecting location information by disabling location services in your device settings, but this may limit your ability to use certain features of our Service.</p>
          <p>Cookies: Most web browsers are set to accept cookies by default. You can usually choose to set your browser to remove or reject browser cookies.</p>

          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">6. Data Security</h2>
          <p>
            We take reasonable measures to help protect information about you from loss, theft, misuse, unauthorized access, 
            disclosure, alteration, and destruction. However, no security system is impenetrable, and we cannot guarantee 
            the security of our systems 100%.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">7. Children's Privacy</h2>
          <p>
            Our Service is not directed to children under 13, and we do not knowingly collect personal information from children under 13. 
            If we learn we have collected or received personal information from a child under 13, we will delete that information.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">8. Changes to this Privacy Policy</h2>
          <p>
            We may change this Privacy Policy from time to time. If we make changes, we will notify you by revising the date at the top 
            of the policy and, in some cases, we may provide you with additional notice.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">9. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at privacy@{APP_NAME.toLowerCase()}.com.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy; 