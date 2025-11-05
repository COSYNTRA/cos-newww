// import { useState, useEffect } from 'react';
// import { Menu, X } from 'lucide-react';
// import { motion, AnimatePresence } from 'motion/react';
// import { Button } from './ui/button';

// interface NavbarProps {
//   currentPage: string;
//   onNavigate: (page: string) => void;
// }

// export function Navbar({ currentPage, onNavigate }: NavbarProps) {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 20);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const navLinks = [
//     { name: 'Home', path: 'home' },
//     { name: 'About', path: 'about' },
//     { name: 'Services', path: 'services' },
//     { name: 'Industries', path: 'industries' },
//     { name: 'Portfolio', path: 'portfolio' },
//     { name: 'Tech Stack', path: 'tech-stack' },
//     { name: 'Careers', path: 'careers' },
//     { name: 'Blog', path: 'blog' },
//     { name: 'Contact', path: 'contact' },
//   ];

//   return (
//     <motion.nav
//       initial={{ y: -100, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ type: 'spring', stiffness: 120, damping: 15 }}
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
//         ? 'bg-white/90 backdrop-blur-xl shadow-lg py-3'
//         : 'bg-transparent py-5'
//         }`}
//     >
//       <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between">
//         {/* ==== Logo ==== */}

//         <button
//           onClick={() => onNavigate('home')}
//           className="flex items-center space-x-2 group"
//           aria-label="Go to Home"
//         >

//           <img
//             src="/LOgoFFFF.PNG"
//             alt="COSYNTRA Logo"

//             className="h-20 md:h-28 object-contain transition-transform duration-500 ease-in-out hover:scale-115 drop-shadow-[0_6px_16px_rgba(37,99,235,0.35)]"
//           />
//         </button>

//         {/* ==== Desktop Nav ==== */}
//         <div className="hidden lg:flex items-center space-x-2">
//           {navLinks.map((link) => (
//             <motion.button
//               key={link.path}
//               onClick={() => onNavigate(link.path)}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${currentPage === link.path
//                 ? 'text-[#06B6D4]'
//                 : 'text-[#1F2937] hover:text-[#06B6D4] hover:bg-[#06B6D4]/5'
//                 }`}
//             >
//               {link.name}
//               {currentPage === link.path && (
//                 <motion.div
//                   layoutId="activeNav"
//                   className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#06B6D4] to-[#F97316]"
//                   transition={{ type: 'spring', stiffness: 380, damping: 30 }}
//                 />
//               )}
//             </motion.button>
//           ))}
//         </div>

//         {/* ==== CTA Button ==== */}
//         <div className="hidden lg:block">
//           <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//             <Button
//               onClick={() => onNavigate('contact')}
//               className="bg-gradient-to-r from-[#2563EB] to-[#1E3A8A] hover:shadow-lg hover:shadow-[#2563EB]/50 transition-all duration-300 relative overflow-hidden group"
//             >
//               <motion.div
//                 className="absolute inset-0 bg-white/20"
//                 initial={{ x: '-100%' }}
//                 whileHover={{ x: '100%' }}
//                 transition={{ duration: 0.6, ease: 'easeInOut' }}
//               />
//               <span className="relative z-10">Let&apos;s Talk</span>
//             </Button>
//           </motion.div>
//         </div>

//         {/* ==== Mobile Toggle ==== */}
//         <button
//           onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//           className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
//           aria-label="Toggle Menu"
//         >
//           {isMobileMenuOpen ? (
//             <X className="w-6 h-6 text-[#1F2937]" />
//           ) : (
//             <Menu className="w-6 h-6 text-[#1F2937]" />
//           )}
//         </button>
//       </div>

