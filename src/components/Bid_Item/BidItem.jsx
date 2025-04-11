import React from 'react';
import { FaRegHeart } from "react-icons/fa";

const BidItem = ({bidItem}) => {
    const { title, currentBidPrice, timeLeft, image } = bidItem;
    return (

        <tr className='text-center item center'>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="rounded h-13 w-13">
                            <img src={image} alt={title} />
                        </div>
                    </div>
                    <div>
                        <div className="font-semibold">{title}</div>
                    </div>
                </div>
            </td>
            <td className='font-medium'>{currentBidPrice}</td>
            <td>{timeLeft}</td>
            <td>
                <button>
                <FaRegHeart />
                </button>
            </td>

        </tr>
    );
};

export default BidItem;