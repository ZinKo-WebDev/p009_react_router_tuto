import "./App.css";
import React from "react";
import NavCompo from "./NavBar/NavCompo";
// import About from "./Components/About/About";
const LazyAboutPage=React.lazy(() => import("./Components/About/About"))
import Home from "./Components/Home/Home";
import { Route, Routes } from "react-router-dom";
import Contant from "./Components/Contant/Contant";
import Login from "./Components/Login/Login";
import OrderSummary from "./Components/OrderSummary/OrderSummary";
import NoMatchRoute from "./NoMatchRoute/NoMatchRoute";
import Products from "./Components/Products/Products";
import FeatureProduct from "./Components/Products/FeatureProduct";
import NewProduct from "./Components/Products/NewProduct";
import Users from "./Users/Users";
import UserDatails from "./Components/UserDetails/UserDatails";
import Admin from "./Components/Admin/Admin";
import Profile from "./Components/Login/Profile";
import { AuthProvider } from "./Components/Auth/Auth";
import RequireAuth from "./Components/Auth/RequireAuth";


const App = () => {
  return (
    <AuthProvider>
    <div className="App">
      <NavCompo></NavCompo>
  

      <Routes>
        <Route path="/" element={<Home></Home>} />
        {/* <Route path="/about" element={<About></About>} /> */}
       
        <Route path="/about" element={<RequireAuth><React.Suspense fallback="Loading..."><LazyAboutPage/></React.Suspense></RequireAuth> }/>

        <Route path="/users" element={<RequireAuth><Users></Users></RequireAuth>}>
        <Route path=":userId" element={<UserDatails></UserDatails>} />
          <Route path="admin" element={<Admin></Admin>} />
        </Route>

        <Route path="/contant" element={<Contant></Contant>} />

        <Route path="/products" element={<RequireAuth><Products></Products></RequireAuth>}>
          <Route index element={<FeatureProduct></FeatureProduct>} />
          <Route path="feature" element={<FeatureProduct />} />
          <Route path="new" element={<NewProduct></NewProduct>} />
        </Route>
        
        <Route path="/order-summary" element={<RequireAuth><OrderSummary></OrderSummary>  </RequireAuth>} />

      

        <Route  path="/login" element={<Login></Login>} />

        <Route path="/profile" element={<RequireAuth><Profile></Profile></RequireAuth>} />

        <Route path="*" element={<NoMatchRoute></NoMatchRoute>} />

      </Routes>
    
    </div>
    </AuthProvider>
  );
};

export default App;