//       {/* ==== Mobile Menu ==== */}
//       <AnimatePresence>
//         {isMobileMenuOpen && (
//           <motion.div
//             key="mobileMenu"
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: 'auto' }}
//             exit={{ opacity: 0, height: 0 }}
//             transition={{ duration: 0.3 }}
//             className="lg:hidden bg-white/95 backdrop-blur-lg border-t border-gray-100 overflow-hidden shadow-lg"
//           >
//             <div className="container mx-auto px-4 py-4 space-y-2">
//               {navLinks.map((link) => (
//                 <button
//                   key={link.path}
//                   onClick={() => {
//                     onNavigate(link.path);
//                     setIsMobileMenuOpen(false);
//                   }}
//                   className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 ${currentPage === link.path
//                     ? 'bg-gradient-to-r from-[#06B6D4] to-[#F97316] text-white shadow-md'
//                     : 'text-[#1F2937] hover:bg-gray-100'
//                     }`}
//                 >
//                   {link.name}
//                 </button>
//               ))}
//               <Button
//                 onClick={() => {
//                   onNavigate('contact');
//                   setIsMobileMenuOpen(false);
//                 }}
//                 className="w-full bg-gradient-to-r from-[#2563EB] to-[#1E3A8A]"
//               >
//                 Let&apos;s Talk
//               </Button>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.nav>
//   );
// }
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from './ui/button';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: 'home' },
    { name: 'About', path: 'about' },
    { name: 'Services', path: 'services' },
    { name: 'Industries', path: 'industries' },
    { name: 'Portfolio', path: 'portfolio' },
    { name: 'Tech Stack', path: 'tech-stack' },
    { name: 'Careers', path: 'careers' },
    { name: 'Contact', path: 'contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 120, damping: 15 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-white/90 backdrop-blur-xl shadow-lg py-3'
        : 'bg-transparent py-5'
        }`}
    >
      <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between">
        {/* ==== Logo ==== */}
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center space-x-2 group cursor-pointer"
          aria-label="Go to Home"
        >
          <img
            src="/LOgoFFFF.PNG"
            alt="COSYNTRA Logo"
            className="h-20 md:h-28 object-contain transition-transform duration-500 ease-in-out hover:scale-115 drop-shadow-[0_6px_16px_rgba(37,99,235,0.35)]"
          />
        </button>

        {/* ==== Desktop Nav ==== */}
        <div className="hidden lg:flex items-center space-x-2">
          {navLinks.map((link) => (
            <motion.button
              key={link.path}
              onClick={() => onNavigate(link.path)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${currentPage === link.path
                ? 'text-[#06B6D4]'
                : 'text-[#1F2937] hover:text-[#06B6D4] hover:bg-[#06B6D4]/5'
                }`}
            >
              {link.name}
              {currentPage === link.path && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#06B6D4] to-[#F97316]"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* ==== CTA Button ==== */}
        <div className="hidden lg:block">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={() => onNavigate('contact')}
              className="bg-gradient-to-r from-[#2563EB] to-[#1E3A8A] hover:shadow-lg hover:shadow-[#2563EB]/50 transition-all duration-300 relative overflow-hidden group"
            >
              <motion.div
                className="absolute inset-0 bg-white/20"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
              />
              <span className="relative z-10 cursor-pointer">Let&apos;s Talk</span>
            </Button>
          </motion.div>
        </div>

        {/* ==== Mobile Toggle ==== */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6 text-[#1F2937]" />
          ) : (
            <Menu className="w-6 h-6 text-[#1F2937]" />
          )}
        </button>
      </div>

      {/* ==== Mobile Menu ==== */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            key="mobileMenu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white/95 backdrop-blur-lg border-t border-gray-100 overflow-hidden shadow-lg"
          >
            <div className="container mx-auto px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.path}
                  onClick={() => {
                    onNavigate(link.path);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 ${currentPage === link.path
                    ? 'bg-gradient-to-r from-[#06B6D4] to-[#F97316] text-white shadow-md'
                    : 'text-[#1F2937] hover:bg-gray-100'
                    }`}
                >
                  {link.name}
                </button>
              ))}
              <Button
                onClick={() => {
                  onNavigate('contact');
                  setIsMobileMenuOpen(false);
                }}
                className="w-full bg-gradient-to-r from-[#2563EB] to-[#1E3A8A]"
              >
                Let&apos;s Talk
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
