import React, { useRef } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { Item, classes } from "./DataTable";
import { gameContext } from "./GameContext";
import axios from "axios";
import xml2json from "@hendt/xml2json";
import { Typography } from "@mui/material";
import ReactReadMoreReadLess from "react-read-more-read-less";
import { gamesRef } from "./Firebase";
import { useEffect } from "react";

function MatchingSleeves() {
  const [boardgameDescription, setBoardgameDescription] = React.useState("");
  const [brettspieleFirebase, setbrettspieleFirebase] = React.useState([]);
  // useState oder useRef(wenn nicht rerendern soll bei Änderungen)
  let boardgameJSON;

  const getBoardgameDescription = (boardgamegeekId1) => {
    axios
      .get("https://boardgamegeek.com/xmlapi2/thing?id=" + boardgamegeekId1)
      .then((response) => {
        boardgameJSON = xml2json(response.data);
        let clearStringDescription = unEntity(
          boardgameJSON.items.item.description
        );
        setBoardgameDescription(clearStringDescription);
      });
  };
  // warum?
  const ref = gamesRef;

  useEffect(() => {
    return ref.on(
      "value",
      (snapshot) => {
        setbrettspieleFirebase(
          Object.values(JSON.parse(JSON.stringify(snapshot.val())))
        );
      },
      (errorObject) => {
        console.log("The read failed: " + errorObject.name);
      }
    );
  }, []);

  const [game] = React.useContext(gameContext);
  if (!game) return <></>;

  const foundBoardgame = brettspieleFirebase.find((item) => {
    if (item.name === game) {
      return item;
    } else return null;
  });

  // läuft alles jeden render, in ue ist besser

  // kanns auch verkürzen:
  // const c = foundBoardgame?.kartenhuellen?.length ?? 0;

  let count;
  if (foundBoardgame) {
    count = foundBoardgame.kartenhuellen.length;

    getBoardgameDescription(foundBoardgame.boardgamegeekId);
  }

  let sleeves = [];
  for (var i = 0; i < count; i++) {
    sleeves.push(
      <Grid key={"grid" + i} item xs={6} md={2}>
        <Item>
          <img
            src={foundBoardgame.kartenhuellen[i].image}
            alt="Siedler von Catan Logo"
            className={classes.ImgSleeves}
          />
          <Typography>
            Benötigte Anzahl: {foundBoardgame.kartenhuellen[i].feld} <br />
          </Typography>
          <Button
            variant="contained"
            href={foundBoardgame.kartenhuellen[i].link}
          >
            Bei Amazon bestellen
          </Button>
        </Item>
      </Grid>
    );
  }

  function unEntity(boardgameDescriptionString) {
    return boardgameDescriptionString
      .replace(/&amp;/g, "&")
      .replace(/&#10;/g, " ");
  }

  return (
    <div style={{ height: 700, width: "100%" }}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {sleeves}
        </Grid>
        <br />
        <Typography gutterBottom={true} variant="overline">
          Description from boardgamegeek.com
        </Typography>
        <br />
        <ReactReadMoreReadLess
          charLimit={400}
          readMoreText={"Read more ▼"}
          readLessText={"Read less ▲"}
        >
          {boardgameDescription}
        </ReactReadMoreReadLess>
        <br />
      </Box>
    </div>
  );
}

export default MatchingSleeves;
