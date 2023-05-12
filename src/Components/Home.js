import { Box } from "@mui/system";
import React from "react";
import Add from "./Add";
import Layout from "./Layout";

const Home = () => {
  return (
    <Box
      sx={{
        mx: "auto",
        px: 2,
        py: 3,
        my: "5%",
        width: "70%",
        height: 500,
        borderRadius: "25px",
        background: "#ddd",
        position: "relative",
      }}
    >
      <Layout></Layout>
      <Add></Add>
    </Box>
  );
};

export default Home;
