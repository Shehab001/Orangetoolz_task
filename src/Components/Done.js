import { Box } from "@mui/material";
import React, { useState } from "react";
import { Droppable } from "react-drag-and-drop";

const Done = () => {
  const [smoothieIngredients, setSmoothieIngredients] = useState([]);
  // console.log(smoothieIngredients);

  const onDrop = (data) => {
    setSmoothieIngredients([...smoothieIngredients, data]);
  };
  return (
    <Box
      sx={{
        height: "340px",
        border: 1,
        borderColor: "black",
        mx: { xs: 0, sm: 2 },
        textAlign: "center",
        overflow: "scroll",
        "&::-webkit-scrollbar": {
          width: "1px",
          backgroundColor: "#dddddd",
        },
        "&::-webkit-scrollbar-thumb": {
          borderRadius: "0px",
          backgroundColor: "#dddddd",
          "&:hover": {
            backgroundColor: "#dddddd",
          },
        },
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
        Done
      </Box>
      <Droppable
        types={["fruit"]} // <= allowed drop types
        onDrop={onDrop}
        overflowY={"scroll"}
      >
        <Box sx={{ height: "300px" }}>
          {smoothieIngredients.map((ingredient, index) => (
            <Box
              key={index}
              sx={{
                border: 1,
                borderColor: "black",
                m: 2,
                py: 1,
                px: 0.5,
                backgroundColor: "#dddddd",
                fontWeight: "semi-bold",
                fontSize: { xs: "14px", sm: "18px" },
                overflowX: "scroll",
                "&::-webkit-scrollbar": {
                  width: "1px",
                  backgroundColor: "#dddddd",
                },
                "&::-webkit-scrollbar-thumb": {
                  borderRadius: "0px",
                  backgroundColor: "#dddddd",
                  "&:hover": {
                    backgroundColor: "#dddddd",
                  },
                },
              }}
            >
              {" "}
              {ingredient.fruit}
            </Box>
          ))}
        </Box>
      </Droppable>
    </Box>
  );
};

export default Done;
