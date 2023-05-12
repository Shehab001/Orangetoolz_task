import { Box, Button, Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { todo } from "../redux/state/AddReducer";
import Done from "./Done";
import InProgress from "./InProgress";
import Todo from "./Todo";

const Add = () => {
  const [textFieldValue, setTextFieldValue] = useState("");
  const dispatch = useDispatch();
  //  console.log(textFieldValue);
  const handleTextFieldChange = (event) => {
    setTextFieldValue(event.target.value);
  };

  const count = useSelector((state) => state.counter.todo);
  console.log("hi", count);
  return (
    <>
      <Box
        position={"absolute"}
        sx={{
          left: "50%",
          top: "10%",
          transform: "translate(-50%, 0%)",
          width: "80%",
          height: "450px",
        }}
      >
        {/* add task section */}
        <Grid container spacing={2} ml={{ xs: -5, sm: 0 }}>
          <Grid item xs={8} textAlign={"end"}>
            <TextField
              onChange={handleTextFieldChange}
              id="outlined-basic"
              size="small"
              label="Write Your Task ..."
              variant="outlined"
              name="task"
              sx={{
                width: "70%",

                color: "black",
              }}
            />
          </Grid>
          <Grid item xs={4}>
            <Button
              onClick={() => dispatch(todo(textFieldValue))}
              sx={{
                mt: "2px",
                borderRadius: "0px",
                color: "#ff6347",
                borderColor: "#c3bbbb",
              }}
              variant="outlined"
            >
              ADD
            </Button>
          </Grid>
        </Grid>
        {/* todo,in progress,done section*/}
        <Box pt={5}>
          <Grid container spacing={1} justifyContent={"center"}>
            <Grid item xs={4}>
              <Todo></Todo>
            </Grid>
            <Grid item xs={4}>
              <InProgress></InProgress>
            </Grid>
            <Grid item xs={4}>
              <Done></Done>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Add;
