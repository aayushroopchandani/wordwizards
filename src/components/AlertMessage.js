import React from 'react';

export default function Alert({alert}) {
    const capitalize=(word)=>{
        const lower=word.toLowerCase();
        return lower.charAt(0).toUpperCase()+lower.slice(1);
    }
    return (
        <>

        {alert!==null && (<div className={`alert alert-${alert.type} alert-dismissible fade show`} role="alert" style={{margin: 0, padding: '14px', display: 'flex', alignItems: 'center',borderRadius: '0px'}}>
                <strong style={{margin: 0}}>{capitalize(alert.type)}</strong>: {alert.msg}
            </div>)}
        </>
    )
}
