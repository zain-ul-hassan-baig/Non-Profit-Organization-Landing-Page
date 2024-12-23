import React, { useState, useEffect } from 'react';

const HeroSection = () => {
  const images = [
    'https://images.pexels.com/photos/461049/pexels-photo-461049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/933624/pexels-photo-933624.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/6647037/pexels-photo-6647037.jpeg?auto=compress&cs=tinysrgb&w=600',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      className="w-full h-screen flex items-center justify-center px-4 text-center transition-all duration-500"
      style={{
        backgroundImage: `url(${images[currentImageIndex]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className=" bg-opacity-50 w-auto max-w-full h-full flex flex-col items-center justify-center px-4"
>
<h1 className="text-3xl sm:text-5xl font-bold text-white mb-4 shadow-lg shadow-black/50">
    Join Us to Make a Difference
  </h1>
  <p className="text-lg sm:text-xl font-light text-white mb-8 shadow-md shadow-black/40">
    Together, we can bring hope and change lives. Your support matters.
  </p>
        <a
          href="#donate"
          className="bg-white text-blue-600 px-6 py-3 rounded-lg shadow-md font-medium hover:bg-gray-100 transition"
        >
          Donate Now
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
