import { Box, Grid } from "@mui/material";
import React from "react";

const Add = () => {
  return (
    <Box position={"absolute"} sx={{ top: 0, right: 0 }}>
      <Grid container spacing={2} border={1} borderColor={"black"}>
        <Grid item xs={8}></Grid>
        <Grid item xs={4}></Grid>
      </Grid>
      hello
    </Box>
  );
};

export default Add;
