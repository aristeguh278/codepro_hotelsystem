import { Snackbar,Alert } from '@mui/material'
import React from 'react'
import { useValue } from '../../context/ContextProvider'

const Notifications = () => {
  const {state:{alert},dispatch}= useValue()

  const handleClose=(event,reason)=>{
     if(reason==='clickaway') return;
    dispatch({type:'UPDATE_ALERT',payload:{...alert,open:false}})
  }
  return (
    <Snackbar
        open={alert.open}
        autoHideDuration={2500}
        onClose={handleClose}
        anchorOrigin={{vertical:'top',horizontal:'right'}}
    >
      <Alert onClose={handleClose} 
      severity={alert.severity} 
      elevation={0}
      variant="filled"
      sx={{width:'100%'}}>
        {alert.message}
      </Alert>
    </Snackbar>
  )
}

export default Notifications
