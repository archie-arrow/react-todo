import React from "react";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
  form: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "40px",
  },
  textField: {
    width: 340,
  },
  btn: {
    width: 200,
  },
}));

export default function NewNote() {
  const classes = useStyle();

  return (
    <form className={classes.form}>
      <TextField
        className={classes.textField}
        id="outlined-basic"
        label="Create a new note"
        variant="outlined"
      />
      <Button
        className={classes.btn}
        size="large"
        variant="contained"
        color="primary"
      >
        Create
      </Button>
    </form>
  );
}
