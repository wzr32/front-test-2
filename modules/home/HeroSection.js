import React from 'react';
import {
  OutlinedRoundButtonBlue,
  OutlinedRoundButtonBorder,
} from '../../shared/components/button/Button';

const HeroSection = () => {
  return (
    <div className="w-6/12 h-full text-white">
      <h1
        className="text-6xl capitalize font-bold mb-7"
      >
        special way to realize your own business
      </h1>
      <p
        className="w-4/5 font-light mb-7"
      >
        Are you going to make a website? Share your idea with us or make it by yourself with our project maker sorftware. Make it happens today!
      </p>

      <div>
        <OutlinedRoundButtonBlue>
          get it started
        </OutlinedRoundButtonBlue>
        <OutlinedRoundButtonBorder>
          watch demo
        </OutlinedRoundButtonBorder>
      </div>
    </div>
  );
};

export default HeroSection;
