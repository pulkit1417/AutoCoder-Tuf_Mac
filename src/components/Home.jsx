import React from 'react';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-blue-900 flex flex-col items-center justify-between p-8 relative overflow-hidden">
      {/* Glowing background */}
      <div className="absolute inset-0 bg-purple-500 opacity-30 blur-3xl animate-pulse"></div>
      <div className="absolute inset-0 bg-blue-500 opacity-30 blur-3xl animate-pulse animation-delay-1000"></div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-4xl">
        <h1 className="text-3xl font-bold text-purple-300 -mt-5 mb-4 animate-glow">Ethereal Heading</h1>
        
        <div className="w-[1350px] h-[600px] bg-transparent overflow-hidden perspective-1000 rounded-lg shadow-glow">
          <div className="w-full h-full relative preserve-3d animate-flip-slow">
            <div className="absolute w-full h-full backface-hidden">
              <img
                src="image.webp"
                alt="Front image"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            {/* <div className="absolute w-full h-full backface-hidden rotate-y-180">
              <img
                src="logo512.png"
                alt="Back image"
                className="w-full h-full object-cover rounded-lg"
              />
            </div> */}
          </div>
        </div>
        
        <p className="text-blue-300 text-3xl mt-4 animate-glow">Olga Of Kiev</p>
      </div>
    </div>
  );
};

export default HomePage;

const styles = `
  @keyframes flip {
    0% {
      transform: rotateY(0deg);
    }
    100% {
      transform: rotateY(360deg);
    }
  }

  @keyframes glow {
    0%, 100% {
      text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #8B5CF6, 0 0 35px #8B5CF6, 0 0 40px #8B5CF6, 0 0 50px #8B5CF6, 0 0 75px #8B5CF6;
    }
    50% {
      text-shadow: 0 0 2px #fff, 0 0 5px #fff, 0 0 7px #fff, 0 0 10px #8B5CF6, 0 0 17px #8B5CF6, 0 0 20px #8B5CF6, 0 0 25px #8B5CF6, 0 0 37px #8B5CF6;
    }
  }

  .animate-flip-slow {
    animation: flip 5s linear infinite;
  }

  .animate-glow {
    animation: glow 2s ease-in-out infinite;
  }

  .perspective-1000 {
    perspective: 1000px;
  }

  .preserve-3d {
    transform-style: preserve-3d;
  }

  .backface-hidden {
    backface-visibility: hidden;
  }

  .rotate-y-180 {
    transform: rotateY(180deg);
  }

  .shadow-glow {
    box-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #8B5CF6, 0 0 35px #8B5CF6, 0 0 40px #8B5CF6, 0 0 50px #8B5CF6, 0 0 75px #8B5CF6;
  }

  .animation-delay-1000 {
    animation-delay: 1s;
  }
`;