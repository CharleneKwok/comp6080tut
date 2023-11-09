import "./App.css";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import { Alert, Grid, Link, Snackbar, TextField } from "@mui/material";
import beachImg from "./beach.jpeg";

function App() {
  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const isValid = username !== "" && password !== "";
  const [message, setMessage] = useState("");

  const handleClick = () => {
    setMessage(
      isValid
        ? `Welcome to Travelog ${username}!`
        : "Enter username and password"
    );
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <AirplanemodeActiveIcon />
            <Typography variant="h6" component="div" ml="10px">
              Travel Log
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Grid container sx={{ height: "98vh" }}>
        <Grid item xs={5} md={5}>
          <Box
            sx={{ backgroundImage: `url(${beachImg})`, height: "100%" }}
          ></Box>
        </Grid>
        <Grid item xs={7} md={7}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              mt: "100px",
              gap: "10px",
            }}
          >
            <Typography variant="h4">Welcome to Travel Log</Typography>
            <Typography variant="h6">Enter Username:</Typography>
            <TextField
              id="username"
              label="Username"
              variant="outlined"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Typography variant="h6">Enter Password:</Typography>
            <TextField
              id="password"
              label="Password"
              variant="outlined"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button variant="contained" onClick={handleClick}>
              Sign in
            </Button>
            <Link href="#">Sign up for a new Account</Link>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
              <Alert
                onClose={handleClose}
                severity={isValid ? "success" : "error"}
                sx={{ width: "100%" }}
              >
                {message}
              </Alert>
            </Snackbar>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
