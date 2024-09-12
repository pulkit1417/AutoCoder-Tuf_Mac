import React, { useState, useEffect } from 'react';
import { MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const milestones = [
  { id: 1, x: 15, y: 40, story: "Your journey begins in the misty isles of Scotland." },
  { id: 2, x: 30, y: 30, story: "You sail to the shores of Denmark, land of Vikings." },
  { id: 3, x: 50, y: 20, story: "Your travels take you to the vast steppes of Russia." },
  { id: 4, x: 75, y: 35, story: "You reach the beautiful beaches of the Black Sea." },
];

const Character = ({ x, y }) => (
  <div className="absolute transition-all duration-1000 ease-in-out" style={{ left: `${x}%`, top: `${y}%`, transform: 'translate(-50%, -50%)' }}>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="8" r="5" fill="#FFD700" />
      <path d="M2 22C2 17.5817 6.47715 14 12 14C17.5228 14 22 17.5817 22 22" stroke="#FFD700" strokeWidth="2" />
    </svg>
  </div>
);

const Map = () => {
  const [currentMilestone, setCurrentMilestone] = useState(0);
  const [showStory, setShowStory] = useState(false);
  const [characterPos, setCharacterPos] = useState({ x: milestones[0].x, y: milestones[0].y });

  useEffect(() => {
    if (currentMilestone > 0) {
      setCharacterPos({ x: milestones[currentMilestone - 1].x, y: milestones[currentMilestone - 1].y });
    }
  }, [currentMilestone]);

  const handleMilestoneClick = (index) => {
    setCurrentMilestone(index + 1);
    setShowStory(true);
  };
  const navigate = useNavigate();

  return (
    <div className="relative w-full h-[745px] bg-blue-100 overflow-hidden rounded-lg shadow-lg">
      <img src="map.jpeg" alt="Antique Map of Europe" className="w-full h-full object-cover" />
      
      {milestones.map((milestone, index) => (
        <button
        onClick={()=> {
            navigate('/EndPage')
            handleMilestoneClick(index)
        }} 
          key={milestone.id}
          className={`absolute transform -translate-x-1/2 -translate-y-1/2 ${
            index < currentMilestone ? 'text-green-900' : 'text-black-500'
          } hover:text-yellow-500 transition-colors duration-300`}
          style={{ left: `${milestone.x}%`, top: `${milestone.y}%` }}
        >
          <MapPin size={24} className="filter drop-shadow-md" />
        </button>
      ))}
    <h1>Move Ahead</h1>
      <Character x={characterPos.x} y={characterPos.y} />

      
    </div>
  );
};

export default Map;