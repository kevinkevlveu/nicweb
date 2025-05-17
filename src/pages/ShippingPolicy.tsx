import React from 'react';
import { APP_NAME } from '../constants';

const ShippingPolicy = () => {
  return (
    <div className="container mx-auto py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Shipping & Delivery Policy</h1>
        <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
        
        <div className="prose prose-lg max-w-none">
          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">1. Overview</h2>
          <p>
            This Shipping & Delivery Policy outlines the guidelines and procedures for shipping and delivery of items 
            purchased through the {APP_NAME} platform. As a marketplace connecting buyers and sellers, {APP_NAME} facilitates 
            transactions but the shipping and delivery responsibilities primarily lie with the sellers.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">2. Shipping Methods</h2>
          <p>
            {APP_NAME} offers the following shipping methods for transactions between buyers and sellers:
          </p>
          <ul className="list-disc pl-5 mt-2 mb-4">
            <li><strong>In-person Exchange:</strong> The primary method for local transactions where buyers and sellers meet at a mutually agreed location.</li>
            <li><strong>Seller-arranged Shipping:</strong> For non-local transactions, sellers may offer to ship items using their preferred carrier.</li>
            <li><strong>{APP_NAME} Shipping (where available):</strong> In select locations, we offer a shipping service that provides tracking and insurance.</li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">3. Shipping Costs</h2>
          <p>
            Shipping costs are determined by the following factors:
          </p>
          <ul className="list-disc pl-5 mt-2 mb-4">
            <li>Distance between buyer and seller</li>
            <li>Dimensions and weight of the item</li>
            <li>Shipping method selected</li>
            <li>Additional services (insurance, expedited delivery, etc.)</li>
          </ul>
          <p>
            For seller-arranged shipping, the seller sets the shipping cost which will be displayed on the item listing.
            For {APP_NAME} Shipping, our system calculates shipping costs automatically based on the above factors.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">4. Delivery Timeframes</h2>
          <p>
            Delivery timeframes vary depending on the shipping method and location:
          </p>
          <ul className="list-disc pl-5 mt-2 mb-4">
            <li><strong>In-person Exchange:</strong> Immediate upon meeting</li>
            <li><strong>Local Delivery:</strong> Typically 1-2 days</li>
            <li><strong>Standard Shipping:</strong> Usually 3-7 business days</li>
            <li><strong>Express Shipping:</strong> Usually 1-3 business days</li>
          </ul>
          <p>
            Please note that these timeframes are estimates and may be affected by external factors such as 
            weather conditions, high volume periods, or carrier delays.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">5. Order Tracking</h2>
          <p>
            For transactions using {APP_NAME} Shipping or where the seller provides tracking information, buyers can track 
            their packages through the app. We will send notifications regarding package status updates, including dispatch 
            and estimated delivery time.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">6. International Shipping</h2>
          <p>
            {APP_NAME} primarily facilitates local and domestic transactions. International shipping may be available 
            for select items at the seller's discretion. Buyers are responsible for any customs duties, taxes, or fees 
            imposed by their country of residence.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">7. Shipping Insurance</h2>
          <p>
            {APP_NAME} Shipping includes basic insurance coverage for items up to $500. For higher-value items, additional 
            insurance may be purchased. For seller-arranged shipping, insurance options depend on the carrier and service 
            selected by the seller.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">8. Lost or Damaged Items</h2>
          <p>
            In the event an item is lost or damaged during shipping:
          </p>
          <ul className="list-disc pl-5 mt-2 mb-4">
            <li>For {APP_NAME} Shipping, contact our customer support within 48 hours of the expected delivery date</li>
            <li>For seller-arranged shipping, contact the seller and the shipping carrier directly</li>
            <li>Provide photos of any damaged packaging or items to support your claim</li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">9. Contact Us</h2>
          <p>
            If you have any questions about our Shipping & Delivery Policy, please contact us at
            shipping@{APP_NAME.toLowerCase()}.com.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShippingPolicy; 