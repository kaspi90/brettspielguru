import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { gameContext } from "./GameContext";

export default function Selectgame() {
  const [game, setGame] = React.useContext(gameContext);
  const handleChange = (event) => {
    setGame(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Brettspiel</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={game}
          label="Brettspiel"
          onChange={handleChange}
        >
          <MenuItem value="Siedler von Catan">Siedler von Catan</MenuItem>
          <MenuItem value="Terraforming Mars">Terraforming Mars</MenuItem>
          <MenuItem value="7 Wonders">7 Wonders</MenuItem>
          <MenuItem value="TimeStories">Time Stories</MenuItem>
          <MenuItem value="Everdell">Everdell</MenuItem>
          <MenuItem value="Gloomhaven">Gloomhaven</MenuItem>
          <MenuItem value="Wizard">Wizard</MenuItem>
          <MenuItem value="Dune">Dune</MenuItem>
          <MenuItem value="Mysterium">Mysterium</MenuItem>
          <MenuItem value="Bloodrage">Bloodrage</MenuItem>
          <MenuItem value="Viticulture">Viticulture</MenuItem>
          <MenuItem value="RedRising">Red Rising</MenuItem>
          <MenuItem value="ForgottenWaters">ForgottenWaters</MenuItem>
          <MenuItem value="Paleo">Paleo</MenuItem>
          <MenuItem value="Tichu">Tichu</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
