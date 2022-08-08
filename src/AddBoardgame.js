import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import Checkbox from "@mui/material/Checkbox";
import ListItemText from "@mui/material/ListItemText";
import { Grid } from "@mui/material";
import { Item } from "./DataTable";
import Standard44x66 from "./img/44x66mm_Standard.jpg";
import Standard47x70 from "./img/47x70mm_Standard.jpg";
import Standard67x103 from "./img/67x103mm_Standard.jpg";
import Standard73x122 from "./img/73x122mm_Standard.jpg";
import Standard82x122 from "./img/82x122mm_Standard.jpg";
import Standard59x90 from "./img/59x90mm_Standard.jpg";
import Standard66x91 from "./img/66x91mm_Standard.jpg";
import { boardgameRef } from "./firebase";
import Brettspiel from "./Brettspiel";
import { useState } from "react";
import { storage } from "./firebase";
import { useEffect } from "react";

import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const images = [
  { image: Standard44x66, name: "Standard44x66" },
  { image: Standard47x70, name: "Standard47x70" },
  { image: Standard59x90, name: "Standard59x90" },
  { image: Standard66x91, name: "Standard66x91" },
  { image: Standard67x103, name: "Standard67x103" },
  { image: Standard73x122, name: "Standard73x122" },
  { image: Standard82x122, name: "Standard82x122" },
];

const names = [
  "Standard44x66",
  "Standard47x70",
  "Standard67x103",
  "Standard73x122",
  "Standard56x82",
  "Standard82x122",
  "Standard59x90",
  "Standard66x91",
];

function AddBoardgame() {
  const [sleeves, setSleeves] = React.useState([]);
  const [boardgameName, setBoardgameName] = React.useState();
  const [boardgameGeekId, setboardgameGeekId] = React.useState();
  const [boardgameImage, setboardgameImage] = React.useState();
  const [file, setFile] = useState("");
  const [percent, setPercent] = useState(0);
  const storageRef = storage.child("/images/" + file.name);
  const [inputFields, setInputFields] = useState([{ name: "", counter: "" }]);

  const uploadTask = uploadBytesResumable(storageRef, file);
  console.log("felder" + inputFields);
  const handleClick = (e) => {
    let newBoardgame = Brettspiel(
      boardgameName,
      "kartenhuellen",
      "bild",
      "link",
      boardgameGeekId,
      "bild2"
    );
    e.preventDefault();
    boardgameRef.push(newBoardgame);
    console.log("The link was clicked.");
  };

  function handleChangeImage(event) {
    setFile(event.target.files[0]);
    const storageRef = storage.child("/images/" + file.name);
  }

  useEffect(() => {
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const percent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );

        // update progress
        setPercent(percent);
      },
      (err) => console.log(err),
      () => {
        // download url
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          console.log(url);
        });
      }
    );
  }, [file]);

  function handleUpload() {}

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setSleeves(typeof value === "string" ? value.split(",") : value);
  };

  const handleFormChange = (index, event) => {
    let data = [...inputFields];
    data[index][event.target.name] = event.target.value;
    setInputFields(data);
    console.log("felder2" + inputFields);
  };
  const handleChangeBoardgameName = (event) => {
    setBoardgameName(event.target.value);
    console.log("Brettspielname " + boardgameName);
  };

  /*
  const handleChangeSleeveCounter = (event) => {
    setsleeveCounter({ [event.target.name]: event.target.value });

    console.log("Sleevecounter " + sleeveCounter);
  }; */

  const handleboardgameImage = (event) => {
    setboardgameImage(event.target.value);
    console.log("handleboardgameImage " + boardgameImage);
  };

  const handleChangeboardgameGeekId = (event) => {
    setboardgameGeekId(event.target.value);
    console.log("Boardgamegeek Id " + boardgameGeekId);
  };

  console.log(sleeves);
  const [matchingSleeves, setMatchingSleeves] = React.useState([]);
  let count = 0;

  function RenderElement(props) {
    return images.map((element) => {
      if (element.name == props.currentSleeve) {
        return (
          <Box key={props.currentSleeve.toString()}>
            <img src={element.image} />

            {props.currentSleeve}
            <TextField
              id="outlined-basic"
              label="Anzahl"
              variant="outlined"
              onChange={(event) => handleFormChange(props.currentSleeve, event)}
              value={((inputs) => inputs.name == props.currentSleeve).counter}
            />
          </Box>
        );
      } else {
        return <></>;
      }
    });
  }

  return (
    <Box>
      <Typography variant="h4" mb={2}>
        Neues Brettspiel hinzufügen
      </Typography>
      <Box mb={2}>
        <TextField
          fullWidth
          id="boardgame_name"
          label="Brettspiel Name"
          variant="outlined"
          value={boardgameName}
          onChange={handleChangeBoardgameName}
        />
      </Box>
      <Box mb={2}>
        <input
          accept="image/*"
          style={{ display: "none" }}
          id="raised-button-file"
          multiple
          type="file"
          onChange={handleChangeImage}
        />
        <label htmlFor="raised-button-file">
          <Button onClick={handleUpload} variant="contained" component="span">
            Brettspiel Bild-Upload
          </Button>
        </label>
        <p>{percent} "% done"</p>
      </Box>
      <Box mb={2}>
        <TextField
          fullWidth
          mb={2}
          id="boardgamegeek_id"
          label="Boardgamegeek ID"
          variant="outlined"
          value={boardgameGeekId}
          onChange={handleChangeboardgameGeekId}
        />
      </Box>
      <Box mb={2}>
        {" "}
        <FormControl fullWidth>
          <InputLabel id="Sleeves">Kartenhüllen</InputLabel>
          <Select
            labelId="Sleeves"
            id="Sleeves"
            multiple
            value={sleeves}
            onChange={handleChange}
            input={<OutlinedInput label="Kartenhüllen" />}
            renderValue={(selected) => selected.join(", ")}
            MenuProps={MenuProps}
          >
            {names.map((name) => (
              <MenuItem key={name} value={name}>
                <Checkbox checked={sleeves.indexOf(name) > -1} />
                <ListItemText primary={name} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Box mb={2} sx={{ display: "flex", gap: "20px" }}>
        {sleeves.map((sleeve) => {
          count = count + 1;

          return (
            <Grid sx={{ flexGrow: 1 }} key={sleeve} item xs={6} md={2}>
              <Item key={sleeve + "b"}>
                <RenderElement currentSleeve={sleeve} />
              </Item>
            </Grid>
          );
        })}
      </Box>
      <Box mb={2} sx={{ display: "flex", gap: "20px" }}>
        <Box>
          <Button onClick={handleClick} variant="contained">
            Hinzufügen
          </Button>
        </Box>
        <Box>
          <Button variant="contained">Abbrechen</Button>
        </Box>
      </Box>
    </Box>
  );
}

export default AddBoardgame;
