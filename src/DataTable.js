import * as React from "react";
import Product from "./Product";
import Brettspiel from "./Brettspiel";
import Premium44x66img from "./img/44x66mm_Premium.jpg";
import Standard44x66img from "./img/44x66mm_Standard.jpg";
import Standard47x70img from "./img/47x70mm_Standard.jpg";
import Standard67x103img from "./img/67x103mm_Standard.jpg";
import Standard73x122img from "./img/73x122mm_Standard.jpg";
import Premium66x91img from "./img/66x91mm_Premium.jpg";
import Standard56x82img from "./img/56x82mm_Standard.jpg";
import Standard82x122img from "./img/82x122mm_Standard.jpg";
import Standard66x91img from "./img/66x91mm_Standard.jpg";
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

let Premium44x66 = Product(
  "44x66 mm Premium",
  "B0943Z696V",
  "https://www.amazon.de/Sleeves-Kartenh%C3%BCllen-Kartenfolien-Zipper-Bag-Transparent/dp/B0943Z696V/ref=sr_1_1?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=10841OP7VG85N&keywords=B0943Z696V&qid=1647046098&sprefix=b0943z696v%2Caps%2C96&sr=8-1"
);
let Standard44x66 = Product(
  "44x66 mm Standard",
  "B0943XN3CC",
  "https://www.amazon.de/Sleeves-Kartenh%C3%BCllen-Kartenfolien-Zipper-Bag-Transparent/dp/B0943XN3CC/ref=sr_1_1?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2EMKO66RIZC3S&keywords=B0943XN3CC&qid=1647046114&sprefix=b0943xn3cc%2Caps%2C46&sr=8-1"
);
let Premium47x70 = Product(
  "47x70 mm Premium",
  "B0943Y7D2L",
  "https://www.amazon.de/Sleeves-Kartenh%C3%BCllen-Kartenfolien-Zipper-Bag-Transparent/dp/B0943Y7D2L/ref=sr_1_1?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3K82C66JUTQUF&keywords=B0943Y7D2L&qid=1647046129&sprefix=b0943y7d2l%2Caps%2C50&sr=8-1"
);
let Standard47x70 = Product(
  "47x70 mm Standard",
  "B0943XSP1K",
  "https://www.amazon.de/Sleeves-Kartenh%C3%BCllen-Kartenfolien-Zipper-Bag-Transparent/dp/B0943XSP1K/ref=sr_1_1?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1N3GNXN5DJVMF&keywords=B0943XSP1K&qid=1647046143&sprefix=b0943xsp1k%2Caps%2C46&sr=8-1"
);
let Standard59x90 = Product(
  "59x90 mm Standard",
  "B0943YVNHJ",
  "https://www.amazon.de/Sleeves-Kartenh%C3%BCllen-Kartenfolien-Zipper-Bag-Transparent/dp/B0943YVNHJ/ref=sr_1_1?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=24AUNJ5ICR3KF&keywords=B0943YVNHJ&qid=1647046158&sprefix=b0943yvnhj%2Caps%2C49&sr=8-1"
);
let Premium66x91 = Product(
  "66x91 mm Premium",
  "B0943XY4YD",
  "https://www.amazon.de/Sleeves-Kartenh%C3%BCllen-Kartenfolien-Zipper-Bag-Transparent/dp/B0943XY4YD/ref=sr_1_1?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3KFC8HCZUG8IG&keywords=B0943XY4YD&qid=1647046173&sprefix=b0943xy4yd%2Caps%2C50&sr=8-1"
);
let Standard66x91 = Product(
  "66x91 mm Standard",
  "B0943XC75P",
  "https://www.amazon.de/Sleeves-Kartenh%C3%BCllen-Kartenfolien-Zipper-Bag-Transparent/dp/B0943XC75P/ref=sr_1_1?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1NAH4Q16B7U39&keywords=B0943XC75P&qid=1647046187&sprefix=b0943xc75p%2Caps%2C53&sr=8-1"
);
let Premium67x103 = Product(
  "67x103 mm Standard",
  "B0943XCPCL",
  "https://www.amazon.de/Sleeves-Kartenh%C3%BCllen-Kartenfolien-Zipper-Bag-Transparent/dp/B0943XCPCL/ref=sr_1_1?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=WIOYHZDIPSMQ&keywords=B0943XCPCL&qid=1647046203&sprefix=b0943xcpcl%2Caps%2C55&sr=8-1"
);
let Standard67x103 = Product(
  "67x103 mm Standard",
  "B0943XT8K2",
  "https://www.amazon.de/Sleeves-Kartenh%C3%BCllen-Kartenfolien-Zipper-Bag-Transparent/dp/B0943XT8K2/ref=sr_1_1?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=LZV6GO9YUGUR&keywords=B0943XT8K2&qid=1647046228&sprefix=b0943xt8k2%2Caps%2C54&sr=8-1"
);
let Standard73x122 = Product(
  "73x122 mm Standard",
  "B0943YFXML",
  "https://www.amazon.de/Sleeves-Kartenh%C3%BCllen-Kartenfolien-Zipper-Bag-Transparent/dp/B0943YFXML/ref=sr_1_1?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=5MP3CAI5AFAN&keywords=B0943YFXML&qid=1647046254&sprefix=b0943yfxml%2Caps%2C60&sr=8-1"
);
let Standard82x122 = Product(
  "82x122 mm Standard",
  "B0943Z8S82",
  "https://www.amazon.de/Sleeves-Kartenh%C3%BCllen-Kartenfolien-Zipper-Bag-Transparent/dp/B0943Z8S82/ref=sr_1_1?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=29PKG0TEA0QHX&keywords=B0943Z8S82&qid=1647046276&sprefix=b0943z8s82%2Caps%2C61&sr=8-1"
);

