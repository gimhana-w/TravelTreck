import React from 'react';
//import Reverston from '../../assets/home/reverston.png'; // Replace with actual image paths
//import KandyPerahera from '../../assets/home/kandyPerahera.png'; // Replace with actual image paths
//import Yala from '../../assets/home/yala.png'; // Replace with actual image paths
//import NuwaraEliya from '../../assets/home/nuwaraEliya.png'; // Replace with actual image paths
//import Hikkaduwa from '../../assets/home/hikkaduwa.png'; // Replace with actual image paths

const TourPackageCard = ({ img, title, description }) => (
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

const Package = () => {
  return (
    <div className="bg-gray-100">
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Tour Packages</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <TourPackageCard
              //img={Reverston}
              title="Reverston"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
            <TourPackageCard
              //img={KandyPerahera}
              title="Kandy Perahera"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
            <TourPackageCard
              //img={Yala}
              title="Yala"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
            <TourPackageCard
              //img={NuwaraEliya}
              title="Nuwara Eliya"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
            <TourPackageCard
              //img={Hikkaduwa}
              title="Hikkaduwa"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Package;
