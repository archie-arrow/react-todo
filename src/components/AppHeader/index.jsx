import React from "react";
import { useDispatch } from "react-redux";
import { alpha, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Brightness5Icon from "@material-ui/icons/Brightness5";
import LogoutIcon from "@material-ui/icons/ExitToApp";
import SearchIcon from "@material-ui/icons/Search";

import { googleSignout } from "../../firebase";
import { setLogout } from "../../redux/actions/account";
import { setData } from "../../redux/actions/todo";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
    marginBottom: "80px",
    [theme.breakpoints.down("xs")]: {
      justifyContent: "space-between",
      flexGrow: 1,
    },
  },
  title: {
    display: "block",
    fontWeight: 500,
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(3),
    width: "auto",
    [theme.breakpoints.down("xs")]: {
      width: "50%",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 1),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
  },
}));

export default function AppHeader({
  toggleTheme,
  theme,
  searchInput,
  updateSearchInput,
}) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleLogout = () => {
    googleSignout();
    dispatch(setLogout());
    dispatch(setData({}));
    localStorage.clear();
  };

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            React Todo
          </Typography>
          <form className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              input={searchInput}
              onChange={updateSearchInput}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </form>
          <div className={classes.grow} />
          <div>
            <IconButton
              aria-label="change theme"
              color="inherit"
              onClick={toggleTheme}
            >
              {theme ? <Brightness5Icon /> : <Brightness4Icon />}
            </IconButton>
            <IconButton
              edge="end"
              aria-label="logout of account"
              color="inherit"
              onClick={handleLogout}
            >
              <LogoutIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
