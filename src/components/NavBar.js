import React from 'react';

export const NavBar = ()=>{

    const NavWithBrand = ()=>{
        return(
            <nav className="nav nav-menu flex ">
                    <div className="nav-brand">
                    <h3><a className="nav-tab">Brand Name</a></h3>
                    </div>
                        <ul className="horizontal-list">
                            <li>
                                <a className="nav-tab"><span className="icon"></span><span className="tab">Home</span></a>
                                <div className="active-tab"></div>
                            </li>
                            <li>
                                <a className="nav-tab"><span className="icon"></span><span className="tab">Messages</span></a>
                                <div className="active-tab"></div>
                            </li>
                            <li>
                                <a className="nav-tab"><span className="icon"></span><span className="tab">Account</span></a>
                                <div className="active-tab"></div>
                            </li>
                            <li>
                                <a className="nav-tab"><span className="icon"></span><span className="tab">Settings</span></a>
                                <div className="active-tab"></div>
                            </li>
                        </ul>
                    </nav>
            )
    }

    const SimpleNav = ()=>{
        return(
            <nav className="nav nav-menu">
                    <ul className="horizontal-list">
                        <li>
                            <a className="nav-tab"><span className="icon"></span><span className="tab">Home</span></a>
                            <div className="active-tab"></div>
                        </li>
                        <li>
                            <a className="nav-tab"><span className="icon"></span><span className="tab">Messages</span></a>
                            <div className="active-tab"></div>
                        </li>
                        <li>
                            <a className="nav-tab"><span className="icon"></span><span className="tab">Account</span></a>
                            <div className="active-tab"></div>
                        </li>
                        <li>
                            <a className="nav-tab"><span className="icon"></span><span className="tab">Settings</span></a>
                            <div className="active-tab"></div>
                        </li>
                    </ul>
                </nav>
            )
    }
    
    const copyCode=()=>{
        const codeElem = document.querySelector("code");
        codeElem.innerText = `SIMPLE NAVBAR
        
        <nav className="nav nav-menu">
        <ul className="horizontal-list">
        <li>
        <a className="nav-tab"><span className="icon"></span><span className="tab">Home</span></a>
        <div className="active-tab"></div>
        </li>
        <li><a className="nav-tab"><span className="icon"></span><span className="tab">Messages</span></a>
        <div className="active-tab"></div>
        </li>
        <li>
        <a className="nav-tab"><span className="icon"></span><span className="tab">Account</span></a>
        <div className="active-tab"></div>
        </li>
        <li>
        <a className="nav-tab"><span className="icon"></span><span className="tab">Settings</span></a>
        <div className="active-tab"></div>
        </li>
        </ul>
        </nav>

        NAVBAR WITH BRAND

        <nav className="nav nav-menu flex ">
        <div className="nav-brand">
        <h3><a className="nav-tab">Brand Name</a></h3>
        </div>
        <ul className="horizontal-list">
        <li>
        <a className="nav-tab"><span className="icon"></span><span className="tab">Home</span></a>
        <div className="active-tab"></div>
        </li>
        <li>
        <a className="nav-tab"><span className="icon"></span><span className="tab">Messages</span></a>
        <div className="active-tab"></div>
        </li>
        <li>
        <a className="nav-tab"><span className="icon"></span><span className="tab">Account</span></a>
        <div className="active-tab"></div>
        </li>
        <li>
        <a className="nav-tab"><span className="icon"></span><span className="tab">Settings</span></a>
        <div className="active-tab"></div>
        </li>
        </ul>
        </nav>
    `;
    document.querySelector(".code").style.background= "rgb(20, 20, 20)";
    }
    return(
        <section className="block">
            <h1>Navigation Bar</h1>
            <p>Navigation Bar is used to navigate across the application/website. It is usually placed at the top of the page.</p> 
            <div className="component-container">
                <h4 className="secondary-heading">Simple Navbar</h4>
                <SimpleNav/>
                
                <h4 className="secondary-heading">Navbar with Brand</h4>
                <NavWithBrand/>
                    
                <div className="code-block">
                    <span className="badge badge-secondary-outline" onClick={copyCode}>Show Code</span>
                </div>
                <div className='code'><code>  </code></div>
            </div>
            
    </section>
    )
}