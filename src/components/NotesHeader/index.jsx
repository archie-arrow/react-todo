import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyle = makeStyles(() => ({
  notesHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginBottom: "20px",
  },
  title: {
    fontWeight: 500,
  },
  subtitle: {
    fontWeight: 300,
  },
}));

export default function NotesHeader({ children, num }) {
  const classes = useStyle();

  return (
    <div className={classes.notesHeader}>
      <Typography className={classes.title} variant="h4">
        {children}
      </Typography>
      <Typography className={classes.subtitle} variant="h5">
        number of records: {num}
      </Typography>
    </div>
  );
}
