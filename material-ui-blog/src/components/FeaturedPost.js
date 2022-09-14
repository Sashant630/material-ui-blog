import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";

const FeaturedPost = () => {
  return (
    <Card>
      <CardContent>
        <Typography gutterBottom>Title of a longer featured blog post</Typography>
        <Typography variant="h5">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
          odio excepturi? Ut reiciendis exercitationem dicta expedita autem
          quos, quis ab itaque recusandae consequatur similique ex iusto
          excepturi culpa minima harum.
        </Typography>
      </CardContent>

      <CardActions>
        <Button variant="text">Read More...</Button>
      </CardActions>
    </Card>
  );
};

export default FeaturedPost;
