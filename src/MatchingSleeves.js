import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { Item, classes, SiedlervonCatan, Carcasonne } from './DataTable';

function MatchingSleeves() {
    return (
        <div style={{ height: 700, width: '100%' }}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={6} md={2}>
            <Item><img
              src={SiedlervonCatan.image.Produktbild1}
              alt="Siedler von Catan Logo"
              className={classes.Premium44x66img}
            /><Button variant="contained" href="https://www.amazon.de/Sleeves-Kartenh%C3%BCllen-Kartenfolien-Zipper-Bag-Transparent/dp/B0943Z696V/ref=sr_1_2?crid=3DT6U9MZA9E3O&keywords=brettspiel%2Bguru%2Bsleeves&qid=1648510329&sprefix=brettspielguru%2Caps%2C52&sr=8-2&th=1">
                Bei Amazon bestellen
              </Button></Item>

          </Grid>
          <Grid item xs={6} md={2}>
            <Item>  <img
              src={SiedlervonCatan.image.Produktbild2}
              alt="Siedler von Catan Logo"
              className={classes.Standard44x66img}
            /> <Button variant="contained" href="https://www.amazon.de/Sleeves-Kartenh%C3%BCllen-Kartenfolien-Zipper-Bag-Transparent/dp/B0943XN3CC/ref=sr_1_2?crid=3DT6U9MZA9E3O&keywords=brettspiel%2Bguru%2Bsleeves&qid=1648510329&sprefix=brettspielguru%2Caps%2C52&sr=8-2&th=1">
                Bei Amazon bestellen
              </Button></Item>

          </Grid>
          <Grid item xs={6} md={2}>
            <Item><img
              src={SiedlervonCatan.image.Produktbild1}
              alt="Siedler von Catan Logo"
              className={classes.Premium44x66img}
            />
              <Button variant="contained" href="https://www.amazon.de/Sleeves-Kartenh%C3%BCllen-Kartenfolien-Zipper-Bag-Transparent/dp/B0943Z696V/ref=sr_1_2?crid=3DT6U9MZA9E3O&keywords=brettspiel%2Bguru%2Bsleeves&qid=1648510329&sprefix=brettspielguru%2Caps%2C52&sr=8-2&th=1">
                Bei Amazon bestellen
              </Button></Item>

          </Grid>
          <Grid item xs={6} md={2}>
            <Item><img
              src={SiedlervonCatan.image.Produktbild1}
              alt="Siedler von Catan Logo"
              className={classes.Premium44x66img}
            />
              <Button variant="contained" href="https://www.amazon.de/Sleeves-Kartenh%C3%BCllen-Kartenfolien-Zipper-Bag-Transparent/dp/B0943Z696V/ref=sr_1_2?crid=3DT6U9MZA9E3O&keywords=brettspiel%2Bguru%2Bsleeves&qid=1648510329&sprefix=brettspielguru%2Caps%2C52&sr=8-2&th=1">
                Bei Amazon bestellen
              </Button>
            </Item>

          </Grid>
          <Grid item xs={6} md={2}>
            <Item><img
              src={SiedlervonCatan.image.Produktbild1}
              alt="Siedler von Catan Logo"
              className={classes.Premium44x66img}
            />
              <Button variant="contained" href="https://www.amazon.de/Sleeves-Kartenh%C3%BCllen-Kartenfolien-Zipper-Bag-Transparent/dp/B0943Z696V/ref=sr_1_2?crid=3DT6U9MZA9E3O&keywords=brettspiel%2Bguru%2Bsleeves&qid=1648510329&sprefix=brettspielguru%2Caps%2C52&sr=8-2&th=1">
                Bei Amazon bestellen
              </Button>
            </Item>

          </Grid>
          <Grid item xs={6} md={2}>
            <Item><img
              src={SiedlervonCatan.image.Produktbild1}
              alt="Siedler von Catan Logo"
              className={classes.Premium44x66img}
            />
              <Button variant="contained" href="https://www.amazon.de/Sleeves-Kartenh%C3%BCllen-Kartenfolien-Zipper-Bag-Transparent/dp/B0943Z696V/ref=sr_1_2?crid=3DT6U9MZA9E3O&keywords=brettspiel%2Bguru%2Bsleeves&qid=1648510329&sprefix=brettspielguru%2Caps%2C52&sr=8-2&th=1">
                Bei Amazon bestellen
              </Button>
            </Item>

          </Grid>
        </Grid>
      </Box>
      <br />

    </div>
    )
}

export default MatchingSleeves;