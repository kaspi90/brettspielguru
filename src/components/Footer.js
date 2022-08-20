import * as React from "react";
import { Box } from "@mui/system";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Typography } from "@mui/material";

const linkStyle = {
  margin: "0.5rem",
  textDecoration: "none",
  color: "black",
};

function Footer() {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <Box>
        <Typography>© 2022 Brettspielguru</Typography>
      </Box>

      <Box>
        <Link to="/impressum" style={linkStyle}>
          Impressum
        </Link>{" "}
        <Link to="/datenschutz" style={linkStyle}>
          Datenschutz
        </Link>
      </Box>
    </Box>
  );
}

export default Footer;
