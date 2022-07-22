import './App.css';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from './Pages/Header/Header';
import MenuBar from './Pages/MenuBar/MenuBar';
import ImageSlider from './Pages/ImageSlider/ImageSlider';
import Cards from './Pages/Cards/Cards';
import BannerImage from './Pages/BannerImage/BannerImage';
import ImageCarousel from './Pages/ImageCarousel/ImageCarousel';
import SignIn from './Pages/SignIn/SignIn';
import Footer from './Pages/Footer/Footer';
import Registration from './Pages/Registration/Registration';
import Login from './Pages/Login/Login';
import BusinessAccount from './Pages/BusinessAccount/BusinessAccount';
import SeeMore from './Pages/SeeMore/SeeMore';
import Cart from './Pages/Cart/Cart';
import AmazonPay from './Pages/AmazonPay/AmazonPay';
import ImageZoom from './Pages/ImageZoom/ImageZoom';
import CustomerService from './Pages/CustomerService/CustomerService';
import Fashion from './Pages/Fashion/Fashion';
import TodaysDeals from './Pages/TodaysDeals/TodaysDeals';


// export default function App() {
//   return(
//     <>
//       <Router>  
//         <Switch>
//           <Route path="/">
//             <Header />
//             <MenuBar />
//             <ImageSlider />
//             <Cards />
//             <BannerImage />
//             <ImageCarousel />
//             <SignIn />
//             <Footer />
//           </Route>
//         </Switch>
//       </Router>
//     </>
//   )
// }


export default function App() {
  return(
    <>
      <Router>
        <div>      
          <Switch>

            {/* <Route path="/imageZoom">
              <ImageZoom />
            </Route> */}

            <Route path="/amazonPay">
              <AmazonPay />
            </Route>

            <Route path="/businessAccount">
              <BusinessAccount />
            </Route>

            <Route path="/cart">
              <Cart />
            </Route>

            <Route path="/customerService">
              <CustomerService />
            </Route>
            
            <Route path="/fashion">
              <Fashion />
            </Route>

            <Route path="/login">
              <Login />
            </Route>
            
            <Route path="/registration">
              <Registration />
            </Route>

            <Route path="/seeMore/:id">
              <SeeMore />
            </Route>

            <Route path="/todaysDeals">
              <TodaysDeals />
            </Route>

            <Route path="/">
              <Header />
              <MenuBar />
              <ImageSlider />
              <Cards />
              <BannerImage />
              <ImageCarousel />
              <SignIn />
              <Footer />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  )
}
