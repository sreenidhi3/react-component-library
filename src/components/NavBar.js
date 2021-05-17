import React from 'react';

const NavLink = ({key, navTitle})=>{
    return(
        <li key={key}>
            <a class="nav-tab">
                <span class="icon"></span>
                <span class="tab">{navTitle}</span>
            </a>
            <div class="active-tab"></div>
        </li>
    )}

export const NavBar = ()=>{
    const NavTitles = ["Home", "Messages", "Account", "Settings"];
    return(
        <section className="block">
            <h1>Navigation Bar</h1>
            <p>Navigation Bar is used to navigate across the application/website. It is usually placed at the top of the page.</p> 
            <div className="component-container">
                <h4 className="secondary-heading">Simple Navbar</h4>
                <nav class="nav nav-menu">
                    <ul class="horizontal-list">
                        {
                            NavTitles.map((navTitle)=><NavLink key ={navTitle} navTitle={navTitle}/>)
                        }
                    </ul>
                </nav>
                <div>
                <h4 className="secondary-heading">Navbar with Brand</h4>
                <nav class="nav nav-menu flex ">
                    <div className="nav-brand"><h3><a class="nav-tab">Brand Name</a></h3></div>
                    <ul class="horizontal-list">
                        {
                            NavTitles.map((navTitle)=><NavLink key ={navTitle} navTitle={navTitle}/>)
                        }
                    </ul>
                </nav>
            </div>
            </div>
            
    </section>
    )
}