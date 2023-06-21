import React from 'react';

import Dark from '../../assets/1.mp4';

const VideoPage = () => {
  return (
    <div id="Demo" className="relative w-full h-screen">
      <video className="absolute w-full h-full object-cover" src={Dark} controls autoPlay muted loop />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-white text-4xl font-bold">Ozone3 Studio Demo</h1>
        <p className="text-white mt-4 text-lg">Latest release for @burhvn_
Recorded, mixed and mastered by @ozone3.studios</p>
      </div>
    </div>
  );
};

export default VideoPage;