import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const EndPage = () => {
  const [currentParagraph, setCurrentParagraph] = useState(0);
  const paragraphs = [
    "As the sun set on Olga's remarkable reign, her legacy as a ruler, warrior, and saint was etched into the annals of history.",
    "Her transformation from a vengeful widow to a wise ruler and eventually to a Christian convert symbolized the changing tides of Kievan Rus'.",
    "Olga's diplomatic skills laid the groundwork for future alliances, while her domestic reforms strengthened the foundation of the state.",
    "Though her attempt to Christianize Rus' didn't immediately succeed, she paved the way for her grandson Vladimir's eventual conversion of the nation.",
    "Olga of Kiev stands as a testament to the power of adaptation, the strength of leadership, and the enduring impact of personal transformation."
  ];
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentParagraph((prev) => (prev + 1) % paragraphs.length);
    }, 5000); // Change paragraph every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-300 via-red-200 to-red-600 flex flex-col items-center justify-center p-8 relative overflow-hidden">
      {/* Animated background particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white opacity-50"
          style={{
            width: Math.random() * 5 + 1,
            height: Math.random() * 5 + 1,
          }}
          animate={{
            x: ['-100%', '100%'],
            y: ['-100%', '100%'],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            repeatType: 'loop',
          }}
        />
      ))}

      <motion.h1
        className="text-5xl font-bold text-brown-300 mb-12 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        The Legacy of Olga of Kiev
      </motion.h1>

      <div className="w-full max-w-2xl h-64 relative">
        <AnimatePresence mode="wait">
          <motion.p
            key={currentParagraph}
            className="text-black-200 text-xl text-center absolute inset-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {paragraphs[currentParagraph]}
          </motion.p>
        </AnimatePresence>
      </div>

      <motion.div
        className="mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <motion.button
          className="px-6 py-3 bg-purple-600 text-white rounded-full font-semibold"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore More History
        </motion.button>
      </motion.div>
            <button onClick={()=> navigate('/')} className='bg-[#bba9a9] p-2 rounded mt-6'>Go Home</button>
    </div>
  );
};

export default EndPage;