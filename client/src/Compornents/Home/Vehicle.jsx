import React from 'react';
import CarImage from '../../assets/home/Vehicle.png'; // Replace with the actual image path

const BookVehicle = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left side with the image */}
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <img src={CarImage} alt="Book a vehicle" className="w-full h-auto object-cover" />
          </div>
          
          {/* Right side with text and button */}
          <div className="lg:w-1/2 lg:pl-12 text-center lg:text-left">
            <h4 className="text-4xl font-bold text-blue-500 mb-2">Book a vehicle</h4>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Lorem ipsum dolor sit amet</h1>
            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Esse nulla enim aperiam 
              culpa cupiditate quas animi ducimus blanditiis!
            </p>
            <button className="px-6 py-3 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700">
              Book now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookVehicle;
