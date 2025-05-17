import React from 'react';
import { APP_NAME } from '../constants';

const RefundPolicy = () => {
  return (
    <div className="container mx-auto py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Returns & Refunds Policy</h1>
        <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
        
        <div className="prose prose-lg max-w-none">
          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">1. Overview</h2>
          <p>
            This Returns & Refunds Policy outlines the guidelines and procedures for returns and refunds for transactions 
            conducted through the {APP_NAME} platform. As a marketplace connecting buyers and sellers, our refund policy 
            aims to ensure fair and transparent transactions for all users.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">2. Peer-to-Peer Transactions</h2>
          <p>
            For direct peer-to-peer transactions where {APP_NAME} does not process payments:
          </p>
          <ul className="list-disc pl-5 mt-2 mb-4">
            <li>Returns and refunds are primarily arranged between the buyer and seller</li>
            <li>We recommend inspecting items thoroughly before completing in-person transactions</li>
            <li>For shipped items, we recommend that sellers clearly state their return policy in the item description</li>
            <li>{APP_NAME} can mediate disputes but cannot guarantee refunds for peer-to-peer transactions</li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">3. {APP_NAME} Payment Protected Transactions</h2>
          <p>
            For transactions processed through {APP_NAME} Payments:
          </p>
          <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">3.1 Eligibility for Refunds</h3>
          <p>Buyers may be eligible for refunds under the following circumstances:</p>
          <ul className="list-disc pl-5 mt-2 mb-4">
            <li>Item not received</li>
            <li>Item significantly not as described</li>
            <li>Item is damaged or defective</li>
            <li>Item is counterfeit or prohibited</li>
            <li>Seller cancels the order</li>
          </ul>

          <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">3.2 Return Process</h3>
          <p>To initiate a return for eligible transactions:</p>
          <ol className="list-decimal pl-5 mt-2 mb-4">
            <li>Contact the seller through the {APP_NAME} messaging system within 3 days of receiving the item</li>
            <li>If the seller agrees to the return, follow their return instructions</li>
            <li>If the seller does not respond or agree, file a claim through {APP_NAME} within 7 days of receiving the item</li>
            <li>Provide clear photos and documentation to support your claim</li>
            <li>Ship the item back in its original condition with tracking (if required)</li>
          </ol>

          <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">3.3 Refund Timeline</h3>
          <p>
            Once a return is approved and, if required, the item is returned to the seller:
          </p>
          <ul className="list-disc pl-5 mt-2 mb-4">
            <li>Refunds are typically processed within 5-7 business days</li>
            <li>Refunds are issued to the original payment method</li>
            <li>Shipping costs may be refunded if the return is due to seller error</li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">4. Non-Returnable Items</h2>
          <p>
            The following items are generally not eligible for return or refund:
          </p>
          <ul className="list-disc pl-5 mt-2 mb-4">
            <li>Personalized or custom-made items</li>
            <li>Perishable goods</li>
            <li>Digital products or software that has been downloaded</li>
            <li>Items explicitly listed as "no returns" by the seller</li>
            <li>Items that have been used, altered, or damaged after receipt</li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">5. Buyer's Remorse</h2>
          <p>
            Returns based solely on buyer's remorse (changing your mind) are at the seller's discretion. 
            {APP_NAME} does not guarantee refunds for changes of mind, so we encourage buyers to carefully review 
            listings before making purchases.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">6. Dispute Resolution</h2>
          <p>
            If a buyer and seller cannot resolve a dispute directly:
          </p>
          <ol className="list-decimal pl-5 mt-2 mb-4">
            <li>Either party can request {APP_NAME} mediation through the app</li>
            <li>Both parties will be asked to provide evidence and documentation</li>
            <li>{APP_NAME} will review the case and make a decision based on our policies</li>
            <li>The decision made by {APP_NAME} is final</li>
          </ol>

          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">7. Contact Us</h2>
          <p>
            If you have any questions about our Returns & Refunds Policy, please contact us at
            support@{APP_NAME.toLowerCase()}.com.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy; 