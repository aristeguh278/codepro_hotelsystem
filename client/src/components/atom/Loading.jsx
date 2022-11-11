import { Backdrop, CircularProgress } from '@mui/material'
import React from 'react'
import { useValue } from '../../context/ContextProvider'

const Loading = () => {
    const {state:{loading}}= useValue()
  return (
    <Backdrop 
     sx={{zIndex:(theme)=>theme.zIndex.modal+1}}
    open={loading}>
        <CircularProgress sx={{color:'white'}}/>
    </Backdrop>
  )
}

export default Loading
