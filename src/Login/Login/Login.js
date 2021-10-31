import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
// import useFirebase from '../../hooks/useFirebase';
import './Login.css'

const Login = () => {
    const history = useHistory()
    const location = useLocation()
    const redirect_uri = location.state?.from || '/home';
    const { signInWithGoogle, setError, setIsLoading, error } = useAuth();

    const handleGoogleLogIn = () => {
        signInWithGoogle()
            .then(result => {
                history.push(redirect_uri)
            })
            .catch(eror => {
                const errormessage = error.message;
                setError(errormessage)
            })
            .finally(() => setIsLoading(false));
    }


    return (
        <div className='login-contailer'>
            <h2 className='login-title pt-5'>Welcome to Holiays Fanacy Travel</h2>
            <img className='login-logo my-5' src="https://i.ibb.co/y0vcGkb/logo.png" alt="" />
            <button className='google-btn' onClick={handleGoogleLogIn}><img className='google' src="https://i.ibb.co/JcYqDsN/ggll.png" alt="" /> Login With Google</button>


        </div>
    );
};

export default Login;
