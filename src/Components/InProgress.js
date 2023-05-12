import { Box } from "@mui/material";
import React, { useState } from "react";
import { Draggable } from "react-drag-and-drop";
import Droppable from "react-drag-and-drop/lib/Droppable";
import { useDispatch, useSelector } from "react-redux";
import { progress } from "../redux/state/AddReducer";

const InProgress = () => {
  const dispatch = useDispatch();
  // const [smoothieIngredients, setSmoothieIngredients] = useState([]);
  const progressData = useSelector((state) => state.counter.progress);
  console.log("progress", progressData);

  const onDrop = (data) => {
    // setSmoothieIngredients([...smoothieIngredients, data]);
    console.log(data.todoo);
    dispatch(progress(data.todoo));
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
        In Progress
      </Box>

      <Droppable
        types={["todoo"]} // <= allowed drop types
        onDrop={onDrop}
      >
        <Box
          sx={{
            height: "300px",
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
          {progressData?.length > 0 &&
            progressData?.map((data, index) => (
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
                  "&:hover": {
                    cursor: "grab",
                  },
                }}
              >
                <Draggable type="progresss" data={data}>
                  {data}
                </Draggable>
              </Box>
            ))}
        </Box>
      </Droppable>
    </Box>
  );
};

export default InProgress;
