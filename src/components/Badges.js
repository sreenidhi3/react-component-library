import React from 'react';
import avatarFemale from '../images/avatar/avatar-female.png';

export const BadgesBlock = ()=>{
    const count = 5;
    const copyCode=()=>{
        const codeElem = document.querySelector("code");
        codeElem.innerText = `PILL BADGES
        
        <span className="badge badge-primary">Primary</span>
        <span className="badge badge-secondary">Info</span>
        <span className="badge badge-success">Success</span>
        <span className="badge badge-warning">Warning</span>
        <span className="badge badge-error">Error</span>
        <span className="badge badge-info">Info</span>
    
        BADGE WITH OUTLINE

        <span className="badge badge-primary-outline">Primary</span>
        <span className="badge badge-secondary-outline">Info</span>
        <span className="badge badge-success-outline">Success</span>
        <span className="badge badge-warning-outline">Warning</span>
        <span className="badge badge-error-outline">Error</span>
        <span className="badge badge-info-outline">Info</span>

        BADGE WITH COUNT 

        <span className="badge badge-counter">Notification<span className="badge-count"><small>{count}</small></span></span>

        BADGES ON AVATAR
        
        <img className="avatar md-avatar" src={avatarFemale} alt="avatar"/><span className="avatar-badge avatar-active"></span>
        `;
        document.querySelector(".code").style.background= "rgb(20, 20, 20)";
    }
    return (
        <section className="block">
            <h1>Badges</h1>
            <p> Badges are used to highlight the component's status. They are also used to add additional information and to cateorogize the components. </p> 
            <div className="component-container">
            <div>
                <h4 className="secondary-heading">Pill Badges</h4>
                <div className="flex flex-row-wrap">
                    <span className="badge badge-primary">Primary</span>
                    <span className="badge badge-secondary">Info</span>
                    <span className="badge badge-success">Success</span>
                    <span className="badge badge-warning">Warning</span>
                    <span className="badge badge-error">Error</span>
                    <span className="badge badge-info">Info</span>
                </div>
            </div>
            
            <div>
            <h4 className="secondary-heading">Badges with outline</h4>
            <div className="flex flex-row-wrap">
                <span className="badge badge-primary-outline">Primary</span>
                <span className="badge badge-secondary-outline">Info</span>
                <span className="badge badge-success-outline">Success</span>
                <span className="badge badge-warning-outline">Warning</span>
                <span className="badge badge-error-outline">Error</span>
                <span className="badge badge-info-outline">Info</span>
            </div>
            </div>

            <div>
            <h4 className="secondary-heading">Badges with count</h4>
                <span className="badge badge-counter">Notification<span className="badge-count"><small>{count}</small></span></span>
            </div>

            <div>
            <h4 className="secondary-heading">Badges on Avatar</h4>
            <img className="avatar md-avatar" src={avatarFemale} alt="avatar"/><span className="avatar-badge avatar-active"></span>
            </div>

            <div className="code-block">
                    <span className="badge badge-secondary-outline" onClick={copyCode}>Show Code</span>
                </div>
                <div className='code'><code>  </code></div>
            </div>
        </section>
        
    )
}