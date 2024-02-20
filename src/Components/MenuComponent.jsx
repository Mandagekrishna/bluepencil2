import React from "react";
import { Link } from "react-router-dom";

function Menu(){
    return(
        <div style={{display:'flex'}}>
        <ul >
            <li style={{float:'left', padding:'20px', listStyleType:'none'}}><Link to="/">Home</Link></li>
            <li style={{float:'left',  padding:'20px' ,listStyleType:'none'}}><Link to="/about">About</Link> </li>
            <li style={{float:'left',  padding:'20px',listStyleType:'none'}}><Link to="/contact">Contact</Link></li>
        </ul> 
        </div>
    )
}

export default Menu;