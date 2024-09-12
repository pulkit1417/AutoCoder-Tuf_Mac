import React, { useState, useEffect } from 'react';
import { Swords, Calendar, User, Heart, Shield, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const AnimatedCharacterStats = () => {
  const [characterEntered, setCharacterEntered] = useState(false);
  const [visibleStats, setVisibleStats] = useState([]);
  
  const stats = [
    { name: 'Kill Count', value: 0, color: '#FF6B6B', icon: Swords },
    { name: 'Age', value: 30, color: '#4ECDC4', icon: Calendar },
    { name: 'Name', value: 'Olga', color: '#FFA900', icon: User },
    { name: 'Purpose', value: 'Vengeance', color: '#45B7D1', icon: Heart },
  ];
  const navigate = useNavigate();

  useEffect(() => {
    const entranceTimer = setTimeout(() => setCharacterEntered(true), 500);
    return () => clearTimeout(entranceTimer);
  }, []);

  useEffect(() => {
    if (characterEntered) {
      const statTimer = setInterval(() => {
        setVisibleStats(prev => {
          if (prev.length < stats.length) {
            return [...prev, stats[prev.length]];
          }
          clearInterval(statTimer);
          return prev;
        });
      }, 300);
      return () => clearInterval(statTimer);
    }
  }, [characterEntered]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white overflow-hidden p-8">
      <div className="relative flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-16">
        {/* Character */}
        <motion.div 
          initial={{ x: -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative"
        >
         <img src="olga.gif"></img>
         <h1 className='text-3xl'>OLGA</h1>
          <motion.div 
            className="absolute top-16 left-16 w-36 h-36 bg-yellow-400 rounded-full opacity-20"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
          />
        </motion.div>
        
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.name}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="flex items-center space-x-3 bg-gray-800 rounded-lg px-4 py-3 shadow-lg hover:shadow-xl transition-shadow duration-300">
                {stat.icon && <stat.icon className="text-yellow-400" size={24} />}
                <div className="flex-grow">
                  <span className="font-bold text-sm uppercase tracking-wider">{stat.name}</span>
                  <div className="text-lg font-semibold" style={{ color: stat.color }}>{stat.value}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <button onClick={()=> navigate('/map')} className='bg-[#bba9a9] p-2 rounded'>Move Ahead</button>
    </div>
  );
};

export default AnimatedCharacterStats;