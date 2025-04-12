import './App.css'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import Footer from './components/Footer/Footer'
import BidItems from './components/Bid_Items/BidItems'
import EmptyFav from './components/Fav_Items/EmptyFav'
import FavItems from './components/Fav_Items/FavItems'


function App() {

  return (
    <>
       <Navbar> </Navbar>
       <Banner> </Banner>

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

                <EmptyFav></EmptyFav>
                <FavItems></FavItems>

            </div>

            </div>
        </div>

       <Footer> </Footer>
    </>
  )
}

export default App
