import { Box } from "@mui/system";
import { TextField, Button } from "@mui/material";
import { firebase } from "./firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const auth = getAuth();

function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const navigate = useNavigate();

  const someEventHandler = () => {
    navigate("/hinzufuegen");
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
    console.log("Brettspielname " + email);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
    console.log("Brettspielname " + password);
  };

  const handleClick = (e) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        someEventHandler();

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });

    e.preventDefault();
    console.log("The link was clicked.");
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      mb={2}
    >
      <Box
        sx={{
          padding: 2,
        }}
      >
        <Box mb={2} sx={{ width: 400, display: "flex" }}>
          <TextField
            sx={{ width: "100%" }}
            id="outlined-basic"
            label="E-Mail"
            variant="outlined"
            value={email}
            onChange={handleChangeEmail}
          />
        </Box>
        <Box mb={2} sx={{ width: 400, display: "flex" }}>
          <TextField
            sx={{ width: "100%" }}
            id="outlined-basic"
            label="Passwort"
            type="password"
            variant="outlined"
            value={password}
            onChange={handleChangePassword}
          />
        </Box>
        <Box mb={2} sx={{ width: 400, display: "flex" }}>
          <Button onClick={handleClick} variant="contained">
            Login
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Login;
