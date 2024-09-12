import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const images = [
  'image.webp',
  // 'image1.jpeg',
  'image3.jpeg',
  'image4.png',
  'image5.jpeg'
];

const texts = [
  'Olga of Kiev',
  // 'Warrior Queen',
  'Diplomatic Ruler',
  'Christian Convert',
  'Historical Icon'
];

const HomePage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsFlipped(prev => !prev);
      setTimeout(() => {
        setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
      }, 150); // Half the flip duration to change image at the midpoint of the flip
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-black">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImageIndex}
          className="absolute inset-0"
          initial={{ rotateY: isFlipped ? -90 : 90 }}
          animate={{ rotateY: 0 }}
          exit={{ rotateY: isFlipped ? 90 : -90 }}
          transition={{ duration: 0.3 }}
          style={{
            backgroundImage: `url(${images[currentImageIndex]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full w-full p-8">
        <motion.h1
          className="text-6xl font-bold text-purple-300 mb-8"
          animate={{
            textShadow: [
              "0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #8B5CF6, 0 0 35px #8B5CF6, 0 0 40px #8B5CF6, 0 0 50px #8B5CF6, 0 0 75px #8B5CF6",
              "0 0 2px #fff, 0 0 5px #fff, 0 0 7px #fff, 0 0 10px #8B5CF6, 0 0 17px #8B5CF6, 0 0 20px #8B5CF6, 0 0 25px #8B5CF6, 0 0 37px #8B5CF6",
              "0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #8B5CF6, 0 0 35px #8B5CF6, 0 0 40px #8B5CF6, 0 0 50px #8B5CF6, 0 0 75px #8B5CF6",
            ]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        >
          Ethereal Legends
        </motion.h1>
        
        <AnimatePresence mode="wait">
          <motion.p
            key={currentImageIndex}
            className="text-blue-300 text-4xl mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {texts[currentImageIndex]}
          </motion.p>
        </AnimatePresence>
        <button onClick={()=> navigate('/stats')} className='bg-[#bba9a9] p-2 rounded mt-3'>Move Ahead</button>
      </div>
    </div>
  );
};

export default HomePage;