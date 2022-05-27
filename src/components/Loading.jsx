import React from 'react';
import spin from '../assets/img/spin.svg';
import loading from './Loading.css'
function Loading() {
    return ( 
        <>
             <div className="loading">
                <img src={spin} alt="spin..." />
             </div>
        </>
     );
}

export default Loading;