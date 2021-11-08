import React from 'react';
import Carousel from '../modules/home/Carousel';
import FindUs from '../modules/home/FindUs';
import HeroSection from '../modules/home/HeroSection';
import Layout from '../modules/layout';
import HomeGradient from '../shared/components/HomeGradient';

const Home = () => {
  return (
    <div>
      <HomeGradient />
      <Layout>
        <section
          className="relative h-full"
        >
          <div className="flex justify-evenly items-center h-full">
            <HeroSection />
            <Carousel />
          </div>
          <FindUs />
        </section>
      </Layout>
    </div>
  );
};

export default Home;