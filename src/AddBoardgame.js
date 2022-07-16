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

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setSleeves(typeof value === "string" ? value.split(",") : value);
  };

  console.log(sleeves);
  const [matchingSleeves, setMatchingSleeves] = React.useState([]);
  let counter = 1;
  let count = 0;

  function RenderElement(props) {
    return images.map((element) => {
      if (element.name == props.currentSleeve) {
        console.log("c" + element.image);
        return (
          <Box>
            <img src={element.image} />

            {props.currentSleeve}
            <TextField id="outlined-basic" label="Anzahl" variant="outlined" />
          </Box>
        );
      } else {
        return <></>;
      }
    });
    /*
    images.map((element) => {

      if (element.name == currentSleeve) {
        console.log("a" + currentSleeve);
        console.log("b" + element.name);
        console.log("c" + element.image);
        return element.image;
      } else {
        console.log("blbuber");
      }
    }); */
  }

  return (
    <Box>
      <Typography variant="h4" mb={2}>
        Neues Brettspiel hinzufügen
      </Typography>
      <Box mb={2}>
        <TextField
          fullWidth
          id="outlined-basic"
          label="Brettspiel Name"
          variant="outlined"
        />
      </Box>
      <Box mb={2}>
        <Button variant="contained" component="label">
          Brettspiel Bild hochladen
          <input type="file" hidden />
        </Button>
      </Box>
      <Box mb={2}>
        <TextField
          fullWidth
          mb={2}
          id="outlined-basic"
          label="Boardgamegeek ID"
          variant="outlined"
        />
      </Box>
      <Box mb={2}>
        {" "}
        <FormControl fullWidth>
          <InputLabel id="demo-multiple-checkbox-label">
            Kartenhüllen
          </InputLabel>
          <Select
            labelId="demo-multiple-checkbox-label"
            id="demo-multiple-checkbox"
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
            <Grid sx={{ flexGrow: 1 }} key={count} item xs={6} md={2}>
              <Item>
                <RenderElement currentSleeve={sleeve} />
              </Item>
            </Grid>
          );
        })}
      </Box>
      <Box mb={2} sx={{ display: "flex", gap: "20px" }}>
        <Box>
          <Button variant="contained">Hinzufügen</Button>
        </Box>
        <Box>
          <Button variant="contained">Abbrechen</Button>
        </Box>
      </Box>
    </Box>
  );
}

export default AddBoardgame;
