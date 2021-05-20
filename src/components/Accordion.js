import React from "react";


const AccordianElement =({title})=>{
    const toggleAccordian=(e)=>{
        // console.log('cliakced');
        // console.log(e);
        e.target.classList.toggle("active-accordion-element")
        let item = e.target.nextElementSibling;
        if (item.style.maxHeight){
            item.style.maxHeight = null;
        }else{
            item.style.maxHeight = item.scrollHeight +"px";
        }
    }
    return (
        <div>
            <button onClick ={(e)=>toggleAccordian(e)} className="accordion-element" >{title}</button>
            {console.log(title)}
            <div className="accordion-content">
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed rhoncus lectus. Suspendisse sit amet dolor ante. Maecenas sagittis sed tortor rhoncus aliquam. Vestibulum pretium turpis quis sem facilisis hendrerit. Vivamus gravida quam accumsan elementum laoreet. Maecenas ullamcorper felis risus, eu interdum arcu hendrerit suscipit. Ut iaculis interdum massa.
            </p>
            </div>
        </div>
       
)}

export const AccordionBlock = ()=>{
    const titles = ["Collapsible Item 1", "Collapsible Item 2", "Collapsible Item 3"];
    const copyCode=()=>{
            const codeElem = document.querySelector("code");
            const code = document.querySelector("article").outerHTML;;
            codeElem.innerText = `<article class="accordion-container">
            <div>
                <button class="accordion-element">Collapsible Item 1</button>
                <div class="accordion-content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed rhoncus lectus. Suspendisse sit amet dolor ante. Maecenas sagittis sed tortor rhoncus aliquam. Vestibulum pretium turpis quis sem facilisis hendrerit. Vivamus gravida quam accumsan elementum laoreet. Maecenas ullamcorper felis risus, eu interdum arcu hendrerit suscipit. Ut iaculis interdum massa.</p>
                </div>
            </div>
            <div>
                <button class="accordion-element">Collapsible Item 2</button>
                <div class="accordion-content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed rhoncus lectus. Suspendisse sit amet dolor ante. Maecenas sagittis sed tortor rhoncus aliquam. Vestibulum pretium turpis quis sem facilisis hendrerit. Vivamus gravida quam accumsan elementum laoreet. Maecenas ullamcorper felis risus, eu interdum arcu hendrerit suscipit. Ut iaculis interdum massa.</p>
                </div>
            </div>
            <div>
                <button class="accordion-element">Collapsible Item 3</button>
                <div class="accordion-content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed rhoncus lectus. Suspendisse sit amet dolor ante. Maecenas sagittis sed tortor rhoncus aliquam. Vestibulum pretium turpis quis sem facilisis hendrerit. Vivamus gravida quam accumsan elementum laoreet. Maecenas ullamcorper felis risus, eu interdum arcu hendrerit suscipit. Ut iaculis interdum massa.</p>
                </div>
            </div>
        </article>`;
        document.querySelector(".code").style.background= "rgb(20, 20, 20)";
        }
    return(
    <section className = "block">
        <h1>Accordion</h1>
        <p>Accordions are collapsible component. Accordions shorten pages and reduces scrolling.</p>
        <div className="component-container">
            <article className="accordion-container">
            {
                titles.map((title)=><AccordianElement key ={title} title={title}/>)
            }
            </article>
            <div className="code-block">
                <span className="badge badge-secondary-outline" onClick={copyCode}>Show Code</span>
            </div>
            <div className='code'><code>  </code></div>
       </div>
    </section>
    )
}

    