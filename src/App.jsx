import './App.css'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import Footer from './components/Footer/Footer'
import BidItems from './components/Bid_Items/BidItems'
import EmptyFav from './components/Fav_Items/EmptyFav'
import FavItems from './components/Fav_Items/FavItems'
import { useState } from 'react'
import { FaRegHeart } from "react-icons/fa";


function App() {

  const [favoriteItem, setFavoriteItem] = useState([]);

  const handleBidItem = (bidItem) => {
    setFavoriteItem([...favoriteItem,bidItem])
  } 

  console.log(favoriteItem)

  return (
    <>
       <Navbar> </Navbar>
       <Banner> </Banner>

       <div className=" bg-gray-200">
            <div className="w-11/12 mx-auto py-20">
                <h1 className="font-medium text-3xl text-[#0E2954]">Active Auctions</h1>
                <p className="pt-2">Discover and bid on extraordinary items</p>
            </div>

            <div className="w-11/12 mx-auto flex justify-between gap-2 pb-20">
            {/* Left Container */}
            <div className="left-container w-[70%] h-fit bg-white rounded-xl p-4">
                
              <BidItems handleBidItem={handleBidItem}></BidItems>

            </div>
            
            {/* Right Container */}
            <div className="right-container w-[30%] h-fit bg-white rounded-xl p-4 ">

            <h1 className='flex items-center gap-2 justify-center text-xl font-bold text-[#0E2954] py-3 border-b-2 border-gray-200'> <FaRegHeart size={20} /> Favourite Items</h1>

                {
                favoriteItem.length === 0 && <EmptyFav></EmptyFav>
                }

                {
                  favoriteItem.map((bidItem) => <FavItems key={bidItem.id} bidItem={bidItem} ></FavItems>)
                }

             <div className='border-t-2 border-gray-200 flex justify-between items-center py-3'>
                <h3 className='text-lg font-semibold'>Total Bits Amount</h3>
                <h3 className='text-lg font-semibold'>${}</h3>
              </div>

            </div>

            </div>
        </div>

       <Footer> </Footer>
    </>
  )
}

export default App
