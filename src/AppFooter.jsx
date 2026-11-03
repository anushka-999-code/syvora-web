// // import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';

// export default function AppFooter() {
//   return (
//     <footer className="bg-gray-900 text-gray-300">
//       <div className="max-w-7xl mx-auto px-4 py-12">
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//           <div>
//             <h3 className="text-white text-lg font-bold mb-4">Syvora</h3>
//             <p className="text-sm">India's No.1 Fashion Store. Trending styles for Men, Women & Kids.</p>
//           </div>
//           <div>
//             <h4 className="text-white font-semibold mb-4">ONLINE SHOPPING</h4>
//             <ul className="space-y-2 text-sm">
//               <li><a href="/" className="hover:text-white">Men</a></li>
//               <li><a href="/" className="hover:text-white">Women</a></li>
//               <li><a href="/" className="hover:text-white">Kids</a></li>
//               <li><a href="/" className="hover:text-white">Home</a></li>
//             </ul>
//           </div>
//           <div>
//             <h4 className="text-white font-semibold mb-4">CUSTOMER SERVICE</h4>
//             <ul className="space-y-2 text-sm">
//               <li><a href="/contact-us" className="hover:text-white">Contact Us</a></li>
//               <li><a href="/privacy-policy" className="hover:text-white">Privacy Policy</a></li>
//               <li><a href="/terms-conditions" className="hover:text-white">Terms & Conditions</a></li>
//               <li><a href="/refund-policy" className="hover:text-white">Refund Policy</a></li>
//               <li><a href="/shipping-policy" className="hover:text-white">Shipping Policy</a></li>
//             </ul>
//           </div>
//           <div>
//             <h4 className="text-white font-semibold mb-4">KEEP IN TOUCH</h4>
//             <div className="flex gap-4 text-sm">
//               <a href="#" className="hover:text-white">FB</a>
//               <a href="#" className="hover:text-white">IG</a>
//               <a href="#" className="hover:text-white">TW</a>
//               <a href="#" className="hover:text-white">YT</a>
//             </div>
//             <p className="text-xs mt-4">
//               Email: syvora.official.acc@gmail.com
//             </p>
//           </div>
//         </div>
//         <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
//           © 2026 Syvora. All rights reserved.
//         </div>
//       </div>
//     </footer>
//   );
// }










// import React from 'react';
// import { Link } from 'react-router-dom';

// export default function AppFooter() {
//   return (
//     <footer className="bg-gray-900 text-gray-300 py-10 mt-auto border-t border-gray-800">
//       <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
//         <div>
//           <h2 className="text-2xl font-bold text-white tracking-wider">SYVORA</h2>
//           <p className="mt-2 text-sm text-gray-400">Experience Virtual Try-On like never before.</p>
//         </div>
        
//         <div>
//           <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
//           <ul className="space-y-2 text-sm">
//             <li><Link to="/" className="hover:text-white transition">Home</Link></li>
//             <li><Link to="/about" className="hover:text-white transition">About Us</Link></li>
//           </ul>
//         </div>

//         <div>
//           <h3 className="text-lg font-semibold text-white mb-3">Legal & Policies</h3>
//           <ul className="space-y-2 text-sm">
//             <li><Link to="/privacy-policy" className="hover:text-white transition">Privacy Policy</Link></li>
//             <li><Link to="/terms-conditions" className="hover:text-white transition">Terms & Conditions</Link></li>
//             <li><Link to="/refund-policy" className="hover:text-white transition">Refund & Cancellation</Link></li>
//             <li><Link to="/shipping-policy" className="hover:text-white transition">Shipping Policy</Link></li>
//           </ul>
//         </div>

//         <div>
//           <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>
//           <p className="text-sm">Email: syvora.official.acc@gmail.com</p>
//           <p className="text-sm mt-1">Support: Available 24/7</p>
//           <Link to="/contact-us" className="inline-block mt-3 text-sm text-indigo-400 hover:underline">Contact Us Page &rarr;</Link>
//         </div>
//       </div>
//       <div className="text-center text-xs text-gray-500 mt-8 pt-4 border-t border-gray-800">
//         &copy; {new Date().getFullYear()} Syvora. All rights reserved.
//       </div>
//     </footer>
//   );
// }







