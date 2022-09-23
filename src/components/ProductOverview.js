import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Brettspielguru1 from "../img/brettspielguru_sleeves1.jpg";
import Brettspielguru2 from "../img/brettspielguru_sleeves2.jpg";
import Brettspielguru3 from "../img/brettspielguru_sleeves3.jpg";

// img sollten ein alt prop haben für accessability
function ProductOverview() {
  return (
    <Box mb={4}>
      <Typography variant="h3" mb={2} align="center">
        Unsere Kartenhüllen
      </Typography>
      <Box>
        <Typography variant="h4" mb={2}>
          Schütze was dir lieb ist
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: "25px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={Brettspielguru1}
            style={{ borderRadius: "5%", height: "300px" }}
          ></img>
          <Typography sx={{ maxWidth: "70%" }}>
            Bei geliebten Spielen, die oft gespielt werden, nutzen sich die
            Karten schnell ab und sehen nicht mehr schön aus, sind teilweise
            zerknickt, dreckig oder weisen Wasserflecken auf, weil in der
            Vergangenheit ein Glas am Tisch umgekippt ist. Da bleiben einem nur
            zwei Möglichkeiten: Spiel neu kaufen: Was je nach Spiel teuer werden
            kann oder Karten sleeven: Und deine Karten von Anfang an schützen
            mit den passenden Kartenhüllen. Für was entscheidest du dich?
          </Typography>
        </Box>
        <Typography variant="h4" mb={2} mt={4}>
          Material
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: "25px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={Brettspielguru2}
            style={{ borderRadius: "5%", height: "300px" }}
          ></img>
          <Typography sx={{ maxWidth: "70%" }}>
            Unsere Kartenhüllen sind Säurefrei sowie PVC-frei und wurden aus
            transparentem Polypropylen hergestellt. Es gibt sie in zwei
            unterschiedlichen Dicken: 50 (Standard) und 100 Mikrometer
            (Premium). Die Kartenhüllen sind im praktischen
            wiederverschließbaren Zipper-Bag verpackt.
          </Typography>
        </Box>
        <Typography variant="h4" mb={2} mt={4}>
          Kartengrößen
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: "25px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={Brettspielguru3}
            style={{ borderRadius: "5%", height: "300px" }}
          ></img>
          <Typography sx={{ maxWidth: "70%" }}>
            Es gibt die unterschiedlichsten Kartengrößen und damit auch viele
            verschiedene Hüllen, die oftmals nur um ein paar Millimeter von
            einander abweichen. Da ist es nicht immer einfach die richtige Größe
            zu finden, solltest du dir unsicher sein, welche du für deine Karten
            benötigst: Schau einfach hier, druck es aus oder teste es gleich am
            Bildschirm, Karte drauflegen und vergleichen.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default ProductOverview;
