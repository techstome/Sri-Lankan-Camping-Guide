import "./navbar.css"
import logo from "./logo.png";
import {Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({type}) => {

  const [destination, setDestination] = useState('')

  const navigate = useNavigate()

  const handleSearch = () => {
    navigate('/list', {state: destination})
  }
  return (
    <div className="navbar">
      <div className="navContainer">
      <Link to='/'>
       <span className="logo">
       <b>Sri Lankan<br/> Camping Guide</b>
       </span>
       </Link>
      <img src={logo} className="appLogo" alt="logo"  />
         
         
        
        <div className="navItems">
          <div className="navBtns">
          <Link to="/Roleselector"><button className="navButton"><b>Sign in</b></button></Link>
          <Link to="/RoleselectorReg"><button className="navButton"><b>Register</b></button></Link>
          </div>
          { type !=='list' && <><div className="searchBox">
            <input type="text" onChange={e=>setDestination(e.target.value)} className="searchBar" placeholder="Location"/>
            <button className="searchBtn" onClick={handleSearch}><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
          </div>
          </>}
          
        </div>
      </div>
    </div>
    
    
  )
}

export default Navbar