import React from 'react';
import avatarFemale from '../images/avatar/avatar-female.png';
import avatarMale from '../images/avatar/avatar-male.png';

export const AvatarBlock = ()=>{
    const copyCode = ()=>{
        const codeElem = document.querySelector("code");
        const text= `<img className="avatar sm-avatar" src={avatarFemale} alt="avatar"/>
                <img className="avatar md-avatar" src={avatarMale} alt="avatar"/>
                <img className="avatar lg-avatar" src={avatarFemale} alt="avatar"/>
                <img className="avatar xl-avatar" src={avatarMale} alt="avatar"/>
        

                <span><img className="avatar md-avatar" src={avatarFemale} alt="avatar"/><span className="avatar-badge avatar-active"></span></span>
                <span><img className="avatar md-avatar" src={avatarFemale} alt="avatar"/><span className="avatar-badge avatar-success"></span></span>
                <div><img className="avatar md-avatar" src={avatarFemale} alt="avatar"/><span className="avatar-badge avatar-busy"></span></div>
                <div><img className="avatar md-avatar" src={avatarFemale} alt="avatar"/><span className="avatar-badge avatar-danger"></span></div>
                
        `;
        codeElem.innerText = text;
        document.querySelector(".code").style.background= "rgb(20, 20, 20)";
    }
    return (
        <section className="block">
            <h1>Avatars</h1>
            <p>Avatars are used to represent an user, display profile photo, icons or initials.</p> 
            <div className="component-container">
                <div className="flex flex-row-wrap">
                <img className="avatar sm-avatar" src={avatarFemale} alt="avatar"/>
                <img className="avatar md-avatar" src={avatarMale} alt="avatar"/>
                <img className="avatar lg-avatar" src={avatarFemale} alt="avatar"/>
                <img className="avatar xl-avatar" src={avatarMale} alt="avatar"/>
                </div>
                <div>
                <h4>Avatars with badges</h4>
                <div className="flex flex-row-wrap">
                <span><img className="avatar md-avatar" src={avatarFemale} alt="avatar"/><span className="avatar-badge avatar-active"></span></span>
                <span><img className="avatar md-avatar" src={avatarFemale} alt="avatar"/><span className="avatar-badge avatar-success"></span></span>
                <div><img className="avatar md-avatar" src={avatarFemale} alt="avatar"/><span className="avatar-badge avatar-busy"></span></div>
                <div><img className="avatar md-avatar" src={avatarFemale} alt="avatar"/><span className="avatar-badge avatar-danger"></span></div>
                </div>
                </div>
                <div className="code-block">
                    <span className="badge badge-secondary-outline" onClick={copyCode}>Show Code</span>
                </div>
                <div className='code'><code>  </code></div>
            </div>

        </section>
        
    )
}