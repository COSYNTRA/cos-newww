import { motion } from 'motion/react';
import { Heart, GraduationCap, Wallet, Home, Factory, ShoppingCart, ArrowRight } from 'lucide-react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';

interface IndustriesPageProps {
  onNavigate: (page: string) => void;
}

export function IndustriesPage({ onNavigate }: IndustriesPageProps) {
  const industries = [
    {
      icon: Heart,
      title: 'Healthcare',
      description: 'Transforming patient care with intelligent health management systems and telemedicine platforms.',
      gradient: 'from-[#2563EB] to-[#06B6D4]',
      solutions: [
        'Electronic Health Records (EHR)',
        'Telemedicine platforms',
        'AI-powered diagnostics',
        'Patient management systems',
      ],
      caseStudy: 'Built a comprehensive telehealth platform serving 50,000+ patients with 99.9% uptime',
    },
    {
      icon: GraduationCap,
      title: 'Education',
      description: 'Empowering learning through digital platforms, LMS solutions, and interactive educational tools.',
      gradient: 'from-[#F97316] to-[#2563EB]',
      solutions: [
        'Learning Management Systems',
        'Virtual classrooms',
        'Educational mobile apps',
        'Assessment & analytics',
      ],
      caseStudy: 'Developed an e-learning platform with 100K+ active learners and AI-powered personalization',
    },
    {
      icon: Wallet,
      title: 'Fintech',
      description: 'Secure, scalable financial technology solutions for banking, payments, and wealth management.',
      gradient: 'from-[#2563EB] to-[#1E3A8A]',
      solutions: [
        'Digital banking platforms',
        'Payment gateways',
        'Blockchain solutions',
        'Fraud detection systems',
      ],
      caseStudy: 'Created a digital wallet processing 10M+ transactions monthly with bank-grade security',
    },
    {
      icon: Home,
      title: 'Real Estate',
      description: 'Innovative property management and real estate marketplace solutions.',
      gradient: 'from-[#06B6D4] to-[#2563EB]',
      solutions: [
        'Property listing platforms',
        'Virtual tours & 3D visualization',
        'CRM for real estate',
        'Smart building management',
      ],
      caseStudy: 'Built a PropTech platform connecting 10K+ buyers with sellers through AI matching',
    },
    {
      icon: Factory,
      title: 'Manufacturing',
      description: 'Smart factory solutions, IoT integration, and supply chain optimization.',
      gradient: 'from-[#1E3A8A] to-[#F97316]',
      solutions: [
        'IoT-enabled factory monitoring',
        'Predictive maintenance',
        'Supply chain management',
        'Quality control systems',
      ],
      caseStudy: 'Implemented IoT solution reducing downtime by 40% for a major manufacturer',
    },
    {
      icon: ShoppingCart,
      title: 'Retail & eCommerce',
      description: 'Next-generation shopping experiences with AI-powered recommendations and omnichannel solutions.',
      gradient: 'from-[#F97316] to-[#06B6D4]',
      solutions: [
        'eCommerce platforms',
        'Inventory management',
        'AI recommendation engines',
        'Omnichannel retail solutions',
      ],
      caseStudy: 'Launched an e-commerce platform achieving $5M GMV in first year',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
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
            <h1 className="text-4xl lg:text-6xl text-white mb-6">
              Industries We Serve
            </h1>
            <p className="text-xl text-blue-100">
              Delivering specialized technology solutions across diverse sectors
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-8 h-full hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#2563EB]/20 group">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${industry.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <industry.icon className="w-8 h-8 text-white" />
                  </div>

                  <h2 className="text-2xl text-[#1F2937] mb-3">{industry.title}</h2>
                  <p className="text-gray-600 mb-6">{industry.description}</p>

                  <div className="mb-6">
                    <h3 className="text-lg text-[#1F2937] mb-3">Our Solutions</h3>
                    <ul className="space-y-2">
                      {industry.solutions.map((solution, i) => (
                        <li key={i} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#2563EB]"></div>
                          <span className="text-gray-600 text-sm">{solution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gradient-to-r from-[#2563EB]/5 to-[#06B6D4]/5 rounded-lg p-4 mb-4">
                    <p className="text-sm text-gray-700 italic">
                      <span className="text-[#2563EB]">Case Study:</span> {industry.caseStudy}
                    </p>
                  </div>

                  <Button
                    onClick={() => onNavigate('portfolio')}
                    variant="ghost"
                    className="text-[#2563EB] hover:text-[#1E3A8A] p-0 cursor-pointer"
                  >
                    View Related Projects
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-[#F9FAFB] to-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl text-[#1F2937] mb-4">Our Impact Across Industries</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: '6+', label: 'Industries Served' },
              { number: '50+', label: 'Projects Delivered' },
              { number: '30+', label: 'Enterprise Clients' },
              { number: '1M+', label: 'End Users Impacted' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl text-[#2563EB] mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#2563EB] to-[#1E3A8A] rounded-3xl p-12 lg:p-16 text-center"
          >
            <h2 className="text-3xl lg:text-5xl text-white mb-4">
              Don't See Your Industry?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              We work with businesses across all sectors. Let's discuss your unique requirements.
            </p>
            <Button
              onClick={() => onNavigate('contact')}
              className="bg-white text-[#2563EB] hover:bg-blue-50 cursor-pointer"
            >
              Discuss Your Project
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
