import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { createTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

import { db, googleSignin } from "../firebase";

import AppHeader from "./AppHeader";
import NewNote from "./NewNote";
import NotesHeader from "./NotesHeader";
import Note from "./Note";
import FooterMenu from "./FooterMenu";
import AuthPopup from "./AuthPopup";

export default function App() {
  const [activeTheme, setActiveTheme] = React.useState(false);

  // React.useEffect(() => {
  //   db.collection("todos")
  //     .get()
  //     .then((querySnapshot) => {
  //       querySnapshot.forEach((doc) => {
  //         console.log(doc.id, " => ", doc.data());
  //       });
  //     })
  //     .catch((error) => {
  //       console.log("Error getting documents: ", error);
  //     });
  // }, []);

  // googleSignin();

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
  };

  return (
    <div className="App">
      <ThemeProvider theme={!activeTheme ? lightTheme : darkTheme}>
        <CssBaseline />
        <AuthPopup />
        {/* <AppHeader toggleTheme={toggleActiveTheme} theme={activeTheme} />
        <Container maxWidth="sm">
          <NewNote />
          <NotesHeader />
          <Note />
        </Container>
        <FooterMenu /> */}
      </ThemeProvider>
    </div>
  );
}
