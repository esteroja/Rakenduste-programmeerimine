import { Box, ThemeProvider, createTheme } from "@mui/material";
import "./App.css";
import Cats from "./components/Cats";
import Todo from "./components/Todo";
import { purple } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex", justifyContent: "space-between", gap: 2 }}>
        <Cats />
        <Todo />
      </Box>
    </ThemeProvider>
  );
}

export default App;
