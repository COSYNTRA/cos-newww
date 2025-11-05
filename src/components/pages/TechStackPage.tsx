// import { motion } from 'motion/react';

// interface TechStackPageProps {
//   onNavigate: (page: string) => void;
// }

// export function TechStackPage({ onNavigate }: TechStackPageProps) {
//   const techCategories = [
//     {
//       category: 'Frontend',
//       gradient: 'from-[#2563EB] to-[#06B6D4]',
//       technologies: [
//         { name: 'React', logo: '⚛️' },
//         { name: 'Vue.js', logo: '💚' },
//         { name: 'Angular', logo: '🅰️' },
//         { name: 'Next.js', logo: '▲' },
//         { name: 'TypeScript', logo: '📘' },
//         { name: 'Tailwind CSS', logo: '🎨' },
//       ],
//     },
//     {
//       category: 'Backend',
//       gradient: 'from-[#1E3A8A] to-[#2563EB]',
//       technologies: [
//         { name: 'Node.js', logo: '🟢' },
//         { name: 'Python', logo: '🐍' },
//         { name: 'Django', logo: '🎸' },
//         { name: 'FastAPI', logo: '⚡' },
//         { name: 'Java Spring', logo: '🍃' },
//         { name: '.NET Core', logo: '🔷' },
//       ],
//     },
//     {
//       category: 'Mobile',
//       gradient: 'from-[#F97316] to-[#2563EB]',
//       technologies: [
//         { name: 'React Native', logo: '📱' },
//         { name: 'Flutter', logo: '🦋' },
//         { name: 'Swift', logo: '🍎' },
//         { name: 'Kotlin', logo: '🤖' },
//         { name: 'Ionic', logo: '⚡' },
//         { name: 'Expo', logo: '🚀' },
//       ],
//     },
//     {
//       category: 'Cloud & DevOps',
//       gradient: 'from-[#06B6D4] to-[#2563EB]',
//       technologies: [
//         { name: 'AWS', logo: '☁️' },
//         { name: 'Azure', logo: '🔵' },
//         { name: 'Google Cloud', logo: '🌐' },
//         { name: 'Docker', logo: '🐳' },
//         { name: 'Kubernetes', logo: '☸️' },
//         { name: 'Terraform', logo: '🏗️' },
//       ],
//     },
//     {
//       category: 'Databases',
//       gradient: 'from-[#2563EB] to-[#1E3A8A]',
//       technologies: [
//         { name: 'PostgreSQL', logo: '🐘' },
//         { name: 'MongoDB', logo: '🍃' },
//         { name: 'MySQL', logo: '🐬' },
//         { name: 'Redis', logo: '🔴' },
//         { name: 'Elasticsearch', logo: '🔍' },
//         { name: 'Cassandra', logo: '💾' },
//       ],
//     },
//     {
//       category: 'AI/ML',
//       gradient: 'from-[#F97316] to-[#06B6D4]',
//       technologies: [
//         { name: 'TensorFlow', logo: '🧠' },
//         { name: 'PyTorch', logo: '🔥' },
//         { name: 'OpenAI', logo: '🤖' },
//         { name: 'Hugging Face', logo: '🤗' },
//         { name: 'scikit-learn', logo: '📊' },
//         { name: 'Keras', logo: '🔬' },
//       ],
//     },
//     {
//       category: 'IoT & Embedded',
//       gradient: 'from-[#1E3A8A] to-[#F97316]',
//       technologies: [
//         { name: 'MQTT', logo: '📡' },
//         { name: 'Azure IoT', logo: '🔌' },
//         { name: 'AWS IoT', logo: '🌐' },
//         { name: 'LoRaWAN', logo: '📶' },
//         { name: 'Raspberry Pi', logo: '🥧' },
//         { name: 'Arduino', logo: '🔧' },
//       ],
//     },
//     {
//       category: 'Testing & Quality',
//       gradient: 'from-[#06B6D4] to-[#F97316]',
//       technologies: [
//         { name: 'Jest', logo: '🃏' },
//         { name: 'Cypress', logo: '🌲' },
//         { name: 'Selenium', logo: '🔬' },
//         { name: 'Pytest', logo: '🧪' },
//         { name: 'JUnit', logo: '✓' },
//         { name: 'Postman', logo: '📮' },
//       ],
//     },
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
//               Our Technology Stack
//             </h1>
//             <p className="text-xl text-blue-100">
//               Cutting-edge technologies powering innovative solutions
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Tech Stack Grid */}
//       <section className="py-20 bg-white">
//         <div className="container mx-auto px-4 lg:px-8">
//           <div className="space-y-16">
//             {techCategories.map((category, catIndex) => (
//               <motion.div
//                 key={catIndex}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: 0.1 }}
//               >
//                 <div className="text-center mb-8">
//                   <div className={`inline-block px-6 py-3 rounded-full bg-gradient-to-r ${category.gradient} mb-4`}>
//                     <h2 className="text-2xl text-white">{category.category}</h2>
//                   </div>
//                 </div>

