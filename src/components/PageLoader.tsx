import { motion } from 'motion/react';

export function PageLoader() {
  return (
    <motion.div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-white"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      onAnimationComplete={(definition) => {
        if (definition.opacity === 0) {
          const loader = document.getElementById('page-loader');
          if (loader) loader.style.display = 'none';
        }
      }}
    >
      <div className="relative">
        {/* Animated Logo */}
        <motion.div
          className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#2563EB] to-[#1E3A8A] flex items-center justify-center"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <span className="text-white text-2xl">C</span>
        </motion.div>
        
        {/* Loading Dots */}
        <div className="flex gap-2 mt-6 justify-center">
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="w-2 h-2 bg-[#2563EB] rounded-full"
              animate={{
                y: [0, -10, 0],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                delay: index * 0.2,
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
