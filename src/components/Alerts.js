// import { computeHeadingLevel } from '@testing-library/dom';

import React, {useState}from 'react';

const Alert = ({alert}) =>{
    let alertType = "alert " + "alert-"+alert;
    console.log(alertType);
    return(
        <div className ={alertType}>
            {/* {console.log(alert)} */}
            This is a {alert} alert.
        </div>
    );
};

export const Alerts = () =>{
    const alertTypes = ["primary", "warning", "success", "danger","secondary"];
    return(
        alertTypes.map((alert)=>{
            return <Alert alert={alert}/>
        })
    );
};

export const AlertInfo =() =>{
    return(
        <div className="alert alert-info">
            <h3>Well done!</h3>
            <p>Yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can use this kind of long alert messages when required.</p>
                <hr style={{backgroundColor: "#c1f3fc", border: "1px solid #c1f3fc", padding:"0"}}/>
                <p>Be sure to keep things nice and tidy. Use enough spacing.</p>
        </div>
    );
}

export const AlertClose =({alertClosed, setAlertClosed}) =>{
    return(
        <div className="alert alert-info">
            <button className="btn-alert-close" onClick={(e)=>setAlertClosed(!alertClosed)}><h3>x</h3></button>
            <h3>Well done!</h3>
            
            <p>Yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can use this kind of long alert messages when required.</p>
                <hr style={{backgroundColor: "#c1f3fc", border: "1px solid #c1f3fc", padding:"0"}}/>
                <p>Be sure to keep things nice and tidy. Use enough spacing.</p>
        </div>
    );
}

export const AlertBlock = ()=>{
    const [alertClosed, setAlertClosed] = useState(false);
    return (
    <section className="alert-block">
        <h1>Alerts</h1>
        <p>Alert dialog boxes are used to give feedback to the user for his actions.</p> 
        <div className = "alert-container">
            <Alerts/>
            <AlertInfo/>
            {!alertClosed && <AlertClose setAlertClosed={setAlertClosed} alertClosed={alertClosed}/>}
            <button className="btn-show-alert" onClick={()=>{setAlertClosed(false)}}>Show Closed Alert</button>
        </div>
    </section>
    )
}