// import React from 'react';
// import { Link } from 'react-router-dom';
// // NO IMPORT NEEDED HERE

// export default function AppFooter() {
//   return (
//     <footer className="bg-black text-white pt-12 pb-8 border-t border-stone-800 font-sans">
//       <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        
//         {/* Brand Column */}
//         <div className="space-y-4">
//           <div className="bg-white p-2 rounded inline-block">
//             <img 
//               src="/syvora_logo.png" 
//               alt="SYVORA Logo" 
//               className="h-10 w-auto object-contain" 
//             />
//           </div>
//           <p className="text-xs text-stone-400 leading-relaxed max-w-xs">
//             India's Fashion & AI Virtual Try-On Platform. Experience virtual fitting before you buy.
//           </p>
//         </div>

//         {/* Quick Links */}
//         <div>
//           <h4 className="text-xs font-bold uppercase tracking-widest text-stone-200 mb-4">
//             Navigation
//           </h4>
//           <ul className="space-y-2.5 text-xs text-stone-400">
//             <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
//             <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
//             <li><Link to="/contact-us" className="hover:text-white transition-colors">Contact Us</Link></li>
//           </ul>
//         </div>

//         {/* Legal & Compliance */}
//         <div>
//           <h4 className="text-xs font-bold uppercase tracking-widest text-stone-200 mb-4">
//             Legal & Policies
//           </h4>
//           <ul className="space-y-2.5 text-xs text-stone-400">
//             <li><Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
//             <li><Link to="/terms-conditions" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
//             <li><Link to="/refund-policy" className="hover:text-white transition-colors">Refund & Cancellation</Link></li>
//             <li><Link to="/shipping-policy" className="hover:text-white transition-colors">Shipping Policy</Link></li>
//           </ul>
//         </div>

//         {/* Contact Info */}
//         <div>
//           <h4 className="text-xs font-bold uppercase tracking-widest text-stone-200 mb-4">
//             Contact Support
//           </h4>
//           <div className="space-y-2 text-xs text-stone-400 leading-relaxed">
//             <p><strong className="text-stone-300">Email:</strong> <a href="mailto:syvora.official.acc@gmail.com" className="hover:underline">syvora.official.acc@gmail.com</a></p>
//             <p><strong className="text-stone-300">Phone:</strong> +91 82658 75877</p>
//             <p className="pt-2 text-[11px] text-stone-500">
//               Syvora Technologies Private Limited<br />
//               Pilkhuwa, Hapur, UP - 245304
//             </p>
//           </div>
//         </div>

//       </div>

//       <div className="max-w-7xl mx-auto px-6 mt-10 pt-6 border-t border-stone-900 text-center text-[11px] text-stone-500">
//         © 2026 SYVORA. All rights reserved. Registered under DPDP Act 2023 guidelines.
//       </div>
//     </footer>
//   );
// }












// import React from 'react';
// import { Link } from 'react-router-dom';
// import syvoraLogo from './assets/syvora_logo.png';

// export default function AppFooter() {
//   return (
//     <footer className="bg-[#F3F0EC] text-stone-800 pt-12 pb-8 border-t border-stone-300 font-sans mt-auto">
//       <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        
//         {/* Brand Column */}
//         <div className="space-y-3">
//           <img 
//             src={syvoraLogo} 
//             alt="SYVORA Logo" 
//             className="h-14 w-auto object-contain" 
//           />
//           <p className="text-xs text-stone-600 leading-relaxed max-w-xs">
//             India's Fashion & AI Virtual Try-On Platform.
//           </p>
//         </div>

//         {/* Navigation */}
//         <div>
//           <h4 className="text-xs font-bold uppercase tracking-wider text-stone-900 mb-4">
//             Navigation
//           </h4>
//           <ul className="space-y-2 text-xs text-stone-600">
//             <li><Link to="/" className="hover:text-black transition-colors">Home</Link></li>
//             <li><Link to="/about" className="hover:text-black transition-colors">About Us</Link></li>
//             <li><Link to="/contact-us" className="hover:text-black transition-colors">Contact Us</Link></li>
//           </ul>
//         </div>

