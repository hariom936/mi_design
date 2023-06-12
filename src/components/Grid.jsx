import { Typography, Grid, Button } from "@mui/material";
import React from "react";
import { Box } from "@mui/system";
import cakes from "../images/cakes.png";

const GridBar = () => {
  return (
    <Grid container direction="row" alignItems={"center"}>
      <Grid item xs={12} sm={3} order={{ xs: 2, sm: 2 }}>
        <Typography variant="h5" color={"inherit"} mb={3} pd={44}>
          A party without cake is just a meeting.
        </Typography>

        {/* <Typography variant='h5' color={'inherit'}>
        Order Now
        </Typography> */}
        <Button size="small" variant="contained" sx={{ borderRadius: 5 }}>
          Order Now
        </Button>
      </Grid>
      <Grid
        container
        item
        xs={1}
        m={6}
        justifyItems={"center"}
        order={{ xs: 3, sm: 3 }}
      >
        <Box component="img" src={cakes} mt={6} ml={5} pl={6} />
      </Grid>
    </Grid>
  );
};

export default GridBar;