let SiedlervonCatan;
let Carcasonne;
let TerraformingMars;
let SevenWonders;
let Everdell;
let TimeStories;

const brettspiele = [
  (SiedlervonCatan = Brettspiel(
    "Siedler von Catan",
    "hier kommen die hüllen rein",
    { Produktbild1: Standard56x82img },
    {
      amazonlink1:
        "https://www.amazon.de/Sleeves-Kartenh%C3%BCllen-Kartenfolien-Zipper-Bag-Transparent/dp/B0943XNXY4/ref=sr_1_5?keywords=brettspielguru%2Bsleeves&qid=1650582351&sprefix=brettspielguru%2B%2Caps%2C65&sr=8-5&th=1",
    },
    13
  )),
  (TerraformingMars = Brettspiel(
    "Terraforming Mars",
    "hier kommen die hüllen rein",
    { Produktbild1: Standard66x91img },
    {
      amazonlink1:
        "https://www.amazon.de/Sleeves-Kartenh%C3%BCllen-Kartenfolien-Zipper-Bag-Transparent/dp/B0943XY4YD/ref=sr_1_1?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3KFC8HCZUG8IG&keywords=B0943XY4YD&qid=1647046173&sprefix=b0943xy4yd%2Caps%2C50&sr=8-1",
    },
    167791
  )),
  (SevenWonders = Brettspiel(
    "7 Wonders",
    "hier kommen die hüllen rein",
    { Produktbild1: Standard67x103img },
    {
      amazonlink1:
        "https://www.amazon.de/Sleeves-Kartenh%C3%BCllen-Kartenfolien-Zipper-Bag-Transparent/dp/B0943XCPCL/ref=sr_1_1?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=WIOYHZDIPSMQ&keywords=B0943XCPCL&qid=1647046203&sprefix=b0943xcpcl%2Caps%2C55&sr=8-1",
    },
    68448
  )),
  (Everdell = Brettspiel(
    "Everdell",
    "hier kommen die hüllen rein",
    { Produktbild1: Standard66x91img, Produktbild2: Standard47x70img },
    {
      amazonlink1:
        "https://www.amazon.de/Sleeves-Kartenh%C3%BCllen-Kartenfolien-Zipper-Bag-Transparent/dp/B0943XC75P/ref=sr_1_1?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1NAH4Q16B7U39&keywords=B0943XC75P&qid=1647046187&sprefix=b0943xc75p%2Caps%2C53&sr=8-1",
      amazonlink2:
        "https://www.amazon.de/Sleeves-Kartenh%C3%BCllen-Kartenfolien-Zipper-Bag-Transparent/dp/B0943XSP1K/ref=sr_1_1?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1NAH4Q16B7U39&keywords=B0943XC75P&qid=1647046187&sprefix=b0943xc75p%2Caps%2C53&sr=8-1&th=1",
    },
    199792
  )),
  (TimeStories = Brettspiel(
    "TimeStories",
    "hier kommen die hüllen rein",
    { Produktbild1: Standard73x122img },
    {
      amazonlink1:
        "https://www.amazon.de/Sleeves-Kartenh%C3%BCllen-Kartenfolien-Zipper-Bag-Transparent/dp/B0943YFXML/ref=sr_1_1?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=5MP3CAI5AFAN&keywords=B0943YFXML&qid=1647046254&sprefix=b0943yfxml%2Caps%2C60&sr=8-1",
    },
    146508
  )),
];

let classes;

export default function DataTable() {
  classes = useStyles();

  return <MatchingSleeves></MatchingSleeves>;
}

export {
  Item,
  classes,
  SiedlervonCatan,
  Carcasonne,
  TerraformingMars,
  brettspiele,
};
