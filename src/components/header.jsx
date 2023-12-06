import React, { useState } from "react";
import './header.css';

const Header = () => {
    const currentDate = new Date();
    const currentTime = currentDate.toLocaleTimeString();
    const version = "1.0.0";
    const [showDropdown, setShowDropdown] = useState(false);

    const handleDropdownToggle = () => {
        setShowDropdown(!showDropdown);
    };

        return (
        <div className="header" style={{ background: "#0f0d3b", height: "50px", color: "#f5dd05", display: "flex", justifyContent: "space-between", alignItems: "center", textAlign: "center", fontSize: "25px",position:"fixed",width:"100%" }}>
            <p>{currentDate.toDateString()}</p>
            <p>{currentTime}</p>
            <p>{version}</p>
          
            <div className="dropdown">
                <button className="dropbtn" onClick={handleDropdownToggle}>
                  menu
                  {/* <img src={Menu} style={{maxWidth:"20px"}} /> */}
                </button>
                {showDropdown && (
                    <div className="dropdown-content">
                        <ul>
                            <li ><a href="/" style={{color:"#fff",textDecoration:"none",textAlign:"left"}}>Home</a></li>
                            <li ><a href="/students" style={{color:"#fff",textDecoration:"none",textAlign:"left"}}>Admin Staff</a></li>
                            <li ><a href="./admin"  style={{color:"#fff",textDecoration:"none",textAlign:"left"}}>Registrar</a></li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Header;
