import React from 'react';
import { APP_NAME } from '../constants';

const TermsAndConditions = () => {
  return (
    <div className="container mx-auto py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Terms and Conditions</h1>
        <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
        
        <div className="prose prose-lg max-w-none">
          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">1. Agreement to Terms</h2>
          <p>
            By accessing or using {APP_NAME} ("the App"), you agree to be bound by these Terms and Conditions. 
            If you disagree with any part of the terms, you may not access the App.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">2. User Accounts</h2>
          <p>
            When you create an account with us, you must provide information that is accurate, complete, and 
            current at all times. Failure to do so constitutes a breach of the Terms, which may result in 
            immediate termination of your account.
          </p>
          <p>
            You are responsible for safeguarding the password that you use to access the App and for any activities or 
            actions under your password. You agree not to disclose your password to any third party.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">3. User Content</h2>
          <p>
            Our App allows you to post, link, store, share and otherwise make available certain information, text, 
            graphics, videos, or other material. You are responsible for the content that you post, including 
            its legality, reliability, and appropriateness.
          </p>
          <p>
            By posting content to the App, you grant us the right to use, modify, publicly perform, publicly display, 
            reproduce, and distribute such content on and through the App. You retain any and all of your rights to any 
            content you submit, post or display on or through the App.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">4. Prohibited Activities</h2>
          <p>
            You may not use the App for any illegal purpose or to violate any laws in your jurisdiction. 
            You may not sell or promote illegal products or services through the App.
          </p>
          <p>
            You may not use the App to send unsolicited promotional material or spam. You may not attempt to gain 
            unauthorized access to any portion of the App or any other systems or networks connected to the App.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">5. Transactions</h2>
          <p>
            {APP_NAME} is a platform that allows users to list and purchase items. We are not responsible for the 
            quality, safety, or legality of the items posted, the truth or accuracy of the listings, the ability 
            of sellers to sell items or the ability of buyers to pay for items.
          </p>
          <p>
            We strongly encourage buyers and sellers to meet in public places for transactions and to verify the 
            condition of items before completing a purchase.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">6. Limitation of Liability</h2>
          <p>
            In no event shall {APP_NAME}, nor its directors, employees, partners, agents, suppliers, or affiliates, 
            be liable for any indirect, incidental, special, consequential or punitive damages, including without 
            limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access 
            to or use of or inability to access or use the App.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">7. Changes to Terms</h2>
          <p>
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. By continuing 
            to access or use our App after those revisions become effective, you agree to be bound by the revised terms.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">8. Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at support@{APP_NAME.toLowerCase()}.com.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions; 