//                 <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
//                   {category.technologies.map((tech, techIndex) => (
//                     <motion.div
//                       key={techIndex}
//                       initial={{ opacity: 0, scale: 0.5, rotateY: -180 }}
//                       whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
//                       viewport={{ once: true }}
//                       transition={{
//                         delay: techIndex * 0.05,
//                         type: "spring",
//                         stiffness: 260,
//                         damping: 20,
//                       }}
//                       whileHover={{
//                         scale: 1.1,
//                         y: -10,
//                         rotateZ: [0, -5, 5, -5, 0],
//                         transition: { duration: 0.3 }
//                       }}
//                       className="relative group"
//                     >
//                       <div className="bg-white border-2 border-gray-100 rounded-xl p-6 text-center hover:border-[#2563EB]/30 hover:shadow-xl transition-all duration-300 cursor-pointer">
//                         <motion.div
//                           className="text-4xl mb-3"
//                           animate={{
//                             y: [0, -5, 0],
//                           }}
//                           transition={{
//                             duration: 2,
//                             repeat: Infinity,
//                             delay: techIndex * 0.1,
//                           }}
//                         >
//                           {tech.logo}
//                         </motion.div>
//                         <div className="text-sm text-[#1F2937]">{tech.name}</div>

//                         {/* Hover glow effect */}
//                         <motion.div
//                           className={`absolute inset-0 rounded-xl bg-gradient-to-br ${category.gradient}`}
//                           initial={{ opacity: 0 }}
//                           whileHover={{ opacity: 0.1 }}
//                           transition={{ duration: 0.3 }}
//                         />

//                         {/* Shine effect on hover */}
//                         <motion.div
//                           className="absolute inset-0 rounded-xl overflow-hidden"
//                           initial={{ opacity: 0 }}
//                           whileHover={{ opacity: 1 }}
//                         >
//                           <motion.div
//                             className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent"
//                             initial={{ x: "-100%" }}
//                             whileHover={{ x: "100%" }}
//                             transition={{ duration: 0.6 }}
//                             style={{ opacity: 0.3 }}
//                           />
//                         </motion.div>
//                       </div>
//                     </motion.div>
//                   ))}
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Stats Section */}
//       <section className="py-20 bg-gradient-to-br from-[#F9FAFB] to-white">
//         <div className="container mx-auto px-4 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center mb-12"
//           >
//             <h2 className="text-3xl lg:text-4xl text-[#1F2937] mb-4">
//               Technology Excellence
//             </h2>
//             <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//               Our expertise across the technology landscape
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
//             {[
//               { number: '50+', label: 'Technologies' },
//               { number: '8', label: 'Tech Categories' },
//               { number: '100%', label: 'Updated Stack' },
//               { number: '24/7', label: 'Tech Support' },
//             ].map((stat, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1 }}
//                 className="text-center bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow"
//               >
//                 <div className="text-5xl text-[#2563EB] mb-2">{stat.number}</div>
//                 <div className="text-gray-600">{stat.label}</div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Philosophy Section */}
//       <section className="py-20 bg-white">
//         <div className="container mx-auto px-4 lg:px-8">
//           <div className="max-w-4xl mx-auto">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className="text-center mb-12"
//             >
//               <h2 className="text-3xl lg:text-4xl text-[#1F2937] mb-4">
//                 Our Technology Philosophy
//               </h2>
//             </motion.div>

//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//               {[
//                 {
//                   title: 'Best Tool for the Job',
//                   description: 'We choose technologies based on your specific needs, not trends.',
//                   icon: '🎯',
//                 },
//                 {
//                   title: 'Future-Proof Solutions',
//                   description: 'Building with scalability and longevity in mind from day one.',
//                   icon: '🚀',
//                 },
//                 {
//                   title: 'Continuous Learning',
//                   description: 'Staying ahead with latest technologies and best practices.',
//                   icon: '📚',
//                 },
//               ].map((item, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: index * 0.1 }}
//                   className="text-center p-6 bg-gradient-to-br from-[#F9FAFB] to-white rounded-xl"
//                 >
//                   <div className="text-5xl mb-4">{item.icon}</div>
//                   <h3 className="text-xl text-[#1F2937] mb-3">{item.title}</h3>
//                   <p className="text-gray-600">{item.description}</p>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }
import { motion } from "motion/react";

interface TechStackPageProps {
  onNavigate: (page: string) => void;
}

