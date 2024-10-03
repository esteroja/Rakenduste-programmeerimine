import { Box, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import "./App.css";
import Cats from "./components/Cats";
import Todo from "./components/Todo";
import "@fontsource/roboto-mono";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FF69B4",
    },
    background: {
      default: "#2e2e2e",
      paper: "#444",
    },
    text: {
      primary: "#ffffff",
    },
  },
  typography: {
    fontFamily: "Roboto Mono",
    h3: {
      color: "#FF69B4",
    },
    body1: {
      color: "#e0e0e0",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          gap: 2,
          backgroundColor: "background.default",
        }}
      >
        <Cats />
        <Todo />
      </Box>
    </ThemeProvider>
  );
}

export default App;
