import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import HeroSection from "../../components/HeroSection/HeroSection";
import MoreCards from "../../components/MoreCards/MoreCards";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <MoreCards />
      <Footer />
    </div>
  );
};

export default Home;
