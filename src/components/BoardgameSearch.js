import { Box } from "@mui/system";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import * as React from "react";
import { Item } from "./DataTable";
import { gameContext } from "./GameContext";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { gamesRef } from "./Firebase";

export default function BoardgameSearch() {
  const [inputText, setInputText] = useState("");
  const [games, setGames] = useState([]);
  const [game, setGame] = React.useContext(gameContext);

  // immer const nehmen
  let inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  // Attach an asynchronous callback to read the data at our posts reference
  useEffect(() => {
    gamesRef.on(
      "value",
      (snapshot) => {
        // was ist das?
        const data = Object.values(JSON.parse(JSON.stringify(snapshot.val())));
        setGames(data);
      },
      (errorObject) => {
        console.log("The read failed: " + errorObject.name);
      }
    );
  }, []);

  const SearchBar = () => (
    <Autocomplete
      freeSolo
      id="boardgame-search"
      disableClearable
      options={games.map((option) => option.name)}
      renderInput={(params) => (
        <TextField
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              // unnötige klammern
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
  // ist ok aber besser sind pure functions
  const filterBoardgame = (/* input */) => {
    return games.filter((boardgame) =>
      boardgame.name.toLowerCase().includes(inputText)
    );
  };

  // runs every render, a useEffect would be better (with proper dependencies)
  let count = 0;
  let boardgames_grid = [];

  if (filterBoardgame().length === 0) {
    games.forEach((element) => {
      count = count + 1;

      boardgames_grid.push(
        <Grid key={count} item xs={6} md={2}>
          <Item style={{ minHeight: 260 }}>
            <Link to="/" onClick={() => setGame(element.name)}>
              <img src={element.image}></img>
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
              <img style={{ height: 140 }} src={element.image}></img>
            </Link>
            <Typography>{element.name}</Typography>
          </Item>
        </Grid>
      );
    });
  }

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
