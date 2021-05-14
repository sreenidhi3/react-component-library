import React, {useState}from 'react';
import avatarFemale from '../images/avatar/avatar-female.png';
import avatarMale from '../images/avatar/avatar-male.png';

export const AvatarBlock = ()=>{
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
                
            </div>
        </section>
        
    )
}