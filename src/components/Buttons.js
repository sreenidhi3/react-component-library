import React, {useState}from 'react';

export const ButtonBlock = ()=>{
    return (
        <section className="block">
            <h1>Buttons</h1>
            <p>Buttons are used to trigger events or actions, such as submit, add, open, close and many others.</p> 
            <div className="component-container">
                <div>
                    <h4 className="secondary-heading">Outline Buttons</h4>
                    <div className="flex flex-row-wrap">
                        <button className="btn btn-primary-outline">Primary</button>
                        <button className="btn btn-secondary-outline">Secondary</button>
                        <button className="btn btn-success-outline">Success</button>
                        <button className="btn btn-warning-outline">Warning</button>
                        <button className="btn btn-error-outline">Error</button>
                        <button className="btn btn-info-outline">Info</button>
                    </div>
                    <h4 className="secondary-heading">Solid Buttons</h4>
                    <div className="flex flex-row-wrap">
                        <button className="btn btn-primary">Primary</button>
                        <button className="btn btn-secondary">Secondary</button>
                        <button className="btn btn-success">Success</button>
                        <button className="btn btn-warning">Warning</button>
                        <button className="btn btn-error">Error</button>
                        <button className="btn btn-info">Info</button>
                    </div>
                    <h4 className="secondary-heading">Buttons Variations</h4>
                    <div className="flex flex-row-wrap">
                        <button className="btn btn-info btn-disabled">Info</button>
                        <button className="btn btn-primary btn-floating-action">+</button>
                    </div>
                </div>
                
            </div>
        </section>
        
    )
}