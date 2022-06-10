import "./App.css";
import React from "react";
import ResponsiveAppBar from "./ResponsiveAppBar";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import Selectgame from "./Selectgame";
import DataTable from "./DataTable";
import Kartenhüllen from "./Kartenhüllen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { gameContext } from "./GameContext";
import Impressum from "./Impressum.js";
import Datenschutz from "./Datenschutz.js";
import { Box, width } from "@mui/system";
import { Button } from "@mui/material";
import InstagramBlog from "./InstagramBlog";

const theme = createTheme({
  palette: {
    primary: {
      light: "#760019",
      main: "#aa0124",
      dark: "#bb334f",
    },
    secondary: {
      light: "#ab003c",
      main: "#f50057",
      dark: "#f73378",
    },
  },
});

const Bundles = () => (
  <div>
    <Selectgame />
    <br />
    <DataTable />
  </div>
);

function App() {
  const [game, setGame] = React.useState("");
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <gameContext.Provider value={[game, setGame]}>
          <ResponsiveAppBar />
          <Box maxWidth={"80%"} justify="center" m="auto" padding={2}>
            <Routes>
              <Route path="/" element={<Bundles />} />
              <Route path="/kartenhuellen" element={<Kartenhüllen />} />
              <Route path="/impressum" element={<Impressum />} />
              <Route path="/datenschutz" element={<Datenschutz />} />
              <Route path="/InstagramBlog" element={<InstagramBlog />} />
            </Routes>
          </Box>
        </gameContext.Provider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
