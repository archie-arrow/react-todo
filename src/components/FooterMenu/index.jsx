import React from "react";
import { Link } from "react-router-dom";

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
    color: theme.palette.secondary.main,
  },
  iconActive: {
    color: theme.palette.common.white,
  },
}));

export default function FooterMenu() {
  const classes = useStyle();

  const [value, setValue] = React.useState(0);

  return (
    <Box className={classes.root}>
      <Tabs
        centered
        textColor="secondary"
        indicatorColor="secondary"
        value={value}
      >
        <Tab
          onClick={() => setValue(0)}
          component={Link}
          to="./"
          icon={<DescriptionOutlinedIcon color="inherit" />}
        />
        <Tab
          onClick={() => setValue(1)}
          component={Link}
          to="./favorite"
          icon={<FavoriteBorderOutlinedIcon color="inherit" />}
        />
        <Tab
          onClick={() => setValue(2)}
          component={Link}
          to="./done"
          icon={<CheckCircleOutlinedIcon color="inherit" />}
        />
        <Tab
          onClick={() => setValue(3)}
          component={Link}
          to="./undone"
          icon={<HighlightOffOutlinedIcon color="inherit" />}
        />
      </Tabs>
    </Box>
  );
}
