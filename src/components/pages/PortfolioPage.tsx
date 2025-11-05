import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, X, ExternalLink, Award, Users, TrendingUp, CheckCircle2 } from 'lucide-react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { useState } from 'react';
import { Badge } from '../ui/badge';

interface PortfolioPageProps {
  onNavigate: (page: string) => void;
}

export function PortfolioPage({ onNavigate }: PortfolioPageProps) {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Healthcare', 'Fintech', 'Education', 'IoT', 'AI/ML', 'Retail'];

  const projects = [
    {
      title: 'HealthCare Management Platform',
      category: 'Healthcare',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjA1NDg0OTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'AI-powered patient management system with telemedicine capabilities',
      problem: 'A healthcare provider needed to digitize patient records and enable remote consultations while ensuring HIPAA compliance and data security.',
      solution: 'We built a comprehensive platform with EHR integration, video consultations, AI-powered triage, and secure messaging. The system handles 50,000+ patients with real-time appointment scheduling.',
      result: '40% increase in patient engagement, 60% reduction in administrative time, 99.9% uptime',
      techStack: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'TensorFlow'],
      metrics: [
        { label: 'Patients Served', value: '50K+' },
        { label: 'Uptime', value: '99.9%' },
        { label: 'Time Saved', value: '60%' },
      ],
      testimonial: {
        text: 'COSYNTRA transformed our healthcare delivery. The platform is intuitive, secure, and has significantly improved patient satisfaction.',
        author: 'Dr. Rajesh Kumar',
        position: 'Chief Medical Officer'
      },
      duration: '8 months',
      teamSize: '12 professionals',
      deliverables: ['Web Platform', 'Mobile Apps (iOS/Android)', 'Admin Dashboard', 'API Integration', 'Training & Support']
    },
    {
      title: 'E-Commerce Platform',
      category: 'Retail',
      image: 'https://images.unsplash.com/photo-1633250391894-397930e3f5f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3NjA1OTczMjV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Scalable multi-vendor marketplace with AI recommendations',
      problem: 'A retail startup needed a robust e-commerce platform that could handle millions of SKUs, support multiple vendors, and provide personalized shopping experiences.',
      solution: 'We developed a cloud-native platform with microservices architecture, AI-powered product recommendations, real-time inventory management, and seamless payment integration.',
      result: '10M+ transactions monthly, $5M GMV in first year, 4.8/5 customer rating',
      techStack: ['React Native', 'Python', 'MongoDB', 'Redis', 'Stripe'],
      metrics: [
        { label: 'Transactions', value: '10M+/mo' },
        { label: 'GMV Year 1', value: '$5M' },
        { label: 'Rating', value: '4.8/5' },
      ],
      testimonial: {
        text: 'The platform exceeded our expectations. The AI recommendations alone increased our conversion rate by 35%.',
        author: 'Priya Sharma',
        position: 'CEO, ShopNow'
      },
      duration: '10 months',
      teamSize: '15 professionals',
      deliverables: ['E-commerce Platform', 'Vendor Portal', 'Mobile Apps', 'Payment Gateway', 'Analytics Dashboard']
    },
    {
      title: 'Smart City IoT Platform',
      category: 'IoT',
      image: '/IOT.jpg',
      description: 'Integrated IoT ecosystem for urban infrastructure management',
      problem: 'A municipal corporation wanted to optimize city services including traffic management, waste collection, and energy distribution through IoT sensors and real-time analytics.',
      solution: 'We created an integrated IoT platform connecting 10,000+ sensors across the city, with real-time dashboards, predictive analytics, and automated alerts for city administrators.',
      result: '30% reduction in energy costs, 25% improvement in traffic flow, 50% faster emergency response',
      techStack: ['Azure IoT', 'LoRaWAN', 'Python', 'Power BI', 'Docker'],
      metrics: [
        { label: 'Connected Devices', value: '10K+' },
        { label: 'Energy Saved', value: '30%' },
        { label: 'Traffic Improved', value: '25%' },
      ],
      testimonial: {
        text: 'This IoT solution has revolutionized how we manage city infrastructure. Real-time insights enable proactive decision-making.',
        author: 'Amit Patel',
        position: 'Smart City Director'
      },
      duration: '12 months',
      teamSize: '18 professionals',
      deliverables: ['IoT Platform', 'Sensor Network', 'Control Center Dashboard', 'Mobile Apps', 'Predictive Analytics']
    },
    {
      title: 'EdTech Learning Platform',
      category: 'Education',
      image: 'https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwdGVhbXxlbnwxfHx8fDE3NjA2MTIzNzh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'AI-powered personalized learning management system',
      problem: 'An educational institution needed a comprehensive LMS that could deliver personalized learning paths, track student progress, and facilitate virtual classrooms at scale.',
      solution: 'We built an adaptive learning platform with AI-driven content recommendations, live virtual classrooms, automated assessments, and detailed analytics for educators.',
      result: '100K+ active learners, 85% course completion rate, 40% improvement in test scores',
      techStack: ['Vue.js', 'Django', 'PostgreSQL', 'WebRTC', 'TensorFlow'],
      metrics: [
        { label: 'Active Learners', value: '100K+' },
        { label: 'Completion Rate', value: '85%' },
        { label: 'Score Improvement', value: '+40%' },
      ],
      testimonial: {
        text: 'The personalized learning paths have dramatically improved student engagement and outcomes. A game-changer for education.',
        author: 'Dr. Meera Singh',
        position: 'Dean of Academics'
      },
      duration: '9 months',
      teamSize: '14 professionals',
      deliverables: ['LMS Platform', 'Mobile Apps', 'Virtual Classroom', 'Assessment Engine', 'Analytics Dashboard']
    },
    {
      title: 'Fintech Digital Wallet',
      category: 'Fintech',
      image: 'https://images.unsplash.com/photo-1759752394755-1241472b589d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMGRhdGF8ZW58MXx8fHwxNzYwNTk3Mjc1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Secure mobile payment solution with blockchain integration',
      problem: 'A fintech startup needed a secure, scalable digital wallet solution with support for multiple payment methods, cryptocurrency, and instant P2P transfers.',
      solution: 'We developed a bank-grade secure wallet app with biometric authentication, blockchain integration for crypto, AI-powered fraud detection, and seamless UPI/card integration.',
      result: '1M+ users, 10M+ transactions monthly, 0.001% fraud rate, PCI DSS compliant',
      techStack: ['React Native', 'Node.js', 'Blockchain', 'AWS', 'ML'],
      metrics: [
        { label: 'Active Users', value: '1M+' },
        { label: 'Transactions', value: '10M+/mo' },
        { label: 'Fraud Rate', value: '0.001%' },
      ],
      testimonial: {
        text: 'Security and user experience were paramount. COSYNTRA delivered both flawlessly. Our users trust the platform completely.',
        author: 'Vikram Malhotra',
        position: 'Founder & CEO, PaySecure'
      },
      duration: '11 months',
      teamSize: '16 professionals',
      deliverables: ['Mobile Apps', 'Backend Infrastructure', 'Blockchain Integration', 'Security Audit', 'Compliance Documentation']
    },
    {
      title: 'AI Analytics Dashboard',
      category: 'AI/ML',
      image: 'https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjA1NjEwODl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Real-time business intelligence platform with predictive analytics',
      problem: 'An enterprise client needed to consolidate data from multiple sources and gain predictive insights to drive strategic decisions.',
      solution: 'We created an AI-powered analytics platform with real-time data pipelines, machine learning models for forecasting, and interactive dashboards with natural language queries.',
      result: '50% faster decision-making, 90% prediction accuracy, $2M cost savings in first year',
      techStack: ['Python', 'Apache Spark', 'TensorFlow', 'React', 'AWS'],
      metrics: [
        { label: 'Decision Speed', value: '+50%' },
        { label: 'Accuracy', value: '90%' },
        { label: 'Cost Savings', value: '$2M' },
      ],
      testimonial: {
        text: 'The predictive insights have transformed our business strategy. We now make data-driven decisions with confidence.',
        author: 'Sarah Johnson',
        position: 'Chief Data Officer'
      },
      duration: '7 months',
      teamSize: '10 professionals',
      deliverables: ['Analytics Platform', 'ML Models', 'API Integration', 'Custom Reports', 'Training Program']
    },
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#2563EB] via-[#1E3A8A] to-[#06B6D4]">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#F97316] rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#06B6D4] rounded-full blur-3xl animate-pulse delay-500"></div>
          </div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-block mb-6"
            >
              <Badge className="px-6 py-2 bg-white/20 text-white border-white/30 backdrop-blur-sm">
                <Award className="w-4 h-4 mr-2" />
                50+ Successful Projects Delivered
              </Badge>
            </motion.div>
            
            <h1 className="text-4xl lg:text-6xl text-white mb-6">
              Our Success Stories
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 mb-8">
              Real solutions. Real results. Real impact.
            </p>
            <p className="text-lg text-blue-100/90 max-w-3xl mx-auto">
              Explore how we've helped businesses across industries transform their operations with cutting-edge technology solutions
            </p>
          </motion.div>
        </div>

        {/* Decorative wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-16 text-gray-50" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0 C300,80 900,80 1200,0 L1200,120 L0,120 Z" fill="currentColor"></path>
          </svg>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 -mt-8 relative z-20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100"
          >
            <div className="flex flex-wrap items-center justify-center gap-3">
              <span className="text-gray-600 mr-2">Filter by:</span>
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-2.5 rounded-xl transition-all duration-300 ${
                    activeFilter === category
                      ? 'bg-gradient-to-r from-[#06B6D4] to-[#F97316] text-white shadow-lg shadow-[#06B6D4]/30'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  layout
                  key={project.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{
                    delay: index * 0.05,
                    type: "spring",
                    stiffness: 100,
                    damping: 15
                  }}
                  whileHover={{ y: -12, transition: { duration: 0.3 } }}
                  className="group"
                >
                  <Card
                    className="overflow-hidden h-full flex flex-col cursor-pointer border-2 border-transparent hover:border-[#06B6D4]/30 transition-all duration-500 bg-white/80 backdrop-blur-sm hover:shadow-2xl hover:shadow-[#06B6D4]/20"
                    onClick={() => setSelectedProject(projects.indexOf(project))}
                  >
                    {/* Image Section */}
                    <div className="relative h-64 overflow-hidden">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        className="h-full"
                      >
                        <ImageWithFallback
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                      
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                      
                      {/* Category badge */}
                      <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.05 + 0.2 }}
                        className="absolute top-4 left-4 z-10"
                      >
                        <Badge className="px-4 py-1.5 bg-gradient-to-r from-[#06B6D4] to-[#F97316] text-white border-0 shadow-lg">
                          {project.category}
                        </Badge>
                      </motion.div>

                      {/* View details button overlay */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <motion.div
                          initial={{ scale: 0 }}
                          whileHover={{ scale: 1 }}
                          className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full flex items-center gap-2"
                        >
                          <span className="text-[#2563EB]">View Case Study</span>
                          <ArrowRight className="w-4 h-4 text-[#2563EB]" />
                        </motion.div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-xl text-[#1F2937] mb-3 group-hover:text-[#06B6D4] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 mb-6 flex-1 line-clamp-2">
                        {project.description}
                      </p>

                      {/* Metrics Grid */}
                      <div className="grid grid-cols-3 gap-3 mb-5 pb-5 border-b border-gray-100">
                        {project.metrics.map((metric, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="text-center"
                          >
                            <div className="text-lg text-[#2563EB] mb-1">
                              {metric.value}
                            </div>
                            <div className="text-xs text-gray-500">
                              {metric.label}
                            </div>
                          </motion.div>
                        ))}
                      </div>

                      {/* Tech Stack Preview */}
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.slice(0, 3).map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.techStack.length > 3 && (
                          <span className="px-3 py-1 bg-gray-100 text-gray-500 rounded-lg text-xs">
                            +{project.techStack.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 50 }}
              transition={{ type: "spring", damping: 25 }}
              className="bg-white rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header Image */}
              <div className="relative h-80 overflow-hidden">
                <ImageWithFallback
                  src={projects[selectedProject].image}
                  alt={projects[selectedProject].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
                
                {/* Close button */}
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg z-10"
                >
                  <X className="w-6 h-6 text-gray-700" />
                </motion.button>

                {/* Title overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <Badge className="mb-3 px-4 py-1.5 bg-gradient-to-r from-[#06B6D4] to-[#F97316] border-0">
                    {projects[selectedProject].category}
                  </Badge>
                  <h2 className="text-3xl lg:text-5xl mb-3">
                    {projects[selectedProject].title}
                  </h2>
                  <p className="text-xl text-blue-100">
                    {projects[selectedProject].description}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 lg:p-12">
                {/* Project Info Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                  <div className="bg-gradient-to-br from-[#2563EB]/10 to-[#06B6D4]/10 rounded-2xl p-6 border border-[#06B6D4]/20">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-[#2563EB] to-[#06B6D4] rounded-lg flex items-center justify-center">
                        <Users className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-gray-600">Team Size</span>
                    </div>
                    <div className="text-2xl text-[#1F2937]">
                      {projects[selectedProject].teamSize}
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-[#F97316]/10 to-[#06B6D4]/10 rounded-2xl p-6 border border-[#F97316]/20">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-[#F97316] to-[#06B6D4] rounded-lg flex items-center justify-center">
                        <TrendingUp className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-gray-600">Duration</span>
                    </div>
                    <div className="text-2xl text-[#1F2937]">
                      {projects[selectedProject].duration}
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-[#06B6D4]/10 to-[#2563EB]/10 rounded-2xl p-6 border border-[#2563EB]/20">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-[#06B6D4] to-[#2563EB] rounded-lg flex items-center justify-center">
                        <Award className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-gray-600">Deliverables</span>
                    </div>
                    <div className="text-2xl text-[#1F2937]">
                      {projects[selectedProject].deliverables.length}
                    </div>
                  </div>
                </div>

                {/* Key Metrics */}
                <div className="mb-12">
                  <h3 className="text-2xl text-[#1F2937] mb-6">Key Metrics</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {projects[selectedProject].metrics.map((metric, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-gradient-to-br from-gray-50 to-white border border-gray-100 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow"
                      >
                        <div className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#06B6D4] mb-2">
                          {metric.value}
                        </div>
                        <div className="text-gray-600">
                          {metric.label}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Challenge & Solution */}
                <div className="space-y-8 mb-12">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                  >
                    <h3 className="text-2xl text-[#1F2937] mb-4 flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-[#F97316] to-[#06B6D4] rounded-lg flex items-center justify-center">
                        <span className="text-white">01</span>
                      </div>
                      The Challenge
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed pl-11">
                      {projects[selectedProject].problem}
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <h3 className="text-2xl text-[#1F2937] mb-4 flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-[#2563EB] to-[#06B6D4] rounded-lg flex items-center justify-center">
                        <span className="text-white">02</span>
                      </div>
                      Our Solution
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed pl-11">
                      {projects[selectedProject].solution}
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <h3 className="text-2xl text-[#1F2937] mb-4 flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-[#06B6D4] to-[#F97316] rounded-lg flex items-center justify-center">
                        <span className="text-white">03</span>
                      </div>
                      Results Achieved
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed pl-11">
                      {projects[selectedProject].result}
                    </p>
                  </motion.div>
                </div>

                {/* Deliverables */}
                <div className="mb-12">
                  <h3 className="text-2xl text-[#1F2937] mb-6">Project Deliverables</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {projects[selectedProject].deliverables.map((deliverable, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className="flex items-center gap-3 bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-colors"
                      >
                        <CheckCircle2 className="w-5 h-5 text-[#06B6D4] flex-shrink-0" />
                        <span className="text-gray-700">{deliverable}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Technology Stack */}
                <div className="mb-12">
                  <h3 className="text-2xl text-[#1F2937] mb-6">Technology Stack</h3>
                  <div className="flex flex-wrap gap-3">
                    {projects[selectedProject].techStack.map((tech, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.05 }}
                        className="px-5 py-3 bg-gradient-to-r from-[#2563EB]/10 to-[#06B6D4]/10 text-[#2563EB] rounded-xl border border-[#2563EB]/20 hover:shadow-lg hover:shadow-[#2563EB]/20 transition-shadow"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Client Testimonial */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-gradient-to-br from-[#2563EB] to-[#1E3A8A] rounded-2xl p-8 lg:p-10 text-white mb-8"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="text-6xl text-white/30 leading-none">"</div>
                    <p className="text-xl lg:text-2xl text-white/95 leading-relaxed italic">
                      {projects[selectedProject].testimonial.text}
                    </p>
                  </div>
                  <div className="flex items-center gap-4 pl-12">
                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                      <span className="text-xl">
                        {projects[selectedProject].testimonial.author.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="text-lg text-white">
                        {projects[selectedProject].testimonial.author}
                      </div>
                      <div className="text-blue-200">
                        {projects[selectedProject].testimonial.position}
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    onClick={() => {
                      setSelectedProject(null);
                      onNavigate('contact');
                    }}
                    className="bg-gradient-to-r from-[#2563EB] to-[#1E3A8A] hover:shadow-xl hover:shadow-[#2563EB]/30 transition-all flex-1"
                  >
                    Start Your Project
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSelectedProject(null);
                      onNavigate('services');
                    }}
                    className="border-2 border-[#06B6D4] text-[#06B6D4] hover:bg-[#06B6D4]/5 flex-1"
                  >
                    Explore Services
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-[#2563EB] via-[#1E3A8A] to-[#06B6D4] rounded-3xl p-12 lg:p-20 text-center overflow-hidden"
          >
            {/* Decorative elements */}
            <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#F97316]/20 rounded-full blur-2xl"></div>

            <div className="relative z-10">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring" }}
                className="inline-block mb-6"
              >
                <Badge className="px-6 py-2 bg-white/20 text-white border-white/30 backdrop-blur-sm">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Your Success Story Starts Here
                </Badge>
              </motion.div>

              <h2 className="text-3xl lg:text-5xl text-white mb-6 max-w-3xl mx-auto">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl lg:text-2xl text-blue-100 mb-10 max-w-2xl mx-auto">
                Let's create the next success story together
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    onClick={() => onNavigate('contact')}
                    className="bg-white text-[#2563EB] hover:bg-blue-50 px-8 py-6 text-lg cursor-pointer"
                  >
                    Start Your Project
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    onClick={() => onNavigate('services')}
                    variant="outline"
                    className="border-2 border-white text-black hover:bg-white/10 px-8 py-6 text-lg backdrop-blur-sm cursor-pointer"
                  >
                    View Our Services
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
