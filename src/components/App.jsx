import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { ThemeProvider } from "@material-ui/core/styles";
import { createTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

import AppHeader from "./AppHeader";
import NewNote from "./NewNote";
import FooterMenu from "./FooterMenu";
import AuthPopup from "./AuthPopup";
import AllPage from "./AllPage";

import { db } from "../firebase";
import { setData } from "../redux/actions/todo";
import FavPage from "./FavPage";
import DonePage from "./DonePage";
import UndonePage from "./UndonePage";

export default function App() {
  const [activeTheme, setActiveTheme] = React.useState(
    localStorage.getItem("dark") === "true"
  );
  const logged = useSelector((state) => state.account.logged);
  const uid = useSelector((state) => state.account.uid);

  const lightTheme = createTheme({
    palette: {
      primary: {
        main: "#64b5f6",
        light: "#9be7ff",
        dark: "#2286c3",
      },
      secondary: {
        main: "#1565c0",
        light: "#5e92f3",
        dark: "#003c8f",
      },
    },
  });

  const darkTheme = createTheme({
    palette: {
      type: "dark",
      primary: {
        main: "#212121",
        light: "#484848",
        dark: "#000000",
      },
      secondary: {
        main: "#424242",
        light: "#6d6d6d",
        dark: "#1b1b1b",
      },
    },
  });

  const toggleActiveTheme = () => {
    setActiveTheme(!activeTheme);
    localStorage.setItem("dark", !activeTheme);
  };

  const dispatch = useDispatch();

  React.useEffect(() => {
    if (uid) {
      const docRef = db.collection("todos").doc(uid);

      docRef
        .get()
        .then((doc) => {
          if (doc.exists) {
            dispatch(setData(doc.data()));
          } else {
            db.collection("todos").doc(uid).set({});
          }
        })
        .catch((error) => {
          console.log("Error getting document:", error);
        });
    }
  }, [dispatch, uid]);

  return (
    <div className="App">
      <ThemeProvider theme={!activeTheme ? lightTheme : darkTheme}>
        <Router>
          <CssBaseline />
          {!logged ? (
            <AuthPopup />
          ) : (
            <>
              <AppHeader toggleTheme={toggleActiveTheme} theme={activeTheme} />
              <Container maxWidth="sm">
                <NewNote />
                <Switch>
                  <Route exact path="/" component={AllPage}></Route>
                  <Route exact path="/favorite" component={FavPage}></Route>
                  <Route exact path="/done" component={DonePage}></Route>
                  <Route exact path="/undone" component={UndonePage}></Route>
                </Switch>
              </Container>
              <FooterMenu />
            </>
          )}
        </Router>
      </ThemeProvider>
    </div>
  );
}
