import { Google } from '@mui/icons-material'
import { Button } from '@mui/material'
import React from 'react'
import GoogleLogo from "../../resources/images/google.png";

const GoogleOneTapLogin = () => {
  return (
   <Button variant='outlined' color='primary' startIcon={<img style={{width:'45px'}}src={GoogleLogo}/>}>
    Login With Google
   </Button>
  )
  
}

export default GoogleOneTapLogin
