import { Box } from "@mui/material";
import { textAlign } from "@mui/system";
import React from "react";

const Todo = () => {
  return (
    <Box
      sx={{
        height: "340px",
        border: 1,
        borderColor: "black",
        mx: { xs: 0, sm: 2 },
        textAlign: "center",
      }}
    >
      <Box
        sx={{
          color: "black",
          fontWeight: "bold",
          backgroundColor: "#ff6347",
          py: 1,
          fontSize: { xs: "14px", sm: "18px" },
        }}
      >
        To Do
      </Box>
    </Box>
  );
};

export default Todo;
