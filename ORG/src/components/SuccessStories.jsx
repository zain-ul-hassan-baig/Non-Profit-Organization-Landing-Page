import React from 'react';

const SuccessStories = () => (
  <section className="py-12 px-4">
    <div className="container mx-auto max-w-4xl text-center">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6">Success Stories</h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {[
          { title: 'Anna\'s Story', description: 'Anna received the support she needed to rebuild her life after disaster struck.' },
          { title: 'Mark\'s Journey', description: 'Mark turned his life around with our educational programs.' },
        ].map((story, index) => (
          <div key={index} className="bg-white p-6 shadow-md rounded-lg">
            <h3 className="text-lg font-bold mb-2">{story.title}</h3>
            <p className="text-gray-600">{story.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SuccessStories;
