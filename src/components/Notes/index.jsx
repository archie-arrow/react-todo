import React from "react";
import { useSelector } from "react-redux";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles(() => ({
  noItems: {
    marginBottom: "230px",
  },
}));

export default function Notes({ list }) {
  const classes = useStyle();

  const data = useSelector((state) => state.todo.data);

  return (
    <>
      {Object.keys(data).length === 0 ? (
        <Typography className={classes.noItems} variant="h5">
          It looks like you haven't added anything to your to-do list yet.
        </Typography>
      ) : (
        list.map((item) => item)
      )}
    </>
  );
}
