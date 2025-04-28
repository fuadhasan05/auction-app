import React from 'react';

const Banner = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: "url(https://i.ibb.co.com/HfSC293h/Banner-min.jpg)",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="w-11/12 mx-auto py-40 text-white">
          <p className="text-6xl font-bold">
            Bid on Unique Items from <br /> Around the World
          </p>
          <p className='my-5 text-2xl font-light'>
            Discover rare collectibles, luxury goods, and vintage <br /> treasures in our curated auctions
          </p>
          <button className="btn rounded-4xl ">Explore Auctions</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;