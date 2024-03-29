import React from "react";
import PDFViewer from "pdf-viewer-reactjs";
import kartenhuellen_uebersicht from "../img/kartenhuellen_uebersicht.jpeg";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DownloadIcon from "@mui/icons-material/Download";
import PrintIcon from "@mui/icons-material/Print";
import AutoAwesomeMotionIcon from "@mui/icons-material/AutoAwesomeMotion";
import { Typography } from "@mui/material";

const PDFViewerBrettspielguru = () => {
  return (
    <PDFViewer
      document={{
        url: "https://www.brettspielguru.de/wp-content/uploads/2021/07/Kartenhu%CC%88llen_U%CC%88bersicht-2.pdf",
      }}
    />
  );
};

function Kartenhüllen() {
  return (
    <Box>
      <Box sx={{ padding: 5 }}>
        <Typography variant="h5">Kartenhüllen Größenfinder</Typography>
        <br />
        Es gibt die unterschiedlichsten Kartengrößen und damit auch viele
        verschiedene Hüllen, die oftmals nur um ein paar Millimeter von einander
        abweichen. Da ist es nicht immer einfach die richtige Größe zu finden,
        solltest du dir unsicher sein, welche du für deine Karten benötigst:
        Schau einfach hier, druck es aus oder teste es gleich am Bildschirm,
        Karte drauflegen und vergleichen.
      </Box>
      <Box
        sx={{
          padding: 5,
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
        }}
      >
        <Box>
          <Typography variant="h5">Schritt-für-Schritt</Typography>

          <List
            sx={{ width: "100%", maxWidth: 500, bgcolor: "background.paper" }}
            aria-label="contacts"
          >
            <ListItem disablePadding>
              <ListItemButton component="a" href={kartenhuellen_uebersicht}>
                <ListItemIcon>
                  <DownloadIcon />
                </ListItemIcon>
                <ListItemText primary="Herunterladen / Öffnen" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <PrintIcon />
                </ListItemIcon>
                <ListItemText primary="Drucken 100% oder auf Bildschirm vergrößern (Controll Dice 1 cm)" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <AutoAwesomeMotionIcon />
                </ListItemIcon>
                <ListItemText primary="Karten auflegen und richtige Kartenhüllen Größe finden" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
        <Box>
          <Typography variant="h5">Übersicht</Typography>
          <img src={kartenhuellen_uebersicht} />
        </Box>
      </Box>
    </Box>
  );
}

export default Kartenhüllen;
