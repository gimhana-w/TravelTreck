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

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <img src={whyWe} alt="Why Us" className="w-full h-96 rounded-lg object-cover" />
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-gray-900">Why Choose Us?</h2>
              <p className="mt-4 text-gray-600">
                We offer the best travel experiences, tailored to your needs. Explore Sri Lanka like never before with our expert guides and exclusive packages.
              </p>
              <p className="mt-4 text-gray-600">
                With us, you will experience the finest in hospitality, adventure, and culture. Let us create unforgettable memories for you!
              </p>
              <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Tour Packages Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Tour Packages</h2>
          <div className="grid grid-cols-1 sm:grid-cols-5 md:grid-cols-4 lg:grid-cols-7 gap-">
            <TourPackageCard
              img={Reverston}
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

export default Tdestini;
