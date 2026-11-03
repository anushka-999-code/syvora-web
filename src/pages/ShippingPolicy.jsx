// import React from 'react';

// export default function ShippingPolicy() {
//   return (
//     <div className="max-w-4xl mx-auto px-6 py-16">
//       <h1 className="text-3xl font-serif font-bold mb-2 text-[#2C2623]">Shipping Policy</h1>
//       <p className="text-xs text-stone-500 mb-8 border-b border-stone-200 pb-4">Last Updated: October 2026</p>

//       <div className="space-y-6">
        
//         {/* Section 1 */}
//         <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm space-y-3">
//           <h2 className="text-lg font-semibold text-[#2C2623]">1. Shipping Coverage</h2>
//           <p className="text-sm text-stone-600 leading-relaxed">
//             Syvora currently ships to all serviceable pincodes across India. International shipping will be launched soon. Delivery is not available to PO Box addresses.
//           </p>
//         </div>

//         {/* Section 2 */}
//         <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm space-y-3">
//           <h2 className="text-lg font-semibold text-[#2C2623]">2. Processing & Delivery Timeline</h2>
//           <ul className="space-y-1.5 text-sm text-stone-700">
//             <li><strong>Order Processing:</strong> 1-2 Business Days</li>
//             <li><strong>Metro Cities:</strong> 3-4 Business Days</li>
//             <li><strong>Rest of India:</strong> 5-7 Business Days</li>
//           </ul>
//           <p className="text-xs text-[#A47551] italic pt-2">
//             Note: Timeline excludes Sundays and public holidays.
//           </p>
//         </div>

//         {/* Section 3 */}
//         <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm space-y-3">
//           <h2 className="text-lg font-semibold text-[#2C2623]">3. Shipping Charges</h2>
//           <p className="text-sm text-stone-600 leading-relaxed">
//             Shipping charges are calculated at checkout based on location and order value. Free shipping is available on all orders above <strong>₹999</strong>.
//           </p>
//         </div>

//         {/* Section 4 */}
//         <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm space-y-3">
//           <h2 className="text-lg font-semibold text-[#2C2623]">4. Order Tracking</h2>
//           <p className="text-sm text-stone-600 leading-relaxed">
//             Once your order is shipped, you will receive a tracking ID via SMS and Email. You can track your order in real-time from the "My Orders" section.
//           </p>
//         </div>

//         {/* Section 5 */}
//         <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm space-y-3">
//           <h2 className="text-lg font-semibold text-[#2C2623]">5. Address & Delivery Issues</h2>
//           <p className="text-sm text-stone-600 leading-relaxed">
//             Please ensure your shipping address is complete and accurate. Syvora is not responsible for delays due to incorrect address. For delivery issues, contact our support team.
//           </p>
//         </div>

//         {/* Note Card */}
//         <div className="bg-[#FFF9E6] p-5 rounded-xl border-l-4 border-[#A47551] text-sm text-stone-800 font-medium">
//           Need help? Email us at{' '}
//           <a href="mailto:syvora.official.acc@gmail.com" className="text-[#A47551] underline">
//             syvora.official.acc@gmail.com
//           </a>
//         </div>

//       </div>
//     </div>
//   );
// }








// import React from 'react';

// export default function ShippingPolicy() {
//   return (
//     <div className="bg-white min-h-screen text-black font-sans">
//       <div className="max-w-4xl mx-auto px-6 py-12">
//         <h1 className="text-3xl font-bold mb-2 border-b border-black pb-4">Shipping Policy</h1>
//         <p className="text-xs text-gray-600 mb-8">Last Updated: October 2026</p>

//         <div className="space-y-6 text-sm leading-relaxed">
//           <section className="border border-gray-300 p-6">
//             <h2 className="text-base font-bold mb-2">1. Shipping Coverage</h2>
//             <p>
//               SYVORA ships to serviceable pincodes across India. Deliveries are executed via accredited logistics partners. We do not deliver to PO Box addresses.
//             </p>
//           </section>

//           <section className="border border-gray-300 p-6">
//             <h2 className="text-base font-bold mb-2">2. Processing & Delivery Timelines</h2>
//             <ul className="space-y-1">
//               <li><strong>Order Processing Time:</strong> 1 - 2 Business Days</li>
//               <li><strong>Metro Cities Delivery:</strong> 3 - 4 Business Days</li>
//               <li><strong>Rest of India Delivery:</strong> 5 - 7 Business Days</li>
//             </ul>
//             <p className="text-xs text-gray-500 mt-2 italic">* Timelines exclude Sundays and statutory public holidays.</p>
//           </section>

//           <section className="border border-gray-300 p-6">
//             <h2 className="text-base font-bold mb-2">3. Shipping Charges</h2>
//             <p>
//               Applicable shipping fees are calculated at checkout based on destination pincode and cart total. Free shipping is available on orders exceeding ₹999.
//             </p>
//           </section>

//           <section className="border border-gray-300 p-6">
//             <h2 className="text-base font-bold mb-2">4. Order Tracking</h2>
//             <p>
//               Upon dispatch, tracking details are sent via SMS/Email. Real-time delivery status can be tracked via the "My Orders" tab in the App.
//             </p>
//           </section>

//           <section className="border border-gray-300 p-6">
//             <h2 className="text-base font-bold mb-2">5. Address Accuracy</h2>
//             <p>
//               Customers are required to provide complete and accurate delivery addresses. SYVORA is not liable for dispatch delays resulting from incomplete address details.
//             </p>
//           </section>

//           <div className="border-l-2 border-black pl-4 py-2 text-xs font-mono">
//             Shipping Support: syvora.official.acc@gmail.com
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }














import React, { useState } from 'react';

export default function ShippingPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 font-sans text-slate-800 leading-relaxed">
      
      <h1 className="text-3xl font-bold text-slate-900 border-b pb-4 mb-2">Shipping Policy</h1>
      <p className="text-xs text-slate-500 mb-8">Last Updated: October 2026</p>

      <div className="space-y-8 text-sm text-slate-700">
        
        <section>
          <h2 className="text-lg font-semibold text-slate-900 mb-2">1. Processing & Dispatch</h2>
          <p>All orders are processed and dispatched within <strong>24 to 48 business hours</strong>.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900 mb-2">2. Delivery Timelines</h2>
          <ul className="list-disc pl-5 space-y-1.5">
            <li><strong>Metro Cities:</strong> 2 – 4 Business Days</li>
            <li><strong>Rest of India:</strong> 4 – 7 Business Days</li>
            <li><strong>Remote Regions:</strong> 7 – 10 Business Days</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900 mb-2">3. Shipping Charges</h2>
          <ul className="list-disc pl-5 space-y-1.5">
            <li><strong>Prepaid:</strong> FREE shipping on orders above ₹799 (₹50 fee for orders below ₹799).</li>
            <li><strong>Cash on Delivery (COD):</strong> Nominal handling fee of ₹40 applies.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900 mb-2">4. Order Tracking</h2>
          <p>Tracking details (AWB number & courier partner link) are sent via SMS, WhatsApp, and Email upon dispatch.</p>
        </section>

      </div>
    </div>
  );
}