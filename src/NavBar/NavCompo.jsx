import React from "react";
import { FaHome } from "react-icons/fa";
import { SiAboutdotme } from "react-icons/si";
import { IoIosPeople } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { RiDoorLockLine } from "react-icons/ri";
import { IoMdBasket } from "react-icons/io";
import "./NavCompo.css";
import logo from "../images/logo.png";
import { NavLink } from "react-router-dom";
import { useAuth } from "../Components/Auth/Auth";
const NavCompo = () => {
    const activeClassConfig=({isActive}) => {
        return {
          borderBottom:isActive?".5px solid rgb(51, 134, 228)":"none",
            color:isActive?"rgb(51, 134, 228)":"rgb(35, 200, 206)",
            fontWeight: isActive?"bold":"normal",
            TextDecoder: isActive?"none":"underline"
        }
    }
    const auth=useAuth()
    // console.log(auth)
  return (
    <div className="NavDiv">
      <div className="logo">
        <img src={logo} alt="logo" className="logoImage" />
      </div>
      <nav className="navLinkGroup">
        
          <NavLink style={activeClassConfig} className="navLink" to={`/`}>
            <FaHome className="navIcon iconHome" />
          </NavLink>
          <NavLink style={activeClassConfig} className="navLink" to={`/users`}>
             <IoIosPeople  className="navIcon iconHome" />
            </NavLink>
            <NavLink style={activeClassConfig} className="navLink" to={`/about`}>       
            <SiAboutdotme  className="navIcon iconContant" />
            </NavLink>
            <NavLink style={activeClassConfig} className="navLink" to={`/products`}>       
            <IoMdBasket   className="navIcon iconProduct" />
            </NavLink>
         
         
         
          {/* {console.log(auth)} */}
        {
          !auth.user ? (
            <NavLink style={activeClassConfig} className="navLink" to={`/login`}>          
            <RiDoorLockLine  className="navIcon iconLogin" />
          </NavLink>
          ):(
            <div>
   <NavLink style={activeClassConfig} className="navLink" to={`/profile`}>       
            <FaUserCircle className="navIcon iconContant" />
            </NavLink>
           
            </div>

          )
        }
      
       
      </nav>
    </div>
  );
};

export default NavCompo;
