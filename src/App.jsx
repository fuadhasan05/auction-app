import './App.css'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import Footer from './components/Footer/Footer'
import BidItems from './components/Bid_Items/BidItems'
import EmptyFav from './components/Fav_Items/EmptyFav'
import FavItems from './components/Fav_Items/FavItems'
import { useState } from 'react'
import { FaRegHeart } from "react-icons/fa";
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const itemsPromise = fetch('/items.json')
  .then(response => response.json())

function App() {

  const [favoriteItem, setFavoriteItem] = useState([]);
  const [favoriteItemsId, setFavItemsId] = useState([]);
  const [totalBidPrice, setTotalBidPrice] = useState(0.00);


  const handleBidItem = (bidItem) => {
    setFavoriteItem([...favoriteItem,bidItem]);
    setFavItemsId([...favoriteItemsId, bidItem.id]);
    setTotalBidPrice(totalBidPrice + bidItem.currentBidPrice);
  }

  const removeFavoriteItem = (bidItem) => {
    setFavoriteItem(favoriteItem.filter(favItem => favItem.id !== bidItem.id));
    setFavItemsId(favoriteItemsId.filter(id => id !== bidItem.id));
    setTotalBidPrice(totalBidPrice - bidItem.currentBidPrice);

    toast.warn('Removed item from the list', {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  } 
  

  return (
    <>
       <Navbar> </Navbar>

       <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

       <Banner> </Banner>

       <div className=" bg-gray-200">
            <div className="w-11/12 mx-auto py-20">
                <h1 className="font-medium text-3xl text-[#0E2954]">Active Auctions</h1>
                <p className="pt-2">Discover and bid on extraordinary items</p>
            </div>

            <div className="w-11/12 mx-auto flex justify-between gap-4 pb-20">
            {/* Left Container */}
            <div className="left-container w-[70%] h-fit bg-white rounded-xl ">
                
              <BidItems handleBidItem={handleBidItem} itemsPromise={itemsPromise} removeFavoriteItem={removeFavoriteItem} favoriteItemsId={favoriteItemsId} ></BidItems>

            </div>
            
            {/* Right Container */}
            <div className="right-container w-[30%] h-fit bg-white rounded-xl ">

            <h1 className='flex items-center gap-2 justify-center text-xl font-bold text-[#0E2954] py-3 border-b-2 border-gray-200'> <FaRegHeart size={20} /> Favourite Items</h1>

                {
                favoriteItem.length === 0 && <EmptyFav></EmptyFav>
                }

                {
                  favoriteItem.map((favItem) => <FavItems key={favItem.id} bidItem={favItem} removeFavoriteItem={removeFavoriteItem} ></FavItems>)
                }

             <div className='border-t-2 border-gray-200 flex justify-between items-center p-3'>
                <h3 className='text-lg font-semibold'>Total Bids Amount</h3>
                <h3 className='text-lg font-semibold'>${totalBidPrice}</h3>
              </div>

            </div>
            </div>
      </div>

       <Footer> </Footer>
    </>
  )
}

export default App
