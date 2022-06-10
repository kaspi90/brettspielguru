import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

function InstagramBlog() {
  const [resultArray, setResultArray] = useState([]);

  useEffect(() => {
    const instagramFeed = async () => {
      await axios
        .get("https://v1.nocodeapi.com/kaspi/instagram/KOTShLfOXSyGtqWm")
        .then((response) => setResultArray(response.data));
    };
    instagramFeed();
  }, []);

  console.log(resultArray);

  return (
    <Box>
      <Typography variant="h4" align="center">
        Unser Instagram-Feed
      </Typography>
    </Box>
  );
}
export default InstagramBlog;
