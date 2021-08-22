import React from "react";

import { db } from "../firebase";
import AppHeader from "./AppHeader";
import NewNote from "./NewNote";
import NotesHeader from "./NotesHeader";
import Container from "@material-ui/core/Container";
import Note from "./Note";
import FooterMenu from "./FooterMenu";
import { ThemeProvider } from "@material-ui/core/styles";
import { createTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

export default function App() {
  React.useEffect(() => {
    db.collection("todos")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
        });
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  }, []);

  const theme = createTheme({
    palette: {
      primary: {
        main: "#078ADE",
      },
      secondary: {
        main: "#64B9F9",
      },
    },
  });

  console.log(theme);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppHeader />
        <Container maxWidth="sm">
          <NewNote />
          <NotesHeader />
          <Note />
        </Container>
        <FooterMenu />
      </ThemeProvider>
    </div>
  );
}
