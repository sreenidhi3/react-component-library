import React from 'react';


const ListRegular =()=>{
    return(
        <section>
            <h4 className="secondary-heading">Simple List </h4>
            <div className="flex">
                <ul className="list">
                    <li className="list-item">Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                    <li className="list-item">Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                    <li className="list-item">Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                    <li className="list-item">Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                </ul>
            </div>
        </section>
        )
}

const ListDetailed=()=>{
    return(
        <section>
            <h4 className="secondary-heading">List with details </h4>
            <div className="flex">
                <ul className="list">
                    <li className="list-item">
                        <h4 className="title">List Title</h4>
                        <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </li>
                    <li className="list-item">
                        <h4 className="title">List Title</h4>
                        <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </li>
                    <li className="list-item">
                        <h4 className="title">List Title</h4>
                        <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </li>
                </ul>
            </div>
        </section>
    )    
}

export const ListBlock =()=>{
    const copyCode=()=>{
        const codeElem = document.querySelector("code");
        codeElem.innerText = `SIMPLE LIST

        <div className="flex">
        <ul className="list">
            <li className="list-item">Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li className="list-item">Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li className="list-item">Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li className="list-item">Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
        </ul>
    </div>
    
    LIST WITH DETAILS
    
    <div className="flex">
    <ul className="list">
        <li className="list-item">
            <h4 className="title">List Title</h4>
            <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </li>
        <li className="list-item">
            <h4 className="title">List Title</h4>
            <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </li>
        <li className="list-item">
            <h4 className="title">List Title</h4>
            <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </li>
    </ul>
</div>

    `;
    document.querySelector(".code").style.background= "rgb(20, 20, 20)";
    }
    return(
        <section className="block">
            <h1>List</h1>
            <p>Lists are used to present information in well formed and semantic way. </p> 
            <div className="component-container">
                <ListRegular/>
                <ListDetailed/>
                <div className="code-block">
                    <span className="badge badge-secondary-outline" onClick={copyCode}>Show Code</span>
                </div>
                <div className='code'><code>  </code></div> 
            </div>
        </section>
        )
}
