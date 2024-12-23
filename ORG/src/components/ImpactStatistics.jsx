import React from 'react';

const ImpactStatistics = () => (
  <section className="py-12 px-4 bg-blue-100">
    <div className="container mx-auto text-center grid grid-cols-2 sm:grid-cols-4 gap-6">
      {[
        { value: '1,000+', label: 'Families Supported' },
        { value: '500+', label: 'Volunteers' },
        { value: '$5M', label: 'Donations Raised' },
        { value: '50+', label: 'Community Projects' },
      ].map((stat, index) => (
        <div key={index}>
          <h3 className="text-3xl font-bold text-blue-600">{stat.value}</h3>
          <p className="text-gray-600">{stat.label}</p>
        </div>
      ))}
    </div>
  </section>
);

export default ImpactStatistics;
