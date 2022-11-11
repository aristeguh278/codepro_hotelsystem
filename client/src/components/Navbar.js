import React from "react";
import {
  AppBar,
  Container,
  IconButton,
  Menu,
  Toolbar,
  Typography,
  Box,
  Button,
} from "@mui/material";
import Profile from "../resources/images/profile.jpg";
import { Lock } from "@mui/icons-material";
import { useValue } from "../context/ContextProvider";
import UserIcons from "./user/UserIcons";

const user = {
  name: "test",
  photo: Profile,
};

const Navbar = () => {
  const {
    state: { currentUser },
    dispatch,
  } = useValue();
  return (
    <AppBar elevation={0}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Box>
            <IconButton size="large" color="inherit">
              <Menu />
            </IconButton>
          </Box>
          <Typography
            component="h1"
            variant="h6"
            noWrap
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            You are welcome
          </Typography>

          <Typography
            component="h1"
            variant="h6"
            noWrap
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            YRW
          </Typography>
          {!currentUser ? (
            <Button
              onClick={() => dispatch({ type: "OPEN_LOGIN" })}
              color="inherit"
              startIcon={<Lock />}>
              Login
            </Button>
          ) : (
            <UserIcons />
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
