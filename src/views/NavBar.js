import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import React, { useState } from "react";

export default function NavBar() {
  function useAuth() {
    const [isAuth] = useState(localStorage.getItem("authorized") === "1");
    return isAuth;
  }
  const buttonLog = useAuth();
  return (
    <Box sx={{ flexGrow: 3 }}>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="default"
            aria-label="menu"
            sx={{ mr: 5 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="overline" component="div" sx={{ flexGrow: 1 }}>
            <Link style={{ textDecoration: "none" }} to="/">
              Home
            </Link>
          </Typography>
          <Typography variant="overline" component="div" sx={{ flexGrow: 1 }}>
            <Link style={{ textDecoration: "none" }} to="/posts">
              Posts
            </Link>
          </Typography>
          <Link style={{ textDecoration: "none" }} to="/login">
            {!buttonLog ? (
              <Button
                color="success"
                sx={{
                  "&:hover": {
                    backgroundColor: "success.dark",
                    color: "white",
                    opacity: [0.8, 0.8, 0.7]
                  }
                }}
              >
                Log in
              </Button>
            ) : (
              <Button
                color="success"
                onClick={() => localStorage.setItem("authorized", "0")}
                sx={{
                  "&:hover": {
                    backgroundColor: "success.dark",
                    color: "white",
                    opacity: [0.8, 0.8, 0.7]
                  }
                }}
              >
                Log out
              </Button>
            )}
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
