import { Google } from '@mui/icons-material'
import { Button } from '@mui/material'
import React,{useState} from 'react'
import { useValue } from '../../context/ContextProvider';
import GoogleLogo from "../../resources/images/google.png";
import jwtDecode from 'jwt-decode';

const GoogleOneTapLogin = () => {
  const {dispatch}= useValue()
  const [disabled,setDisabled]= useState(false);

  const handleResponse = (response) => {
    const token = response.credential;
    const decodedToken = jwtDecode(token);
    const { sub: id, email, name, picture: photoURL } = decodedToken;
    dispatch({
      type: 'UPDATE_USER',
      payload: { id, email, name, photoURL, token, google: true },
    });
    dispatch({ type: 'CLOSE_LOGIN' });
  };
  const handleGoogleLogin = () => {
    setDisabled(true);
    try {
      window.google.accounts.id.initialize({
        client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
        callback: handleResponse,
      });
      window.google.accounts.id.prompt((notification) => {
        if (notification.isNotDisplayed()) {
          throw new Error('Try to clear the cookies or try again later!');
        }
        if (
          notification.isSkippedMoment() ||
          notification.isDismissedMoment()
        ) {
          setDisabled(false);
        }
      });
    } catch (error) {
      dispatch({
        type: 'UPDATE_ALERT',
        payload: { open: true, severity: 'error', message: error.message },
      });
      console.log(error);
    }
  };
  return (
   <Button variant='outlined'
    color='primary' 
    disabled={disabled}
    onClick={handleGoogleLogin}
    startIcon={disabled?<Google/>:<img style={{width:'45px'}}src={GoogleLogo}
   />}>
    Login With Google
   </Button>
  )
  
}

export default GoogleOneTapLogin
