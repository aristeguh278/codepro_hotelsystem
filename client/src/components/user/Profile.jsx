import React, { useRef } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField,
  DialogContentText,
  Avatar,
} from "@mui/material";
import { Close, Send } from "@mui/icons-material";
import { useValue } from "../../context/ContextProvider";
import { updateProfile } from "../../actions/user";

const Profile = () => {
  const {
    state: { profile, currentUser },
    dispatch,
  } = useValue();
  const nameRef = useRef();

  const handleClose = () => {
    dispatch({ type: "UPDATE_PROFILE", payload: { ...profile, open: false } });
  };

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const photoURL = URL.createObjectURL(file);
      dispatch({ type: "UPDATE_PROFILE", payload: { ...profile, file, photoURL } });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    updateProfile(currentUser, { name, file: profile.file }, dispatch);
  };

  return (
    <Dialog
      PaperProps={{
        sx: {
          position: "relative",
          top: 0,
          bottom: 0,
          minWidth: 410,
          borderRadius: "16px",
          paddingX: "3px",
        },
      }}
      open={profile.open}
      onClose={handleClose}>
      <DialogTitle>Profile</DialogTitle>
      <IconButton
        sx={{
          position: "absolute",
          top: 8,
          right: 8,
          color: (theme) => theme.palette.grey[500],
        }}
        onClick={handleClose}>
        <Close />
      </IconButton>
      <form onSubmit={handleSubmit}>
        <DialogContent dividers>
          <DialogContentText>You can update your profile</DialogContentText>

          <>
            <TextField
              autoFocus
              margin="normal"
              variant="standard"
              id="name"
              label="name"
              type="text"
              fullWidth
              inputRef={nameRef}
              required
              inputProps={{ minLength: 2 }}
              defaultValue={currentUser?.name}
            />
            <label htmlFor="profilePhoto">
              <input
                accept="image/*"
                id="profilePhoto"
                onChange={handleChange}
                type="file"
                style={{ display: "none" }}
              />
              <Avatar src={profile.photoURL} sx={{ width: 75, height: 75, cursor: "pointer" }} />
            </label>
          </>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSubmit} type="submit" variant="contained" endIcon={<Send />}>
            Update
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default Profile;
