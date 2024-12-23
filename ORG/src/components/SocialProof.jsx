import React from 'react';

const SocialProof = () => (
  <section className="py-12 px-4">
    <div className="container mx-auto text-center">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6">Our Partners</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {['Logo 1', 'Logo 2', 'Logo 3', 'Logo 4'].map((logo, index) => (
          <div
            key={index}
            className="bg-gray-200 rounded-lg p-6 shadow-md text-gray-600"
          >
            {logo}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SocialProof;
