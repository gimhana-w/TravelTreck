import React from 'react';

// Example DestinationCard component (can be replaced with the actual import if it exists elsewhere)
const DestinationCard = ({ name, img }) => (
  <div className="rounded-lg overflow-hidden shadow-md">
    <img src={img} alt={name} className="w-full h-40 object-cover" />
    <h3 className="text-lg font-bold text-gray-900 p-4">{name}</h3>
  </div>
);

const Tdestini = () => {
  return (
    <div>
      {/* Top Destinations Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Top Destinations</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <DestinationCard name="Colombo" img="path_to_image" />
            <DestinationCard name="Kandy" img="path_to_image" />
            <DestinationCard name="Galle" img="path_to_image" />
            <DestinationCard name="Sigiriya" img="path_to_image" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tdestini;
