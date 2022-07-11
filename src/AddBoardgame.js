import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import * as React from "react";
import Standard44x66 from "./DataTable";
import Standard56x82 from "./DataTable";
import Standard47x70 from "./DataTable";
import Standard59x90 from "./DataTable";
import Standard66x91 from "./DataTable";
import Standard67x103 from "./DataTable";
import Standard73x122 from "./DataTable";
import Standard82x122 from "./DataTable";
import Product from "./Product";

function AddBoardgame() {
  const [sleeves, setSleeves] = React.useState("");

  const handleChange = (event) => {
    setSleeves(event.target.value);
  };
  return (
    <Box>
      <Typography variant="h4" mb={2}>
        Neues Brettspiel hinzufügen
      </Typography>
      <Box mb={2}>
        <TextField
          fullWidth
          id="outlined-basic"
          label="Brettspiel Name"
          variant="outlined"
        />
      </Box>
      <Box mb={2}>
        <Button variant="contained" component="label">
          Brettspiel Bild hochladen
          <input type="file" hidden />
        </Button>
      </Box>
      <Box mb={2}>
        <TextField
          fullWidth
          mb={2}
          id="outlined-basic"
          label="Boardgamegeek ID"
          variant="outlined"
        />
      </Box>

      <Box mb={2}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Kartenhüllen</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={sleeves}
            label="Kartenhüllen"
            onChange={handleChange}
          >
            <MenuItem value={Standard44x66.name}>Standard44x66</MenuItem>
            <MenuItem value={Standard56x82.name}>Standard56x82</MenuItem>
            <MenuItem value={Standard47x70.name}>Standard47x70</MenuItem>
            <MenuItem value={Standard59x90.name}>Standard59x90</MenuItem>
            <MenuItem value={Standard66x91.name}>Standard66x91</MenuItem>
            <MenuItem value={Standard67x103.name}>Standard67x103</MenuItem>
            <MenuItem value={Standard73x122.name}>Standard73x122</MenuItem>
            <MenuItem value={Standard82x122.name}>Standard82x122</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box mb={2} sx={{ display: "flex", gap: "20px" }}>
        <Box>
          <Button variant="contained">Hinzufügen</Button>
        </Box>
        <Box>
          <Button variant="contained">Abbrechen</Button>
        </Box>
      </Box>
    </Box>
  );
}

export default AddBoardgame;
