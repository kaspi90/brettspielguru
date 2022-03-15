import * as React from 'react';
import Product from './Product';
import Brettspiel from './Brettspiel';
import { DataGrid } from '@mui/x-data-grid';
import Premium44x66img from './img/44x66mm_Premium.jpg'
import Standard44x66img from './img/44x66mm_Standard.jpg'
import { makeStyles } from '@mui/styles';
import SpacingGrid from './SpacingGrid';


const useStyles = makeStyles({
  Premium44x66img, Standard44x66img: {
    maxWidth: 120,
    padding: 5,
  },
});

let Premium44x66 = Product("44x66 mm Premium", "B0943Z696V", "https://www.amazon.de/Sleeves-Kartenh%C3%BCllen-Kartenfolien-Zipper-Bag-Transparent/dp/B0943Z696V/ref=sr_1_1?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=10841OP7VG85N&keywords=B0943Z696V&qid=1647046098&sprefix=b0943z696v%2Caps%2C96&sr=8-1");
let Standard44x66 = Product("44x66 mm Standard", "B0943XN3CC", "https://www.amazon.de/Sleeves-Kartenh%C3%BCllen-Kartenfolien-Zipper-Bag-Transparent/dp/B0943XN3CC/ref=sr_1_1?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2EMKO66RIZC3S&keywords=B0943XN3CC&qid=1647046114&sprefix=b0943xn3cc%2Caps%2C46&sr=8-1");
let Premium47x70 = Product("47x70 mm Premium", "B0943Y7D2L", "https://www.amazon.de/Sleeves-Kartenh%C3%BCllen-Kartenfolien-Zipper-Bag-Transparent/dp/B0943Y7D2L/ref=sr_1_1?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3K82C66JUTQUF&keywords=B0943Y7D2L&qid=1647046129&sprefix=b0943y7d2l%2Caps%2C50&sr=8-1");
let Standard47x70 = Product("47x70 mm Standard", "B0943XSP1K", "https://www.amazon.de/Sleeves-Kartenh%C3%BCllen-Kartenfolien-Zipper-Bag-Transparent/dp/B0943XSP1K/ref=sr_1_1?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1N3GNXN5DJVMF&keywords=B0943XSP1K&qid=1647046143&sprefix=b0943xsp1k%2Caps%2C46&sr=8-1");
let Standard59x90 = Product("59x90 mm Standard", "B0943YVNHJ", "https://www.amazon.de/Sleeves-Kartenh%C3%BCllen-Kartenfolien-Zipper-Bag-Transparent/dp/B0943YVNHJ/ref=sr_1_1?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=24AUNJ5ICR3KF&keywords=B0943YVNHJ&qid=1647046158&sprefix=b0943yvnhj%2Caps%2C49&sr=8-1");
let Premium66x91 = Product("66x91 mm Premium", "B0943XY4YD", "https://www.amazon.de/Sleeves-Kartenh%C3%BCllen-Kartenfolien-Zipper-Bag-Transparent/dp/B0943XY4YD/ref=sr_1_1?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3KFC8HCZUG8IG&keywords=B0943XY4YD&qid=1647046173&sprefix=b0943xy4yd%2Caps%2C50&sr=8-1");
let Standard66x91 = Product("66x91 mm Standard", "B0943XC75P", "https://www.amazon.de/Sleeves-Kartenh%C3%BCllen-Kartenfolien-Zipper-Bag-Transparent/dp/B0943XC75P/ref=sr_1_1?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1NAH4Q16B7U39&keywords=B0943XC75P&qid=1647046187&sprefix=b0943xc75p%2Caps%2C53&sr=8-1");
let Premium67x103 = Product("67x103 mm Standard", "B0943XCPCL", "https://www.amazon.de/Sleeves-Kartenh%C3%BCllen-Kartenfolien-Zipper-Bag-Transparent/dp/B0943XCPCL/ref=sr_1_1?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=WIOYHZDIPSMQ&keywords=B0943XCPCL&qid=1647046203&sprefix=b0943xcpcl%2Caps%2C55&sr=8-1");
let Standard67x103 = Product("67x103 mm Standard", "B0943XT8K2", "https://www.amazon.de/Sleeves-Kartenh%C3%BCllen-Kartenfolien-Zipper-Bag-Transparent/dp/B0943XT8K2/ref=sr_1_1?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=LZV6GO9YUGUR&keywords=B0943XT8K2&qid=1647046228&sprefix=b0943xt8k2%2Caps%2C54&sr=8-1");
let Standard72x112 = Product("72x112 mm Standard", "B0943XYXYR", "https://www.amazon.de/Sleeves-Kartenh%C3%BCllen-Kartenfolien-Zipper-Bag-Transparent/dp/B0943XYXYR/ref=sr_1_1?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=37EDNK0UAV77D&keywords=B0943XYXYR&qid=1647046236&sprefix=b0943xyxyr%2Caps%2C51&sr=8-1");
let Standard73x122 = Product("73x122 mm Standard", "B0943YFXML", "https://www.amazon.de/Sleeves-Kartenh%C3%BCllen-Kartenfolien-Zipper-Bag-Transparent/dp/B0943YFXML/ref=sr_1_1?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=5MP3CAI5AFAN&keywords=B0943YFXML&qid=1647046254&sprefix=b0943yfxml%2Caps%2C60&sr=8-1");
let Standard82x122 = Product("82x122 mm Standard", "B0943Z8S82", "https://www.amazon.de/Sleeves-Kartenh%C3%BCllen-Kartenfolien-Zipper-Bag-Transparent/dp/B0943Z8S82/ref=sr_1_1?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=29PKG0TEA0QHX&keywords=B0943Z8S82&qid=1647046276&sprefix=b0943z8s82%2Caps%2C61&sr=8-1");

