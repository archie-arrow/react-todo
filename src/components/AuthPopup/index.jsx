import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import GoogleButton from "react-google-button";

import { googleSignin } from "../../firebase";
import { setLogged } from "../../redux/actions/account";

const useStyles = makeStyles(() => ({
  root: {
    padding: "25px",
    width: 400,
    height: 200,
    margin: "0 auto",
    marginTop: "5%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    marginBottom: "10px",
    textAlign: "center",
  },
  btn: {
    margin: "0 auto",
  },
}));

export default function AuthPopup() {
  const dispatch = useDispatch();

  const classes = useStyles();

  const handleLoaded = ({ user, token }) => {
    if (user && token) {
      dispatch(setLogged({ user, token }));
    }
  };

  return (
    <Paper elevation={1} className={classes.root}>
      <Typography className={classes.title} variant="h5">
        Sing in with Google to use app:
      </Typography>
      <GoogleButton
        className={classes.btn}
        onClick={() => googleSignin(handleLoaded)}
      />
    </Paper>
  );
}
