import React from 'react';

export const CalloutBlock =()=>{
    const copyCode=()=>{
        const codeElem = document.querySelector("code");
        codeElem.innerText = `<div className="callout" >
        <h3 className="secondary-heading">Callout Title</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed rhoncus lectus. Suspendisse sit amet dolor ante. Maecenas sagittis sed tortor rhoncus aliquam. Maecenas ullamcorper felis risus, eu interdum arcu hendrerit suscipit. Ut iaculis interdum massa.</p>
    </div>`;
    document.querySelector(".code").style.background= "rgb(20, 20, 20)";
    }
    return(
        <section className="block">
            <h1>Callouts</h1>
            <p>Callouts give users a visual cue that the information is important. Potential uses include important announcements, editorial comment or emergency information</p> 
            <div className="component-container">
                <div className="callout" >
                    <h3 className="secondary-heading">Callout Title</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed rhoncus lectus. Suspendisse sit amet dolor ante. Maecenas sagittis sed tortor rhoncus aliquam. Maecenas ullamcorper felis risus, eu interdum arcu hendrerit suscipit. Ut iaculis interdum massa.</p>
                </div>
                <div className="code-block">
                    <span className="badge badge-secondary-outline" onClick={copyCode}>Show Code</span>
                </div>
                <div className='code'><code>  </code></div>
            </div>
        </section>
        )
}