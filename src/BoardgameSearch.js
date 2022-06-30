import { Box } from "@mui/system";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";

import { Item, classes } from "./DataTable";
import { brettspiele } from "./DataTable";

function BoardgameSearch() {
  let boardgames_grid = [];
  brettspiele.forEach((element) => {
    boardgames_grid.push(
      <Grid item xs={6} md={2}>
        <Item>
          <a href="#">
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
