import React from "react";

import { Tab, Tabs, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import CheckCircleOutlinedIcon from "@material-ui/icons/CheckCircleOutlined";
import HighlightOffOutlinedIcon from "@material-ui/icons/HighlightOffOutlined";

const useStyle = makeStyles((theme) => ({
  root: {
    background: theme.palette.primary.main,
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
  },
  icon: {
    color: "#fff",
  },
}));

export default function FooterMenu() {
  const classes = useStyle();

  return (
    <Box className={classes.root}>
      <Tabs centered textColor="secondary" indicatorColor="secondary" value={0}>
        <Tab icon={<DescriptionOutlinedIcon color="inherit" />} />
        <Tab icon={<FavoriteBorderOutlinedIcon />} />
        <Tab icon={<CheckCircleOutlinedIcon />} />
        <Tab icon={<HighlightOffOutlinedIcon />} />
      </Tabs>
    </Box>
  );
}
