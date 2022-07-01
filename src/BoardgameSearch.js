import { Box } from "@mui/system";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import * as React from "react";
import { Item, classes } from "./DataTable";
import { brettspiele } from "./DataTable";
import { gameContext } from "./GameContext";

function BoardgameSearch() {
  const [game, setGame] = React.useContext(gameContext);

  let boardgames_grid = [];
  brettspiele.forEach((element) => {
    boardgames_grid.push(
      <Grid item xs={6} md={2}>
        <Item style={{ minHeight: 260 }}>
          <a href="./" onClick={setGame(element.name)}>
            <img src={element.boardgame_image}></img>
          </a>
          <Typography>{element.name}</Typography>
        </Item>
      </Grid>
    );
  });

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {boardgames_grid}
      </Grid>
      <br />
    </Box>
  );
}

export default BoardgameSearch;