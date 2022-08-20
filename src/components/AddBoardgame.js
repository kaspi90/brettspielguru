import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import Checkbox from "@mui/material/Checkbox";
import ListItemText from "@mui/material/ListItemText";
import { Grid } from "@mui/material";
import { Item } from "./DataTable";
import Standard44x66 from "../img/44x66mm_Standard.jpg";
import Standard47x70 from "../img/47x70mm_Standard.jpg";
import Standard67x103 from "../img/67x103mm_Standard.jpg";
import Standard73x122 from "../img/73x122mm_Standard.jpg";
import Standard82x122 from "../img/82x122mm_Standard.jpg";
import Standard59x90 from "../img/59x90mm_Standard.jpg";
import Standard66x91 from "../img/66x91mm_Standard.jpg";
import Standard56x82 from "../img/56x82mm_Standard.jpg";

import { gamesRef } from "./Firebase";
import Brettspiel from "./Boardgame";
import { useState } from "react";
import { storage } from "./Firebase";
import { useEffect } from "react";
import { getAuth } from "firebase/auth";

import { uploadBytesResumable, getDownloadURL } from "firebase/storage";

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
  {
    image: Standard44x66,
    name: "Standard44x66",
    link: "https://www.amazon.de/Sleeves-Kartenh%C3%BCllen-Kartenfolien-Zipper-Bag-Transparent/dp/B0943XN3CC/",
  },
  {
    image: Standard47x70,
    name: "Standard47x70",
    link: "https://www.amazon.de/Sleeves-Kartenh%C3%BCllen-Kartenfolien-Zipper-Bag-Transparent/dp/B0943XN3CC/",
  },
  {
    image: Standard59x90,
    name: "Standard59x90",
    link: "https://www.amazon.de/Sleeves-Kartenh%C3%BCllen-Kartenfolien-Zipper-Bag-Transparent/dp/B0943WNT26/?th=1",
  },
  {
    image: Standard66x91,
    name: "Standard66x91",
    link: "https://www.amazon.de/Sleeves-Kartenh%C3%BCllen-Kartenfolien-Zipper-Bag-Transparent/dp/B0943XC75P/?th=1",
  },
  {
    image: Standard67x103,
    name: "Standard67x103",
    link: "https://www.amazon.de/Sleeves-Kartenh%C3%BCllen-Kartenfolien-Zipper-Bag-Transparent/dp/B0943XT8K2/?th=1",
  },
  {
    image: Standard73x122,
    name: "Standard73x122",
    link: "https://www.amazon.de/Sleeves-Kartenh%C3%BCllen-Kartenfolien-Zipper-Bag-Transparent/dp/B0943YFXML/?th=1",
  },
  {
    image: Standard82x122,
    name: "Standard82x122",
    link: "https://www.amazon.de/Sleeves-Kartenh%C3%BCllen-Kartenfolien-Zipper-Bag-Transparent/dp/B0943Z8S82/?th=1",
  },
  {
    image: Standard56x82,
    name: "Standard56x82",
    link: "https://www.amazon.de/Sleeves-Kartenh%C3%BCllen-Kartenfolien-Zipper-Bag-Transparent/dp/B0943XNXY4/ref=sr_1_5?keywords=brettspielguru%2Bsleeves&qid=1660945753",
  },
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

const auth = getAuth();

function AddBoardgame() {
  const [sleeves, setSleeves] = React.useState([]);
  const [boardgameName, setBoardgameName] = React.useState("");
  const [boardgameGeekId, setboardgameGeekId] = React.useState("");
  const [boardgameImage, setboardgameImage] = React.useState(); // file
  const [sleeveAll, setSleeveAll] = React.useState(); // file

  const [file, setFile] = useState("");
  const [percent, setPercent] = useState(0);
  const storageRef = storage.child("/images/" + file.name);
  const [inputFields, setInputFields] = useState([]);
  const [imageUrl, setImageUrl] = useState("");

  const uploadTask = uploadBytesResumable(storageRef, file);
  const handleClick = (e) => {
    let newBoardgame = Brettspiel(
      boardgameName,
      sleeveAll,
      imageUrl,
      "link",
      boardgameGeekId,
      "bild2"
    );
    e.preventDefault();
    gamesRef.push(newBoardgame);
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
          setImageUrl(url);
        });
      }
    );
  }, [file]);

  function handleUpload() {}

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    const newSleeves = typeof value === "string" ? value.split(",") : value;
    setSleeves(newSleeves);

    setInputFields((fields) =>
      newSleeves.map((sleeve) => {
        const field = fields.find((field) => field.sleeve === sleeve);
        if (field) {
          return field;
        }
        return {
          sleeve,
          value: "",
        };
      })
    );
  };

  let resulti = [];

  useEffect(() => {
    inputFields.forEach((element) => {
      for (let index = 0; index < images.length; index++) {
        if (images[index].name === element.sleeve) {
          resulti.push({
            name: element.sleeve,
            image: images[index].image,
            feld: element.value,
            link: images[index].link,
          });
        }
      }
    });

    setSleeveAll(resulti);
  }, [inputFields]);

  const handleFormChange = (index, event) => {
    setInputFields((fields) =>
      fields.map((field) =>
        field.sleeve === index ? { ...field, value: event.target.value } : field
      )
    );
  };
  const handleChangeBoardgameName = (event) => {
    setBoardgameName(event.target.value);
  };

  const handleboardgameImage = (event) => {
    setboardgameImage(event.target.value);
  };

  const handleChangeboardgameGeekId = (event) => {
    setboardgameGeekId(event.target.value);
  };

  const [matchingSleeves, setMatchingSleeves] = React.useState([]);
  let count = 0;

  function RenderElement(props) {
    return images.map((element, i) => {
      if (element.name === props.currentSleeve) {
        return (
          <Box key={props.currentSleeve}>
            <img src={element.image} />

            {props.currentSleeve}
            <TextField
              label="Anzahl"
              variant="outlined"
              onChange={(event) => handleFormChange(props.currentSleeve, event)}
              value={
                inputFields.find((val) => val.sleeve === props.currentSleeve)
                  .value
              }
            />
          </Box>
        );
      } else {
        return <div key={element.name}></div>;
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
