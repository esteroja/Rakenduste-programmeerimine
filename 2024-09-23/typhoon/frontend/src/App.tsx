import { Box } from "@mui/material";
import "./App.css";
import Cats from "./components/Cats";
import Todo from "./components/Todo";

function App() {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", gap: 2 }}>
      <Cats />
      <Todo />
    </Box>
  );
}

export default App;
