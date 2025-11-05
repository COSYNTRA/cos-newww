import { motion, useScroll, useTransform } from 'motion/react';
import { Target, Eye, Heart, Linkedin, ArrowRight } from 'lucide-react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { useRef } from 'react';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export function AboutPage({ onNavigate }: AboutPageProps) {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const values = [
    {
      icon: Target,
      title: 'Mission',
      description: 'To empower businesses with innovative technology solutions that drive growth, efficiency, and digital transformation.',
    },
    {
      icon: Eye,
      title: 'Vision',
      description: 'To be the most trusted technology partner for businesses seeking excellence in digital innovation.',
    },
    {
      icon: Heart,
      title: 'Values',
      description: 'Innovation, integrity, collaboration, and customer-centricity guide everything we do.',
    },
  ];

  const milestones = [
    { year: '2020', event: 'COSYNTRA Founded', description: 'Started with a vision to transform businesses' },
    { year: '2021', event: '10 Projects Delivered', description: 'Expanded team and client base' },
    { year: '2022', event: 'AI/ML Division Launched', description: 'Entered emerging technology space' },
    { year: '2023', event: '50+ Happy Clients', description: 'Achieved significant growth milestone' },
    { year: '2024', event: 'International Expansion', description: 'Serving clients across 5 countries' },
    { year: '2025', event: 'Innovation Hub Opened', description: 'R&D facility for cutting-edge solutions' },
  ];

  const team = [
    {
      name: 'Dipayan Paul',
      role: 'CEO & Founder',
      image: '/dipayanCEO.jpg',
      linkedin: 'https://www.linkedin.com/in/dipayan-paul-bb2b71aa/',
    },
    {
      name: 'Supratim Das',
      role: 'CTO & Co-Founder',
      image: 'SupratimCTO.png',
      linkedin: 'https://www.linkedin.com/in/supratim-das-63b847171',
    },
    {
      name: 'Sanu Biswas',
      role: 'CMO & Co-Founder',
      image: '/SanuCMO.jpg',
      linkedin: 'https://www.linkedin.com/in/sanu-biswas-3b464b2a5',
      Target: '_blank'
    },
    {
      name: 'Sampad Majumdar',
      role: 'COO & Co-Founder',
      image: 'Sampad COO.jpg',
      linkedin: 'https://www.linkedin.com/in/s-majumder-bba083214',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-gradient-to-br from-[#2563EB] to-[#1E3A8A] overflow-hidden">
        <motion.div
          style={{ y, opacity }}
          className="absolute inset-0 overflow-hidden"
        >
          <motion.div
            animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-20 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ scale: [1, 1.3, 1], rotate: [0, -90, 0] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-20 left-20 w-96 h-96 bg-[#06B6D4]/10 rounded-full blur-3xl"
          />
        </motion.div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl lg:text-6xl text-white mb-6"
            >
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="inline-block"
              >
                Our Story.{' '}
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="inline-block"
              >
                Our Vision.{' '}
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
                className="inline-block"
              >
                Our Innovation.
              </motion.span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="text-xl text-blue-100"
            >
              Building the future of technology, one solution at a time
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateX: -90 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <Card className="p-8 h-full text-center hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[#2563EB]/20 relative overflow-hidden">
                  {/* Animated background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-[#2563EB]/5 to-[#06B6D4]/5"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1.5, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="relative z-10">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className="w-16 h-16 rounded-full bg-gradient-to-br from-[#2563EB] to-[#1E3A8A] flex items-center justify-center mx-auto mb-6"
                    >
                      <item.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <h3 className="text-2xl text-[#1F2937] mb-4">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gradient-to-br from-[#F9FAFB] to-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl text-[#1F2937] mb-4">Our Journey</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Key milestones in COSYNTRA's growth story
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-8 pb-12 border-l-2 border-[#2563EB]/30 last:pb-0"
              >
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-[#2563EB] border-4 border-white"></div>
                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-[#2563EB] mb-2">{milestone.year}</div>
                  <h3 className="text-xl text-[#1F2937] mb-2">{milestone.event}</h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl text-[#1F2937] mb-4">Leadership Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Meet the visionaries behind COSYNTRA
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  <div className="relative h-64 overflow-hidden">
                    <ImageWithFallback
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                      {/* <a
                        href={member.linkedin}
                        className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:scale-110 transition-transform"
                      >
                        <Linkedin className="w-5 h-5 text-[#2563EB]" />
                      </a> */}
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:scale-110 transition-transform"
                      >
                        <Linkedin className="w-5 h-5 text-[#2563EB]" />
                      </a>
                    </div>
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl text-[#1F2937] mb-1">{member.name}</h3>
                    <p className="text-[#2563EB]">{member.role}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#F9FAFB] to-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#2563EB] to-[#1E3A8A] rounded-3xl p-12 lg:p-16 text-center"
          >
            <h2 className="text-3xl lg:text-5xl text-white mb-4">
              Join Our Journey
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals to join our team
            </p>
            <Button
              onClick={() => onNavigate('careers')}
              className="bg-white text-[#2563EB] hover:bg-blue-50 cursor-pointer"
            >
              View Open Positions
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
