import React from 'react';
import Safari from '../../assets/home/Safary.png';
import Rafting from '../../assets/home/Rafting.png';
import Suffing from '../../assets/home/Suffing.png';
import Cycling from '../../assets/home/Cycling.png'; // Adjust the image paths as needed

const ActivityCard = ({ img, name }) => (
  <div className="relative rounded-lg overflow-hidden shadow-md">
    <img src={img} alt={name} className="w-full h-90 object-cover rounded-lg" />
    <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-center p-2">
      <h3 className="text-lg font-bold">{name}</h3>
    </div>
  </div>
);

const TopActivity = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Top Activity</h2>
        
        {/* First row with 3 cards */}
        <div className="flex justify-center gap-6 mb-6">
          <ActivityCard img={Safari} name="Safari" />
          <ActivityCard img={Rafting} name="Water Rafting" />
          <ActivityCard img={Suffing} name="Surfing" />
        </div>
        
        {/* Second row with 1 centered card */}
        <div className="flex justify-center">
          <ActivityCard img={Cycling} name="Cycling" className="w-1/3" />
        </div>
        
      </div>
    </section>
  );
};

export default TopActivity;
