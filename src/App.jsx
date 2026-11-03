// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
// import AppFooter from './AppFooter';
// import Home from './pages/Home';
// import About from './pages/About';
// import ContactUs from './pages/ContactUs';
// import PrivacyPolicy from './pages/PrivacyPolicy';
// import TermsConditions from './pages/TermsConditions';
// import RefundPolicy from './pages/RefundPolicy';
// import ShippingPolicy from './pages/ShippingPolicy';

// function Header() {
//   return (
//     <header className="bg-white shadow-md sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
//         <Link to="/" className="text-2xl font-bold text-pink-600">SYVORA</Link>
//         <nav className="flex gap-6 text-sm font-medium">
//           <Link to="/" className="hover:text-pink-600">Home</Link>
//           <Link to="/about" className="hover:text-pink-600">About</Link>
//           <Link to="/contact-us" className="hover:text-pink-600">Contact</Link>
//         </nav>
//       </div>
//     </header>
//   );
// }

// export default function App() {
//   return (
//     <BrowserRouter>
//       <div className="flex flex-col min-h-screen">
//         <Header />
//         <main className="flex-grow">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/privacy-policy" element={<PrivacyPolicy />} />
//             <Route path="/terms-conditions" element={<TermsConditions />} />
//             <Route path="/refund-policy" element={<RefundPolicy />} />
//             <Route path="/shipping-policy" element={<ShippingPolicy />} />
//             <Route path="/contact-us" element={<ContactUs />} />
//           </Routes>
//         </main>
//         <AppFooter />
//       </div>
//     </BrowserRouter>
//   );
// }








// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
// import ContactUs from './pages/ContactUs'
// import PrivacyPolicy from './pages/PrivacyPolicy'
// import TermsOfService from './pages/TermsOfService'
// import RefundPolicy from './pages/RefundPolicy'
// import ShippingPolicy from './pages/ShippingPolicy'

// function Navbar() {
//   return (
//     <nav className="bg-white shadow-sm sticky top-0">
//       <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between">
//         <Link to="/" className="text-2xl font-bold text-[#A47551]">SYVORA</Link>
//         <div className="flex gap-6">
//           <Link to="/" className="hover:text-[#A47551]">Home</Link>
//           <Link to="/contact" className="hover:text-[#A47551]">Contact</Link>
//           <Link to="/privacy" className="hover:text-[#A47551]">Privacy</Link>
//         </div>
//       </div>
//     </nav>
//   )
// }

// function Footer() {
//   return (
//     <footer className="bg-white border-t mt-20 py-8">
//       <div className="max-w-7xl mx-auto px-6 grid-cols-2 md:grid-cols-4 gap-8 text-sm">
//         <div>
//           <h3 className="font-bold mb-3 text-[#A47551]">SYVORA</h3>
//           <p className="text-gray-600">India's No.1 Fashion Store</p>
//         </div>
//         <div>
//           <h4 className="font-semibold mb-3">CUSTOMER SERVICE</h4>
//           <Link to="/contact" className="block hover:text-[#A47551]">Contact Us</Link>
//           <Link to="/privacy" className="block hover:text-[#A47551]">Privacy Policy</Link>
//           <Link to="/terms" className="block hover:text-[#A47551]">Terms</Link>
//           <Link to="/refund" className="block hover:text-[#A47551]">Refund</Link>
//           <Link to="/shipping" className="block hover:text-[#A47551]">Shipping</Link>
//         </div>
//         <div>
//           <h4 className="font-semibold mb-3">ONLINE SHOPPING</h4>
//           <p>Men</p><p>Women</p><p>Kids</p>
//         </div>
//         <div>
//           <h4 className="font-semibold mb-3">KEEP IN TOUCH</h4>
//           <p>syvora.official.acc@gmail.com</p>
//         </div>
//       </div>
//       <p className="text-center text-xs text-gray-500 mt-6">© 2026 Syvora. All rights reserved.</p>
//     </footer>
//   )
// }

// function Home() {
//   return <div className="text-center py-20"><h1 className="text-4xl font-bold">Welcome to Syvora</h1></div>
// }

// export default function App() {
//   return (
//     <Router>
//       <div className="min-h-screen bg-[#FAF7F2]">
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/contact" element={<ContactUs />} />
//           <Route path="/privacy" element={<PrivacyPolicy />} />
//           <Route path="/terms" element={<TermsOfService />} />
//           <Route path="/refund" element={<RefundPolicy />} />
//           <Route path="/shipping" element={<ShippingPolicy />} />
//         </Routes>
//         <Footer />
//       </div>
//     </Router>
//   )
// }










// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import Home from './pages/Home';
// import About from './pages/About';
// import ContactUs from './pages/ContactUs';
// import PrivacyPolicy from './pages/PrivacyPolicy';
// import TermsConditions from './pages/TermsConditions';
// import RefundPolicy from './pages/RefundPolicy';
// import ShippingPolicy from './pages/ShippingPolicy';
// import AppFooter from './AppFooter';

// export default function App() {
//   return (
//     <Router>
//       <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800 font-sans">
//         {/* Navbar */}
//         <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
//           <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
//             <Link to="/" className="text-2xl font-extrabold text-indigo-600 tracking-wide">SYVORA</Link>
//             <div className="space-x-6 text-sm font-medium">
//               <Link to="/" className="hover:text-indigo-600">Home</Link>
//               <Link to="/about" className="hover:text-indigo-600">About</Link>
//               <Link to="/contact-us" className="hover:text-indigo-600">Contact</Link>
//             </div>
//           </div>
//         </nav>

//         {/* Dynamic Pages */}
//         <main className="flex-grow">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/contact-us" element={<ContactUs />} />
//             <Route path="/privacy-policy" element={<PrivacyPolicy />} />
//             <Route path="/terms-conditions" element={<TermsConditions />} />
//             <Route path="/refund-policy" element={<RefundPolicy />} />
//             <Route path="/shipping-policy" element={<ShippingPolicy />} />
//           </Routes>
//         </main>

//         {/* Footer */}
//         <AppFooter />
//       </div>
//     </Router>
//   );
// }









import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import syvoraLogo from './assets/syvora_logo.png';

import Home from './pages/Home';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import RefundPolicy from './pages/RefundPolicy';
import ShippingPolicy from './pages/ShippingPolicy';
import AppFooter from './AppFooter';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-stone-900 font-sans">
        {/* Navbar - Increased height to h-28 */}
        <nav className="bg-white border-b border-stone-200 sticky top-0 z-50 shadow-sm">
          <div className="max-w-7xl mx-auto px-6 h-28 flex items-center justify-between">
            
            {/* Logo - Increased height to h-24 */}
            <Link to="/" className="flex items-center py-2">
              <img 
                src={syvoraLogo} 
                alt="SYVORA Logo" 
                className="h-24 w-auto object-contain hover:opacity-95 transition-opacity" 
              />
            </Link>

            {/* Navigation Links */}
            <div className="space-x-8 text-sm font-semibold tracking-wide text-stone-700">
              <Link to="/" className="hover:text-black transition-colors">Home</Link>
              <Link to="/about" className="hover:text-black transition-colors">About</Link>
              <Link to="/contact-us" className="hover:text-black transition-colors">Contact</Link>
            </div>
          </div>
        </nav>

        {/* Dynamic Pages */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
            <Route path="/refund-policy" element={<RefundPolicy />} />
            <Route path="/shipping-policy" element={<ShippingPolicy />} />
          </Routes>
        </main>

        {/* Footer */}
        <AppFooter />
      </div>
    </Router>
  );
}