import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import CircularProgress from "@mui/material/CircularProgress";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function InstagramBlog() {
  const [resultArray, setResultArray] = useState([]);
  const [loading, setLoading] = React.useState(true);

  let data;
  useEffect(() => {
    const instagramFeed = async () => {
      await axios
        .get("https://v1.nocodeapi.com/kaspi/instagram/KOTShLfOXSyGtqWm")
        .then((response) => setResultArray(response?.data?.data)); // ?? []
    };
    instagramFeed();
  }, []);
  // von der logik her würde ich einen loading us machen, welcher auf then,catch auflößt
  // sonst lädt es unendlich, was blöd ist (dann kann man auch ne error message anzeigen)
  // immer 3 gleich zeichen sonst macht js type conversions
  if (resultArray.length == 0) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <CircularProgress />
      </Box>
    );
  } else {
    return (
      <Box>
        <Typography variant="h4" align="center">
          Unser Instagram-Feed:
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          <Grid container spacing={2} sx={{ justifyContent: "center" }}>
            {resultArray.map((post) => (
              <Grid key={post.id} item xs={4} sx={{ minWidth: "350px" }}>
                <Item>
                  <img src={post.media_url}></img>
                  <Typography key={post.id}>{post.caption}</Typography>
                </Item>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    );
  }
}
export default InstagramBlog;
