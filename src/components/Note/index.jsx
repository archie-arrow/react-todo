import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, Paper, IconButton } from "@material-ui/core";

import FavoriteIcon from "@material-ui/icons/Favorite";
import DoneIcon from "@material-ui/icons/Done";
import DeleteIcon from "@material-ui/icons/Delete";

import { db, firebase } from "../../firebase";
import { setFavorite, setDone, deleteTodo } from "../../redux/actions/todo";

const useStyle = makeStyles((theme) => ({
  note: {
    padding: "13px 20px",
    borderRadius: "5px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "&+&": {
      marginTop: "20px",
    },
    "&:last-child": {
      marginBottom: "60px",
    },
  },
  doneNote: {
    textDecoration: "line-through",
    color: theme.palette.primary.main,
  },
}));

export default function Note({ children, todoId }) {
  const classes = useStyle();

  const uid = useSelector((state) => state.account.uid);
  const data = useSelector((state) => state.todo.data);
  const dispatch = useDispatch();

  const switchFavorite = () => {
    dispatch(setFavorite(todoId));

    db.collection("todos")
      .doc(uid)
      .update({
        [todoId]: { ...data[todoId], fav: !data[todoId].fav },
      });
  };

  const switchDone = () => {
    dispatch(setDone(todoId));

    db.collection("todos")
      .doc(uid)
      .update({
        [todoId]: { ...data[todoId], done: !data[todoId].done },
      });
  };

  const delTodo = () => {
    dispatch(deleteTodo(todoId));
    db.collection("todos")
      .doc(uid)
      .update({
        [todoId]: firebase.firestore.FieldValue.delete(),
      });
  };

  const favorite = data[todoId].fav;
  const done = data[todoId].done;

  return (
    <Paper elevation={1} className={classes.note}>
      <Typography
        className={done ? classes.doneNote : ""}
        variant="h6"
        component="p"
      >
        {children}
      </Typography>
      <Box>
        <IconButton onClick={switchFavorite}>
          <FavoriteIcon style={favorite ? { color: "red" } : {}} />
        </IconButton>
        <IconButton onClick={switchDone}>
          <DoneIcon style={done ? { color: "green" } : {}} />
        </IconButton>
        <IconButton onClick={delTodo}>
          <DeleteIcon />
        </IconButton>
      </Box>
    </Paper>
  );
}
