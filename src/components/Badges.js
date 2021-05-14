import React, {useState}from 'react';
import avatarFemale from '../images/avatar/avatar-female.png';

export const BadgesBlock = ()=>{
    const [count, setCount] = useState(5);
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

            
                
            </div>
        </section>
        
    )
}