//         {/* Legal & Policies */}
//         <div>
//           <h4 className="text-xs font-bold uppercase tracking-wider text-stone-900 mb-4">
//             Legal & Policies
//           </h4>
//           <ul className="space-y-2 text-xs text-stone-600">
//             <li><Link to="/privacy-policy" className="hover:text-black transition-colors">Privacy Policy</Link></li>
//             <li><Link to="/terms-conditions" className="hover:text-black transition-colors">Terms & Conditions</Link></li>
//             <li><Link to="/refund-policy" className="hover:text-black transition-colors">Refund & Cancellation</Link></li>
//             <li><Link to="/shipping-policy" className="hover:text-black transition-colors">Shipping Policy</Link></li>
//           </ul>
//         </div>

//         {/* Support */}
//         <div>
//           <h4 className="text-xs font-bold uppercase tracking-wider text-stone-900 mb-4">
//             Support
//           </h4>
//           <div className="space-y-1.5 text-xs text-stone-600 leading-relaxed">
//             <p><strong className="text-stone-800">Email:</strong> syvora.official.acc@gmail.com</p>
//             <p><strong className="text-stone-800">Phone:</strong> +91 82658 75877</p>
//             <p className="pt-2 text-[11px] text-stone-500">
//               Syvora Technologies Private Limited<br />
//               Pilkhuwa, Hapur, UP - 245304
//             </p>
//           </div>
//         </div>

//       </div>

//       <div className="max-w-7xl mx-auto px-6 mt-10 pt-6 border-t border-stone-300 text-center text-[11px] text-stone-500">
//         © 2026 SYVORA. All rights reserved. Registered under DPDP Act 2023 guidelines.
//       </div>
//     </footer>
//   );
// }









import React from 'react';
import { Link } from 'react-router-dom';

export default function AppFooter() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-12 pb-8 border-t border-slate-800 font-sans mt-auto">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand Column */}
        <div className="space-y-4">
          {/* Larger Circular Logo Container */}
          <div className="bg-white p-2.5 rounded-full inline-flex items-center justify-center shadow-sm h-32 w-32 overflow-hidden border border-slate-700">
            <img 
              src="/src/assets/syvora_logo.png" 
              alt="SYVORA Logo" 
              className="h-full w-full object-contain scale-110" 
            />
          </div>
          <p className="text-xs text-slate-400 leading-relaxed max-w-xs">
            India's Smart Fashion & AI Virtual Try-On Platform. Experience virtual fitting before you buy.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
            Navigation
          </h4>
          <ul className="space-y-2.5 text-xs text-slate-400">
            <li>
              <Link to="/" className="hover:text-white transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact-us" className="hover:text-white transition-colors">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal & Compliance (Razorpay Mandate) */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
            Legal & Policies
          </h4>
          <ul className="space-y-2.5 text-xs text-slate-400">
            <li>
              <Link to="/privacy-policy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms-conditions" className="hover:text-white transition-colors">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link to="/refund-policy" className="hover:text-white transition-colors">
                Refund & Cancellation
              </Link>
            </li>
            <li>
              <Link to="/shipping-policy" className="hover:text-white transition-colors">
                Shipping Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
            Contact Support
          </h4>
          <div className="space-y-2 text-xs text-slate-400 leading-relaxed">
            <p>
              <strong className="text-slate-200">Email:</strong>{' '}
              <a href="mailto:syvora.official.acc@gmail.com" className="hover:underline">
                syvora.official.acc@gmail.com
              </a>
            </p>
            <p>
              <strong className="text-slate-200">Phone:</strong> +91 82658 75877
            </p>
            <p className="pt-2 text-[11px] text-slate-500">
              SYVORA<br />
              257, Street no-08, Firozabad , UP - 283203
            </p>
          </div>
        </div>

      </div>

      {/* Copyright Line */}
      <div className="max-w-7xl mx-auto px-6 mt-10 pt-6 border-t border-slate-800 text-center text-[11px] text-slate-500">
        © 2026 SYVORA. All rights reserved. Registered under DPDP Act 2023 guidelines.
      </div>
    </footer>
  );
}