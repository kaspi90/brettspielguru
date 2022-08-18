import * as React from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
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
