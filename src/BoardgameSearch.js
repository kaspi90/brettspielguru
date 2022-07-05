import { Box } from "@mui/system";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import * as React from "react";
import { Item, classes } from "./DataTable";
import { brettspiele } from "./DataTable";
import { gameContext } from "./GameContext";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";

export default function BoardgameSearch() {
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

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
              {
                inputHandler(e);
              }
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

  const [game, setGame] = React.useContext(gameContext);

  const filterBoardgame = () => {
    return brettspiele.filter((boardgame) =>
      boardgame.name.toLowerCase().includes(inputText)
    );
  };

  let count = 0;
  let boardgames_grid = [];

  if (filterBoardgame().length == 0) {
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
  } else {
    filterBoardgame().forEach((element) => {
      count = count + 1;
      boardgames_grid.push(
        <Grid key={count} item xs={6} md={2}>
          <Item>
            <Link
              to="/passende-kartenhuellen"
              onClick={() => setGame(element.name)}
            >
              <img style={{ height: 140 }} src={element.boardgame_image}></img>
            </Link>
            <Typography>{element.name}</Typography>
          </Item>
        </Grid>
      );
    });
  }

  filterBoardgame();

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
