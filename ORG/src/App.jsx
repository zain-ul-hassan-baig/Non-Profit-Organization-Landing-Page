


import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from './components/HeroSection';
import MissionStatement from './components/MissionStatement';
import ImpactStatistics from './components/ImpactStatistics';
import SuccessStories from './components/SuccessStories';
import DonationForm from './components/DonationForm';
import SocialProof from './components/SocialProof';
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <div className="mt-16">
        <section id="home">
          <HeroSection />
        </section>

        <section id="MissionStatement">
          <MissionStatement />
        </section>
        <section id="ImpactStatistics">
        <ImpactStatistics />
        </section>

        <section id="SuccessStories">
          <SuccessStories />
        </section>
        

        <section id="DonationForm">
          <DonationForm />
        </section>

        <section id="SocialProof">
          <SocialProof />
        </section>
      </div>

      <Footer />
    </div>
  );
}

export default App;

