import React,{useEffect} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Toast({type,message}) {
    useEffect(() => {
        if (message){
            toast[type](message);
        }
        
    }, [type, message])

    return ( 
        <>
            <ToastContainer
                position="bottom-center"
                autoClose={5000}
                hideProgress={false}
                newsOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </>
     );
}

export default Toast;