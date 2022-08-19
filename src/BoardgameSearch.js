import { Box } from "@mui/system";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import * as React from "react";
import { Item } from "./DataTable";
import { brettspiele } from "./DataTable";
import { gameContext } from "./GameContext";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { boardgameRef, gamesRef } from "./firebase";

export default function BoardgameSearch() {
  const [inputText, setInputText] = useState("");
  const [games, setGames] = useState([]);
  let inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  console.log("boardgameref" + boardgameRef);

  // Attach an asynchronous callback to read the data at our posts reference
  useEffect(() => {
    gamesRef.on(
      "value",
      (snapshot) => {
        console.log("huhu" + snapshot.val());

        const data = Object.values(JSON.parse(JSON.stringify(snapshot.val())));
        console.log(data);
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
    return games.filter((boardgame) =>
      boardgame.name.toLowerCase().includes(inputText)
    );
  };

  let count = 0;
  let boardgames_grid = [];

  if (filterBoardgame().length == 0) {
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
