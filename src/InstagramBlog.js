import { Typography } from "@mui/material";
import InstagramFeed from "react-ig-feed";
import { Box } from "@mui/system";

function InstagramBlog() {
return (
<Box>
<Typography variant='h4' align="center">Unser Instagram-Feed</Typography>,
<InstagramFeed token="IGQVJWcjdEWWdCT0dBWEI4SnlHVjRxb3VzODBfcW54OU9UUEpmYWtnemxPYnJCMHYtSmE5a25la3dfZAXJWd2FFd2F5YlowblBVQnZAmdzVtYlpFX2ZA4ZAXN6TGR0eTEyVUJMXzA3WldFWUQ3TE5sTnFjaQZDZD"  counter="24"/>
</Box> 
)
}
export default InstagramBlog;