let SiedlervonCatan = Brettspiel("Siedler von Catan", {Premium44x66,Standard44x66}, {Produktbild1: Premium44x66img, Produktbild2: Standard44x66img});
let Carcasonne = Brettspiel("Carcasonne", {Premium44x66,Standard44x66}, {Premium44x66img, Standard44x66img});
let TerraformingMars = Brettspiel("Siedler von Catan", {Premium44x66,Standard44x66}, {Premium44x66img, Standard44x66img});


const GridRowsProp = [
  { id: 1, col1: Standard44x66.name, col2: Standard44x66.asin, col3: Standard44x66.link, col4:SiedlervonCatan.image.Produktbild1, col5:SiedlervonCatan.image.Produktbild2 },
  { id: 2, col1: Premium44x66.name, col2: Premium44x66.asin, col3: Premium44x66.link, col4:SiedlervonCatan.image.Produktbild1, col5:SiedlervonCatan.image.Produktbild2 }
 /**  { id: 3, col1: Premium47x70.name, col2: Premium47x70.asin, col3: Premium47x70.link },
  { id: 4, col1: Standard47x70.name, col2: Standard47x70.asin, col3: Standard47x70.link },
  { id: 5, col1: Standard59x90.name, col2: Standard59x90.asin, col3: Standard59x90.link },
  { id: 6, col1: Premium66x91.name, col2: Premium66x91.asin, col3: Premium66x91.link },
  { id: 7, col1: Standard66x91.name, col2: Standard66x91.asin, col3: Standard66x91.link },
  { id: 8, col1: Premium67x103.name, col2: Premium67x103.asin, col3: Premium67x103.link },
  { id: 9, col1: Standard67x103.name, col2: Standard67x103.asin, col3: Standard67x103.link },
  { id: 10, col1: Standard72x112.name, col2: Standard72x112.asin, col3: Standard72x112.link },
  { id: 11, col1: Standard67x103.name, col2: Standard67x103.asin, col3: Standard67x103.link },
  { id: 12, col1: Standard73x122.name, col2: Standard73x122.asin, col3: Standard73x122.link },
  { id: 13, col1: Standard82x122.name, col2: Standard82x122.asin, col3: Standard82x122.link },*/
];

const GridColDef = [
  { field: 'col1', headerName: 'Name', width: 150 },
  { field: 'col2', headerName: 'ASIN', width: 150 },
  { field: 'col3', headerName: 'Amazon-Link', width: 150 },
  { field: 'col4', headerName: 'Bild', width: 150 },
  { field: 'col5', headerName: 'Bild', width: 150 },
];

export default function DataTable() {
  const classes = useStyles();

  return (
    <div style={{ height: 700, width: '100%' }}>
      <SpacingGrid />
      <DataGrid rows={GridRowsProp} columns={GridColDef} />
      <img
              src={SiedlervonCatan.image.Produktbild1}
              alt="Siedler von Catan Logo"
              className={classes.Premium44x66img}
            />
    </div>
  );
}
