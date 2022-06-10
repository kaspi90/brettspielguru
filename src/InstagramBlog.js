import { Typography } from "@mui/material";
import { Box } from "@mui/system";

function InstagramBlog() {
  let data;

  const axios = require("axios");

  axios({
    method: "get",
    url: "https://v1.nocodeapi.com/kaspi/instagram/KOTShLfOXSyGtqWm",
    params: {},
  })
    .then(function (response) {
      // handle success
      console.log(response.data);
      data = response.data;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });

  console.log("test:" + data);

  return (
    <Box>
      <Typography variant="h4" align="center">
        Unser Instagram-Feed
      </Typography>
    </Box>
  );
}
export default InstagramBlog;
