import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function InstagramBlog() {
  const [resultArray, setResultArray] = useState([]);
  let data;
  useEffect(() => {
    const instagramFeed = async () => {
      await axios
        .get("https://v1.nocodeapi.com/kaspi/instagram/KOTShLfOXSyGtqWm")
        .then((response) => setResultArray(response?.data?.data));
    };
    instagramFeed();
  }, []);

  console.log(resultArray);

  /*
  if (typeof resultArray.data !== "undefined" && resultArray.data.length > 0) {
    console.log(resultArray.data[0].caption);
    data = resultArray.data;
  } */

  return (
    <Box>
      <Typography variant="h4" align="center">
        Unser Instagram-Feed
      </Typography>{" "}
      <Grid container spacing={2}>
        {resultArray.map((post) => (
          <Grid key={post.id} item xs={4}>
            <Item>
              <img src={post.media_url}></img>
              <Typography key={post.id}>{post.caption}</Typography>
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
export default InstagramBlog;
