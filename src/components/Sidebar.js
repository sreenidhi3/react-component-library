import React  from 'react';

import { Link } from "react-router-dom";
export const Sidebar=()=>{
    return(
        <ul className="sidebar">
            <li className="nav-brand"><h3>My UI</h3></li>
            <li className ="sidebar-item"><Link  to="/">Home</Link></li>
            <li className ="sidebar-item"><Link to="/accordion">Accordion</Link></li>
            <li className ="sidebar-item"><Link to="/alert">Alert</Link></li>
            <li className ="sidebar-item"><Link to="/avatar">Avatar</Link></li>
            <li className ="sidebar-item"><Link to="/badge">Badges</Link></li>
            <li className ="sidebar-item"><Link to="/button">Buttons</Link></li>
            <li className ="sidebar-item"><Link to="/callout">Callouts</Link></li>
            <li className ="sidebar-item"><Link to="/card">Cards</Link></li>
            <li className ="sidebar-item"><Link to="/input">Inputs</Link></li>
            <li className ="sidebar-item"><Link to="/list">Lists</Link></li>
            <li className ="sidebar-item"><Link to="/navbar">Navbar</Link></li>
            <li><p>© My UI</p></li>
        </ul>
    )
}