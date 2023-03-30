import React from 'react'
import './style.css'
import Button from '@mui/material/Button';
import { auth, provider } from '../../firebase';
import { useDispatch } from 'react-redux';
import { login } from '../../features/userSlice';


function Login() {
    const dispatch = useDispatch();
    const signIn = () => {
        auth.signInWithPopup(provider)
        .then(({user})=>{
            dispatch(login({
                displayName: user.displayName,
                email: user.email,
                photoUrl: user.photoURL,

            }))
        })
        .catch(error => alert(error.message))
    }
  return (
    <div className='login'>
        <div className="login__container">
            <img src="https://logodownload.org/wp-content/uploads/2018/03/gmail-logo-1-1.png" alt="" />
            <Button variant='contained' color='primary' onClick={signIn}>Login</Button>
        </div>
    </div>
  )
}

export default Login