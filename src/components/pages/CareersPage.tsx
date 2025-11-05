// import { motion } from 'motion/react';
// import { MapPin, Clock, Briefcase, ArrowRight } from 'lucide-react';
// import { Card } from '../ui/card';
// import { Button } from '../ui/button';
// import { ImageWithFallback } from '../figma/ImageWithFallback';

// interface CareersPageProps {
//   onNavigate: (page: string) => void;
// }

// export function CareersPage({ onNavigate }: CareersPageProps) {
//   const positions = [
//     {
//       title: 'Senior Full Stack Developer',
//       department: 'Engineering',
//       location: 'Bangalore, India',
//       type: 'Full-time',
//       experience: '5+ years',
//       description: 'We are looking for an experienced full stack developer to build scalable web applications using React, Node.js, and cloud technologies.',
//       requirements: [
//         'Strong experience with React and Node.js',
//         'Proficiency in TypeScript and modern JavaScript',
//         'Experience with cloud platforms (AWS/Azure)',
//         'Knowledge of microservices architecture',
//       ],
//     },
//     {
//       title: 'AI/ML Engineer',
//       department: 'AI & Data Science',
//       location: 'Bangalore, India',
//       type: 'Full-time',
//       experience: '3+ years',
//       description: 'Join our AI team to develop cutting-edge machine learning solutions using Python, TensorFlow, and PyTorch.',
//       requirements: [
//         'Strong background in ML algorithms and deep learning',
//         'Experience with TensorFlow, PyTorch, or similar',
//         'Proficiency in Python and data science libraries',
//         'Understanding of MLOps and model deployment',
//       ],
//     },
//     {
//       title: 'Mobile App Developer',
//       department: 'Engineering',
//       location: 'Remote',
//       type: 'Full-time',
//       experience: '3+ years',
//       description: 'Build beautiful, high-performance mobile applications using React Native or Flutter for iOS and Android.',
//       requirements: [
//         'Experience with React Native or Flutter',
//         'Knowledge of native iOS/Android development',
//         'Strong understanding of mobile UI/UX principles',
//         'Experience with app store deployment',
//       ],
//     },
//     {
//       title: 'DevOps Engineer',
//       department: 'Infrastructure',
//       location: 'Bangalore, India',
//       type: 'Full-time',
//       experience: '4+ years',
//       description: 'Design and maintain our cloud infrastructure, CI/CD pipelines, and ensure optimal system performance.',
//       requirements: [
//         'Experience with AWS, Azure, or GCP',
//         'Proficiency in Docker and Kubernetes',
//         'Knowledge of Infrastructure as Code (Terraform)',
//         'Strong Linux/Unix administration skills',
//       ],
//     },
//     {
//       title: 'UI/UX Designer',
//       department: 'Design',
//       location: 'Bangalore, India',
//       type: 'Full-time',
//       experience: '3+ years',
//       description: 'Create stunning user interfaces and experiences for web and mobile applications.',
//       requirements: [
//         'Strong portfolio showcasing UI/UX work',
//         'Proficiency in Figma, Adobe XD, or Sketch',
//         'Understanding of design systems and patterns',
//         'Experience with user research and testing',
//       ],
//     },
//     {
//       title: 'Product Manager',
//       department: 'Product',
//       location: 'Bangalore, India',
//       type: 'Full-time',
//       experience: '5+ years',
//       description: 'Lead product strategy and roadmap for innovative technology solutions.',
//       requirements: [
//         'Proven track record in product management',
//         'Strong analytical and strategic thinking',
//         'Experience in agile development methodologies',
//         'Excellent communication and stakeholder management',
//       ],
//     },
//   ];

//   const benefits = [
//     { icon: '💰', title: 'Competitive Salary', description: 'Industry-leading compensation packages' },
//     { icon: '🏥', title: 'Health Insurance', description: 'Comprehensive medical coverage' },
//     { icon: '🏖️', title: 'Flexible Time Off', description: 'Generous vacation and leave policy' },
//     { icon: '🏠', title: 'Remote Work', description: 'Flexible work-from-home options' },
//     { icon: '📚', title: 'Learning Budget', description: 'Annual allowance for courses and conferences' },
//     { icon: '🚀', title: 'Career Growth', description: 'Clear paths for advancement' },
//     { icon: '🎮', title: 'Fun Culture', description: 'Team events and activities' },
//     { icon: '💻', title: 'Latest Tech', description: 'Work with cutting-edge tools' },
//   ];

