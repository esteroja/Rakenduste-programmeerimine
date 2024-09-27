import {
  Box,
  Table,
  TableHead,
  Typography,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
} from "@mui/material";
import { useEffect, useState } from "react";
import SubmitCat from "./SubmitCat";
import DeleteCat from "./DeleteCat";
import FormatDate from "./FormatDate";
import EditCat from "./EditCat";

type Cat = {
  id: string;
  name: string;
  createdAt: number;
  updatedAt: number | null;
  deleted: boolean;
};

const Cats = () => {
  const [cats, setCats] = useState<Cat[]>([]);

  const fetchCats = async () => {
    const response = await fetch("http://localhost:8080/cats");
    const data = await response.json();

    setCats(data);
  };

  useEffect(() => {
    fetchCats();
  }, []);

  return (
    <Box sx={{ marginLeft: 10 }}>
      <Typography
        variant="h3"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          marginTop: 5,
        }}
      >
        Cats
      </Typography>
      <TableContainer
        sx={{
          maxWidth: 800,
        }}
      >
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }}>Cat name</TableCell>
              <TableCell align="right" sx={{ fontWeight: "bold" }}>
                Created at
              </TableCell>
              <TableCell align="right" sx={{ fontWeight: "bold" }}>
                Updated at
              </TableCell>
              <TableCell align="right" sx={{ fontWeight: "bold", width: 100 }}>
                Delete
              </TableCell>
              <TableCell align="right" sx={{ fontWeight: "bold", width: 200 }}>
                Change name
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cats.map((cat) => (
              <TableRow
                key={cat.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {cat.name}
                </TableCell>
                <TableCell align="right">
                  <FormatDate timestamp={cat.createdAt}></FormatDate>
                </TableCell>
                <TableCell align="right">
                  <FormatDate timestamp={cat.updatedAt}></FormatDate>
                </TableCell>
                <TableCell align="right">
                  <DeleteCat fetchCats={fetchCats} catID={cat.id}></DeleteCat>
                </TableCell>
                <TableCell align="right">
                  <EditCat fetchCats={fetchCats} catID={cat.id}></EditCat>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <SubmitCat fetchCats={fetchCats} />
    </Box>
  );
};

export default Cats;
