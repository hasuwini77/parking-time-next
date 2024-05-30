import React from 'react';

const SmartParking: React.FC = () => {
  return (
    <section className="flex flex-col items-center p-5 bg-white">
      <div className="mb-5">
        <img src="/images/smartparking.png" alt="Smart Parking" className="max-w-full" />
      </div>
      <div className="max-w-xl">
        <h1 className="text-3xl md:text-4xl mb-3">Smart Parking</h1>
        <p className="text-base mb-5">
          The parking disc has long been a tool to promote circulation and activity in city centers.
          It's a fantastic invention that benefits residents, visitors, and local businesses alike.
          We want to be part of this evolution by creating a free digital parking disc.
        </p>
        <ul className="list-none p-0 mb-5">
          <li className="text-lg mb-2">We aim to support the growth and efficiency of urban areas.</li>
          <li className="text-lg mb-2">Our digital parking disc simplifies the parking process.</li>
          <li className="text-lg mb-2">Any parking attendant systems can easily be integrated with our system.</li>
        </ul>
        <button className="bg-black text-white py-2 px-4 text-base">Contact us</button>
      </div>
    </section>
  );
};

export default SmartParking;

