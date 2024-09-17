import React from 'react';
import whyWe from '../../assets/home/whyWe.png'; // Adjust the path based on your structure

const Why = () => {
  return (
    <div className="bg-white">
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Image on the Left */}
            <img src={whyWe} alt="Why Us" className="w-full h-96 rounded-lg object-cover" />
            {/* Text on the Right */}
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
    </div>
  );
};

export default Why;
