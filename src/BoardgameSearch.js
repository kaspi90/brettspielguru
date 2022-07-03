import { Box } from "@mui/system";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import * as React from "react";
import { Item, classes } from "./DataTable";
import { brettspiele } from "./DataTable";
import { gameContext } from "./GameContext";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import IconButton from "@mui/material";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const SearchBar = () => (
  <Autocomplete
    freeSolo
    id="boardgame-search"
    disableClearable
    options={brettspiele.map((option) => option.name)}
    renderInput={(params) => (
      <TextField
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            console.log(e.target.value);
          }
        }}
        {...params}
        label="Brettspiel Suche"
        InputProps={{
          ...params.InputProps,
          type: "search",
        }}
      />
    )}
  />
);

export default function BoardgameSearch() {
  const [game, setGame] = React.useContext(gameContext);

  let count = 0;
  let boardgames_grid = [];
  brettspiele.forEach((element) => {
    count = count + 1;
    boardgames_grid.push(
      <Grid key={count} item xs={6} md={2}>
        <Item style={{ minHeight: 260 }}>
          <Link to="/" onClick={() => setGame(element.name)}>
            <img src={element.boardgame_image}></img>
          </Link>
          <Typography>{element.name}</Typography>
        </Item>
      </Grid>
    );
  });

  return (
    <div>
      <SearchBar></SearchBar>
      <br />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {boardgames_grid}
        </Grid>
        <br />
      </Box>
    </div>
  );
}
