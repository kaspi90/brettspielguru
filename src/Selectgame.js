import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { gameContext } from "./GameContext";
import { TextField } from "@mui/material";

export default function Selectgame() {
  const [game, setGame] = React.useContext(gameContext);
  console.log("blubi:" + game);
  const handleChange = (event) => {
    setGame(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <TextField
          InputProps={{
            readOnly: true,
          }}
          id="outlined-disabled"
          label="Brettspiel"
          defaultValue={game}
        />
      </FormControl>
    </Box>
  );
}
