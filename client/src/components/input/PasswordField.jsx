import { InputAdornment, TextField,IconButton } from '@mui/material'
import {VisibilityOff,Visibility} from "@mui/icons-material"
import React,{useState} from 'react'

const PasswordField = ({passwordRef,id='password',
label='Password'}) => {

    const [showPassword,setShowPassword]= useState(false);

    const handleClick = ()=>{
        setShowPassword(!showPassword)
    }

    const handleMouseDown=(e)=>{
        e.preventDefault();
    }

    return (
    <TextField
    autoFocus
    margin='normal'
    variant='standard'
    id={id}
    label={label}
    type={showPassword?'text':'password'}
    fullWidth
    inputRef={passwordRef}
    required
    InputProps={{
        endAdornment:(
            <InputAdornment position='end'>
                <IconButton onClick={handleClick} onMouseDown={handleMouseDown}>
                    {showPassword ?<VisibilityOff/>:<Visibility/>}
                </IconButton>
            </InputAdornment>
        )
    }}
    />
  )
}

export default PasswordField