export function TechStackPage({ onNavigate }: TechStackPageProps) {
  const techCategories = [
    {
      category: "Frontend",
      gradient: "from-[#2563EB] to-[#06B6D4]",
      technologies: [
        { name: "React", icon: <img src="/React.png" alt="React" className="w-14 h-14 inline-block" /> },
        { name: "Vue.js", icon: <img src="/vue.png" alt="Vue.js" className="w-14 h-14 inline-block" /> },
        { name: "Angular", icon: <img src="/angular.png" alt="Angular" className="w-14 h-14 inline-block" /> },
        { name: "Next.js", icon: <img src="/next.js.png" alt="Next.js" className="w-14 h-14 inline-block" /> },
        { name: "Typescript", icon: <img src="/typescript.png" alt="Typescript" className="w-14 h-14 inline-block" /> },
        { name: "Tailwind CSS", icon: <img src="/tailswindcss.png" alt="Tailwind CSS" className="w-14 h-14 inline-block" /> },
      ],
    },
    {
      category: "Backend",
      gradient: "from-[#1E3A8A] to-[#2563EB]",
      technologies: [
        { name: "Node.js", icon: <img src="/nodejs.png" alt="Node.js" className="w-14 h-14 inline-block" /> },
        { name: "Python", icon: <img src="/phython.png" alt="Python" className="w-14 h-14 inline-block" /> },
        { name: "Django", icon: <img src="/django.png" alt="Django" className="w-14 h-14 inline-block" /> },
        { name: "FastAPI", icon: <img src="/fstapi.png" alt="FastAPI" className="w-14 h-14 inline-block" /> },
        { name: "Java Spring", icon: <img src="/javaspring.png" alt="Java Spring" className="w-14 h-14 inline-block" /> },
        { name: ".NET Core", icon: <img src="/.netcore.png" alt=".NET Core" className="w-14 h-14 inline-block" /> },
      ],
    },
    {
      category: "Mobile",
      gradient: "from-[#F97316] to-[#2563EB]",
      technologies: [
        { name: "React Native", icon: <img src="/reactnative.png" alt="React Native" className="w-14 h-14 inline-block" /> },
        { name: "Flutter", icon: <img src="/flutter.png" alt="Flutter" className="w-14 h-14 inline-block" /> },
        { name: "Swift", icon: <img src="/swift.png" alt="Swift" className="w-14 h-14 inline-block" /> },
        { name: "Kotlin", icon: <img src="/kotlin.png" alt="Kotlin" className="w-14 h-14 inline-block" /> },
        { name: "Ionic", icon: <img src="/ionic.png" alt="Ionic" className="w-14 h-14 inline-block" /> },
        { name: "Expo", icon: <img src="/expo.png" alt="Expo" className="w-14 h-14 inline-block" /> },
      ],
    },
    {
      category: "Cloud & DevOps",
      gradient: "from-[#06B6D4] to-[#2563EB]",
      technologies: [
        { name: "AWS", icon: <img src="/aws.png" alt="AWS" className="w-14 h-14 inline-block" /> },
        { name: "Azure", icon: <img src="/azure.png" alt="Azure" className="w-14 h-14 inline-block" /> },
        { name: "Google Cloud", icon: <img src="/GCP.png" alt="Google Cloud" className="w-14 h-14 inline-block" /> },
        { name: "Docker", icon: <img src="/docker.png" alt="Docker" className="w-14 h-14 inline-block" /> },
        { name: "Kubernetes", icon: <img src="/kubernetes.png" alt="Kubernetes" className="w-14 h-14 inline-block" /> },
        { name: "Terraform", icon: <img src="/terraform.png" alt="Terraform" className="w-14 h-14 inline-block" /> },
      ],
    },
    {
      category: "Databases",
      gradient: "from-[#2563EB] to-[#1E3A8A]",
      technologies: [
        { name: "PostgreSQL", icon: <img src="/postgresql.png" alt="PostgreSQL" className="w-14 h-14 inline-block" /> },
        { name: "MongoDB", icon: <img src="/mongodb.png" alt="MongoDB" className="w-14 h-14 inline-block" /> },
        { name: "MySQL", icon: <img src="/mysql.png" alt="MySQL" className="w-14 h-14 inline-block" /> },
        { name: "Redis", icon: <img src="/redis.png" alt="Redis" className="w-14 h-14 inline-block" /> },
        { name: "Elasticsearch", icon: <img src="/elasticsearch.png" alt="Elasticsearch" className="w-14 h-14 inline-block" /> },
        { name: "Cassandra", icon: <img src="/cassandra.png" alt="Cassandra" className="w-14 h-14 inline-block" /> },
      ],
    },
    {
      category: "AI/ML",
      gradient: "from-[#F97316] to-[#06B6D4]",
      technologies: [
        { name: "TensorFlow", icon: <img src="/TensorFlow.png" alt="TensorFlow" className="w-14 h-14 inline-block" /> },
        { name: "PyTorch", icon: <img src="/PyTorch.png" alt="PyTorch" className="w-14 h-14 inline-block" /> },
        { name: "OpenAI", icon: <img src="/openai.png" alt="OpenAI" className="w-14 h-14 inline-block" /> },
        { name: "Hugging Face", icon: <img src="/huggaingface.png" alt="Hugging Face" className="w-14 h-14 inline-block" /> },
        { name: "Scikit-learn", icon: <img src="/scikitlearn.png" alt="Scikit-learn" className="w-14 h-14 inline-block" /> },
        { name: "Keras", icon: <img src="/keras.png" alt="Keras" className="w-14 h-14 inline-block" /> },
      ],
    },
    {
      category: "IoT & Embedded",
      gradient: "from-[#1E3A8A] to-[#F97316]",
      technologies: [
        { name: "MQTT", icon: <img src="/mqtt.png" alt="MQTT" className="w-14 h-14 inline-block" /> },
        { name: "Azure IoT", icon: <img src="/azureiot.png" alt="Azure IoT" className="w-14 h-14 inline-block" /> },
        { name: "AWS IoT", icon: <img src="/awsiot.png" alt="AWS IoT" className="w-14 h-14 inline-block" /> },
        { name: "LoRaWan", icon: <img src="/lorawan.png" alt="LoRaWan" className="w-14 h-14 inline-block" /> },
        { name: "Raspberry Pi", icon: <img src="/raspberrypi.png" alt="Raspberry Pi" className="w-14 h-14 inline-block" /> },
        { name: "Arduino", icon: <img src="/arduino.png" alt="Arduino" className="w-14 h-14 inline-block" /> },
      ],
    },
    {
      category: "Testing & Quality",
      gradient: "from-[#06B6D4] to-[#F97316]",
      technologies: [
        { name: "Jest", icon: <img src="/jest.png" alt="Jest" className="w-14 h-14 inline-block" /> },
        { name: "Cypress", icon: <img src="/cypress.png" alt="Cypress" className="w-14 h-14 inline-block" /> },
        { name: "Selenium", icon: <img src="/selenium.png" alt="Selenium" className="w-14 h-14 inline-block" /> },
        { name: "Pytest", icon: <img src="/pytest.png" alt="Pytest" className="w-14 h-14 inline-block" /> },
        { name: "JUnit", icon: <img src="/junit.png" alt="JUnit" className="w-14 h-14 inline-block" /> },
        { name: "Postman", icon: <img src="/postman.png" alt="Postman" className="w-14 h-14 inline-block" /> },
      ],
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
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl lg:text-6xl text-white mb-6 font-bold">Our Technology Stack</h1>
            <p className="text-xl text-blue-100">
              Cutting-edge technologies powering innovative solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-16">
            {techCategories.map((category, catIndex) => (
              <motion.div
                key={catIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <div className="text-center mb-8">
                  <div
                    className={`inline-block px-6 py-3 rounded-full bg-gradient-to-r ${category.gradient} mb-4`}
                  >
                    <h2 className="text-2xl text-white font-semibold">{category.category}</h2>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                  {category.technologies.map((tech, techIndex) => (
                    <motion.div
                      key={techIndex}
                      initial={{ opacity: 0, scale: 0.5, rotateY: -180 }}
                      whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: techIndex * 0.05,
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                      }}
                      whileHover={{
                        scale: 1.1,
                        y: -10,
                        rotateZ: [0, -5, 5, -5, 0],
                        transition: { duration: 0.3 },
                      }}
                      className="relative group"
                    >
                      <div className="bg-white border-2 border-gray-100 rounded-xl p-6 text-center hover:border-[#2563EB]/30 hover:shadow-xl transition-all duration-300 cursor-pointer relative overflow-hidden">
                        <motion.div
                          className="mb-3"
                          animate={{ y: [0, -5, 0] }}
                          transition={{ duration: 2, repeat: Infinity, delay: techIndex * 0.1 }}
                        >
                          {tech.icon}
                        </motion.div>

                        <div className="text-sm text-[#1F2937] font-medium">{tech.name}</div>

                        {/* Hover glow effect */}
                        <motion.div
                          className={`absolute inset-0 rounded-xl bg-gradient-to-br ${category.gradient}`}
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 0.1 }}
                          transition={{ duration: 0.3 }}
                        />

                        {/* Shine effect */}
                        <motion.div
                          className="absolute inset-0 rounded-xl overflow-hidden"
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                        >
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent"
                            initial={{ x: "-100%" }}
                            whileHover={{ x: "100%" }}
                            transition={{ duration: 0.6 }}
                            style={{ opacity: 0.3 }}
                          />
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
