import React from 'react';

export const InputBlock =()=>{
    return(
        <section className="block">
            <h1>Inputs</h1>
            <p>Input is used to take input from user in a form</p> 
            <div className="component-container">
                <div>
                    <label for="input">Name</label>
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
            </div>
        </section>
        )
}