import React from 'react';
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { toast, Bounce } from 'react-toastify';

const BidItem = ({bidItem, handleBidItem, isFavourite}) => {
    
    const { title, currentBidPrice, timeLeft, image } = bidItem;

    const isDisabled = isFavourite;

    const handleFavourite = (item) => {
        if (!isFavourite) {
            handleBidItem(item);

            toast.success('An item is added to favorites', {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
                });
        }
    };

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
            <td className='font-medium'>${currentBidPrice}</td>
            <td>{timeLeft}</td>
            <td>
                <button onClick={()=>handleFavourite(bidItem)}
                    disabled={isDisabled}
                    className={`transition-all duration-300 ${isDisabled ? "cursor-not-allowed opacity-50" : "hover:scale-110 hover:cursor-pointer"
                        }`}>
                {isDisabled ? 
                    (
                        <FaHeart className="text-xl text-red-500" />
                    ) :
                    (
                        <FaRegHeart className="text-xl text-gray-400 hover:text-red-300" />
                    )}
                </button>
            </td>

        </tr>
    );
};

export default BidItem;