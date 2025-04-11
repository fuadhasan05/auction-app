import React from 'react';
import BidItems from '../Bid_Items/BidItems';
import FavItems from '../Fav_Items/FavItems';

const Auctions = () => {
    return (
        <div className=" bg-gray-200">
            <div className="w-11/12 mx-auto py-20">
                <h1 className="font-medium text-3xl">Active Auctions</h1>
                <p className="pt-2">Discover and bid on extraordinary items</p>
            </div>

            <div className="w-11/12 mx-auto flex justify-between gap-2 pb-20">
            <div className="left-container w-[70%] bg-white rounded-xl p-4">
                
                <BidItems></BidItems>

            </div>
            <div className="right-container w-[30%] bg-white rounded-xl p-4">
                
                <FavItems></FavItems>

            </div>

            </div>
        </div>
    );
};

export default Auctions;