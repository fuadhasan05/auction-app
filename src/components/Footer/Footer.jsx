import React from 'react';

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-horizontal footer-center bg-white rounded p-10">
        <div>
          <a className="text-xl">
            <span className="text-[#003EA4] font-normal">Auctions</span>
            <span className="text-[#FFD337] font-bold">Gallery</span>
          </a>
        </div>
        <div className='grid grid-flow-col gap-4'>
          <ul>Bid.</ul>
          <ul>Win.</ul>
          <ul>Own.</ul>
        </div>
        <nav className="grid grid-flow-col gap-10">
          <a className="link link-hover">Home</a>
          <a className="link link-hover">Auctions</a>
          <a className="link link-hover">Categories</a>
          <a className="link link-hover">How to works</a>
        </nav>
        <aside>
          <p>© {new Date().getFullYear()} -AuctionHub. All rights reserved.</p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;