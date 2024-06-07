import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import AddBike from './components/Pages/Bike_Ownerdb/AddBike';
import AddedBike from './components/Pages/Bike_Ownerdb/AddedBike';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import Carosual from './components/Carosual';
import BikeOwnerDb from './components/Pages/Bike_Ownerdb/BikeOwnerDb';
import Booking from './components/Pages/Bike_Ownerdb/Booking';
import History from './components/Pages/Bike_Ownerdb/History';
import Feed from './components/Pages/Bike_Ownerdb/Feed';
import BikeCustomerDb from './components/Pages/Bike_Customerdb/BikeCustomerDb';
import Payment from './components/Pages/Bike_Customerdb/Payment';
import CustFeedback from './components/Pages/Bike_Customerdb/CustFeedback';
import Customerform from './components/Pages/Bike_Customerdb/Customerform';
import Forgotpass from './components/Pages/Forgotpass';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
//import 'react-toastify/dist/ReactToastify.css';
import Home from './Home';
import Regist from './Regist';
import CustomerRegister from './components/CustomerRegister';
import CLogin from './components/Pages/CLogin';
import Chistory from './components/Pages/Bike_Customerdb/Chistory';
import Caddedbike from './components/Pages/Bike_Customerdb/Caddedbike';
import AddBinfo from './components/Pages/Bike_Ownerdb/AddBinfo';
import BikeList from './components/Pages/BikeList';
import Editcust from './components/Pages/Bike_Ownerdb/Editcust';
import Addcust from './components/Pages/Bike_Ownerdb/Addcust';
import Custdetail from './components/Pages/Bike_Ownerdb/Custdetail';
import CbikeList from './components/Pages/Bike_Customerdb/CbikeList';
import Ccustdetail from './components/Pages/Bike_Customerdb/Ccustdetail';
import Logout from './components/Pages/Logout';
import  {AuthProvider} from "./components/AuthContext";
import Custpay from './components/Pages/Bike_Customerdb/Custpay';
import Trackbike from './biketheft2/Trackbike';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "Trackbike",
    element: <Trackbike/>,
  },
  {
    path: "AddBinfo",
    element: <AddBinfo/>,
  },
  {
    path: "Custpay",
    element: <Custpay/>,
  },
  
  {
    path: "Ccustdetail/:id/:vno",
    element: <Ccustdetail/>,
  },
  {
    path: "Logout",
    element: <Logout/>,
  },
  {
    path: "Ccustdetail/:id",
    element: <Ccustdetail/>,
  },
  {
    path: "CbikeList",
    element: <CbikeList/>,
  },
  {
    path: "Custdetail/:id/:vno",
    element: <Custdetail/>,
  },
  {
    path: "Custdetail/:id",
    element: <Custdetail/>,
  },
  {
    path: "Addcust",
    element: <Addcust/>,
  },
  {
    path: "Editcust/:custid",
    element: <Editcust/>,
  },

  {
    path: "BikeList",
    element: <BikeList/>,
  },
  
  {
    path: "Home",
    element: <Home/>,
  },
  {
    path: "Caddedbike",
    element: <Caddedbike/>,
  },
  {
    path: "Chistory",
    element: <Chistory/>,
  },
  {
    path: "CLogin",
    element: <CLogin/>,
  },
  {
    path: "Regist",
    element: <Regist/>,
  },
  {
    path: "BikeCustomerDb",
     element: <BikeCustomerDb/>,
   },
   {
    path: "Forgotpass",
     element: <Forgotpass/>,
   },
   {
    path: "Payment",
     element: <Payment/>,
   },
   {
    path: "Customerform",
     element: <Customerform/>,
   },
   {
    path: "CustFeedback",
     element: <CustFeedback/>,
   },
  
  {
    path: "Feed",
     element: <Feed/>,
   },
  
   {
   path: "History",
    element: <History/>,
  },


  {
    path: "CustomerRegister",
    element: <CustomerRegister/>,
  },
  {
    path: "Carosual",
    element: <Carosual/>,
  },
  {
    path: "BikeOwnerDb",
    element: <BikeOwnerDb/>,
  },
  {
    path: "Login",
    element: <Login/>,
  },
  {
    path: "Dashboard",
    element: <Dashboard/>,
  },
  {
    path: "AboutUs",
    element: <AboutUs/>,
  },
  
  {
    path: "Footer",
    element: <Footer/>,
  },
   {
     path: "AddBike",
     element: <AddBike/>,
   },
   {
    path: "AddedBike",
    element: <AddedBike/>,
  },
  {
    path: "Booking",
    element: <Booking/>,
  },
  
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <RouterProvider router={router} />
   <AuthProvider>
   {/* <BikeList/> */}
    </AuthProvider> 
  </React.StrictMode>
);
reportWebVitals();