//   return (
//     <div className="min-h-screen">
//       {/* Hero Section */}
//       <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-gradient-to-br from-[#2563EB] to-[#1E3A8A] overflow-hidden">
//         <div className="absolute inset-0 overflow-hidden">
//           <div className="absolute top-20 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
//           <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#06B6D4]/10 rounded-full blur-3xl"></div>
//         </div>

//         <div className="container mx-auto px-4 lg:px-8 relative z-10">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="text-center max-w-4xl mx-auto"
//           >
//             <h1 className="text-4xl lg:text-6xl text-white mb-6">
//               Grow with COSYNTRA
//             </h1>
//             <p className="text-xl text-blue-100 mb-8">
//               Join our team of innovators building the future of technology
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <Button
//                 onClick={() => {
//                   const positions = document.getElementById('open-positions');
//                   positions?.scrollIntoView({ behavior: 'smooth' });
//                 }}
//                 className="bg-white text-[#2563EB] hover:bg-blue-50"
//               >
//                 View Open Positions
//                 <ArrowRight className="w-4 h-4 ml-2" />
//               </Button>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Why Join Us */}
//       <section className="py-20 bg-white">
//         <div className="container mx-auto px-4 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-3xl lg:text-5xl text-[#1F2937] mb-4">Why Join COSYNTRA?</h2>
//             <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//               We offer more than just a job—we offer a career
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {benefits.map((benefit, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, scale: 0.5 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 viewport={{ once: true }}
//                 transition={{
//                   delay: index * 0.1,
//                   type: "spring",
//                   stiffness: 200,
//                   damping: 15
//                 }}
//                 whileHover={{ scale: 1.05, y: -5 }}
//               >
//                 <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#2563EB]/20 h-full relative overflow-hidden group">
//                   <motion.div
//                     className="absolute inset-0 bg-gradient-to-br from-[#2563EB]/5 to-[#06B6D4]/5"
//                     initial={{ scale: 0 }}
//                     whileHover={{ scale: 1.5 }}
//                     transition={{ duration: 0.4 }}
//                   />
//                   <div className="relative z-10">
//                     <motion.div
//                       className="text-4xl mb-4 inline-block"
//                       animate={{ rotate: [0, 10, -10, 0] }}
//                       transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
//                     >
//                       {benefit.icon}
//                     </motion.div>
//                     <h3 className="text-lg text-[#1F2937] mb-2">{benefit.title}</h3>
//                     <p className="text-sm text-gray-600">{benefit.description}</p>
//                   </div>
//                 </Card>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Culture Gallery */}
//       <section className="py-20 bg-gradient-to-br from-[#F9FAFB] to-white">
//         <div className="container mx-auto px-4 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-3xl lg:text-5xl text-[#1F2937] mb-4">Life at COSYNTRA</h2>
//             <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//               A glimpse into our vibrant work culture
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {[
//               'https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwdGVhbXxlbnwxfHx8fDE3NjA2MTIzNzh8MA&ixlib=rb-4.1.0&q=80&w=1080',
//               'https://images.unsplash.com/photo-1718220216044-006f43e3a9b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNoJTIwb2ZmaWNlJTIwd29ya3NwYWNlfGVufDF8fHx8MTc2MDUzMDc5M3ww&ixlib=rb-4.1.0&q=80&w=1080',
//               'https://images.unsplash.com/photo-1645839078449-124db8a049fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwbmV0d29yayUyMGRpZ2l0YWx8ZW58MXx8fHwxNzYwNTk3NTYzfDA&ixlib=rb-4.1.0&q=80&w=1080',
//             ].map((image, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1 }}
//                 className="relative h-64 rounded-xl overflow-hidden group"
//               >
//                 <ImageWithFallback
//                   src={image}
//                   alt={`Team culture ${index + 1}`}
//                   className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Open Positions */}
//       <section id="open-positions" className="py-20 bg-white">
//         <div className="container mx-auto px-4 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-3xl lg:text-5xl text-[#1F2937] mb-4">Open Positions</h2>
//             <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//               Find your next career opportunity
//             </p>
//           </motion.div>

//           <div className="max-w-5xl mx-auto space-y-6">
//             {positions.map((position, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1 }}
//               >
//                 <Card className="p-6 hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#2563EB]/20">
//                   <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
//                     <div className="flex-1">
//                       <div className="flex flex-wrap items-center gap-2 mb-3">
//                         <h3 className="text-2xl text-[#1F2937]">{position.title}</h3>
//                         <span className="px-3 py-1 bg-[#2563EB]/10 text-[#2563EB] rounded-full text-sm">
//                           {position.department}
//                         </span>
//                       </div>
                      
//                       <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600">
//                         <div className="flex items-center gap-2">
//                           <MapPin className="w-4 h-4" />
//                           {position.location}
//                         </div>
//                         <div className="flex items-center gap-2">
//                           <Clock className="w-4 h-4" />
//                           {position.type}
//                         </div>
//                         <div className="flex items-center gap-2">
//                           <Briefcase className="w-4 h-4" />
//                           {position.experience}
//                         </div>
//                       </div>

//                       <p className="text-gray-600 mb-4">{position.description}</p>

//                       <div>
//                         <h4 className="text-sm text-[#1F2937] mb-2">Key Requirements:</h4>
//                         <ul className="space-y-1">
//                           {position.requirements.map((req, i) => (
//                             <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
//                               <div className="w-1.5 h-1.5 rounded-full bg-[#2563EB] mt-1.5"></div>
//                               {req}
//                             </li>
//                           ))}
//                         </ul>
//                       </div>
//                     </div>

//                     <div className="flex flex-col gap-3 lg:min-w-[160px]">
//                       <Button className="bg-gradient-to-r from-[#2563EB] to-[#1E3A8A] w-full">
//                         Apply Now
//                       </Button>
//                       <Button variant="outline" className="border-2 border-[#2563EB] text-[#2563EB] w-full">
//                         Learn More
//                       </Button>
//                     </div>
//                   </div>
//                 </Card>
//               </motion.div>
//             ))}
//           </div>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center mt-12"
//           >
//             <p className="text-gray-600 mb-4">
//               Don't see a role that fits? We're always looking for talented individuals.
//             </p>
//             <Button
//               onClick={() => onNavigate('contact')}
//               variant="outline"
//               className="border-2 border-[#2563EB] text-[#2563EB]"
//             >
//               Send Your CV
//               <ArrowRight className="w-4 h-4 ml-2" />
//             </Button>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// }


// import { useState, useRef } from 'react';
// import { motion } from 'motion/react';
// import { MapPin, Clock, Briefcase, ArrowRight, X } from 'lucide-react';
// import { Card } from '../ui/card';
// import { Button } from '../ui/button';

// interface CareersPageProps {
//   onNavigate: (page: string) => void;
// }

// export function CareersPage({ onNavigate }: CareersPageProps) {
//   const [showForm, setShowForm] = useState(false);
//   const [selectedJob, setSelectedJob] = useState<string | null>(null);
//   const formRef = useRef<HTMLFormElement>(null);

//   // ---------- Job Positions ----------
//   const positions = [
//     {
//       title: 'Senior Full Stack Developer',
//       department: 'Engineering',
//       location: 'Bangalore, India',
//       type: 'Full-time',
//       experience: '5+ years',
//       description:
//         'We are looking for an experienced full stack developer to build scalable web applications using React, Node.js, and cloud technologies.',
//       requirements: [
//         'Strong experience with React and Node.js',
//         'Proficiency in TypeScript and modern JavaScript',
//         'Experience with cloud platforms (AWS/Azure)',
//         'Knowledge of microservices architecture',
//       ],
//     },
//     {
//       title: 'AI/ML Engineer',
//       department: 'AI & Data Science',
//       location: 'Bangalore, India',
//       type: 'Full-time',
//       experience: '3+ years',
//       description:
//         'Join our AI team to develop cutting-edge machine learning solutions using Python, TensorFlow, and PyTorch.',
//       requirements: [
//         'Strong background in ML algorithms and deep learning',
//         'Experience with TensorFlow, PyTorch, or similar',
//         'Proficiency in Python and data science libraries',
//         'Understanding of MLOps and model deployment',
//       ],
//     },
//     {
//       title: 'Mobile App Developer',
//       department: 'Engineering',
//       location: 'Remote',
//       type: 'Full-time',
//       experience: '3+ years',
//       description:
//         'Build beautiful, high-performance mobile applications using React Native or Flutter for iOS and Android.',
//       requirements: [
//         'Experience with React Native or Flutter',
//         'Knowledge of native iOS/Android development',
//         'Strong understanding of mobile UI/UX principles',
//         'Experience with app store deployment',
//       ],
//     },
//   ];

//   // ---------- Company Benefits ----------
//   const benefits = [
//     { icon: '💰', title: 'Competitive Salary', description: 'Industry-leading compensation packages' },
//     { icon: '🏥', title: 'Health Insurance', description: 'Comprehensive medical coverage' },
//     { icon: '🏖️', title: 'Flexible Time Off', description: 'Generous vacation and leave policy' },
//     { icon: '🏠', title: 'Remote Work', description: 'Flexible work-from-home options' },
//     { icon: '📚', title: 'Learning Budget', description: 'Annual allowance for courses and conferences' },
//     { icon: '🚀', title: 'Career Growth', description: 'Clear paths for advancement' },
//     { icon: '🎮', title: 'Fun Culture', description: 'Team events and activities' },
//     { icon: '💻', title: 'Latest Tech', description: 'Work with cutting-edge tools' },
//   ];

//   // ---------- Handle Form Submission to Google Sheet ----------
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!formRef.current) return;

//     const formData = new FormData(formRef.current);
//     const file = formData.get('cv') as File;

//     if (!file) return alert('Please upload your CV.');

//     const reader = new FileReader();
//     reader.onload = async () => {
//       const payload = {
//         name: formData.get('name'),
//         email: formData.get('email'),
//         phone: formData.get('phone'),
//         jobTitle: formData.get('jobTitle'),
//         cv: reader.result, // Base64 string
//         cvName: file.name,
//         cvType: file.type,
//       };

//       try {
//         const response = await fetch(
//           'https://script.google.com/macros/s/AKfycbyefRZ07ydnlJc0ef_FmUZ977BZ7zyNxLuRJsgDYqhE9s8OvcTEcyB8FLOtk4-1uaf8/exec',
//           {
//             method: 'POST',
//             body: JSON.stringify(payload),
//           }
//         );

//         const result = await response.json();
//         if (result.result === 'success') {
//           alert('Application submitted successfully!');
//           setShowForm(false);
//           formRef.current?.reset();
//         } else {
//           console.error(result.error);
//           alert('Failed to submit application. Please try again.');
//         }
//       } catch (err) {
//         console.error(err);
//         alert('Failed to submit application. Please try again.');
//       }
//     };

//     reader.readAsDataURL(file);
//   };

//   return (
//     <div className="min-h-screen relative">
//       {/* ---------- Hero Section ---------- */}
//       <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-gradient-to-br from-[#2563EB] to-[#1E3A8A] overflow-hidden">
//         <div className="absolute inset-0 overflow-hidden">
//           <div className="absolute top-20 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
//           <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#06B6D4]/10 rounded-full blur-3xl"></div>
//         </div>

//         <div className="container mx-auto px-4 lg:px-8 relative z-10">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="text-center max-w-4xl mx-auto"
//           >
//             <h1 className="text-4xl lg:text-6xl text-white mb-6">Grow with COSYNTRA</h1>
//             <p className="text-xl text-blue-100 mb-8">
//               Join our team of innovators building the future of technology
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <Button
//                 onClick={() => {
//                   const positionsEl = document.getElementById('open-positions');
//                   positionsEl?.scrollIntoView({ behavior: 'smooth' });
//                 }}
//                 className="bg-white text-[#2563EB] hover:bg-blue-50"
//               >
//                 View Open Positions
//                 <ArrowRight className="w-4 h-4 ml-2" />
//               </Button>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* ---------- Why Join Us Section ---------- */}
//       <section className="py-20 bg-white">
//         <div className="container mx-auto px-4 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-3xl lg:text-5xl text-[#1F2937] mb-4">Why Join COSYNTRA?</h2>
//             <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//               We offer more than just a job—we offer a career
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {benefits.map((benefit, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, scale: 0.5 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1, type: 'spring', stiffness: 200, damping: 15 }}
//                 whileHover={{ scale: 1.05, y: -5 }}
//               >
//                 <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#2563EB]/20 h-full relative overflow-hidden group">
//                   <div className="relative z-10">
//                     <motion.div
//                       className="text-4xl mb-4 inline-block"
//                       animate={{ rotate: [0, 10, -10, 0] }}
//                       transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
//                     >
//                       {benefit.icon}
//                     </motion.div>
//                     <h3 className="text-lg text-[#1F2937] mb-2">{benefit.title}</h3>
//                     <p className="text-sm text-gray-600">{benefit.description}</p>
//                   </div>
//                 </Card>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ---------- Open Positions Section ---------- */}
//       <section id="open-positions" className="py-20 bg-white">
//         <div className="container mx-auto px-4 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-3xl lg:text-5xl text-[#1F2937] mb-4">Open Positions</h2>
//             <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//               Find your next career opportunity
//             </p>
//           </motion.div>

//           <div className="max-w-5xl mx-auto space-y-6">
//             {positions.map((position, index) => (
//               <Card
//                 key={index}
//                 className="p-6 hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#2563EB]/20"
//               >
//                 <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
//                   <div className="flex-1">
//                     <div className="flex flex-wrap items-center gap-2 mb-3">
//                       <h3 className="text-2xl text-[#1F2937]">{position.title}</h3>
//                       <span className="px-3 py-1 bg-[#2563EB]/10 text-[#2563EB] rounded-full text-sm">
//                         {position.department}
//                       </span>
//                     </div>

//                     <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600">
//                       <div className="flex items-center gap-2">
//                         <MapPin className="w-4 h-4" />
//                         {position.location}
//                       </div>
//                       <div className="flex items-center gap-2">
//                         <Clock className="w-4 h-4" />
//                         {position.type}
//                       </div>
//                       <div className="flex items-center gap-2">
//                         <Briefcase className="w-4 h-4" />
//                         {position.experience}
//                       </div>
//                     </div>

//                     <p className="text-gray-600 mb-4">{position.description}</p>
//                     <h4 className="text-sm text-[#1F2937] mb-2">Key Requirements:</h4>
//                     <ul className="space-y-1">
//                       {position.requirements.map((req, i) => (
//                         <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
//                           <div className="w-1.5 h-1.5 rounded-full bg-[#2563EB] mt-1.5"></div>
//                           {req}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>

//                   {/* Apply Now Button */}
//                   <div className="flex flex-col gap-3 lg:min-w-[160px]">
//                     <Button
//                       className="bg-gradient-to-r from-[#2563EB] to-[#1E3A8A] w-full"
//                       onClick={() => {
//                         setSelectedJob(position.title);
//                         setShowForm(true);
//                       }}
//                     >
//                       Apply Now
//                     </Button>
//                     <Button
//                       variant="outline"
//                       className="border-2 border-[#2563EB] text-[#2563EB] w-full"
//                     >
//                       Learn More
//                     </Button>
//                   </div>
//                 </div>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ---------- Application Form Modal ---------- */}
//       {showForm && (
//         <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 p-4">
//           <motion.div
//             initial={{ scale: 0 }}
//             animate={{ scale: 1 }}
//             exit={{ scale: 0 }}
//             className="bg-white rounded-xl max-w-lg w-full p-6 relative"
//           >
//             <button
//               className="absolute top-4 right-4"
//               onClick={() => setShowForm(false)}
//             >
//               <X className="w-6 h-6" />
//             </button>
//             <h2 className="text-2xl font-semibold mb-4 text-[#1F2937]">
//               Apply for {selectedJob}
//             </h2>
//             <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
//               <input type="hidden" name="jobTitle" value={selectedJob || ''} />
//               <div>
//                 <label className="block text-sm text-gray-700 mb-1">Full Name</label>
//                 <input type="text" name="name" required className="w-full border rounded px-3 py-2" />
//               </div>
//               <div>
//                 <label className="block text-sm text-gray-700 mb-1">Email</label>
//                 <input type="email" name="email" required className="w-full border rounded px-3 py-2" />
//               </div>
//               <div>
//                 <label className="block text-sm text-gray-700 mb-1">Phone</label>
//                 <input type="text" name="phone" required className="w-full border rounded px-3 py-2" />
//               </div>
//               <div>
//                 <label className="block text-sm text-gray-700 mb-1">Upload CV</label>
//                 <input type="file" name="cv" required className="w-full border rounded px-3 py-2" />
//               </div>
//               <Button type="submit" className="w-full bg-[#2563EB] text-white">
//                 Submit Application
//               </Button>
//             </form>
//           </motion.div>
//         </div>
//       )}
//     </div>
//   );
// }


import { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { MapPin, Clock, Briefcase, ArrowRight, X, Loader2, CheckCircle2 } from 'lucide-react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';

interface CareersPageProps {
  onNavigate: (page: string) => void;
}

export function CareersPage({ onNavigate }: CareersPageProps) {
  const [showForm, setShowForm] = useState(false);
  const [selectedJob, setSelectedJob] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  // ---------- Job Positions ----------
  const positions = [
    {
      title: 'Senior Full Stack Developer',
      department: 'Engineering',
      location: 'Bangalore, India',
      type: 'Full-time',
      experience: '5+ years',
      description:
        'We are looking for an experienced full stack developer to build scalable web applications using React, Node.js, and cloud technologies.',
      requirements: [
        'Strong experience with React and Node.js',
        'Proficiency in TypeScript and modern JavaScript',
        'Experience with cloud platforms (AWS/Azure)',
        'Knowledge of microservices architecture',
      ],
    },
    {
      title: 'AI/ML Engineer',
      department: 'AI & Data Science',
      location: 'Bangalore, India',
      type: 'Full-time',
      experience: '3+ years',
      description:
        'Join our AI team to develop cutting-edge machine learning solutions using Python, TensorFlow, and PyTorch.',
      requirements: [
        'Strong background in ML algorithms and deep learning',
        'Experience with TensorFlow, PyTorch, or similar',
        'Proficiency in Python and data science libraries',
        'Understanding of MLOps and model deployment',
      ],
    },
    {
      title: 'Mobile App Developer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      experience: '3+ years',
      description:
        'Build beautiful, high-performance mobile applications using React Native or Flutter for iOS and Android.',
      requirements: [
        'Experience with React Native or Flutter',
        'Knowledge of native iOS/Android development',
        'Strong understanding of mobile UI/UX principles',
        'Experience with app store deployment',
      ],
    },
  ];

  // ---------- Company Benefits ----------
  const benefits = [
    { icon: '💰', title: 'Competitive Salary', description: 'Industry-leading compensation packages' },
    { icon: '🏥', title: 'Health Insurance', description: 'Comprehensive medical coverage' },
    { icon: '🏖️', title: 'Flexible Time Off', description: 'Generous vacation and leave policy' },
    { icon: '🏠', title: 'Remote Work', description: 'Flexible work-from-home options' },
    { icon: '📚', title: 'Learning Budget', description: 'Annual allowance for courses and conferences' },
    { icon: '🚀', title: 'Career Growth', description: 'Clear paths for advancement' },
    { icon: '🎮', title: 'Fun Culture', description: 'Team events and activities' },
    { icon: '💻', title: 'Latest Tech', description: 'Work with cutting-edge tools' },
  ];

  // ---------- Handle Form Submission ----------
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setLoading(true);
    setSubmitted(false);

    const formData = new FormData(formRef.current);
    const file = formData.get('cv') as File;

    if (!file) {
      alert('Please upload your CV.');
      setLoading(false);
      return;
    }

    const reader = new FileReader();
    reader.onload = async () => {
      const payload = {
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        jobTitle: formData.get('jobTitle'),
        cv: reader.result,
        cvName: file.name,
        cvType: file.type,
      };

      try {
        const response = await fetch(
          'https://script.google.com/macros/s/AKfycbyefRZ07ydnlJc0ef_FmUZ977BZ7zyNxLuRJsgDYqhE9s8OvcTEcyB8FLOtk4-1uaf8/exec',
          {
            method: 'POST',
            body: JSON.stringify(payload),
          }
        );

        const result = await response.json();
        if (result.result === 'success') {
          setSubmitted(true);
          formRef.current?.reset();
        } else {
          console.error(result.error);
          alert('Failed to submit application. Please try again.');
        }
      } catch (err) {
        console.error(err);
        alert('Failed to submit application. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    reader.readAsDataURL(file);
  };

  return (
    <div className="min-h-screen relative">
      {/* ---------- Hero Section ---------- */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-gradient-to-br from-[#2563EB] to-[#1E3A8A] overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#06B6D4]/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl lg:text-6xl text-white mb-6">Grow with COSYNTRA</h1>
            <p className="text-xl text-blue-100 mb-8">
              Join our team of innovators building the future of technology
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => {
                  const positionsEl = document.getElementById('open-positions');
                  positionsEl?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-white text-[#2563EB] hover:bg-blue-50 cursor-pointer"
              >
                View Open Positions
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ---------- Why Join Us ---------- */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl text-[#1F2937] mb-4">Why Join COSYNTRA?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We offer more than just a job—we offer a career
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: 'spring', stiffness: 200, damping: 15 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#2563EB]/20 h-full relative overflow-hidden group">
                  <div className="relative z-10">
                    <motion.div
                      className="text-4xl mb-4 inline-block"
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                    >
                      {benefit.icon}
                    </motion.div>
                    <h3 className="text-lg text-[#1F2937] mb-2">{benefit.title}</h3>
                    <p className="text-sm text-gray-600">{benefit.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Open Positions ---------- */}
      <section id="open-positions" className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl text-[#1F2937] mb-4">Open Positions</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find your next career opportunity
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto space-y-6">
            {positions.map((position, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#2563EB]/20"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <h3 className="text-2xl text-[#1F2937]">{position.title}</h3>
                      <span className="px-3 py-1 bg-[#2563EB]/10 text-[#2563EB] rounded-full text-sm">
                        {position.department}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {position.location}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {position.type}
                      </div>
                      <div className="flex items-center gap-2">
                        <Briefcase className="w-4 h-4" />
                        {position.experience}
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4">{position.description}</p>
                    <h4 className="text-sm text-[#1F2937] mb-2">Key Requirements:</h4>
                    <ul className="space-y-1">
                      {position.requirements.map((req, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#2563EB] mt-1.5"></div>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Apply Now Button */}
                  <div className="flex flex-col gap-3 lg:min-w-[160px]">
                    <Button
                      className="bg-gradient-to-r from-[#2563EB] to-[#1E3A8A] w-full cursor-pointer"
                      onClick={() => {
                        setSelectedJob(position.title);
                        setShowForm(true);
                        setSubmitted(false);
                      }}
                    >
                      Apply Now
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Application Form Modal ---------- */}
      {showForm && (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50 p-4">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-white rounded-2xl max-w-lg w-full p-8 shadow-2xl relative"
          >
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              onClick={() => setShowForm(false)}
            >
              <X className="w-6 h-6" />
            </button>

            {!submitted ? (
              <>
                <h2 className="text-2xl font-semibold mb-6 text-[#1F2937] text-center">
                  Apply for {selectedJob}
                </h2>
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                  <input type="hidden" name="jobTitle" value={selectedJob || ''} />

                  <div>
                    <label className="block text-sm text-gray-700 mb-1">Full Name</label>
                    <input type="text" name="name" required className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#2563EB] outline-none" />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-700 mb-1">Email</label>
                    <input type="email" name="email" required className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#2563EB] outline-none" />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-700 mb-1">Phone</label>
                    <input type="text" name="phone" required className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#2563EB] outline-none" />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-700 mb-1">Upload CV</label>
                    <input type="file" name="cv" required className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#2563EB] outline-none" />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#2563EB] to-[#1E3A8A] text-white py-2 flex justify-center items-center cursor-pointer"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      'Submit Application'
                    )}
                  </Button>
                </form>
              </>
            ) : (
              <div className="flex flex-col items-center justify-center py-10 text-center">
                <CheckCircle2 className="w-16 h-16 text-green-500 mb-4" />
                <h3 className="text-2xl font-semibold text-[#1F2937] mb-2">Application Sent!</h3>
                <p className="text-gray-600 mb-6">Thank you for applying. Our team will reach out soon.</p>
                <Button
                  onClick={() => setShowForm(false)}
                  className="bg-[#2563EB] text-white px-6"
                >
                  Close
                </Button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </div>
  );
}
