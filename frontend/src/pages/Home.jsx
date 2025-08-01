import React from "react";
import Hero from "../components/Hero";
import LatestCollection from "../components/LatestCollection";
import BestSeller from "../components/BestSeller";
import OurPolicy from "../components/OurPolicy";
import Newsletter from "../components/Newsletter";

const Home = () => {
  return (
    <div className="w-full">
      <Hero />
      <div className="px-4 sm:px-8 lg:px-16">
        <LatestCollection />
        <BestSeller />
        <OurPolicy />
        <Newsletter />
      </div>
    </div>
  );
};

export default Home;
