import React from 'react';
import Reverston from '../../assets/home/Reverston-2.png'; // Replace with actual image paths
import HotelKandalama from '../../assets/home/Kandalama.png'; // Replace with actual image paths
import CinnamonYala from '../../assets/home/Cinamon.png'; // Replace with actual image paths
import NuwaraEliya from '../../assets/home/NuwaraEliya.png'; // Replace with actual image paths
import Hikkaduwa from '../../assets/home/Hikkaduwa.png'; // Replace with actual image paths

const HotelCard = ({ img, title, description }) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-md">
    <img src={img} alt={title} className="w-full h-40 object-cover" />
    <div className="p-4">
      <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
      <button className="mt-4 px-4 py-2 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700">
        View
      </button>
    </div>
  </div>
);

const TopHotels = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Top Hotels</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          <HotelCard 
            img={Reverston} 
            title="Reverston" 
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." 
          />
          <HotelCard 
            img={HotelKandalama} 
            title="Hotel Kandalama" 
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." 
          />
          <HotelCard 
            img={CinnamonYala} 
            title="Cinnamon Yala" 
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." 
          />
          <HotelCard 
            img={NuwaraEliya} 
            title="Nuwara Eliya" 
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." 
          />
          <HotelCard 
            img={Hikkaduwa} 
            title="Hikkaduwa" 
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." 
          />
        </div>
      </div>
    </section>
  );
};

export default TopHotels;
