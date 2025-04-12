import React from 'react';
import { RxCross2 } from "react-icons/rx";

const FavItems = ({ bidItem}) => {
    const { title, image, currentBidPrice, bidsCount } = bidItem;

    return (
        <div>
            <div className="flex flex-col gap-3 py-3 items-center">
                <div className=" flex flex-col justify-center w-full max-w-sm card bg-base-100 shrink-0">
                    <div className="flex justify-between p-2 items-center">
                        <div className="gap-3 flex justify-center items-center">
                            <div className="avatar">
                                <div className="h-13 w-13 rounded">
                                    <img
                                        src={image}
                                        />
                                </div>
                            </div>
                            <div>
                                <p className="font-semibold text-md">{title}</p>
                                <div className="flex gap-6 pt-2">
                                <p className="font-normal">{currentBidPrice}</p>
                                <p className="font-normal">Bids: {bidsCount}</p>
                                </div>
                            </div>
                        </div>
                        <button  className='p-1 rounded-full hover:bg-red-300 hover:text-red-500 hover:cursor-pointer hover:scale-110 transition-all duration-300'>
                            <RxCross2 />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FavItems;