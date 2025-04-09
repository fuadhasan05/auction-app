import React from 'react';

const Banner = () => {
    return (
        <div>
            <div
  className="hero"
  style={{
    backgroundImage: "url(https://i.ibb.co.com/HfSC293h/Banner-min.jpg)",
  }}>
  <div className="hero-overlay"></div>
  <div className="text-neutral-content text-start p-40 grid place-items-start">
    <div className="max-w-md">
      <p className="text-4xl font-bold">
      Bid on Unique Items from Around the World
      </p>
      <p className='my-5'>
      Discover rare collectibles, luxury goods, and vintage treasures in our curated auctions
      </p>
      <button className="btn rounded-4xl ">Explore Auctions</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;