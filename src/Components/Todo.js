import { Box } from "@mui/material";
import { textAlign } from "@mui/system";
import { Draggable } from "react-drag-and-drop";

import React, { useState } from "react";
import { useSelector } from "react-redux";

const Todo = () => {
  const todo = useSelector((state) => state.counter.todo);
  //console.log(todo);
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
        To Do
      </Box>
      <Box>
        {todo?.length > 0 &&
          todo.map((data) => (
            <Box
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
                "&:hover": {
                  cursor: "grab",
                },
              }}
            >
              {" "}
              <Draggable type="todoo" data={data}>
                {data}
              </Draggable>
            </Box>
          ))}
      </Box>
    </Box>
  );
};

export default Todo;
