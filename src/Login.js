import { Box } from "@mui/system";
import { TextField, Button } from "@mui/material";

function Login() {
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
          />
        </Box>
        <Box mb={2} sx={{ width: 400, display: "flex" }}>
          <TextField
            sx={{ width: "100%" }}
            id="outlined-basic"
            label="Passwort"
            variant="outlined"
          />
        </Box>
        <Box mb={2} sx={{ width: 400, display: "flex" }}>
          <Button variant="contained">Login</Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Login;
