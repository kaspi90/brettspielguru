import "./App.css";
import React from "react";
import ResponsiveAppBar from "./ResponsiveAppBar";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import DataTable from "./DataTable";
import Kartenhüllen from "./Sleeves";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { gameContext } from "./GameContext";
import Impressum from "./Imprint.js";
import Datenschutz from "./PrivacyProtection.js";
import { Box, width } from "@mui/system";
import InstagramBlog from "./InstagramBlog";
import BoardgameSearch from "./BoardgameSearch";
import Footer from "./Footer";
import ProductOverview from "./ProductOverview";
import AddBoardgame from "./AddBoardgame";
import Login from "./Login";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { Navigate, Outlet } from "react-router-dom";

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

const Sleeves = () => (
  <div>
    <br />
    <DataTable />
  </div>
);

function App() {
  const [game, setGame] = React.useState("");
  const auth = getAuth();
  const user = auth.currentUser;

  const ProtectedRoute =
    (auth,
    (user) => {
      if (auth.currentUser) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        return <Outlet />;

        // ...
      } else {
        // User is signed out
        // ...

        return <Navigate to="/login" replace />;
      }
    });

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <gameContext.Provider value={[game, setGame]}>
          <ResponsiveAppBar />
          <Box maxWidth={"80%"} justify="center" m="auto" padding={2}>
            <Routes>
              <Route path="/" element={<BoardgameSearch />} />
              <Route path="/passende-kartenhuellen" element={<Sleeves />} />
              <Route path="/kartenhuellen" element={<Kartenhüllen />} />
              <Route path="/produkte" element={<ProductOverview />} />
              <Route path="/impressum" element={<Impressum />} />
              <Route path="/datenschutz" element={<Datenschutz />} />
              <Route path="/InstagramBlog" element={<InstagramBlog />} />
              <Route element={<ProtectedRoute user={user} />}>
                <Route path="/hinzufuegen" element={<AddBoardgame />} />
              </Route>

              <Route path="/login" element={<Login />} />
            </Routes>
            <Footer />
          </Box>
        </gameContext.Provider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
