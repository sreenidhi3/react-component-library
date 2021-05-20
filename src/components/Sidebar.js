import React  from 'react';
import ".././lush-ui.png";

import { Link } from "react-router-dom";
export const Sidebar=()=>{
    return(
        <ul className="sidebar">
            <li className="nav-brand"><Link to="/"><img className="sidebar-logo"src="lush-ui.png" alt=""></img><h3>Lush UI</h3></Link></li>
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
            <li><p>© Lush UI by Sreenidhi Bendre</p></li>
        </ul>
    )
}