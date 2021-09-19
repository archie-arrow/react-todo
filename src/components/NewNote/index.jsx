import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { uuid } from "uuidv4";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

import { db } from "../../firebase";
import { setData } from "../../redux/actions/todo";

const useStyle = makeStyles(() => ({
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
  const uid = useSelector((state) => state.account.uid);
  const data = useSelector((state) => state.todo.data);
  const [inputValue, setInputValue] = React.useState("");
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const id = uuid();

    const todo = { [id]: { title: inputValue, fav: false, done: false, id } };

    db.collection("todos")
      .doc(uid)
      .set({ ...todo }, { merge: true });

    dispatch(setData({ ...data, ...todo }));
  };

  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <TextField
        className={classes.textField}
        id="outlined-basic"
        label="Create a new note"
        variant="outlined"
        onChange={handleChange}
      />
      <Button
        className={classes.btn}
        size="large"
        variant="contained"
        color="primary"
        type="submit"
      >
        Create
      </Button>
    </form>
  );
}
