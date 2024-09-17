import React from 'react';
import Colombo from '../../assets/home/colombo 1.png'; 
import Galle from '../../assets/home/Galle_Fort 1.png'; 
import Kandy from '../../assets/home/kandy.png';
import Sigiriya from '../../assets/home/sigiriya.png';
import Ella from '../../assets/home/Ella.png';
import whyWe from '../../assets/home/whyWe.png';
import Reverston from '../../assets/home/Reverston.png'; // Replace with actual image paths
//import KandyPerahera from '../../assets/home/kandyPerahera.png'; // Replace with actual image paths
//import Yala from '../../assets/home/yala.png'; // Replace with actual image paths
//import NuwaraEliya from '../../assets/home/nuwaraEliya.png'; // Replace with actual image paths
//import Hikkaduwa from '../../assets/home/hikkaduwa.png'; // Replace with actual image paths

const DestinationCard = ({ name, img, className }) => (
  <div className={`relative rounded-lg overflow-hidden shadow-lg ${className}`}>
    <img src={img} alt={name} className="w-full h-full object-cover" />
    <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-10 text-white text-center p-2">
      <h3 className="text-lg font-bold">{name}</h3>
    </div>
  </div>
);


const Tdestini = () => {
  return (
    <div>
      {/* Top Destinations Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Top Destinations</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <DestinationCard name="Colombo" img={Colombo} className="col-span-2 row-span-2 h-80 md:h-96" />
            <DestinationCard name="Galle" img={Galle} className="h-40 md:h-48" />
            <DestinationCard name="Kandy" img={Kandy} className="h-40 md:h-48" />
            <DestinationCard name="Sigiriya" img={Sigiriya} className="h-40 md:h-48" />
            <DestinationCard name="Ella" img={Ella} className="h-40 md:h-48" />
          </div>
        </div>
      </section>


      
    </div>
  );
};

export default Tdestini;
