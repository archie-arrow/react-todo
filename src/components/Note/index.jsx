import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, Paper, IconButton } from "@material-ui/core";

import FavoriteIcon from "@material-ui/icons/Favorite";
import DoneIcon from "@material-ui/icons/Done";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyle = makeStyles((theme) => ({
  note: {
    background: "#FFF",
    padding: "13px 20px",
    borderRadius: "5px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
}));

export default function Note() {
  const classes = useStyle();

  return (
    <Paper elevation={1} className={classes.note}>
      <Typography variant="h6" component="p">
        Some text
      </Typography>
      <Box>
        <IconButton>
          <FavoriteIcon />
        </IconButton>
        <IconButton>
          <DoneIcon />
        </IconButton>
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </Box>
    </Paper>
  );
}
