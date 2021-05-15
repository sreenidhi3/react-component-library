import React, {useState}from 'react';
import Dog from "../images/pictures/dog.png";

const HorizontalCard =()=>{
    return(
        <section>
            <h4 className="secondary-heading">Horizontal Image Cards </h4>
                <div>
                    <div className="card-horizontal">
                        <div className="card-image-h">
                            <img src={Dog} alt="dog-picture" ></img>
                        </div>
                        <div className="card-content-h"><h5 className="card-title">Card Title</h5>
                            <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <br/><div className="card-btn"><button class="btn btn-primary btn-full">Add</button></div>
                        </div>
                    </div>
                </div> 
        </section>
        );
}

const TextCard=()=>{
    return(
        <section>
            <h4 className="secondary-heading">Text Cards</h4>
            <div className="card">
                <h3 className="card-title">Card Title</h3>
                <h5 className="card-subtitle">Card Subtitle</h5>
                <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
                <div className="card-link-block">
                    <a href="#">Link-1</a>
                    <a href="#">Link-2</a>
                </div>
            </div>
        </section>
        );

}
const VerticalCard=()=>{
    return(
        <section>
            <h4 className="secondary-heading">Vertical Image Cards </h4>
                <div>
                    <div className="card card-regular">
                        <div className="card-image"><img src={Dog} alt="dog-picture" ></img></div>
                        <h5 className="card-title">Card Title</h5>
                        <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <br/><div className="card-btn"><button class="btn btn-primary btn-full">Add</button></div>
                    </div>
                </div>
        </section>
        );

}

export const CardBlock = ()=>{
    return (
        <section className="block">
            <h1>Cards</h1>
            <p> A card is a flexible and extensible content container. They are used to display user or product information and most widely used in Ecommerce, Portfolio and Blog websites. </p> 
            <div className="component-container">
                <TextCard/>
                <VerticalCard/>
                <HorizontalCard/>    
            </div>
        </section>
        
    )
}