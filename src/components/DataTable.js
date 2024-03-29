import * as React from "react";
import { makeStyles } from "@mui/styles";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import MatchingSleeves from "./MatchingSleeves";

const useStyles = makeStyles({
  ImgSleeves: {
    maxWidth: "100%",
    padding: 5,
  },
});

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

// nicht gut
let classes;

export default function DataTable() {
  // nicht gut
  classes = useStyles();

  // sehr tiefes nesting
  return <MatchingSleeves></MatchingSleeves>;
}
// nicht gut
export { Item, classes };

// besser useStyles exportieren und jedes component selber rufen lassen
