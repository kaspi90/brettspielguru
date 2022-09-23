import { Box } from "@mui/system";
import { TextField, Button } from "@mui/material";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import React from "react";
import { useNavigate } from "react-router-dom";

const auth = getAuth();

function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const navigate = useNavigate();

  // name sollte beschreibend sein
  const someEventHandler = () => {
    navigate("/hinzufuegen");
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  // ich denke mal nicht fertig?
  const handleClick = (e) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        someEventHandler();

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });

    e.preventDefault();
  };

  const handleClickOut = (e) => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
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
