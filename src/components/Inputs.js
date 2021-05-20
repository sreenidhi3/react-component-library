import React from 'react';

export const InputBlock =()=>{
    const copyCode=()=>{
        const codeElem = document.querySelector("code");
        codeElem.innerText = `<div>
        <label for="input">Name</label>
        <input className="input" type="text" id="input" placeholder="Name"></input>
    </div>
   
    <div className="input-group">
        <div className="prepend">Email</div>
        <input className="input input-prepend" type="text" placeholder="Email"></input>
    </div>
    
    <div className="input-group">
        <input className="input input-append" type="text" placeholder="Amount"></input>
        <div className="append">Rs</div>
    </div>
    `;
    document.querySelector(".code").style.background= "rgb(20, 20, 20)";
    }
    return(
        <section className="block">
            <h1>Inputs</h1>
            <p>Input is used to take input from user in a form</p> 
            <div className="component-container">
                <div>
                    <label htmlFor="input">Name</label>
                    <input className="input" type="text" id="input" placeholder="Name"></input>
                </div>
                <br/>
                <div className="input-group">
                    <div className="prepend">Email</div>
                    <input className="input input-prepend" type="text" placeholder="Email"></input>
                </div>
                <br/>
                <div className="input-group">
                    <input className="input input-append" type="text" placeholder="Amount"></input>
                    <div className="append">Rs</div>
                </div>
                <div className="code-block">
                    <span className="badge badge-secondary-outline" onClick={copyCode}>Show Code</span>
                </div>
                <div className='code'><code>  </code></div> 
            </div>
        </section>
        )
}