import React,{useRef,useState,useEffect}from 'react'
import { Button, Dialog, DialogActions,
  Box,
  DialogContent,
   DialogTitle,
    IconButton, TextField } from '@mui/material'
import { Close ,Send} from "@mui/icons-material";
import { useValue } from '../../context/ContextProvider';
import PasswordField from "../input/PasswordField"
import GoogleOneTapLogin from './GoogleOneTapLogin';
import { register,login } from '../../actions/user';


const Login = () => {

  
  const { state: { openLogin }, dispatch } = useValue();
  const [title, setTitle] = useState('Login');
  const [isRegister, setIsRegister] = useState(false);

  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  useEffect(()=>{
    isRegister?setTitle('Register'):setTitle('Login')
  },[isRegister])


  const handleSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    if(!isRegister) return login({email,password},dispatch);
  
    const name = nameRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;
    if(password!==confirmPassword)
     return dispatch({
      type:'UPDATE_ALERT',
      payload:{open:true,severity:'error',
      message:'Password dont match'}});

      register({name,email,password},dispatch)
//send register request

    //tsting loading
    // dispatch({type:'START_LOADING'});
    // setTimeout(()=>{
    //   dispatch({type:'END_LOADING'})
    // },3500)
    // //testing notifcation
    // const password = passwordRef.current.value;
    // const confirmPassword = confirmPasswordRef.current.value;
    // if(password !==confirmPassword){
    //   dispatch({type:"UPDATE_ALERT",payload:{
    //     open:true,
    //     severity:'error',
    //     message:'Password don match'
    //   }})
    // }
  }



  return (
    <Dialog
       PaperProps={{ sx: { position: "relative", top: 0,bottom:0, maxWidth:500,borderRadius:"16px",paddingX:"3px" } }}
      open={ openLogin }
      onClose={ ()=>dispatch({ type: "CLOSE_LOGIN" }) }
    >
      <DialogTitle>
        { title }
        </DialogTitle>
        <IconButton
          sx={ {
            position: 'absolute',
            top: 8,
            right: 8,
            color: (theme) => theme.palette.grey[500]
          } }
          onClick={()=>dispatch({ type: "CLOSE_LOGIN" })}
        >
          <Close />
        </IconButton>
        <form onSubmit={ handleSubmit }>
          <DialogContent dividers>
            Please fill your information in this field
     
          { isRegister &&
            (<>
              <TextField
                autoFocus
                margin='normal'
                variant='standard'
                id='name'
                label='name'
                type='text'
                fullWidth
                inputRef={ nameRef }
                required
                inputProps={ { minLength: 2 } }
              />

            </>)}
            
              <TextField
                autoFocus={ !isRegister }
                margin='normal'
                variant='standard'
                id='email'
                label='Email'
                type='email'
                fullWidth
                inputRef={ emailRef }
                required
              />
              <PasswordField {...{passwordRef}}/>
              {
                isRegister &&
                <PasswordField
                  passwordRef={confirmPasswordRef}
                  id='confirmPassword'
                  label='Confirm Password'
                />
              }

            </DialogContent>
            <DialogActions>
              <Button onClick={handleSubmit} type='submit' variant='contained' endIcon={<Send/>}>
                Submit
              </Button>
            </DialogActions>
        </form>
 <Box
 >
      <DialogActions sx={{justifyContent:'left',p:'5px 24px'}}>
           {isRegister?'Do you have an account sign in now':'Dont have an account create now'}
          <Button onClick={()=>setIsRegister(!isRegister)}>
              {isRegister?'Login':'Register'}
           </Button>
         </DialogActions>

     <DialogActions sx={{justifyContent:'center',py:'24px'}}>
      <GoogleOneTapLogin/>
     </DialogActions>
    </Box>
    </Dialog>
  )
}

export default Login
