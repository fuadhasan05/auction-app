import React, { useEffect, useState } from 'react';
import BidItem from '../Bid_Item/BidItem';

const BidItems = () => {

    const [bidItems, setBidItems]=useState([])

    useEffect(() => {
        fetch("items.json")
        .then(res => res.json())
        .then(data=>setBidItems(data))
    }, [])


    return (
        <div>

          <div className="overflow-x-auto rounded-lg">
                <table className="table  rounded-xl">

                    <thead>
                        <tr className=" text-black">
                            <th>Items</th>
                            <th className='text-center'>Current Bid</th>
                            <th className='text-center'>Time Left</th>
                            <th className='text-center item center'>Bid Now</th>
                        </tr>
                    </thead>

                    <tbody>
                    {
                      bidItems.map((bidItem)=><BidItem bidItem={bidItem}></BidItem>) 
                    }
                    </tbody>
                </table>
          </div>
          
        </div>
    );
};

export default BidItems;