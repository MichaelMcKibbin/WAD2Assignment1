import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { QueryClient } from "react-query";
import Typography from "@mui/material/Typography";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase-config";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000,
      refetchOnWindowFocus: false,
    },
  },
});

export default function LoginOrSignupPage() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [user, setUser] = useState({});
  const [loginError, setLoginError] = useState(null);
  const [registerSuccess, setRegisterSuccess] = useState(null);
  const [registerConfirmPassword, setRegisterConfirmPassword] = useState("");
  const [registerError, setRegisterError] = useState(null);

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const register = async () => {
    if (registerPassword !== registerConfirmPassword) {
      setRegisterError("Passwords do not match!");
      return;
    }

    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
      setRegisterSuccess("Account successfully created!");
    } catch (error) {
      console.log(error.message);
    }
  };

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
      setLoginError(error.message);
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setLoginError(null);
  };

  const logout = async () => {
    await signOut(auth);
  };

  const handleRegisterClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setRegisterSuccess(null);
  };

  return (
    <Grid>
      <Box
        className="App"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {user ? (
          <>
            <Typography variant="h6" sx={{ marginBottom: "1rem" }}>
              {" "}
              User Logged In: {user.email}{" "}
            </Typography>
            <Button variant="contained" color="secondary" onClick={logout}>
              {" "}
              Sign Out{" "}
            </Button>
          </>
        ) : (
          <>
            <Typography
              variant="h4"
              sx={{
                marginBottom: "1rem",
                marginTop: "1rem",
              }}
            >
              {" "}
              Sign up{" "}
            </Typography>
            <TextField
              placeholder="Email..."
              onChange={(event) => {
                setRegisterEmail(event.target.value);
              }}
              sx={{
                marginBottom: "1rem",
                borderRadius: "5px",
                boxShadow: "5px 5px 14px #919090,-5px -5px 14px #ffffff",
              }}
            />
            <TextField
              type="password"
              placeholder="Password..."
              onChange={(event) => {
                setRegisterPassword(event.target.value);
              }}
              sx={{
                marginBottom: "1rem",
                borderRadius: "5px",
                boxShadow: "5px 5px 14px #919090,-5px -5px 14px #ffffff",
              }}
            />
            <TextField
              type="password"
              placeholder=" Confirm Password"
              onChange={(event) => {
                setRegisterConfirmPassword(event.target.value);
              }}
              sx={{
                marginBottom: "1rem",
                borderRadius: "5px",
                boxShadow: "5px 5px 14px #919090,-5px -5px 14px #ffffff",
              }}
            />

            <Button variant="contained" color="primary" onClick={register}>
              {" "}
              Create User
            </Button>

            <Snackbar
              open={registerSuccess !== null}
              autoHideDuration={6000}
              onClose={handleRegisterClose}
            >
              <Alert
                onClose={handleRegisterClose}
                severity="success"
                sx={{ width: "100%" }}
              >
                {registerSuccess}
              </Alert>
            </Snackbar>
            <Snackbar
              open={registerError !== null}
              autoHideDuration={6000}
              onClose={() => setRegisterError(null)}
            >
              <Alert
                onClose={() => setRegisterError(null)}
                severity="error"
                sx={{ width: "100%" }}
              >
                {registerError}
              </Alert>
            </Snackbar>

            <Typography
              variant="h4"
              sx={{
                marginBottom: "1rem",
                marginTop: "2rem",
              }}
            >
              {" "}
              Existing User Login{" "}
            </Typography>
            <TextField
              placeholder="Email..."
              onChange={(event) => {
                setLoginEmail(event.target.value);
              }}
              sx={{
                marginBottom: "1rem",
                borderRadius: "5px",
                boxShadow: "5px 5px 14px #919090,-5px -5px 14px #ffffff",
              }}
            />
            <TextField
              placeholder="Password..."
              type="password"
              onChange={(event) => {
                setLoginPassword(event.target.value);
              }}
              sx={{
                marginBottom: "1rem",
                borderRadius: "5px",
                boxShadow: "5px 5px 14px #919090,-5px -5px 14px #ffffff",
              }}
            />

            <Button
              variant="contained"
              color="primary"
              sx={{ marginBottom: "6rem" }}
              onClick={login}
            >
              {" "}
              Login
            </Button>
            <Snackbar
              open={loginError !== null}
              autoHideDuration={6000}
              onClose={handleClose}
            >
              <Alert
                onClose={handleClose}
                severity="error"
                sx={{ width: "100%" }}
              >
                Invalid email or password!
              </Alert>
            </Snackbar>
          </>
        )}
      </Box>
    </Grid>
  );
}
